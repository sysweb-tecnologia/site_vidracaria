"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { nav, whatsappUrl } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        solid
          ? "bg-[#f7f9f8]/85 backdrop-blur-xl border-b border-[var(--line)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="group relative z-50" onClick={() => setOpen(false)}>
          <span
            className={`font-display text-2xl font-bold tracking-tight transition-colors duration-300 md:text-[1.7rem] ${
              solid ? "text-ink" : "text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]"
            }`}
          >
            Arteflex
          </span>
          <span
            className={`mt-0.5 block text-[10px] uppercase tracking-[0.22em] transition-colors duration-300 ${
              solid ? "text-ink-soft/70" : "text-white/75"
            }`}
          >
            Manaus · desde 2002
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                solid
                  ? "text-ink-soft hover:text-teal-deep"
                  : "text-white/90 hover:text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer relative rounded-full bg-copper px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-copper-deep"
          >
            Orçamento
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className={`relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 lg:hidden ${
            solid
              ? "border-[var(--line)] bg-white/70 text-ink"
              : "border-white/35 bg-white/15 text-white backdrop-blur-md"
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#f4f7f6] px-6 pt-28 lg:hidden"
          >
            <nav className="flex flex-col gap-5">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl font-semibold text-ink"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-fit rounded-full bg-copper px-6 py-3 text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Solicitar orçamento
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
