import {
  blindexPoints,
  buildServices,
  getClient,
  type ClientId,
  type Service,
  type ServiceSlug,
} from "./clients";

export type { ClientId, Service, ServiceSlug };

/** Cliente ativo — definido por NEXT_PUBLIC_CLIENT na Vercel / .env.local */
export const site = getClient(process.env.NEXT_PUBLIC_CLIENT);

export const services = buildServices(site.name);

export function whatsappUrl(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { href: "/", label: "Início" },
  { href: "/servicos/vidros-e-espelhos", label: "Vidros" },
  { href: "/servicos/divisorias-e-paredes", label: "Divisórias" },
  { href: "/servicos/persianas-e-cortinas", label: "Persianas" },
  { href: "/servicos/toldos-e-coberturas", label: "Toldos" },
  { href: "/contato", label: "Contato" },
] as const;

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export { blindexPoints };
