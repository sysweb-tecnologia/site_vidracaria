import { DEMO_CONTACT } from "./shared";
import type { NicheConfig } from "./types";

export const fonoaudiologia: NicheConfig = {
  id: "fonoaudiologia",
  name: "VivaVoz",
  tagline: "Linguagem · Fluência · Motricidade · Voz",
  city: "Manaus — AM",
  founded: 2014,
  ...DEMO_CONTACT,
  emails: ["contato@vivavoz.exemplo.com"],
  address: { ...DEMO_CONTACT.address },
  whatsappMessage:
    "Olá! Vim pelo site da VivaVoz e gostaria de agendar uma avaliação.",

  hero: {
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=2400&q=85",
    imageAlt: "Criança em um momento leve de expressão e comunicação",
    support:
      "Do primeiro som à reabilitação: comunicação mais leve, em todas as fases, com ciência e acolhimento.",
    footerNote:
      "Avaliação e terapia em consultório, domicílio e online — com a família no processo.",
    badges: "Linguagem · Fluência · Motricidade",
  },

  trustStrip: [
    "Baseado em evidências",
    "Família no processo",
    "Plano individualizado",
    "Consultório e online",
    "Todas as idades",
    "Atualização constante",
  ],

  servicesIntro: {
    title: "Quatro frentes. Um cuidado para cada voz.",
    description:
      "Da linguagem infantil à voz e à deglutição — avaliação criteriosa, terapia sob medida e objetivos claros para cada pessoa.",
  },

  services: [
    {
      slug: "linguagem-infantil",
      title: "Linguagem Infantil",
      navLabel: "Linguagem",
      short: "Fala, compreensão e vocabulário no tempo da criança.",
      description:
        "Acompanhamento de atraso de fala, dificuldades de compreensão, vocabulário e transtornos da linguagem — inclusive apraxia de fala. A terapia é lúdica, individualizada e baseada em evidências, com a família presente em cada etapa.",
      image:
        "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1800&q=80",
      imageAlt: "Brinquedos usados em uma sessão lúdica de linguagem",
      highlights: [
        "Atraso de fala e de linguagem",
        "Compreensão, vocabulário e gramática",
        "Transtornos da linguagem",
        "Apraxia de fala na infância",
        "Plano lúdico com a família",
      ],
      accent: "#C46B4A",
    },
    {
      slug: "gagueira-e-fluencia",
      title: "Gagueira e Fluência",
      navLabel: "Fluência",
      short: "Uma comunicação mais segura e tranquila.",
      description:
        "Cuidado para crianças e adultos que gaguejam desenvolverem uma fala mais segura e tranquila. A família entra no processo, com estratégias para o dia a dia e orientação em cada fase da terapia.",
      image:
        "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1800&q=80",
      imageAlt: "Adulto e criança em um momento de escuta e vínculo",
      highlights: [
        "Avaliação da fluência",
        "Estratégias para uma fala mais leve",
        "Orientação da família",
        "Crianças e adultos",
        "Acompanhamento contínuo",
      ],
      accent: "#2F6F7E",
    },
    {
      slug: "motricidade-e-disfagia",
      title: "Motricidade e Disfagia",
      navLabel: "Motricidade",
      short: "Fala, mastigação, respiração e deglutição.",
      description:
        "Tratamento das funções orais que sustentam a fala, a mastigação, a respiração e a deglutição. Atendemos bebês, crianças e adultos — da amamentação e da transição alimentar à disfagia clínica — com técnicas específicas para cada caso.",
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1800&q=80",
      imageAlt: "Bebê em um cuidado próximo de alimentação e vínculo",
      highlights: [
        "Motricidade orofacial",
        "Mastigação, respiração e deglutição",
        "Amamentação e transição alimentar",
        "Disfagia clínica",
        "Técnicas específicas por caso",
      ],
      accent: "#3D6B58",
    },
    {
      slug: "voz-e-reabilitacao",
      title: "Voz e Reabilitação",
      navLabel: "Voz e neuro",
      short: "Voz profissional, linguagem adulta e neurológico.",
      description:
        "Voz clínica e profissional para quem depende da voz no trabalho, e reabilitação neurofuncional em afasia, alterações neurológicas e linguagem do adulto e do idoso. Quando o caso pede, o plano segue com discussão interdisciplinar.",
      image:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1800&q=80",
      imageAlt: "Profissional em uso da voz em uma apresentação",
      highlights: [
        "Voz clínica e profissional",
        "Cantores, professores e palestrantes",
        "Afasia e linguagem adulta",
        "Alterações neurológicas no idoso",
        "Rede de encaminhamentos",
      ],
      accent: "#6B4A6B",
    },
  ],

  process: {
    eyebrow: "Como funciona",
    title: "Da primeira conversa à intervenção.",
    description:
      "Um caminho claro para entender cada etapa antes de começar a terapia.",
    steps: [
      {
        title: "Contato",
        text: "Chame no WhatsApp. A escuta começa aí: entendemos a queixa e agendamos a avaliação.",
      },
      {
        title: "Avaliação inicial",
        text: "Entrevista com o responsável ou com o paciente e, em seguida, observação clínica com protocolos específicos para o caso.",
      },
      {
        title: "Devolutiva",
        text: "Apresentamos os achados, os objetivos e o plano terapêutico, com espaço para todas as dúvidas.",
      },
      {
        title: "Intervenção",
        text: "Sessões pensadas etapa a etapa, em consultório, domicílio ou online.",
      },
    ],
  },

  about: {
    eyebrow: "A clínica",
    title: "Fundada em 2014, com escuta, evidência e o tempo de cada pessoa.",
    body: "A VivaVoz acompanha a comunicação do primeiro som à reabilitação. Cada criança, adulto ou idoso tem o próprio ritmo: o plano é individualizado, acolhedor e baseado em evidências, com a família dentro do processo. O atendimento acontece em consultório, em domicílio e online.",
    stats: [
      { label: "anos de experiência" },
      { value: "4", label: "linhas de cuidado" },
      { value: "1", label: "padrão: escuta" },
    ],
  },

  highlight: {
    eyebrow: "Por que VivaVoz",
    title: "Fonoaudiologia com ciência, vínculo e clareza.",
    description:
      "Diálogo aberto em cada sessão, protocolos estruturados e um plano que a família consegue acompanhar — do bebê ao idoso.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Profissional de saúde em um atendimento acolhedor",
    caption: "Cuidado humano, com método e acompanhamento próximo.",
    points: [
      {
        title: "Diálogo aberto",
        text: "Clareza sobre achados, objetivos e o que esperar de cada etapa.",
      },
      {
        title: "Família presente",
        text: "Responsáveis e pessoas próximas entram no processo desde o primeiro dia.",
      },
      {
        title: "Protocolos",
        text: "Avaliação com instrumentos estruturados e baseados em evidências.",
      },
      {
        title: "Atualização",
        text: "Formação contínua em linguagem, fluência, motricidade, voz, PROMPT, DTTC e Shape Coding.",
      },
    ],
  },

  testimonials: {
    eyebrow: "Depoimentos",
    title: "Quem já atravessou esse caminho.",
    items: [
      {
        quote:
          "A avaliação foi clara e a terapia, leve. Meu filho passou a tentar falar com mais vontade — e a gente entendeu como ajudar em casa.",
        author: "Marina A.",
        role: "Mãe, linguagem infantil",
      },
      {
        quote:
          "Chegamos ansiosos com a gagueira. O acolhimento da família fez diferença: hoje a fala dele está mais tranquila e a nossa também.",
        author: "Paulo e Lúcia S.",
        role: "Pais, fluência",
      },
      {
        quote:
          "Uso a voz o dia inteiro em aula. O plano foi objetivo, sem promessa milagrosa, e a rouquidão deixou de comandar a minha semana.",
        author: "Renata M.",
        role: "Professora, voz",
      },
    ],
  },

  faq: {
    eyebrow: "Dúvidas frequentes",
    title: "Tire as principais dúvidas antes de agendar.",
    items: [
      {
        question: "Como funciona o atendimento online?",
        answer:
          "Há sessão síncrona, em videochamada e tempo real, e assíncrona, com materiais e retornos pelo WhatsApp. Quando faz sentido, as duas se combinam. O online vale para todo o Brasil; o presencial e o domiciliar, sob avaliação do caso.",
      },
      {
        question: "Quanto tempo dura a avaliação?",
        answer:
          "Em geral, dois encontros de cerca de 40 minutos. No primeiro, a anamnese e o histórico. No segundo, a observação clínica e os protocolos do caso. A devolutiva apresenta os achados e o plano.",
      },
      {
        question: "Atende por plano de saúde?",
        answer:
          "Emitimos recibo e nota fiscal para reembolso, conforme a política do seu plano. Confirme a cobertura com a operadora antes de agendar.",
      },
      {
        question: "Como agendar?",
        answer:
          "Pelo WhatsApp. Retornamos para ouvir a queixa, indicar consultório, domicílio ou online e confirmar o horário.",
      },
    ],
  },

  aboutPage: {
    eyebrow: "Sobre nós",
    title: "Comunicação mais leve, em todas as fases da vida.",
    support:
      "Um atendimento acolhedor, individualizado e baseado em evidências — com a família no centro do processo terapêutico.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Profissional de saúde em um retrato acolhedor",
    story: {
      title: "Nossa história",
      paragraphs: [
        "A VivaVoz nasceu em 2014 da convicção de que cada pessoa tem o próprio tempo para se comunicar. O cuidado começa na escuta: da queixa da família ao objetivo de quem usa a voz para trabalhar.",
        "A prática clínica anda junto com a atualização. A equipe se forma em linguagem infantil, fluência, motricidade orofacial e voz, com abordagens como PROMPT, DTTC, Matriz da Comunicação e Shape Coding.",
        "Hoje o atendimento acontece em consultório, em domicílio e online. O plano é personalizado para bebês, crianças, adolescentes, adultos e idosos — da amamentação à reabilitação neurológica.",
      ],
    },
    mission: {
      title: "Missão",
      text: "Promover comunicação, alimentação e qualidade de vida com terapia individualizada, lúdica quando precisa ser e sempre baseada em evidências.",
    },
    vision: {
      title: "Visão",
      text: "Ser referência em Manaus pelo acolhimento, pela clareza com as famílias e pelo rigor clínico em cada plano terapêutico.",
    },
    values: {
      eyebrow: "Princípios",
      title: "O que define a VivaVoz.",
      items: [
        {
          title: "Evidência",
          text: "Protocolos e condutas atualizados, com expectativa realista.",
        },
        {
          title: "Acolhimento",
          text: "Cada pessoa no seu tempo, com vínculo e respeito.",
        },
        {
          title: "Família",
          text: "Responsáveis e rede de cuidado dentro do processo.",
        },
        {
          title: "Clareza",
          text: "Achados, objetivos e próximos passos em linguagem simples.",
        },
      ],
    },
    cta: {
      title: "Vamos conversar sobre essa comunicação?",
      description:
        "Chame no WhatsApp e agende a avaliação inicial.",
    },
  },

  contact: {
    title: "Vamos começar pela escuta.",
    description:
      "Fale pelo WhatsApp e receba atendimento direto da equipe VivaVoz.",
    pageIntro:
      "Agende a avaliação inicial. Explicamos o caminho — entrevista, protocolos, devolutiva e intervenção — em consultório, domicílio ou online.",
  },

  footer: {
    description:
      "Desde 2014, fonoaudiologia em linguagem, fluência, motricidade, voz e reabilitação, para todas as idades.",
  },

  metadata: {
    titleDefault: "VivaVoz | Fonoaudiologia",
    description:
      "VivaVoz — fonoaudiologia em linguagem infantil, gagueira, motricidade orofacial, disfagia e voz em Manaus.",
    keywords: [
      "fonoaudiologia",
      "fonoaudióloga infantil",
      "gagueira",
      "apraxia de fala",
      "motricidade orofacial",
      "disfagia",
      "voz profissional",
      "fonoaudiologia Manaus",
    ],
    ogTitle: "VivaVoz | Comunicação em todas as fases",
    ogDescription:
      "Avaliação e terapia fonoaudiológica para bebês, crianças, adultos e idosos — consultório, domicílio e online.",
  },
};
