import DemoLauncher from "./components/DemoLauncher";

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
  {
    title: "AI Tools",
    description:
      "Built-in AI for personalized lessons, live circuit debugging, and step-by-step build help.",
  },
];

const steps = [
  "Choose a circuit",
  "Connect the components",
  "Run the simulation",
  "Fix, learn, and retry",
];

const faqs = [
  {
    question: "What platforms does CircuitPop run on?",
    answer: "CircuitPop works on Mac, Windows, Linux, and ChromeOS.",
  },
  {
    question: "Do I need any electronics experience?",
    answer:
      "No — CircuitPop is built for beginners. Real components, visual wiring, and the built-in AI assistant guide you through every circuit.",
  },
  {
    question: "How does the AI assistant work?",
    answer:
      "Chat with it right inside the app for personalized lessons, live circuit debugging, and step-by-step build help whenever you're stuck.",
  },
  {
    question: "Can I use CircuitPop on more than one device?",
    answer:
      "Yes — CircuitPop is free, so install it on as many devices as you like.",
  },
  {
    question: "How do I get support?",
    answer: "Email support@circuitpop.com and we'll get back to you.",
  },
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
            <a className="transition hover:text-yellow-300" href="#faq">FAQ</a>
            <a className="transition hover:text-yellow-300" href="#download">Download</a>
          </nav>
          <a href="#download" className="rounded-xl bg-yellow-400 px-4 py-3 text-sm font-black text-black transition hover:-translate-y-0.5 hover:bg-yellow-300">
            Get CircuitPop free
          </a>
        </header>
      </div>

      <main id="top" className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative isolate border-b border-yellow-400/15">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(250,204,21,0.16),transparent_26%),radial-gradient(circle_at_85%_15%,rgba(250,204,21,0.08),transparent_24%),linear-gradient(145deg,#000_0%,#080808_52%,#11100a_100%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 pb-8 pt-6 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:pb-14 lg:pt-10">
          <section className="max-w-3xl">
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="inline-flex rounded-full border border-yellow-400/35 bg-yellow-400/10 px-4 py-2 text-sm font-black text-yellow-300">
                Learn circuits by building them.
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-yellow-400/35 bg-yellow-400/10 px-4 py-2 text-sm font-black text-yellow-300">
                ⚡ AI Integrations built in
              </span>
            </div>
            <h1 className="text-3xl font-black leading-[0.95] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Turn circuit ideas into working simulations.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
              CircuitPop is an educational circuit-building app where students experiment with real components, test ideas, and understand why a circuit works before touching a breadboard.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a href="#download" className="rounded-xl bg-yellow-400 px-6 py-3.5 text-center text-base font-black text-black shadow-[0_12px_38px_rgba(250,204,21,0.2)] transition hover:-translate-y-0.5 hover:bg-yellow-300">
                Get CircuitPop free
              </a>
              <DemoLauncher />
              <a href="#features" className="rounded-xl border border-yellow-400/35 bg-yellow-400/5 px-6 py-3.5 text-center text-base font-black text-yellow-200 transition hover:-translate-y-0.5 hover:bg-yellow-400/10">
                See the features
              </a>
            </div>
            <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-yellow-400/35 bg-yellow-400/10 px-4 py-2 text-sm font-black text-yellow-300">
              100% free
            </p>
            <p className="mt-3 text-sm font-medium text-zinc-500">Available for Mac, Windows, Linux, and ChromeOS.</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-bold text-zinc-400">
              <span className="inline-flex items-center gap-1.5"><span className="text-yellow-400">✓</span> Completely free</span>
              <span className="inline-flex items-center gap-1.5"><span className="text-yellow-400">✓</span> No account required</span>
              <span className="inline-flex items-center gap-1.5"><span className="text-yellow-400">✓</span> Unlimited devices</span>
            </div>
          </section>

          <section aria-label="CircuitPop product preview" className="relative">
            <div className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-yellow-400/10 blur-3xl" />
            <div className="rounded-[2rem] border border-yellow-400/25 bg-zinc-950/90 p-3 shadow-2xl shadow-yellow-950/20 sm:p-4">
              <p className="mb-2 px-1 text-sm font-black uppercase tracking-[0.22em] text-yellow-400">Simple LED Demo</p>
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
              <div className="mt-3 grid gap-2 text-sm font-black text-zinc-200 sm:grid-cols-3">
                {["Component library", "Grid workspace", "Properties panel"].map((label) => (
                  <span key={label} className="rounded-2xl border border-yellow-400/15 bg-yellow-400/[0.06] px-4 py-2.5">{label}</span>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-yellow-400">Feature highlights</p>
          <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">Everything needed to make circuit learning click.</h2>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-2xl border border-yellow-400/15 bg-zinc-950 p-5">
              <div className="mb-3 h-2 w-14 rounded-full bg-yellow-400" />
              <h3 className="text-xl font-black">{feature.title}</h3>
              <p className="mt-2 leading-6 text-zinc-400">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="border-y border-yellow-400/15 bg-zinc-950 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-yellow-400">How it works</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">Build circuits. Spark ideas.</h2>
            <p className="mt-3 text-lg leading-7 text-zinc-400">Make mistakes safely, see what changed, and learn by trying again.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {steps.map((step, index) => (
              <div key={step} className="rounded-2xl border border-yellow-400/15 bg-black p-5">
                <span className="text-sm font-black text-yellow-400">0{index + 1}</span>
                <h3 className="mt-2 text-xl font-black">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
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
            <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">Go from basic circuits to ESP32 projects.</h2>
            <p className="mt-3 text-lg leading-7 text-zinc-400">See wiring and Arduino-compatible code side by side, connecting hardware logic to software in one workspace.</p>
          </div>
        </div>
      </section>

      <section id="ai-assistant" className="border-y border-yellow-400/15 bg-zinc-950 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-yellow-400">AI-powered learning</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">Never get stuck — your AI assistant is built in.</h2>
            <p className="mt-3 text-lg leading-7 text-zinc-400">Chat with CircuitPop's AI assistant right inside the workspace for personalized lessons, live circuit debugging, and step-by-step build help whenever you're stuck.</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-yellow-400/15 bg-black p-4">
                <h3 className="text-lg font-black">AI Lessons</h3>
                <p className="mt-1 leading-6 text-zinc-400">Personalized, guided lessons that adapt to what you're building.</p>
              </div>
              <div className="rounded-2xl border border-yellow-400/15 bg-black p-4">
                <h3 className="text-lg font-black">Chat Anytime</h3>
                <p className="mt-1 leading-6 text-zinc-400">Ask questions in plain English and get answers without leaving the canvas.</p>
              </div>
              <div className="rounded-2xl border border-yellow-400/15 bg-black p-4">
                <h3 className="text-lg font-black">Circuit Debugging</h3>
                <p className="mt-1 leading-6 text-zinc-400">The AI spots wiring mistakes and explains what's wrong and why.</p>
              </div>
              <div className="rounded-2xl border border-yellow-400/15 bg-black p-4">
                <h3 className="text-lg font-black">Build Help</h3>
                <p className="mt-1 leading-6 text-zinc-400">Get suggestions for parts, connections, and next steps as you go.</p>
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
        <div className="relative overflow-hidden rounded-[2rem] border border-yellow-400/25 bg-zinc-950 p-6 text-center sm:p-8">
          <img src="/circuitpop-mark.jpg" alt="" className="mx-auto mb-4 h-20 w-20 rounded-2xl object-cover" />
          <p className="text-sm font-black uppercase tracking-[0.22em] text-yellow-400">Stay in the loop</p>
          <h2 className="mx-auto mt-2 max-w-2xl text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">Get new features and updates as they ship.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg leading-7 text-zinc-400">Join the CircuitPop email list for new feature announcements, tips, and product updates.</p>
          <a href={notifyUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex min-h-14 items-center justify-center rounded-xl bg-yellow-400 px-8 text-base font-black text-black transition hover:-translate-y-0.5 hover:bg-yellow-300">
            Join the email list
          </a>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-yellow-400">FAQ</p>
          <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">Questions? We've got answers.</h2>
        </div>
        <div className="mt-6 flex flex-col gap-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-2xl border border-yellow-400/15 bg-zinc-950 p-5 [&::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black">
                <span>{faq.question}</span>
                <span className="shrink-0 text-xl text-yellow-400 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 leading-6 text-zinc-400">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="download" className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="rounded-[2rem] bg-yellow-400 p-6 text-black shadow-[0_30px_90px_rgba(250,204,21,0.13)] sm:p-8">
          <p className="text-sm font-black uppercase tracking-[0.22em]">Download</p>
          <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">CircuitPop is completely free.</h2>
          <p className="mt-3 max-w-2xl text-lg leading-7 text-zinc-800">No account, no subscription, no device limit. Works on Mac, Windows, Linux, and ChromeOS.</p>
          <a href={notifyUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex min-h-14 items-center justify-center rounded-xl bg-black px-8 text-base font-black text-white transition hover:-translate-y-0.5 hover:bg-zinc-800">
            Get notified when downloads are live
          </a>
        </div>
      </section>

      <footer className="border-t border-yellow-400/15 px-4 py-6 text-center text-sm text-zinc-500 sm:px-6">
        <img src="/circuitpop-logo.png" alt="CircuitPop" className="mx-auto h-10 w-auto object-contain" />
        <p className="mt-3">Questions? <a className="font-bold text-yellow-400 hover:text-yellow-300" href="mailto:support@circuitpop.com">support@circuitpop.com</a></p>
        <a href="/AgentFlow" className="mt-5 inline-flex items-center justify-center rounded-xl border border-yellow-400/35 bg-yellow-400/5 px-6 py-3 text-sm font-black text-yellow-200 transition hover:-translate-y-0.5 hover:bg-yellow-400/10">
          Other Products
        </a>
      </footer>
      </main>
    </>
  );
}
