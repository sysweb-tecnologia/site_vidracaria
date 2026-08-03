import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ContactCTA } from "@/components/ContactCTA";
import type { Service } from "@/lib/site";
import { services, site, whatsappUrl } from "@/lib/site";

type ServicePageProps = {
  service: Service;
};

export function ServicePage({ service }: ServicePageProps) {
  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <section className="relative min-h-[72svh] overflow-hidden pt-24">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#101820]/90 via-[#101820]/60 to-[#101820]/25" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[72svh] max-w-7xl flex-col justify-end px-5 pb-14 md:px-8 md:pb-20">
          <Link
            href="/#servicos"
            className="mb-8 inline-flex w-fit items-center gap-2 text-sm text-white/70 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Todas as soluções
          </Link>
          <p className="text-xs uppercase tracking-[0.24em] text-white/60">
            {site.name} · {site.city}
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-5xl font-bold tracking-tight text-white md:text-7xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/85">{service.short}</p>
          <a
            href={whatsappUrl(
              `Olá! Vim pelo site da ${site.name} e quero orçamento de ${service.title}.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-fit rounded-full bg-copper px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-copper-deep"
          >
            Orçar este serviço
          </a>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[1.2fr_0.8fr] md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Sobre esta solução
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft md:text-lg">
              {service.description}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[1.6rem] border border-[var(--line)] bg-white/55 p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-teal-deep">
                Incluso / diferenciais
              </p>
              <ul className="mt-5 space-y-4">
                {service.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-ink-soft">
                    <span
                      className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white"
                      style={{ background: service.accent }}
                    >
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
              Outras soluções
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {others.map((item, i) => (
              <Reveal key={item.slug} delay={0.05 * i}>
                <Link
                  href={`/servicos/${item.slug}`}
                  className="group relative block aspect-[4/3] overflow-hidden rounded-3xl"
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[#12181f]/45 transition group-hover:bg-[#12181f]/30" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="font-display text-xl font-semibold text-white">
                      {item.title}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
