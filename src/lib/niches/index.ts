import { advogados } from "./advogados";
import { clinicaEstetica } from "./clinica-estetica";
import { fonoaudiologia } from "./fonoaudiologia";
import { moveisPlanejados } from "./moveis-planejados";
import type { NicheConfig, NicheId } from "./types";

export const niches: Record<string, NicheConfig> = {
  advogados,
  "moveis-planejados": moveisPlanejados,
  "clinica-estetica": clinicaEstetica,
  fonoaudiologia,
};

export const nicheIds = Object.keys(niches);

const DEFAULT_NICHE = "advogados";

export function resolveNicheId(value?: string | null): NicheId {
  const id = (value || DEFAULT_NICHE).trim().toLowerCase();
  if (id in niches) return id;
  console.warn(
    `[niches] NEXT_PUBLIC_CLIENT="${value}" inválido. Usando "${DEFAULT_NICHE}". Válidos: ${nicheIds.join(", ")}`,
  );
  return DEFAULT_NICHE;
}

export function getNiche(id?: string | null): NicheConfig {
  return niches[resolveNicheId(id)];
}

export type {
  NicheConfig,
  NicheId,
  Service,
  HighlightPoint,
  ProcessStep,
  Testimonial,
  FaqItem,
} from "./types";
export { DEMO_CONTACT } from "./shared";
