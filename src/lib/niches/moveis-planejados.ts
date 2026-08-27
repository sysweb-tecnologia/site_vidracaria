import { DEMO_CONTACT } from "./shared";
import type { NicheConfig } from "./types";

export const moveisPlanejados: NicheConfig = {
  id: "moveis-planejados",
  name: "Habitare Planejados",
  tagline: "Cozinhas · Closets · Home Office · Comercial",
  city: "Manaus — AM",
  founded: 2010,
  ...DEMO_CONTACT,
  emails: ["contato@habitare.exemplo.com"],
  address: { ...DEMO_CONTACT.address },
  whatsappMessage:
    "Olá! Vim pelo site da Habitare Planejados e gostaria de solicitar um orçamento.",

  hero: {
    image:
      "https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=2400&q=85",
    imageAlt: "Cozinha planejada contemporânea com acabamento sofisticado",
    support:
      "Móveis sob medida que organizam o espaço, elevam o dia a dia e valorizam o imóvel.",
    footerNote:
      "Projeto, fabricação e instalação com atendimento direto em Manaus.",
    badges: "Cozinhas · Closets · Home Office",
  },

  trustStrip: [
    "Projeto 3D incluso",
    "Medição técnica",
    "Materiais selecionados",
    "Ferragens premium",
    "Instalação própria",
    "Pós-venda ativo",
  ],

  servicesIntro: {
    title: "Quatro frentes. Um padrão de execução.",
    description:
      "Do briefing ao pós-instalação — projeto ergonômico, materiais selecionados e acabamento impecável.",
  },

  services: [
    {
      slug: "cozinhas-planejadas",
      title: "Cozinhas Planejadas",
      navLabel: "Cozinhas",
      short: "Fluxo, estética e armazenamento sob medida.",
      description:
        "Cozinhas projetadas para o seu modo de cozinhar: layout inteligente, ferragens de alto desempenho e acabamentos que unem beleza e durabilidade — do gourmet ao compacto.",
      image:
        "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1800&q=80",
      imageAlt: "Cozinha moderna com ilha e iluminação embutida",
      highlights: [
        "Projeto 3D com validação de medidas",
        "Ferragens soft-close e sistemas inteligentes",
        "Bancadas e revestimentos sob consulta",
        "Iluminação e nichos integrados",
        "Instalação profissional e limpa",
      ],
      accent: "#8A5A3B",
    },
    {
      slug: "closets-e-dormitorios",
      title: "Closets e Dormitórios",
      navLabel: "Closets",
      short: "Organização elegante para o descanso.",
      description:
        "Closets e dormitórios planejados com módulos personalizados, iluminação e soluções de armazenamento que transformam rotina em conforto visual e funcional.",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=80",
      imageAlt: "Closet planejado com acabamento clean e iluminação",
      highlights: [
        "Módulos sob medida para cada peça",
        "Portas pivotantes, de correr ou abertas",
        "Gavetas internas e organizadores",
        "Iluminação LED integrada",
        "Harmonia com o restante do ambiente",
      ],
      accent: "#3D5A4C",
    },
    {
      slug: "home-office",
      title: "Home Office",
      navLabel: "Home Office",
      short: "Produtividade com design e ergonomia.",
      description:
        "Espaços de trabalho residenciais com bancadas ergonômicas, passagem de cabos, armazenamento e estética alinhada à sua casa — para produtividade sem abrir mão do conforto.",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=80",
      imageAlt: "Escritório residencial com móveis planejados",
      highlights: [
        "Bancadas ergonômicas sob medida",
        "Gestão de cabos e pontos elétricos",
        "Armários e estantes integrados",
        "Acústica e iluminação pensadas",
        "Acabamento alinhado ao décor",
      ],
      accent: "#2F6F7E",
    },
    {
      slug: "ambientes-comerciais",
      title: "Ambientes Comerciais",
      navLabel: "Comercial",
      short: "Marca, fluxo e experiência no ponto de venda.",
      description:
        "Móveis planejados para lojas, clínicas e escritórios: balcões, vitrines, recepções e áreas de atendimento que comunicam a marca e otimizam o fluxo de clientes.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80",
      imageAlt: "Ambiente comercial contemporâneo com marcenaria sob medida",
      highlights: [
        "Recepção e balcões sob medida",
        "Exposição e armazenamento comercial",
        "Materiais de alta durabilidade",
        "Prazos alinhados à abertura do negócio",
        "Identidade visual aplicada ao mobiliário",
      ],
      accent: "#4A6B3A",
    },
  ],

  process: {
    eyebrow: "Como funciona",
    title: "Do briefing à instalação — sem surpresas.",
    description:
      "Um processo claro para você acompanhar cada decisão de projeto e material.",
    steps: [
      {
        title: "Briefing",
        text: "Entendemos estilo, rotina, orçamento e prioridades do ambiente.",
      },
      {
        title: "Medição",
        text: "Visita técnica com medidas precisas e análise de interferências.",
      },
      {
        title: "Projeto 3D",
        text: "Visualização realista para validar layout, cores e ferragens.",
      },
      {
        title: "Fabricação e instalação",
        text: "Produção controlada e montagem limpa, com entrega assistida.",
      },
    ],
  },

  about: {
    eyebrow: "A marca",
    title: "Fundada em 2010, com foco em projeto, precisão e pós-venda.",
    body: "A Habitare Planejados transforma medidas e desejos em ambientes que funcionam de verdade. Do desenho técnico à instalação, cuidamos de cada detalhe — materiais, ferragens e acabamento — para que o resultado dure e encante.",
    stats: [
      { label: "anos de experiência" },
      { value: "4", label: "linhas de solução" },
      { value: "1", label: "padrão: qualidade" },
    ],
  },

  highlight: {
    eyebrow: "Por que Habitare",
    title: "Planejado com método, instalado com precisão.",
    description:
      "Processo transparente do briefing ao pós-instalação: projeto 3D, escolha de materiais, fabricação controlada e equipe própria de montagem.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Detalhe de acabamento em mobiliário planejado",
    caption: "Materiais selecionados e ferragens de alto desempenho.",
    points: [
      {
        title: "Projeto",
        text: "Desenho técnico e 3D para validar cada decisão antes de fabricar.",
      },
      {
        title: "Materiais",
        text: "MDP, MDF e laminados de fornecedores reconhecidos.",
      },
      {
        title: "Precisão",
        text: "Medição criteriosa e instalação com acabamento limpo.",
      },
      {
        title: "Garantia",
        text: "Suporte pós-entrega e orientação de uso e manutenção.",
      },
    ],
  },

  testimonials: {
    eyebrow: "Depoimentos",
    title: "Ambientes que mudaram o dia a dia.",
    items: [
      {
        quote:
          "A cozinha ficou exatamente como no 3D. Organização e acabamento impecáveis.",
        author: "Carla N.",
        role: "Apartamento em Manaus",
      },
      {
        quote:
          "Prazo cumprido e instalação limpa. O closet aproveitou cada centímetro.",
        author: "Diego P.",
        role: "Cliente residencial",
      },
      {
        quote:
          "Fizeram a recepção da clínica com a nossa identidade. Clientes elogiam todo dia.",
        author: "Ana Beatriz",
        role: "Gestora de clínica",
      },
    ],
  },

  faq: {
    eyebrow: "Dúvidas frequentes",
    title: "Tudo que costumam perguntar antes do projeto.",
    items: [
      {
        question: "O projeto 3D tem custo?",
        answer:
          "O desenvolvimento do projeto 3D faz parte do fluxo comercial. Apresentamos as condições na visita técnica, com transparência sobre o que está incluso.",
      },
      {
        question: "Qual o prazo médio de entrega?",
        answer:
          "Depende do volume e da complexidade. Após aprovação do projeto, alinhamos um cronograma com etapas de fabricação e instalação.",
      },
      {
        question: "Vocês fazem a instalação?",
        answer:
          "Sim. Contamos com equipe própria de montagem para garantir alinhamento, acabamento e responsabilidade sobre o resultado final.",
      },
      {
        question: "Quais materiais utilizam?",
        answer:
          "Trabalhamos com MDP, MDF e laminados de fornecedores reconhecidos, além de ferragens de alto desempenho. A escolha é feita junto com você no projeto.",
      },
    ],
  },

  aboutPage: {
    eyebrow: "Sobre nós",
    title: "Design sob medida com alma de execução.",
    support:
      "Projetamos ambientes que respeitam a sua rotina — belos no olhar e impecáveis no uso diário.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Interior residencial com móveis planejados contemporâneos",
    story: {
      title: "Nossa história",
      paragraphs: [
        "A Habitare nasceu em 2010 para unir marcenaria de precisão e design contemporâneo. Percebemos que o cliente queria mais do que um orçamento: queria enxergar o resultado antes de decidir.",
        "Por isso, o projeto 3D e a medição técnica viraram pilares do nosso método. Cada ambiente nasce do diálogo entre estética, ergonomia e orçamento realista.",
        "Hoje seguimos evoluindo materiais e processos, mantendo o mesmo compromisso: entregar o que foi prometido, no prazo e com acabamento que resiste ao tempo.",
      ],
    },
    mission: {
      title: "Missão",
      text: "Transformar espaços em experiências funcionais e elegantes, com projeto transparente e instalação responsável.",
    },
    vision: {
      title: "Visão",
      text: "Ser a referência em móveis planejados em Manaus pela qualidade de projeto, pontualidade e pós-venda.",
    },
    values: {
      eyebrow: "Princípios",
      title: "O que não negociamos.",
      items: [
        {
          title: "Precisão",
          text: "Medidas certas e detalhes alinhados — do desenho à última dobradiça.",
        },
        {
          title: "Transparência",
          text: "Materiais, prazos e custos claros antes de qualquer fabricação.",
        },
        {
          title: "Durabilidade",
          text: "Escolhas que sustentam o uso diário, não só a foto do dia da entrega.",
        },
        {
          title: "Cuidado",
          text: "Instalação limpa e suporte após a entrega do ambiente.",
        },
      ],
    },
    cta: {
      title: "Vamos projetar o seu próximo ambiente?",
      description:
        "Agende uma visita técnica e receba um projeto alinhado ao seu espaço.",
    },
  },

  contact: {
    title: "Vamos medir, projetar e entregar o seu ambiente.",
    description:
      "Fale pelo WhatsApp e receba atendimento direto da equipe Habitare Planejados.",
    pageIntro:
      "Agende uma visita técnica ou envie as medidas. Montamos um projeto alinhado ao seu espaço, orçamento e estilo.",
  },

  footer: {
    description:
      "Desde 2010, projetando e instalando móveis planejados para residências e comércios.",
  },

  metadata: {
    titleDefault: "Habitare Planejados | Móveis sob Medida",
    description:
      "Habitare Planejados — cozinhas, closets, home office e ambientes comerciais sob medida em Manaus.",
    keywords: [
      "móveis planejados",
      "cozinha planejada",
      "closet",
      "home office",
      "móveis sob medida Manaus",
    ],
    ogTitle: "Habitare Planejados | Ambientes sob medida",
    ogDescription:
      "Cozinhas, closets e ambientes comerciais com projeto, fabricação e instalação.",
  },
};
