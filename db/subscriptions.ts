import { desc, eq, sql } from "drizzle-orm";
import { getDb } from "./index";
import { subscriptions } from "./schema";

// Lemon Squeezy subscription statuses that should be treated as paid
// access. Cancelling immediately drops status to "cancelled" (or the
// subscription later becomes "expired"/"unpaid"/"paused"), which is
// intentionally NOT in this list: access ends the moment Lemon Squeezy
// tells us the subscription is no longer active, not at the end of the
// billing period.
const ACTIVE_STATUSES = new Set(["active", "on_trial"]);

export function isActiveStatus(status: string): boolean {
  return ACTIVE_STATUSES.has(status);
}

export type SubscriptionEventAttributes = {
  user_email: string;
  customer_id: number;
  variant_id: number;
  status: string;
  renews_at: string | null;
  ends_at: string | null;
  urls?: { customer_portal?: string | null };
};

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export async function upsertSubscriptionFromWebhook(
  subscriptionId: string,
  attrs: SubscriptionEventAttributes,
): Promise<void> {
  const db = getDb();
  const email = normalizeEmail(attrs.user_email);

  const existing = await db
    .select({ id: subscriptions.id })
    .from(subscriptions)
    .where(eq(subscriptions.lemonSqueezySubscriptionId, subscriptionId))
    .limit(1);

  const values = {
    customerEmail: email,
    lemonSqueezyCustomerId: String(attrs.customer_id),
    lemonSqueezySubscriptionId: subscriptionId,
    variantId: String(attrs.variant_id),
    status: attrs.status,
    customerPortalUrl: attrs.urls?.customer_portal ?? null,
    renewsAt: attrs.renews_at,
    endsAt: attrs.ends_at,
    updatedAt: sql`CURRENT_TIMESTAMP`,
  };

  if (existing.length > 0) {
    await db
      .update(subscriptions)
      .set(values)
      .where(eq(subscriptions.lemonSqueezySubscriptionId, subscriptionId));
  } else {
    await db.insert(subscriptions).values(values);
  }
}

export async function getLatestSubscriptionForEmail(email: string) {
  const db = getDb();
  const rows = await db
    .select()
    .from(subscriptions)
    .where(eq(subscriptions.customerEmail, normalizeEmail(email)))
    .orderBy(desc(subscriptions.updatedAt), desc(subscriptions.id))
    .limit(1);

  return rows[0] ?? null;
}

export async function hasActiveAccess(email: string): Promise<boolean> {
  const subscription = await getLatestSubscriptionForEmail(email);
  return subscription !== null && isActiveStatus(subscription.status);
}
