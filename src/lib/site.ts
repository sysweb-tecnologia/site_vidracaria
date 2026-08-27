import { getNiche, type NicheId, type Service } from "./niches";

export type { NicheId, Service };
/** @deprecated Use NicheId — mantido para compatibilidade de imports */
export type ClientId = NicheId;
/** @deprecated Use string — slugs agora vêm do nicho ativo */
export type ServiceSlug = string;

/** Nicho ativo — definido por NEXT_PUBLIC_CLIENT na Vercel / .env.local */
export const site = getNiche(process.env.NEXT_PUBLIC_CLIENT);

export const services = site.services;

export function whatsappUrl(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(message)}`;
}

/** Navegação principal — limpa e moderna */
export const nav = [
  { href: "/", label: "Início" },
  { href: "/#servicos", label: "Soluções" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
] as const;

/** Links de serviços para o rodapé */
export const serviceNav = services.map((service) => ({
  href: `/servicos/${service.slug}`,
  label: service.navLabel,
}));

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
