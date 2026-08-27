import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { site, whatsappUrl } from "@/lib/site";

const years = String(new Date().getFullYear() - site.founded);

const stats = site.about.stats.map((stat, index) => ({
  value: index === 0 ? years : (stat.value ?? ""),
  label: stat.label,
}));

export function AboutPageContent() {
  const { aboutPage } = site;

  return (
    <>
      <section className="relative min-h-[70svh] overflow-hidden pt-24">
        <div className="absolute inset-0">
          <Image
            src={aboutPage.image}
            alt={aboutPage.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#101820]/90 via-[#101820]/65 to-[#101820]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101820]/55 via-transparent to-[#101820]/25" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[70svh] max-w-7xl flex-col justify-end px-5 pb-14 md:px-8 md:pb-20">
          <p className="text-xs uppercase tracking-[0.24em] text-white/60">
            {aboutPage.eyebrow}
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-5xl font-bold tracking-tight text-white md:text-7xl">
            {aboutPage.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/85">{aboutPage.support}</p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[1.15fr_0.85fr] md:gap-16 md:px-8">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.24em] text-teal-deep">
              {aboutPage.story.title}
            </p>
            <div className="mt-6 space-y-5">
              {aboutPage.story.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="text-base leading-relaxed text-ink-soft md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
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

      <section className="pb-8 md:pb-12">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-2 md:px-8">
          <Reveal>
            <div className="h-full rounded-[1.6rem] border border-[var(--line)] bg-white/50 p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.2em] text-teal-deep">
                {aboutPage.mission.title}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink md:text-xl">
                {aboutPage.mission.text}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-[1.6rem] bg-[#12181f] p-8 text-white md:p-10">
              <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                {aboutPage.vision.title}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white/85 md:text-xl">
                {aboutPage.vision.text}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.24em] text-teal-deep">
              {aboutPage.values.eyebrow}
            </p>
            <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-ink md:text-5xl">
              {aboutPage.values.title}
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {aboutPage.values.items.map((item, i) => (
              <Reveal key={item.title} delay={0.06 * i} y={20}>
                <article className="h-full rounded-[1.4rem] border border-[var(--line)] bg-white/45 p-6 transition hover:bg-white/70">
                  <span className="font-display text-sm tracking-[0.2em] text-copper">
                    0{i + 1}
                  </span>
                  <h3 className="font-display mt-4 text-xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-[#12181f] px-6 py-12 text-white md:px-12 md:py-16">
              <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-teal/30 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-copper/20 blur-3xl" />

              <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <div className="max-w-xl">
                  <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                    {aboutPage.cta.title}
                  </h2>
                  <p className="mt-4 text-base text-white/70">
                    {aboutPage.cta.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shimmer relative inline-flex items-center gap-2 rounded-full bg-copper px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-copper-deep"
                  >
                    Falar no WhatsApp
                    <ArrowUpRight size={16} />
                  </a>
                  <Link
                    href="/contato"
                    className="inline-flex rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Página de contato
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
