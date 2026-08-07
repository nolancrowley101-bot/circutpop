import DemoLauncher from "./components/DemoLauncher";
import BulkPricingToggle from "./components/BulkPricingToggle";

const monthlyCheckoutUrl =
  "https://circuitpop.lemonsqueezy.com/checkout/buy/1dba74e4-4b33-49f1-b50c-dd66fa9d172c";

const yearlyCheckoutUrl =
  "https://circuitpop.lemonsqueezy.com/checkout/buy/5ca27eac-2fcb-45c7-857f-123c5323db2b";

const bulk10CheckoutUrl =
  "https://circuitpop.lemonsqueezy.com/checkout/buy/15252f55-18f8-421e-ac69-182876adc09b";

const bulk25CheckoutUrl =
  "https://circuitpop.lemonsqueezy.com/checkout/buy/73cbff95-db53-447a-9901-f8ac82e7465c";

const notifyUrl = "https://circuitpop.kit.com/3a0e4677c7";

const features = [
  {
    title: "Real Components",
    description:
      "Build with batteries, resistors, LEDs, switches, motors, meters, sensors, ESP32 boards, and more.",
  },
  {
    title: "Visual Wiring",
    description:
      "Connect components on a clean grid canvas with snap points, labels, undo and redo, and instant feedback.",
  },
  {
    title: "Properties + Code",
    description:
      "Adjust component values and write Arduino-compatible code without leaving your circuit workspace.",
  },
];

const steps = [
  "Choose a circuit",
  "Connect the components",
  "Run the simulation",
  "Fix, learn, and retry",
];

export default function Home() {
  return (
    <>
      <div className="sticky top-0 z-50 border-b border-yellow-400/15 bg-black/95 backdrop-blur">
        <header className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-5 sm:px-6 lg:px-8">
          <a href="#top" aria-label="CircuitPop home" className="shrink-0">
            <img src="/circuitpop-logo.png" alt="CircuitPop" className="h-12 w-auto object-contain sm:h-14" />
          </a>
          <nav className="hidden items-center gap-7 text-sm font-bold text-zinc-300 md:flex">
            <a className="transition hover:text-yellow-300" href="#features">Features</a>
            <a className="transition hover:text-yellow-300" href="#how-it-works">How it works</a>
            <a className="transition hover:text-yellow-300" href="#pricing">Pricing</a>
          </nav>
          <a href="#pricing" className="rounded-xl bg-yellow-400 px-4 py-3 text-sm font-black text-black transition hover:-translate-y-0.5 hover:bg-yellow-300">
            Buy now
          </a>
        </header>
      </div>

      <main id="top" className="min-h-screen overflow-hidden bg-black text-white">
      <div className="bg-yellow-400 px-4 py-2 text-center text-sm font-black text-black">
        First 100 buyers get 50% off — use code <span className="font-mono">EARLYBIRD</span> at checkout.
      </div>
      <section className="relative isolate border-b border-yellow-400/15">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(250,204,21,0.16),transparent_26%),radial-gradient(circle_at_85%_15%,rgba(250,204,21,0.08),transparent_24%),linear-gradient(145deg,#000_0%,#080808_52%,#11100a_100%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:pb-28 lg:pt-16">
          <section className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-yellow-400/35 bg-yellow-400/10 px-4 py-2 text-sm font-black text-yellow-300">
              Learn circuits by building them.
            </p>
            <h1 className="text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Turn circuit ideas into working simulations.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
              CircuitPop is an educational circuit-building app where students experiment with real components, test ideas, and understand why a circuit works before touching a breadboard.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#pricing" className="rounded-xl bg-yellow-400 px-6 py-4 text-center text-base font-black text-black shadow-[0_12px_38px_rgba(250,204,21,0.2)] transition hover:-translate-y-0.5 hover:bg-yellow-300">
                Buy now
              </a>
              <DemoLauncher />
            </div>
            <p className="mt-4 text-sm font-medium text-zinc-500">Available for Mac, Windows, Linux, and ChromeOS.</p>
          </section>

          <section aria-label="CircuitPop product preview" className="relative">
            <div className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-yellow-400/10 blur-3xl" />
            <div className="rounded-[2rem] border border-yellow-400/25 bg-zinc-950/90 p-3 shadow-2xl shadow-yellow-950/20 sm:p-4">
              <p className="mb-3 px-1 text-sm font-black uppercase tracking-[0.22em] text-yellow-400">Simple LED Demo</p>
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster="/sparkboard-led-circuit.png"
                  aria-label="CircuitPop simple LED demo: a battery, resistor, and LED circuit on its grid canvas"
                  className="h-full w-full object-cover"
                >
                  <source src="/led-demo.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="mt-4 grid gap-3 text-sm font-black text-zinc-200 sm:grid-cols-3">
                {["Component library", "Grid workspace", "Properties panel"].map((label) => (
                  <span key={label} className="rounded-2xl border border-yellow-400/15 bg-yellow-400/[0.06] px-4 py-3">{label}</span>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-yellow-400">Feature highlights</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">Everything needed to make circuit learning click.</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-2xl border border-yellow-400/15 bg-zinc-950 p-6">
              <div className="mb-5 h-2 w-14 rounded-full bg-yellow-400" />
              <h3 className="text-xl font-black">{feature.title}</h3>
              <p className="mt-3 leading-7 text-zinc-400">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="border-y border-yellow-400/15 bg-zinc-950 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-yellow-400">How it works</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">Build circuits. Spark ideas.</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-400">Make mistakes safely, see what changed, and learn by trying again.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map((step, index) => (
              <div key={step} className="rounded-2xl border border-yellow-400/15 bg-black p-6">
                <span className="text-sm font-black text-yellow-400">0{index + 1}</span>
                <h3 className="mt-4 text-2xl font-black">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] border border-yellow-400/25 bg-zinc-900 p-2 shadow-2xl shadow-yellow-950/20">
            <p className="mb-2 px-2 pt-1 text-sm font-black uppercase tracking-[0.22em] text-yellow-400">ESP32 Simulation Demo</p>
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="/sparkboard-esp32-circuit.png"
              aria-label="CircuitPop ESP32 simulation demo with editable Arduino-compatible code"
              className="w-full rounded-[1.55rem] object-cover"
            >
              <source src="/esp32-demo.mp4" type="video/mp4" />
            </video>
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-yellow-400">Microcontroller ready</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">Go from basic circuits to ESP32 projects.</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-400">See wiring and Arduino-compatible code side by side, connecting hardware logic to software in one workspace.</p>
          </div>
        </div>
      </section>

      <section id="ai-assistant" className="border-y border-yellow-400/15 bg-zinc-950 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-yellow-400">AI-powered learning</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">Never get stuck — your AI assistant is built in.</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-400">Chat with CircuitPop's AI assistant right inside the workspace for personalized lessons, live circuit debugging, and step-by-step build help whenever you're stuck.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-yellow-400/15 bg-black p-5">
                <h3 className="text-lg font-black">AI Lessons</h3>
                <p className="mt-2 leading-6 text-zinc-400">Personalized, guided lessons that adapt to what you're building.</p>
              </div>
              <div className="rounded-2xl border border-yellow-400/15 bg-black p-5">
                <h3 className="text-lg font-black">Chat Anytime</h3>
                <p className="mt-2 leading-6 text-zinc-400">Ask questions in plain English and get answers without leaving the canvas.</p>
              </div>
              <div className="rounded-2xl border border-yellow-400/15 bg-black p-5">
                <h3 className="text-lg font-black">Circuit Debugging</h3>
                <p className="mt-2 leading-6 text-zinc-400">The AI spots wiring mistakes and explains what's wrong and why.</p>
              </div>
              <div className="rounded-2xl border border-yellow-400/15 bg-black p-5">
                <h3 className="text-lg font-black">Build Help</h3>
                <p className="mt-2 leading-6 text-zinc-400">Get suggestions for parts, connections, and next steps as you go.</p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-yellow-400/25 bg-zinc-900 p-2 shadow-2xl shadow-yellow-950/20">
            <p className="mb-2 px-2 pt-1 text-sm font-black uppercase tracking-[0.22em] text-yellow-400">AI Assistant Demo</p>
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="/ai-assistant-demo-poster.jpg"
              aria-label="CircuitPop AI assistant demo showing chat, lessons, and debugging help"
              className="w-full rounded-[1.55rem] object-cover"
            >
              <source src="/ai-assistant-demo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-yellow-400/25 bg-zinc-950 p-8 text-center sm:p-12">
          <img src="/circuitpop-mark.jpg" alt="" className="mx-auto mb-6 h-24 w-24 rounded-2xl object-cover" />
          <p className="text-sm font-black uppercase tracking-[0.22em] text-yellow-400">Stay in the loop</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">Get new features and updates as they ship.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400">Join the CircuitPop email list for new feature announcements, tips, and product updates.</p>
          <a href={notifyUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex min-h-14 items-center justify-center rounded-xl bg-yellow-400 px-8 text-base font-black text-black transition hover:-translate-y-0.5 hover:bg-yellow-300">
            Join the email list
          </a>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="rounded-[2rem] bg-yellow-400 p-8 text-black shadow-[0_30px_90px_rgba(250,204,21,0.13)] sm:p-10">
          <p className="text-sm font-black uppercase tracking-[0.22em]">Pricing</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">Choose your CircuitPop plan.</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-800">Lemon Squeezy securely handles payment and delivers access to the desktop app after checkout. Works on Mac, Windows, Linux, and ChromeOS.</p>
          <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-black text-yellow-300">
            First 100 buyers: code <span className="font-mono">EARLYBIRD</span> for 50% off
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-black/15 bg-white/75 p-6">
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-zinc-700">Monthly</p>
                <span className="rounded-full bg-black/10 px-3 py-1 text-xs font-black uppercase tracking-[0.15em] text-zinc-700">1 device</span>
              </div>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-5xl font-black tracking-tight">$20</span>
                <span className="pb-2 font-bold text-zinc-700">/ month</span>
              </div>
              <p className="mt-4 leading-7 text-zinc-700">Flexible access with monthly billing.</p>
              <a href={monthlyCheckoutUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-black px-7 text-base font-black text-white transition hover:-translate-y-0.5 hover:bg-zinc-800">
                Purchase monthly
              </a>
            </article>
            <article className="rounded-2xl border-2 border-black bg-black p-6 text-white shadow-2xl shadow-black/25">
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-400">Best value</p>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.15em] text-zinc-300">1 device</span>
              </div>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-5xl font-black tracking-tight">$200</span>
                <span className="pb-2 font-bold text-zinc-300">/ year</span>
              </div>
              <p className="mt-4 leading-7 text-zinc-300">Save $40 compared with paying monthly for a full year.</p>
              <a href={yearlyCheckoutUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-yellow-400 px-7 text-base font-black text-black transition hover:-translate-y-0.5 hover:bg-yellow-300">
                Purchase yearly
              </a>
            </article>
          </div>

          <BulkPricingToggle>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <article className="rounded-2xl border border-black/15 bg-white/75 p-6">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-zinc-700">Bulk</p>
                  <span className="rounded-full bg-black/10 px-3 py-1 text-xs font-black uppercase tracking-[0.15em] text-zinc-700">10 devices</span>
                </div>
                <div className="mt-4 flex items-end gap-2">
                  <span className="text-5xl font-black tracking-tight">$1,600</span>
                  <span className="pb-2 font-bold text-zinc-700">/ year</span>
                </div>
                <p className="mt-4 leading-7 text-zinc-700">One yearly license covering 10 devices.</p>
                <a href={bulk10CheckoutUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-black px-7 text-base font-black text-white transition hover:-translate-y-0.5 hover:bg-zinc-800">
                  Purchase 10-device plan
                </a>
              </article>
              <article className="rounded-2xl border border-black/15 bg-white/75 p-6">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-zinc-700">Bulk</p>
                  <span className="rounded-full bg-black/10 px-3 py-1 text-xs font-black uppercase tracking-[0.15em] text-zinc-700">25 devices</span>
                </div>
                <div className="mt-4 flex items-end gap-2">
                  <span className="text-5xl font-black tracking-tight">$4,000</span>
                  <span className="pb-2 font-bold text-zinc-700">/ year</span>
                </div>
                <p className="mt-4 leading-7 text-zinc-700">One yearly license covering 25 devices.</p>
                <a href={bulk25CheckoutUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-black px-7 text-base font-black text-white transition hover:-translate-y-0.5 hover:bg-zinc-800">
                  Purchase 25-device plan
                </a>
              </article>
            </div>
          </BulkPricingToggle>
        </div>
      </section>

      <footer className="border-t border-yellow-400/15 px-4 py-10 text-center text-sm text-zinc-500 sm:px-6">
        <img src="/circuitpop-logo.png" alt="CircuitPop" className="mx-auto h-12 w-auto object-contain" />
        <p className="mt-5">Questions? <a className="font-bold text-yellow-400 hover:text-yellow-300" href="mailto:support@circuitpop.com">support@circuitpop.com</a></p>
      </footer>
      </main>
    </>
  );
}
