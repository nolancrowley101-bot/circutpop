"use client";

import { useEffect, useState } from "react";

const demos = [
  {
    id: "led",
    label: "Simple LED Demo",
    src: "/led-demo.mp4",
    poster: "/sparkboard-led-circuit.png",
  },
  {
    id: "esp32",
    label: "ESP32 Simulation Demo",
    src: "/esp32-demo.mp4",
    poster: "/sparkboard-esp32-circuit.png",
  },
  {
    id: "lessons",
    label: "AI Lessons Demo",
    src: "/lessons-demo.mp4",
    poster: "/lessons-demo-poster.jpg",
  },
  {
    id: "fixing-circuit",
    label: "AI Circuit Debugging Demo",
    src: "/fixing-circuit-demo.mp4",
    poster: "/fixing-circuit-demo-poster.jpg",
  },
  {
    id: "ai-assistant",
    label: "AI Assistant Demo",
    src: "/ai-assistant-demo.mp4",
    poster: "/ai-assistant-demo-poster.jpg",
  },
] as const;

type Demo = (typeof demos)[number];

export default function DemoLauncher() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDemo, setActiveDemo] = useState<Demo | null>(null);

  useEffect(() => {
    if (!activeDemo) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveDemo(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeDemo]);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-haspopup="menu"
        aria-expanded={menuOpen}
        className="w-full rounded-xl border border-yellow-400/35 bg-yellow-400/5 px-6 py-4 text-center text-base font-black text-yellow-200 transition hover:-translate-y-0.5 hover:bg-yellow-400/10 sm:w-auto"
      >
        Demo
      </button>

      {menuOpen && (
        <>
          <button
            type="button"
            aria-hidden="true"
            tabIndex={-1}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-10 cursor-default"
          />
          <div
            role="menu"
            className="absolute left-0 top-full z-20 mt-2 w-64 overflow-hidden rounded-xl border border-yellow-400/25 bg-zinc-950 shadow-2xl shadow-black/40"
          >
            {demos.map((demo) => (
              <button
                key={demo.id}
                type="button"
                role="menuitem"
                onClick={() => {
                  setActiveDemo(demo);
                  setMenuOpen(false);
                }}
                className="block w-full px-5 py-4 text-left text-sm font-bold text-zinc-200 transition hover:bg-yellow-400/10 hover:text-yellow-300"
              >
                {demo.label}
              </button>
            ))}
          </div>
        </>
      )}

      {activeDemo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeDemo.label}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActiveDemo(null)}
        >
          <div
            className="w-full max-w-3xl overflow-hidden rounded-[2rem] border border-yellow-400/25 bg-zinc-950 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-yellow-400/15 px-5 py-4">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-yellow-400">{activeDemo.label}</p>
              <button
                type="button"
                onClick={() => setActiveDemo(null)}
                aria-label="Close demo"
                className="rounded-full border border-yellow-400/25 px-3 py-1 text-sm font-black text-zinc-300 transition hover:bg-yellow-400/10 hover:text-yellow-300"
              >
                Close
              </button>
            </div>
            <video
              key={activeDemo.id}
              src={activeDemo.src}
              poster={activeDemo.poster}
              controls
              autoPlay
              loop
              playsInline
              className="h-full w-full bg-black"
            />
          </div>
        </div>
      )}
    </div>
  );
}
