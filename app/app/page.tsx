import { chatGPTSignOutPath } from "../chatgpt-auth";
import { requireActiveSubscription } from "../subscription-access";

export const dynamic = "force-dynamic";

export default async function AppPage() {
  const user = await requireActiveSubscription("/app");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#06111f] px-6 text-center text-white">
      <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">
        Signed in as {user.displayName}
      </p>
      <h1 className="text-3xl font-black tracking-tight sm:text-5xl">
        Your subscription is active.
      </h1>
      <p className="max-w-xl text-lg leading-8 text-slate-300">
        The CircuitPop editor loads here. Your access is verified against
        your Lemon Squeezy subscription on every visit, so it turns off
        automatically if the subscription is cancelled or lapses.
      </p>
      <a
        href="/account"
        className="mt-2 text-sm font-bold text-cyan-200 underline underline-offset-4"
      >
        Manage your subscription
      </a>
      <a
        href={chatGPTSignOutPath("/")}
        className="text-sm font-bold text-slate-400 underline underline-offset-4"
      >
        Sign out
      </a>
    </main>
  );
}
