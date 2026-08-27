import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

const years = String(new Date().getFullYear() - site.founded);

const stats = site.about.stats.map((stat, index) => ({
  value: index === 0 ? years : (stat.value ?? ""),
  label: stat.label,
}));

export function About() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[1.1fr_0.9fr] md:items-end md:gap-16 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.24em] text-teal-deep">
            {site.about.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-ink md:text-5xl">
            {site.about.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-soft md:text-lg">
            {site.about.body}
          </p>
          <Link
            href="/sobre"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-teal-deep transition hover:text-teal"
          >
            Conhecer a história completa
            <ArrowUpRight size={16} />
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass-panel rounded-[1.8rem] p-7 md:p-9">
            <div className="grid gap-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-b border-[var(--line)] pb-6 last:border-none last:pb-0"
                >
                  <p className="font-display text-5xl font-bold tracking-tight text-teal-deep md:text-6xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-ink-soft">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
