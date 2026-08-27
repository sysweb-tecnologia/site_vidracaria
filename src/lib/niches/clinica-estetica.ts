import { DEMO_CONTACT } from "./shared";
import type { NicheConfig } from "./types";

export const clinicaEstetica: NicheConfig = {
  id: "clinica-estetica",
  name: "Lumina Estética",
  tagline: "Facial · Corporal · Skincare · Laser",
  city: "Manaus — AM",
  founded: 2016,
  ...DEMO_CONTACT,
  emails: ["contato@lumina.exemplo.com"],
  address: { ...DEMO_CONTACT.address },
  whatsappMessage:
    "Olá! Vim pelo site da Lumina Estética e gostaria de agendar uma avaliação.",

  hero: {
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd903029b0b?auto=format&fit=crop&w=2400&q=85",
    imageAlt: "Ambiente sereno de clínica de estética contemporânea",
    support:
      "Protocolos modernos de beleza e bem-estar, com cuidado clínico e experiência acolhedora.",
    footerNote:
      "Avaliação personalizada em Manaus — resultados naturais e acompanhamento contínuo.",
    badges: "Facial · Corporal · Laser",
  },

  trustStrip: [
    "Avaliação personalizada",
    "Protocolos seguros",
    "Tecnologia atual",
    "Resultados naturais",
    "Equipe especializada",
    "Ambiente acolhedor",
  ],

  servicesIntro: {
    title: "Quatro frentes. Um padrão de cuidado.",
    description:
      "Da harmonização ao laser — protocolos personalizados, tecnologia atual e equipe especializada.",
  },

  services: [
    {
      slug: "harmonizacao-facial",
      title: "Harmonização Facial",
      navLabel: "Facial",
      short: "Equilíbrio, naturalidade e autoestima.",
      description:
        "Protocolos de harmonização facial com avaliação individualizada: preenchimentos, bioestimuladores e técnicas que respeitam a anatomia e o seu estilo — resultados sutis e elegantes.",
      image:
        "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1800&q=80",
      imageAlt: "Cuidado facial em ambiente clínico sofisticado",
      highlights: [
        "Avaliação facial completa",
        "Preenchimentos e bioestimuladores",
        "Resultados naturais e proporcionais",
        "Produtos de marcas reconhecidas",
        "Acompanhamento pós-procedimento",
      ],
      accent: "#9A6B5A",
    },
    {
      slug: "estetica-corporal",
      title: "Estética Corporal",
      navLabel: "Corporal",
      short: "Contorno, firmeza e bem-estar.",
      description:
        "Tratamentos corporais para contorno, flacidez e celulite — tecnologias e protocolos combinados com plano personalizado e acompanhamento de evolução.",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=80",
      imageAlt: "Espaço de bem-estar e estética corporal",
      highlights: [
        "Contorno e modelagem corporal",
        "Protocolos para flacidez e celulite",
        "Tecnologias de última geração",
        "Plano sob medida por sessão",
        "Orientações de manutenção em casa",
      ],
      accent: "#2F6F7E",
    },
    {
      slug: "skincare-clinico",
      title: "Skincare Clínico",
      navLabel: "Skincare",
      short: "Pele saudável com protocolo guiado.",
      description:
        "Limpeza, peelings, ativos e rotinas prescritas para acne, manchas, oleosidade e envelhecimento — com diagnóstico de pele e evolução acompanhada pela equipe.",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd903029b0b?auto=format&fit=crop&w=1800&q=80",
      imageAlt: "Tratamento de skincare em clínica estética",
      highlights: [
        "Diagnóstico e mapeamento de pele",
        "Peelings e limpezas profissionais",
        "Ativos prescritos sob medida",
        "Protocolos antiacne e antimanchas",
        "Rotina domiciliar orientada",
      ],
      accent: "#3D5A4C",
    },
    {
      slug: "laser-e-tecnologia",
      title: "Laser e Tecnologia",
      navLabel: "Laser",
      short: "Equipamentos modernos, resultados precisos.",
      description:
        "Depilação a laser, rejuvenescimento e tecnologias de precisão com segurança clínica — sessões planejadas conforme fototipo, área e objetivo estético.",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1800&q=80",
      imageAlt: "Ambiente clínico moderno com tecnologia estética",
      highlights: [
        "Depilação a laser",
        "Rejuvenescimento tecnológico",
        "Protocolos por fototipo e área",
        "Segurança e higiene rigorosas",
        "Equipe treinada e atualizada",
      ],
      accent: "#6B4A6B",
    },
  ],

  process: {
    eyebrow: "Como funciona",
    title: "Do acolhimento ao resultado — com cuidado.",
    description:
      "Um caminho simples e transparente para você se sentir segura em cada etapa.",
    steps: [
      {
        title: "Avaliação",
        text: "Conversamos sobre objetivos, histórico e expectativas reais.",
      },
      {
        title: "Protocolo",
        text: "Indicamos o plano ideal, com número de sessões e cuidados.",
      },
      {
        title: "Execução",
        text: "Procedimentos com técnica, higiene e acompanhamento próximo.",
      },
      {
        title: "Manutenção",
        text: "Orientações e retornos para preservar o resultado no tempo.",
      },
    ],
  },

  about: {
    eyebrow: "A clínica",
    title: "Fundada em 2016, com foco em cuidado, ética e resultado natural.",
    body: "A Lumina Estética une tecnologia e acolhimento. Cada protocolo começa com escuta e avaliação — porque beleza bem feita é aquela que respeita sua identidade e entrega confiança, não exagero.",
    stats: [
      { label: "anos de experiência" },
      { value: "4", label: "linhas de cuidado" },
      { value: "1", label: "padrão: excelência" },
    ],
  },

  highlight: {
    eyebrow: "Por que Lumina",
    title: "Estética com ciência, ética e acolhimento.",
    description:
      "Ambiente pensado para conforto, profissionais atualizados e protocolos seguros — do primeiro contato ao retorno de manutenção.",
    image:
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Detalhe de spa e clínica de estética contemporânea",
    caption: "Experiência premium em um ambiente calmo e moderno.",
    points: [
      {
        title: "Avaliação",
        text: "Consulta inicial para entender objetivos e indicar o melhor protocolo.",
      },
      {
        title: "Tecnologia",
        text: "Equipamentos e insumos de marcas reconhecidas no mercado.",
      },
      {
        title: "Segurança",
        text: "Normas clínicas, higiene e acompanhamento pós-procedimento.",
      },
      {
        title: "Naturalidade",
        text: "Resultados elegantes que valorizam — sem artificialidade.",
      },
    ],
  },

  testimonials: {
    eyebrow: "Depoimentos",
    title: "Histórias de quem se sente bem na pele.",
    items: [
      {
        quote:
          "Avaliação honesta e resultado natural. Saí me sentindo eu mesma — só mais confiante.",
        author: "Juliana R.",
        role: "Cliente facial",
      },
      {
        quote:
          "Ambiente impecável e equipe atenciosa. O protocolo corporal fez diferença real.",
        author: "Patrícia L.",
        role: "Cliente corporal",
      },
      {
        quote:
          "Depilação a laser com cuidado e transparência sobre sessões. Recomendo demais.",
        author: "Fernanda T.",
        role: "Cliente laser",
      },
    ],
  },

  faq: {
    eyebrow: "Dúvidas frequentes",
    title: "Tire as principais dúvidas antes de agendar.",
    items: [
      {
        question: "Preciso de avaliação antes do procedimento?",
        answer:
          "Sim. A avaliação é essencial para indicar o protocolo seguro e alinhado ao seu objetivo, histórico e tipo de pele.",
      },
      {
        question: "Os resultados são imediatos?",
        answer:
          "Depende do procedimento. Alguns têm efeito imediato sutil; outros evoluem ao longo das sessões. Explicamos prazos realistas na avaliação.",
      },
      {
        question: "Há contraindicações?",
        answer:
          "Sim, e por isso a anamnese é importante. Gestação, condições de pele e medicamentos podem influenciar a indicação — sempre com orientação profissional.",
      },
      {
        question: "Como agendar?",
        answer:
          "Pelo WhatsApp ou formulário de contato. Confirmamos horário, preparo e orientações prévias quando necessário.",
      },
    ],
  },

  aboutPage: {
    eyebrow: "Sobre nós",
    title: "Beleza com cuidado clínico e alma acolhedora.",
    support:
      "Criamos um espaço onde tecnologia e sensibilidade caminham juntas — para resultados naturais e confiança renovada.",
    image:
      "https://images.unsplash.com/photo-1560750588-73207b1ef5b6?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Espaço de clínica estética contemporânea e acolhedora",
    story: {
      title: "Nossa história",
      paragraphs: [
        "A Lumina nasceu em 2016 do desejo de oferecer estética sem exageros: protocolos seguros, conversa honesta e um ambiente onde cada pessoa se sinta acolhida.",
        "Investimos continuamente em capacitação e tecnologia, sem perder o olhar humano que diferencia uma clínica de verdade.",
        "Hoje, seguimos com o mesmo compromisso — realçar o que já é seu, com ética, naturalidade e acompanhamento próximo.",
      ],
    },
    mission: {
      title: "Missão",
      text: "Promover bem-estar e autoestima por meio de protocolos estéticos seguros, personalizados e com resultados naturais.",
    },
    vision: {
      title: "Visão",
      text: "Ser referência em Manaus pela excelência clínica, experiência acolhedora e transparência em cada indicação.",
    },
    values: {
      eyebrow: "Princípios",
      title: "O que define a Lumina.",
      items: [
        {
          title: "Ética",
          text: "Indicamos o que faz sentido — nunca o que apenas vende.",
        },
        {
          title: "Segurança",
          text: "Protocolos, higiene e insumos com padrão clínico.",
        },
        {
          title: "Naturalidade",
          text: "Resultados que valorizam, sem artificialidade.",
        },
        {
          title: "Acolhimento",
          text: "Escuta ativa e cuidado em cada detalhe da experiência.",
        },
      ],
    },
    cta: {
      title: "Vamos cuidar da sua melhor versão?",
      description:
        "Agende uma avaliação e descubra o protocolo ideal para você.",
    },
  },

  contact: {
    title: "Vamos cuidar da sua melhor versão.",
    description:
      "Fale pelo WhatsApp e receba atendimento direto da equipe Lumina Estética.",
    pageIntro:
      "Agende uma avaliação presencial. Contamos o protocolo ideal para o seu objetivo — com transparência sobre sessões, cuidados e resultados esperados.",
  },

  footer: {
    description:
      "Desde 2016, oferecendo estética facial, corporal, skincare e tecnologias a laser com cuidado clínico.",
  },

  metadata: {
    titleDefault: "Lumina Estética | Clínica de Estética",
    description:
      "Lumina Estética — harmonização facial, corporal, skincare e laser em Manaus.",
    keywords: [
      "clínica de estética",
      "harmonização facial",
      "estética corporal",
      "depilação a laser",
      "estética Manaus",
    ],
    ogTitle: "Lumina Estética | Beleza com cuidado clínico",
    ogDescription:
      "Protocolos modernos de estética facial, corporal e laser com resultados naturais.",
  },
};
