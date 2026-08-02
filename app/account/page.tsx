import {
  chatGPTSignOutPath,
  requireChatGPTUser,
} from "../chatgpt-auth";
import { getAccessState } from "../subscription-access";

export const dynamic = "force-dynamic";

const STATUS_LABELS: Record<string, string> = {
  active: "Active",
  on_trial: "Trial",
  paused: "Paused",
  past_due: "Payment past due",
  unpaid: "Unpaid",
  cancelled: "Cancelled",
  expired: "Expired",
};

export default async function AccountPage() {
  const user = await requireChatGPTUser("/account");
  const { subscription, active } = await getAccessState(user.email);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#06111f] px-6 text-center text-white">
      <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">
        {user.displayName}
      </p>
      <h1 className="text-3xl font-black tracking-tight sm:text-5xl">
        {active ? "You have an active subscription." : "No active subscription."}
      </h1>

      {subscription ? (
        <p className="text-lg leading-8 text-slate-300">
          Status: {STATUS_LABELS[subscription.status] ?? subscription.status}
          {subscription.renewsAt && active
            ? ` · renews ${new Date(subscription.renewsAt).toLocaleDateString()}`
            : null}
        </p>
      ) : (
        <p className="max-w-xl text-lg leading-8 text-slate-300">
          Purchase a plan to unlock CircuitPop.
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row">
        {active ? (
          <a
            href="/app"
            className="rounded-xl bg-yellow-300 px-6 py-4 text-center text-base font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-yellow-200"
          >
            Open CircuitPop
          </a>
        ) : (
          <a
            href="/#pricing"
            className="rounded-xl bg-yellow-300 px-6 py-4 text-center text-base font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-yellow-200"
          >
            View pricing
          </a>
        )}
        {subscription?.customerPortalUrl ? (
          <a
            href={subscription.customerPortalUrl}
            className="rounded-xl border border-cyan-200/30 bg-white/8 px-6 py-4 text-center text-base font-bold text-cyan-50 transition hover:-translate-y-0.5 hover:border-cyan-200/60 hover:bg-white/12"
          >
            Manage or cancel subscription
          </a>
        ) : null}
      </div>

      <a
        href={chatGPTSignOutPath("/")}
        className="text-sm font-bold text-slate-400 underline underline-offset-4"
      >
        Sign out
      </a>
    </main>
  );
}
