import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function TestimonialsSection() {
  const { testimonials } = site;

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_0%,rgba(47,111,126,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="mb-12 max-w-2xl md:mb-14">
            <p className="text-xs uppercase tracking-[0.24em] text-teal-deep">
              {testimonials.eyebrow}
            </p>
            <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-ink md:text-5xl">
              {testimonials.title}
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.items.map((item, i) => (
            <Reveal key={item.author} delay={0.08 * i} y={24}>
              <blockquote className="flex h-full flex-col justify-between rounded-[1.6rem] border border-[var(--line)] bg-white/55 p-7 shadow-[0_16px_50px_rgba(18,24,31,0.04)]">
                <div>
                  <span
                    className="font-display text-5xl leading-none text-copper/40"
                    aria-hidden
                  >
                    “
                  </span>
                  <p className="mt-2 text-base leading-relaxed text-ink-soft">
                    {item.quote}
                  </p>
                </div>
                <footer className="mt-8 border-t border-[var(--line)] pt-5">
                  <p className="font-display text-lg font-semibold text-ink">
                    {item.author}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-ink-soft/70">
                    {item.role}
                  </p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
