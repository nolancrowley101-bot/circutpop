import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AgentFlow | Build Agentic AI Workflows visually",
  description:
    "AgentFlow is a drag-and-drop builder for agentic AI workflows — chain LLM calls, tools, conditions, and API requests on a visual canvas. Available for Windows, macOS, Linux, and Raspberry Pi OS.",
};

const checkoutUrl =
  "https://circuitpop.lemonsqueezy.com/checkout/buy/2f5cfd47-eba2-4edd-91e5-ff8adb9afe39";

const screenshots = [
  { src: "/agentflow-screenshot-1.jpg", alt: "AgentFlow canvas showing an Input node feeding an LLM Call, branching through a Condition into Output (pass) and Output (flagged) nodes" },
  { src: "/agentflow-screenshot-2.jpg", alt: "AgentFlow canvas with the same Input to LLM Call to Condition workflow, zoomed to a different layout" },
  { src: "/agentflow-screenshot-3.jpg", alt: "AgentFlow canvas with Output (flagged) and Output (pass) nodes arranged above and below the Condition block" },
  { src: "/agentflow-screenshot-4.jpg", alt: "AgentFlow canvas showing a longer chain: Input, LLM Call, HTTP Request, Condition, then a second LLM Call feeding two Output nodes" },
];

export default function AgentFlowPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <header className="border-b border-purple-400/15">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <a href="/" className="text-sm font-bold text-zinc-400 transition hover:text-purple-300">← Back to CircuitPop</a>
          <span className="text-lg font-black tracking-tight">AgentFlow</span>
        </div>
      </header>

      <section className="relative isolate border-b border-purple-400/15">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(192,132,252,0.16),transparent_26%),radial-gradient(circle_at_85%_15%,rgba(192,132,252,0.08),transparent_24%),linear-gradient(145deg,#000_0%,#080808_52%,#120a1a_100%)]" />
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-20 lg:px-8">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-purple-400/35 bg-purple-400/10 px-4 py-2 text-sm font-black text-purple-300">
            Available for Windows, macOS, Linux, and Raspberry Pi OS
          </p>
          <h1 className="text-3xl font-black leading-[0.95] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Build Agentic AI Workflows visually.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
            AgentFlow is a separate project from the CircuitPop team — a drag-and-drop canvas for chaining LLM calls, tools, conditions, and API requests into working agentic workflows, with a live simulated run mode.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="#pricing" className="rounded-xl bg-purple-400 px-6 py-3.5 text-center text-base font-black text-black shadow-[0_12px_38px_rgba(192,132,252,0.25)] transition hover:-translate-y-0.5 hover:bg-purple-300">
              Buy now
            </a>
            <a href="#screenshots" className="rounded-xl border border-purple-400/35 bg-purple-400/5 px-6 py-3.5 text-center text-base font-black text-purple-200 transition hover:-translate-y-0.5 hover:bg-purple-400/10">
              See screenshots
            </a>
          </div>
          <p className="mt-4 text-sm font-medium text-zinc-500">Runs on Windows, macOS, Linux, and Raspberry Pi OS — including on a VPS or Raspberry Pi.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-purple-300">Workflow Demo</p>
        <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">Drag, drop, and connect blocks in real time.</h2>
        <div className="mt-6 overflow-hidden rounded-[2rem] border border-purple-400/25 bg-zinc-950/90 p-3 shadow-2xl shadow-purple-950/20 sm:p-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-black">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="/agentflow-demo-2-poster.jpg"
              aria-label="AgentFlow demo: building a workflow with Input, LLM Call, HTTP Request, Condition, and Output blocks"
              className="h-full w-full object-cover"
            >
              <source src="/agentflow-demo-2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section id="screenshots" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-purple-300">Screenshots</p>
        <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">Blocks for flow, logic, AI, and data.</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {screenshots.map((shot) => (
            <div key={shot.src} className="overflow-hidden rounded-2xl border border-purple-400/15 bg-zinc-950">
              <img src={shot.src} alt={shot.alt} className="w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-purple-300">Quick Look</p>
        <div className="mt-4 overflow-hidden rounded-2xl border border-purple-400/15 bg-zinc-950">
          <video autoPlay loop muted playsInline preload="metadata" aria-label="AgentFlow quick loop demo" className="h-full w-full object-cover">
            <source src="/agentflow-demo-1.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border-2 border-purple-400 bg-purple-400/10 p-6 text-center shadow-[0_30px_90px_rgba(192,132,252,0.13)] sm:p-8">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-purple-300">Pricing</p>
          <div className="mt-3 flex items-end justify-center gap-2">
            <span className="text-5xl font-black tracking-tight">$50</span>
            <span className="pb-2 font-bold text-zinc-400">one-time payment</span>
          </div>
          <p className="mt-3 leading-7 text-zinc-400">Lifetime access to AgentFlow. Runs on Windows, macOS, Linux, and Raspberry Pi OS.</p>
          <a href={checkoutUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-purple-400 px-7 text-base font-black text-black transition hover:-translate-y-0.5 hover:bg-purple-300">
            Buy now
          </a>
        </div>
      </section>

      <footer className="border-t border-purple-400/15 px-4 py-6 text-center text-sm text-zinc-500 sm:px-6">
        <a href="/" className="font-bold text-purple-300 hover:text-purple-200">← Back to CircuitPop</a>
        <p className="mt-3">Questions? <a className="font-bold text-purple-300 hover:text-purple-200" href="mailto:support@circuitpop.com">support@circuitpop.com</a></p>
      </footer>
    </main>
  );
}
