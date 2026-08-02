import { env } from "cloudflare:workers";

type LemonSqueezyEnv = {
  LEMONSQUEEZY_STORE_SLUG?: string;
  LEMONSQUEEZY_VARIANT_MONTHLY?: string;
  LEMONSQUEEZY_VARIANT_YEARLY?: string;
};

function getLemonSqueezyEnv(): LemonSqueezyEnv {
  return env as unknown as LemonSqueezyEnv;
}

function buildCheckoutUrl(
  variantId: string | undefined,
  storeSlug: string | undefined,
  email: string | null,
): string | null {
  if (!variantId || !storeSlug) return null;

  const url = new URL(`https://${storeSlug}.lemonsqueezy.com/buy/${variantId}`);
  if (email) {
    url.searchParams.set("checkout[email]", email);
  }
  return url.toString();
}

export function getCheckoutLinks(email: string | null) {
  const { LEMONSQUEEZY_STORE_SLUG, LEMONSQUEEZY_VARIANT_MONTHLY, LEMONSQUEEZY_VARIANT_YEARLY } =
    getLemonSqueezyEnv();

  return {
    monthly: buildCheckoutUrl(LEMONSQUEEZY_VARIANT_MONTHLY, LEMONSQUEEZY_STORE_SLUG, email),
    yearly: buildCheckoutUrl(LEMONSQUEEZY_VARIANT_YEARLY, LEMONSQUEEZY_STORE_SLUG, email),
  };
}
