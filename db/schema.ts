import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

// One row per Lemon Squeezy subscription. Access is keyed by the
// subscriber's email (the same identity SIWC hands us in
// `oai-authenticated-user-email`), since Lemon Squeezy checkout doesn't
// know about our own user ids.
export const subscriptions = sqliteTable("subscriptions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  customerEmail: text("customer_email").notNull(),
  lemonSqueezyCustomerId: text("lemonsqueezy_customer_id").notNull(),
  lemonSqueezySubscriptionId: text("lemonsqueezy_subscription_id")
    .notNull()
    .unique(),
  variantId: text("variant_id").notNull(),
  status: text("status").notNull(),
  customerPortalUrl: text("customer_portal_url"),
  renewsAt: text("renews_at"),
  endsAt: text("ends_at"),
  updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});
