import { DEMO_CONTACT } from "./shared";
import type { NicheConfig } from "./types";

export const advogados: NicheConfig = {
  id: "advogados",
  name: "Vértice Advogados",
  tagline: "Empresarial · Civil · Trabalhista · Consultoria",
  city: "Manaus — AM",
  founded: 2012,
  ...DEMO_CONTACT,
  emails: ["contato@vertice.exemplo.com"],
  address: { ...DEMO_CONTACT.address },
  whatsappMessage:
    "Olá! Vim pelo site da Vértice Advogados e gostaria de agendar uma consulta.",

  hero: {
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=2400&q=85",
    imageAlt: "Escritório jurídico contemporâneo com atmosfera sóbria",
    support:
      "Assessoria jurídica estratégica com clareza, presença e foco no resultado do seu caso.",
    footerNote:
      "Atendimento presencial e online em Manaus — pessoas físicas e empresas.",
    badges: "Empresarial · Civil · Trabalhista",
  },

  trustStrip: [
    "Atendimento humanizado",
    "Linguagem clara",
    "Estratégia sob medida",
    "Sigilo absoluto",
    "Presença digital e presencial",
    "Atualização constante",
  ],

  servicesIntro: {
    title: "Quatro frentes. Um padrão de excelência.",
    description:
      "Do contencioso à consultoria preventiva — atuação técnica com linguagem clara e acompanhamento próximo.",
  },

  services: [
    {
      slug: "direito-empresarial",
      title: "Direito Empresarial",
      navLabel: "Empresarial",
      short: "Contratos, societário e proteção do negócio.",
      description:
        "Estruturação societária, contratos comerciais, compliance e mediação de conflitos empresariais — com visão prática para decisões que protegem o patrimônio e aceleram o crescimento.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=80",
      imageAlt: "Reunião estratégica em ambiente corporativo",
      highlights: [
        "Contratos e negociações comerciais",
        "Constituição e reorganização societária",
        "Compliance e governança",
        "Recuperação e prevenção de litígios",
        "Atendimento a startups e empresas consolidadas",
      ],
      accent: "#1F4E5F",
    },
    {
      slug: "direito-civil",
      title: "Direito Civil e Família",
      navLabel: "Civil",
      short: "Família, sucessões e responsabilidade civil.",
      description:
        "Orientação e representação em questões de família, inventários, indenizações e obrigações — com sigilo, empatia e estratégia jurídica sólida.",
      image:
        "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1800&q=80",
      imageAlt: "Biblioteca jurídica com volumes clássicos",
      highlights: [
        "Divórcios e acordos familiares",
        "Inventários e planejamento sucessório",
        "Indenizações e responsabilidade civil",
        "Mediação e acordos extrajudiciais",
        "Acompanhamento processual transparente",
      ],
      accent: "#3D4F5F",
    },
    {
      slug: "direito-trabalhista",
      title: "Direito Trabalhista",
      navLabel: "Trabalhista",
      short: "Defesa de empresas e trabalhadores.",
      description:
        "Consultoria e contencioso trabalhista para empresas e profissionais — prevenção de passivos, auditorias e defesa em reclamações com foco em solução eficiente.",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1800&q=80",
      imageAlt: "Profissionais em reunião de trabalho",
      highlights: [
        "Defesa em reclamações trabalhistas",
        "Auditoria e prevenção de passivos",
        "Políticas internas e compliance laboral",
        "Acordos e negociações coletivas",
        "Orientação para RH e gestão",
      ],
      accent: "#8A5A3B",
    },
    {
      slug: "consultoria-juridica",
      title: "Consultoria Jurídica",
      navLabel: "Consultoria",
      short: "Prevenção, pareceres e estratégia contínua.",
      description:
        "Consultoria sob demanda ou retainer: pareceres, revisão de riscos e suporte jurídico contínuo para decisões do dia a dia — antes que o problema vire processo.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=80",
      imageAlt: "Documentos e análise jurídica em mesa moderna",
      highlights: [
        "Pareceres e opiniões legais",
        "Revisão de contratos e políticas",
        "Planejamento jurídico preventivo",
        "Plantão para dúvidas estratégicas",
        "Linguagem clara, sem juridiquês",
      ],
      accent: "#2F5D50",
    },
  ],

  process: {
    eyebrow: "Como funciona",
    title: "Do primeiro contato à solução — com método.",
    description:
      "Um fluxo transparente para você saber exatamente o que acontece em cada etapa.",
    steps: [
      {
        title: "Escuta",
        text: "Conversamos sobre o contexto, documentos e o resultado que você busca.",
      },
      {
        title: "Diagnóstico",
        text: "Avaliamos riscos, prazos e caminhos viáveis — com clareza total.",
      },
      {
        title: "Estratégia",
        text: "Definimos o plano jurídico alinhado ao seu objetivo e orçamento de tempo.",
      },
      {
        title: "Acompanhamento",
        text: "Executamos com atualizações frequentes até o desfecho do caso.",
      },
    ],
  },

  about: {
    eyebrow: "O escritório",
    title: "Fundado em 2012, com foco em estratégia e atendimento humano.",
    body: "A Vértice Advogados une técnica jurídica rigorosa a uma comunicação direta. Atuamos para pessoas e empresas que precisam de clareza, prazo e resultado — sem rodeios, com acompanhamento próximo em cada etapa.",
    stats: [
      { label: "anos de experiência" },
      { value: "4", label: "áreas de atuação" },
      { value: "1", label: "padrão: excelência" },
    ],
  },

  highlight: {
    eyebrow: "Por que a Vértice",
    title: "Advocacia com método, presença e resultado.",
    description:
      "Cada caso recebe diagnóstico claro, plano de ação e comunicação constante. Ética, sigilo e estratégia alinhada ao que realmente importa para você.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Sala de reunião moderna em escritório de advocacia",
    caption: "Atendimento personalizado — da primeira consulta à decisão final.",
    points: [
      {
        title: "Clareza",
        text: "Explicamos riscos, prazos e caminhos em linguagem acessível.",
      },
      {
        title: "Estratégia",
        text: "Plano jurídico alinhado ao objetivo real do cliente.",
      },
      {
        title: "Sigilo",
        text: "Confidencialidade absoluta em todas as etapas.",
      },
      {
        title: "Presença",
        text: "Atualizações frequentes e canal direto com o responsável.",
      },
    ],
  },

  testimonials: {
    eyebrow: "Depoimentos",
    title: "Quem confia, recomenda.",
    items: [
      {
        quote:
          "Finalmente entendi meu processo. A equipe explica tudo sem enrolação e responde rápido.",
        author: "Marina S.",
        role: "Empresária",
      },
      {
        quote:
          "Consultoria preventiva que evitou um litígio caro. Profissionalismo do início ao fim.",
        author: "Rafael C.",
        role: "Diretor comercial",
      },
      {
        quote:
          "No momento mais difícil da família, tivemos acolhimento e estratégia. Recomendo de olhos fechados.",
        author: "Helena M.",
        role: "Cliente particular",
      },
    ],
  },

  faq: {
    eyebrow: "Dúvidas frequentes",
    title: "Respostas objetivas antes da consulta.",
    items: [
      {
        question: "A primeira conversa tem custo?",
        answer:
          "Oferecemos uma conversa inicial para entender o caso e indicar o melhor caminho. Os honorários e o formato de contratação são apresentados com transparência antes de qualquer compromisso.",
      },
      {
        question: "Atendem online e presencial?",
        answer:
          "Sim. Realizamos atendimento presencial em Manaus e reuniões online por videoconferência, com a mesma qualidade de acompanhamento.",
      },
      {
        question: "Quanto tempo leva para ter um retorno?",
        answer:
          "Após o envio das informações essenciais, retornamos com um diagnóstico preliminar e os próximos passos em prazo combinado na primeira conversa.",
      },
      {
        question: "Vocês atuam em quais áreas?",
        answer:
          "Direito empresarial, civil e família, trabalhista e consultoria jurídica contínua. Se o tema exigir outra especialidade, orientamos o encaminhamento adequado.",
      },
    ],
  },

  aboutPage: {
    eyebrow: "Sobre nós",
    title: "Um escritório feito para quem valoriza clareza.",
    support:
      "Mais do que processos: construímos relações de confiança com estratégia jurídica acessível e humana.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Ambiente de escritório moderno e iluminado",
    story: {
      title: "Nossa história",
      paragraphs: [
        "A Vértice nasceu em 2012 com uma convicção simples: advocacia de qualidade não precisa ser opaca. Desde o início, unimos rigor técnico a uma forma de comunicar que respeita o tempo e a inteligência do cliente.",
        "Ao longo dos anos, ampliamos a atuação para empresas e pessoas físicas, sempre com o mesmo método — escuta, diagnóstico, estratégia e acompanhamento próximo.",
        "Hoje, seguimos atualizando práticas e ferramentas, sem abrir mão da ética e do sigilo que sustentam cada relação de confiança.",
      ],
    },
    mission: {
      title: "Missão",
      text: "Entregar soluções jurídicas estratégicas com clareza, ética e presença — para que cada cliente tome decisões com segurança.",
    },
    vision: {
      title: "Visão",
      text: "Ser referência em Manaus por uma advocacia moderna, humana e orientada a resultado sustentável.",
    },
    values: {
      eyebrow: "Princípios",
      title: "O que guia cada caso.",
      items: [
        {
          title: "Ética",
          text: "Conduta íntegra em todas as etapas, sem atalhos que comprometam o cliente.",
        },
        {
          title: "Transparência",
          text: "Informação clara sobre riscos, prazos e custos — sempre.",
        },
        {
          title: "Excelência",
          text: "Estudo contínuo e atenção aos detalhes que mudam o jogo.",
        },
        {
          title: "Empatia",
          text: "Cada história é única; o atendimento também precisa ser.",
        },
      ],
    },
    cta: {
      title: "Pronto para conversar sobre o seu caso?",
      description:
        "Agende uma consulta e receba um diagnóstico objetivo do próximo passo.",
    },
  },

  contact: {
    title: "Vamos avaliar o seu caso com seriedade.",
    description:
      "Fale pelo WhatsApp e receba atendimento direto da equipe Vértice Advogados.",
    pageIntro:
      "Agende uma consulta presencial ou online. Conte o contexto — respondemos com foco no próximo passo jurídico.",
  },

  footer: {
    description:
      "Desde 2012, oferecendo advocacia estratégica em direito empresarial, civil, trabalhista e consultoria jurídica.",
  },

  metadata: {
    titleDefault: "Vértice Advogados | Escritório de Advocacia",
    description:
      "Vértice Advogados — assessoria em direito empresarial, civil, trabalhista e consultoria jurídica em Manaus.",
    keywords: [
      "advogados",
      "escritório de advocacia",
      "direito empresarial",
      "direito trabalhista",
      "advogado Manaus",
    ],
    ogTitle: "Vértice Advogados | Advocacia estratégica",
    ogDescription:
      "Assessoria jurídica com clareza e foco em resultado — empresarial, civil e trabalhista.",
  },
};
