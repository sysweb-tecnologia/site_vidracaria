import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { blindexPoints } from "@/lib/site";

export function BlindexSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-2 md:gap-14 md:px-8">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] md:aspect-[5/6]">
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80"
              alt="Box e acabamentos em vidro temperado"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12181f]/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="glass-panel rounded-2xl px-5 py-4 text-sm font-medium text-ink">
                Parceira Blindex® — confiança e segurança reconhecidas no Brasil.
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs uppercase tracking-[0.24em] text-teal-deep">
              Por que Blindex®
            </p>
            <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-ink md:text-5xl">
              Vidro temperado com nome e padrão.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft md:text-lg">
              Blindex® é sinônimo de confiança e segurança. Mais de 60 anos de qualidade
              e beleza reconhecidas — para que só o melhor faça parte do seu projeto.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {blindexPoints.map((point, i) => (
              <Reveal key={point.title} delay={0.08 * i}>
                <div className="rounded-2xl border border-[var(--line)] bg-white/50 p-5">
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {point.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
