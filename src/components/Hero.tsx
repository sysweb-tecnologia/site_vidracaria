"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { site, whatsappUrl } from "@/lib/site";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2400&q=85"
          alt="Arquitetura contemporânea com grandes planos de vidro"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f171c]/88 via-[#0f171c]/55 to-[#0f171c]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f171c]/70 via-transparent to-[#0f171c]/35" />
        <div className="glass-edge absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 md:justify-center md:px-8 md:pb-24 md:pt-28">
        <motion.p
          className="mb-4 text-xs uppercase tracking-[0.28em] text-white/70 md:mb-6"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {site.city} · desde {site.founded}
        </motion.p>

        <motion.h1
          className="font-display max-w-4xl text-[clamp(3.4rem,12vw,8.5rem)] font-bold leading-[0.9] tracking-tight text-white"
          initial={reduce ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Arteflex
        </motion.h1>

        <motion.p
          className="mt-5 max-w-xl text-lg leading-relaxed text-white/85 md:mt-7 md:text-xl"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Projetos em vidro, divisórias, persianas e toldos que transformam
          ambientes com precisão e presença.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap items-center gap-4 md:mt-10"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer relative inline-flex items-center gap-2 rounded-full bg-copper px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-copper-deep"
          >
            Solicitar orçamento
            <ArrowDownRight size={18} />
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
          >
            Ver soluções
          </a>
        </motion.div>

        <motion.div
          className="mt-14 hidden items-end justify-between border-t border-white/20 pt-6 text-white/60 md:flex"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <p className="max-w-xs text-sm leading-relaxed">
            Fabricação e instalação com atendimento direto em Manaus —
            residências, comércios e indústrias.
          </p>
          <p className="font-display text-sm uppercase tracking-[0.22em]">
            Blindex® · Drywall · Persianas
          </p>
        </motion.div>
      </div>
    </section>
  );
}
