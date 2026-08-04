import { createDemoClient } from "./shared";
import type { ClientConfig } from "./types";

/** Prospects sem site — demo com contato e imagens padrão */
export const prospectClients: Record<string, ClientConfig> = {
  "manaus-vidros-e-aluminio": createDemoClient(
    "manaus-vidros-e-aluminio",
    "Manaus Vidros e Alumínio",
  ),
  "dois-irmaos-jp": createDemoClient(
    "dois-irmaos-jp",
    "Vidraçaria Dois Irmãos JP",
  ),
  "mangueira-pimenta-vidros": createDemoClient(
    "mangueira-pimenta-vidros",
    "Mangueira Pimenta Vidros",
  ),
  "box-metal": createDemoClient("box-metal", "Vidraçaria Box Metal"),
  brandao: createDemoClient("brandao", "Vidraçaria Brandão"),
  "amazon-box": createDemoClient("amazon-box", "Vidraçaria Amazon Box"),
  "vidro-sam": createDemoClient("vidro-sam", "Vidro Sam e Instalações"),
  "vidracaria-nova": createDemoClient("vidracaria-nova", "Vidraçaria Nova"),
  vidroluxo: createDemoClient("vidroluxo", "Vidraçaria Vidroluxo"),
  "bv-vidracaria": createDemoClient("bv-vidracaria", "BV Vidraçaria"),
  "jc-box": createDemoClient("jc-box", "JC Box e Vidraçaria"),
  viana: createDemoClient("viana", "Vidraçaria Viana"),
  efama: createDemoClient("efama", "Efama Metalúrgica e Vidraçaria"),
  "vidro-haus": createDemoClient("vidro-haus", "Vidro Haus Vidraçaria"),
  "avenida-vidracaria": createDemoClient(
    "avenida-vidracaria",
    "Avenida Vidraçaria",
  ),
  "mundial-vidros-betania": createDemoClient(
    "mundial-vidros-betania",
    "Mundial Vidros Betania",
  ),
  "manaus-vidros": createDemoClient("manaus-vidros", "Manaus Vidros"),
  "gm-vidros": createDemoClient("gm-vidros", "GM Vidros e Ferragens"),
};
