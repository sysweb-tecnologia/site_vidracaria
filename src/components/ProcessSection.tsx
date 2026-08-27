import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function ProcessSection() {
  const { process } = site;

  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="mb-12 max-w-2xl md:mb-16">
            <p className="text-xs uppercase tracking-[0.24em] text-teal-deep">
              {process.eyebrow}
            </p>
            <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-ink md:text-5xl">
              {process.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft md:text-lg">
              {process.description}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {process.steps.map((step, i) => (
            <Reveal key={step.title} delay={0.06 * i} y={20}>
              <article className="group relative h-full overflow-hidden rounded-[1.6rem] border border-[var(--line)] bg-white/45 p-6 transition duration-500 hover:border-teal/30 hover:bg-white/70 md:p-7">
                <span className="font-display text-5xl font-bold tracking-tight text-teal/20 transition group-hover:text-teal/35">
                  0{i + 1}
                </span>
                <h3 className="font-display mt-6 text-xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {step.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
