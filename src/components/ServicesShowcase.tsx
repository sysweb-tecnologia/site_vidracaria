"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { services, site, type Service } from "@/lib/site";

function ServiceTile({
  service,
  index,
  featured = false,
  className = "",
}: {
  service: Service;
  index: number;
  featured?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={`/servicos/${service.slug}`}
      className={`group relative block h-full min-h-[260px] overflow-hidden rounded-3xl ${className}`}
    >
      <Image
        src={service.image}
        alt={service.imageAlt}
        fill
        className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 720px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#101820]/90 via-[#101820]/35 to-[#101820]/10" />
      <div
        className="absolute inset-y-0 left-0 w-1"
        style={{ background: service.accent }}
      />

      <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-7">
        <div className="flex items-start justify-between">
          <span className="font-display text-xs tracking-[0.22em] text-white/55">
            0{index + 1}
          </span>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition group-hover:bg-white group-hover:text-ink">
            <ArrowUpRight size={18} />
          </span>
        </div>

        <div>
          <h3
            className={`font-display font-bold tracking-tight text-white ${
              featured ? "text-3xl md:text-[2.75rem] md:leading-none" : "text-2xl md:text-[1.75rem] md:leading-tight"
            }`}
          >
            {service.title}
          </h3>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/80">
            {service.short}
          </p>
        </div>
      </div>
    </Link>
  );
}

export function ServicesShowcase() {
  const [featured, second, third, fourth] = services;

  return (
    <section id="servicos" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="mb-12 grid gap-4 md:mb-14 md:grid-cols-12 md:items-end md:gap-5">
            <div className="md:col-span-7">
              <p className="text-xs uppercase tracking-[0.24em] text-teal-deep">
                Soluções
              </p>
              <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-ink md:text-5xl">
                {site.servicesIntro.title}
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-ink-soft md:col-span-5 md:text-base">
              {site.servicesIntro.description}
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-4 md:gap-5">
          {/* Bloco superior: coluna esquerda = altura da pilha direita */}
          <div className="grid grid-cols-1 gap-4 md:h-[560px] md:grid-cols-12 md:gap-5">
            <Reveal className="h-full md:col-span-7" y={20}>
              <ServiceTile service={featured} index={0} featured />
            </Reveal>

            <div className="grid grid-cols-1 gap-4 md:col-span-5 md:h-full md:grid-rows-2 md:gap-5">
              <Reveal className="h-full min-h-0" delay={0.06} y={20}>
                <ServiceTile service={second} index={1} />
              </Reveal>
              <Reveal className="h-full min-h-0" delay={0.12} y={20}>
                <ServiceTile service={third} index={2} />
              </Reveal>
            </div>
          </div>

          {/* Faixa inferior alinhada às bordas do bloco acima */}
          <Reveal delay={0.16} y={20}>
            <ServiceTile
              service={fourth}
              index={3}
              className="md:min-h-[280px]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
