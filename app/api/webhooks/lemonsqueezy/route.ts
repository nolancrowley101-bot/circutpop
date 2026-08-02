import { env } from "cloudflare:workers";
import {
  type SubscriptionEventAttributes,
  upsertSubscriptionFromWebhook,
} from "../../../../db/subscriptions";

const SUBSCRIPTION_EVENT_PREFIX = "subscription_";

async function isValidSignature(
  rawBody: string,
  signatureHeader: string | null,
  secret: string,
): Promise<boolean> {
  if (!signatureHeader) return false;

  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const digest = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(rawBody),
  );
  const expectedHex = [...new Uint8Array(digest)]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  if (expectedHex.length !== signatureHeader.length) return false;

  // Constant-time comparison to avoid leaking the signature via timing.
  let mismatch = 0;
  for (let i = 0; i < expectedHex.length; i++) {
    mismatch |= expectedHex.charCodeAt(i) ^ signatureHeader.charCodeAt(i);
  }
  return mismatch === 0;
}

export async function POST(request: Request): Promise<Response> {
  const secret = (env as unknown as Record<string, string | undefined>)
    .LEMONSQUEEZY_WEBHOOK_SECRET;
  if (!secret) {
    console.error(
      "LEMONSQUEEZY_WEBHOOK_SECRET is not configured; rejecting webhook.",
    );
    return Response.json({ error: "Webhook not configured" }, { status: 500 });
  }

  const rawBody = await request.text();
  const signature = request.headers.get("x-signature");

  if (!(await isValidSignature(rawBody, signature, secret))) {
    return Response.json({ error: "Invalid signature" }, { status: 401 });
  }

  let payload: {
    meta?: { event_name?: string };
    data?: { id?: string; attributes?: SubscriptionEventAttributes };
  };
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const eventName = payload.meta?.event_name ?? "";
  const subscriptionId = payload.data?.id;
  const attributes = payload.data?.attributes;

  if (
    !eventName.startsWith(SUBSCRIPTION_EVENT_PREFIX) ||
    !subscriptionId ||
    !attributes ||
    !attributes.user_email ||
    attributes.customer_id == null ||
    attributes.variant_id == null ||
    !attributes.status
  ) {
    // Not a subscription lifecycle event (e.g. order_created), or missing
    // fields we need to act on — ignore it rather than store a bad row.
    return Response.json({ ok: true, ignored: true });
  }

  await upsertSubscriptionFromWebhook(subscriptionId, attributes);

  return Response.json({ ok: true });
}
