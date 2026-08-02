import { redirect } from "next/navigation";
import {
  getLatestSubscriptionForEmail,
  hasActiveAccess,
  isActiveStatus,
} from "../db/subscriptions";
import { requireChatGPTUser, type ChatGPTUser } from "./chatgpt-auth";

const PRICING_PATH = "/#pricing";

// Requires both a signed-in user AND a paid, currently-active Lemon
// Squeezy subscription for that user's email. Anyone who isn't signed in
// is sent through SIWC; anyone signed in without active access is sent to
// pricing. Access is re-checked on every request (no client-side caching
// of entitlement), so a cancellation webhook takes effect immediately.
export async function requireActiveSubscription(
  returnTo: string,
): Promise<ChatGPTUser> {
  const user = await requireChatGPTUser(returnTo);
  const allowed = await hasActiveAccess(user.email);

  if (!allowed) {
    redirect(PRICING_PATH);
  }

  return user;
}

export async function getAccessState(email: string) {
  const subscription = await getLatestSubscriptionForEmail(email);
  return {
    subscription,
    active: subscription !== null && isActiveStatus(subscription.status),
  };
}
