"use client";

import { useState, type ReactNode } from "react";

export default function BulkPricingToggle({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-10 border-t border-black/10 pt-8">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="inline-flex items-center gap-2 rounded-xl border border-black/20 bg-black/5 px-5 py-3 text-sm font-black uppercase tracking-[0.2em] text-zinc-800 transition hover:bg-black/10"
      >
        Buy in bulk
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>▾</span>
      </button>

      {open && (
        <div className="mt-6">
          <p className="max-w-2xl leading-7 text-zinc-700">For classrooms, labs, and teams — yearly licenses covering multiple devices.</p>
          {children}
        </div>
      )}
    </div>
  );
}
