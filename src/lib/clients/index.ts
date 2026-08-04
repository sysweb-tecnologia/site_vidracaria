import { arteflex } from "./arteflex";
import { classicVidros } from "./classic-vidros";
import { cooperVidros } from "./cooper-vidros";
import { freitas } from "./freitas";
import { moldVidros } from "./mold-vidros";
import { prospectClients } from "./prospects";
import type { ClientConfig, ClientId } from "./types";

export const clients: Record<string, ClientConfig> = {
  arteflex,
  freitas,
  "cooper-vidros": cooperVidros,
  "classic-vidros": classicVidros,
  "mold-vidros": moldVidros,
  ...prospectClients,
};

export const clientIds = Object.keys(clients);

export function resolveClientId(value?: string | null): ClientId {
  const id = (value || "arteflex").trim().toLowerCase();
  if (id in clients) return id;
  console.warn(
    `[clients] NEXT_PUBLIC_CLIENT="${value}" inválido. Usando "arteflex". Válidos: ${clientIds.join(", ")}`,
  );
  return "arteflex";
}

export function getClient(id?: string | null): ClientConfig {
  return clients[resolveClientId(id)];
}

export type { ClientConfig, ClientId, Service, ServiceSlug } from "./types";
export { blindexPoints, buildServices, createDemoClient, DEMO_CONTACT } from "./shared";
