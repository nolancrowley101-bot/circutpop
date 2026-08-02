import { chatGPTSignInPath, getChatGPTUser } from "./chatgpt-auth";
import { getCheckoutLinks } from "./checkout-links";

export const dynamic = "force-dynamic";

const features = [
  {
    title: "Drag In Real Components",
    description:
      "Pick batteries, resistors, LEDs, switches, motors, meters, sensors, and more from a simple component sidebar.",
  },
  {
    title: "Wire On A Grid Canvas",
    description:
      "Connect parts on a clean circuit workspace with snap points, labels, selected parts, and easy undo/redo controls.",
  },
  {
    title: "Edit Properties And Code",
    description:
      "Tune values, colors, and microcontroller sketches from the properties panel while building the circuit.",
  },
];

const steps = [
  "Pick a challenge",
  "Connect the components",
  "Run the circuit",
  "Fix, learn, and retry",
];

type PurchaseButtonState = {
  href: string;
  label: string;
  disabled: boolean;
};

function purchaseButtonState(
  user: Awaited<ReturnType<typeof getChatGPTUser>>,
  checkoutUrl: string | null,
  planLabel: string,
): PurchaseButtonState {
  if (!user) {
    return {
      href: chatGPTSignInPath("/#pricing"),
      label: "Sign in to purchase",
      disabled: false,
    };
  }
  if (!checkoutUrl) {
    return { href: "#pricing", label: planLabel, disabled: true };
  }
  return { href: checkoutUrl, label: planLabel, disabled: false };
}

export default async function Home() {
  const user = await getChatGPTUser();
  const checkoutLinks = getCheckoutLinks(user?.email ?? null);
  const monthlyButton = purchaseButtonState(
    user,
    checkoutLinks.monthly,
    "Purchase monthly",
  );
  const yearlyButton = purchaseButtonState(
    user,
    checkoutLinks.yearly,
    "Purchase yearly",
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#06111f] text-white">
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.22),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(250,204,21,0.16),transparent_26%),linear-gradient(135deg,#06111f_0%,#081a33_50%,#04101d_100%)]" />
        <div className="absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

        <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="CircuitPop home">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/30 bg-white/8 text-xs font-bold uppercase tracking-[0.18em] text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.22)]">
              Logo
            </span>
            <span className="text-xl font-black tracking-tight">
              <span className="text-yellow-300">Circuit</span>Pop
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-200 md:flex">
            <a className="transition hover:text-cyan-200" href="#features">
              Features
            </a>
            <a className="transition hover:text-cyan-200" href="#how-it-works">
              How it works
            </a>
            <a className="transition hover:text-cyan-200" href="#pricing">
              Pricing
            </a>
          </nav>
        </header>

        <div
          id="top"
          className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-28 lg:pt-16"
        >
          <section className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">
              Learn circuits by building them.
            </p>
            <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Circuit lessons that feel like building, not memorizing.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              CircuitPop is an educational circuit-building app where students
              experiment with components, test ideas, and understand why a
              circuit works before touching a real breadboard.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#pricing"
                className="rounded-xl bg-yellow-300 px-6 py-4 text-center text-base font-black text-slate-950 shadow-[0_12px_35px_rgba(250,204,21,0.24)] transition hover:-translate-y-0.5 hover:bg-yellow-200"
              >
                View pricing
              </a>
              <a
                href="#features"
                className="rounded-xl border border-cyan-200/30 bg-white/8 px-6 py-4 text-center text-base font-bold text-cyan-50 transition hover:-translate-y-0.5 hover:border-cyan-200/60 hover:bg-white/12"
              >
                See features
              </a>
            </div>
          </section>

          <section aria-label="CircuitPop app screenshot" className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-cyan-300/12 blur-2xl" />
            <div className="rounded-[2rem] border border-cyan-200/18 bg-slate-950/70 p-3 shadow-2xl shadow-cyan-950/50 backdrop-blur sm:p-4">
              <div className="overflow-hidden rounded-3xl border border-white/12 bg-white">
                <img
                  src="/sparkboard-led-circuit.png"
                  alt="CircuitPop app showing a battery, resistor, and LED circuit on the grid canvas"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 grid gap-3 text-sm font-bold text-slate-200 sm:grid-cols-3">
                <span className="rounded-2xl border border-white/10 bg-white/7 px-4 py-3">
                  Component library
                </span>
                <span className="rounded-2xl border border-white/10 bg-white/7 px-4 py-3">
                  Grid workspace
                </span>
                <span className="rounded-2xl border border-white/10 bg-white/7 px-4 py-3">
                  Properties panel
                </span>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section
        id="features"
        className="mx-auto max-w-7xl px-6 py-20 lg:px-8"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-yellow-300">
            Feature highlights
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
            Everything needed to make circuit learning click.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-6"
            >
              <div className="mb-5 h-2 w-14 rounded-full bg-cyan-300" />
              <h3 className="text-xl font-black">{feature.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="how-it-works"
        className="border-y border-white/10 bg-white/[0.04] px-6 py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">
                How it works
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
                Build circuits. Spark ideas.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                CircuitPop turns confusing circuit concepts into short,
                repeatable experiments. Students can make mistakes safely and
                learn from each one.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="rounded-2xl border border-cyan-200/15 bg-slate-950/50 p-6"
                >
                  <span className="text-sm font-black text-yellow-300">
                    0{index + 1}
                  </span>
                  <h3 className="mt-4 text-2xl font-black">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] border border-cyan-200/18 bg-white p-2 shadow-2xl shadow-cyan-950/40">
            <img
              src="/sparkboard-esp32-circuit.png"
              alt="CircuitPop app showing an ESP32 connected to an LED with editable Arduino-compatible code"
              className="w-full rounded-[1.55rem] object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-yellow-300">
              Microcontroller ready
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              Go from basic circuits to ESP32 projects.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              CircuitPop can show both the wiring and the sketch side by side,
              so students can connect hardware logic to Arduino-compatible code
              without leaving the same workspace.
            </p>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-yellow-200/20 bg-yellow-300 p-8 text-slate-950 shadow-[0_30px_80px_rgba(250,204,21,0.18)] sm:p-10">
          <p className="text-sm font-black uppercase tracking-[0.22em]">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
            Choose how you want to use CircuitPop.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-800">
            Pick monthly flexibility or save with the yearly plan. Both plans
            include the desktop app for Mac and Windows.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-950/15 bg-white/70 p-6">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-700">
                Monthly
              </p>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-5xl font-black tracking-tight">$10</span>
                <span className="pb-2 text-base font-bold text-slate-700">
                  / month
                </span>
              </div>
              <p className="mt-4 leading-7 text-slate-700">
                Great if you want to try CircuitPop or use it for one class,
                project, or build season.
              </p>
              <a
                href={monthlyButton.href}
                aria-disabled={monthlyButton.disabled}
                title={monthlyButton.disabled ? "Checkout isn't configured yet" : undefined}
                className={`mt-6 inline-flex min-h-14 w-full items-center justify-center rounded-xl px-7 text-base font-black transition ${
                  monthlyButton.disabled
                    ? "cursor-not-allowed bg-slate-950/55 text-white"
                    : "bg-slate-950 text-white hover:-translate-y-0.5 hover:bg-slate-800"
                }`}
              >
                {monthlyButton.label}
              </a>
            </article>
            <article className="rounded-2xl border-2 border-slate-950 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-300">
                Best value
              </p>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-5xl font-black tracking-tight">$100</span>
                <span className="pb-2 text-base font-bold text-slate-300">
                  / year
                </span>
              </div>
              <p className="mt-4 leading-7 text-slate-300">
                Save $20 compared with monthly and keep CircuitPop ready for
                the whole year.
              </p>
              <a
                href={yearlyButton.href}
                aria-disabled={yearlyButton.disabled}
                title={yearlyButton.disabled ? "Checkout isn't configured yet" : undefined}
                className={`mt-6 inline-flex min-h-14 w-full items-center justify-center rounded-xl px-7 text-base font-black transition ${
                  yearlyButton.disabled
                    ? "cursor-not-allowed bg-yellow-300/70 text-slate-950/70"
                    : "bg-yellow-300 text-slate-950 hover:-translate-y-0.5 hover:bg-yellow-200"
                }`}
              >
                {yearlyButton.label}
              </a>
            </article>
          </div>
          {user ? (
            <p className="mt-4 text-sm font-semibold text-slate-700">
              Signed in as {user.displayName}. Checkout will be linked to
              this email.
            </p>
          ) : null}
        </div>
      </section>
    </main>
  );
}
