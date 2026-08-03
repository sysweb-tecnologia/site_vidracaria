import type { ClientConfig, ClientId, Service } from "./types";

/** Contato placeholder para demos sem dados reais do cliente */
export const DEMO_CONTACT = {
  phoneDisplay: "(99) 9 9999-9999",
  phoneE164: "5599999999999",
  emails: ["contato@exemplo.com"],
  address: {
    street: "Endereço a definir",
    complement: "Sob consulta",
    neighborhood: "Centro",
    city: "Manaus",
    state: "AM",
    zip: "69000-000",
  },
} as const;

export const blindexPoints = [
  {
    title: "Resistência",
    text: "Vidro temperado de 6, 8 e 10 mm para uso residencial e comercial.",
  },
  {
    title: "Segurança",
    text: "Em caso de quebra, fragmentos sem ponta e menos cortantes (NBR 14698).",
  },
  {
    title: "Tecnologia",
    text: "Produção exclusiva e marca Blindex® gravada em todos os vidros.",
  },
  {
    title: "Acessórios",
    text: "Linha completa de ferragens e acabamentos originais Blindex®.",
  },
] as const;

export function buildServices(brandName: string): Service[] {
  return [
    {
      slug: "vidros-e-espelhos",
      title: "Vidros e Espelhos",
      short: "Blindex®, boxes, portas, janelas e espelhos sob medida.",
      description: `Fabricação e instalação de vidro temperado Blindex®, boxes, portas, janelas, coberturas e espelhos com acabamento preciso para residências, comércios e indústrias.`,
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80",
      imageAlt: "Ambiente moderno com portas e painéis de vidro",
      highlights: [
        "Vidro temperado Blindex® 6, 8 e 10 mm",
        "Boxes, portas e janelas sob medida",
        "Espelhos bisotê e painéis decorativos",
        "Coberturas e fechamentos em vidro",
        "Linha completa de acessórios Blindex®",
      ],
      accent: "#2F6F7E",
    },
    {
      slug: "divisorias-e-paredes",
      title: "Divisórias e Paredes",
      short: "Drywall, forros e ambientes corporativos sob medida.",
      description:
        "Soluções em divisórias, paredes e forros drywall que organizam o espaço com leveza, acústica e acabamento limpo — ideais para escritórios, clínicas e reformas residenciais.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80",
      imageAlt: "Escritório com divisórias e acabamento clean",
      highlights: [
        "Paredes e forros em drywall",
        "Divisórias para escritórios e clínicas",
        "Acabamento alinhado ao projeto",
        "Execução ágil e limpa",
        "Atendimento comercial e residencial",
      ],
      accent: "#3D5A4C",
    },
    {
      slug: "persianas-e-cortinas",
      title: "Persianas e Cortinas",
      short: "Fabricação própria em PVC, tecido e alumínio.",
      description: `Persianas verticais e horizontais ${brandName} com fabricação própria: PVC, tecido e alumínio, sistemas de recolhimento suave e modelos rolô, romana e hospitalares.`,
      image:
        "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1800&q=80",
      imageAlt: "Interior com persianas e luz natural",
      highlights: [
        "Fabricação própria",
        "PVC, tecido e alumínio",
        "Trilho e bandô em alumínio anodizado",
        "Verticais, horizontais, rolô e romana",
        "Cortinas hospitalares com garantia de 1 ano",
      ],
      accent: "#8A5A3B",
    },
    {
      slug: "toldos-e-coberturas",
      title: "Toldos e Coberturas",
      short: "Proteção, sombra e valorização da fachada.",
      description:
        "Toldos e coberturas sob medida para varandas, fachadas comerciais e áreas externas — proteção contra sol e chuva com estética contemporânea.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80",
      imageAlt: "Fachada moderna com cobertura e área externa",
      highlights: [
        "Toldos para fachadas e varandas",
        "Coberturas sob medida",
        "Proteção solar e contra chuva",
        "Acabamento alinhado à arquitetura",
        "Orçamento técnico personalizado",
      ],
      accent: "#4A6B3A",
    },
  ];
}

/** Cliente demo: mesmo layout/conteúdo, só o nome muda */
export function createDemoClient(id: ClientId, name: string): ClientConfig {
  return {
    id,
    name,
    tagline: "Vidros · Divisórias · Persianas · Toldos",
    city: "Manaus — AM",
    founded: 2002,
    ...DEMO_CONTACT,
    emails: [...DEMO_CONTACT.emails],
    address: { ...DEMO_CONTACT.address },
    whatsappMessage: `Olá! Vim pelo site da ${name} e gostaria de solicitar um orçamento.`,
  };
}
