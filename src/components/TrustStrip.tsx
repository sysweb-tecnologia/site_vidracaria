"use client";

import { site } from "@/lib/site";

export function TrustStrip() {
  const items = [...site.trustStrip, ...site.trustStrip];

  return (
    <section className="relative overflow-hidden border-y border-[var(--line)] bg-[#12181f] py-4">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-10 text-xs font-medium uppercase tracking-[0.22em] text-white/70"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-copper" aria-hidden />
          </span>
        ))}
      </div>
    </section>
  );
}
