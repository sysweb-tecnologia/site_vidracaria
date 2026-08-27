/** Id usado em NEXT_PUBLIC_CLIENT — ver registro em index.ts */
export type NicheId = string;

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  accent: string;
  /** Rótulo curto na navegação */
  navLabel: string;
};

export type HighlightPoint = {
  title: string;
  text: string;
};

export type ProcessStep = {
  title: string;
  text: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type NicheConfig = {
  id: NicheId;
  name: string;
  tagline: string;
  city: string;
  founded: number;
  phoneDisplay: string;
  phoneE164: string;
  emails: string[];
  address: {
    street: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
    zip: string;
  };
  whatsappMessage: string;

  hero: {
    image: string;
    imageAlt: string;
    support: string;
    footerNote: string;
    badges: string;
  };

  /** Faixa de confiança / diferenciais curtos */
  trustStrip: string[];

  servicesIntro: {
    title: string;
    description: string;
  };

  services: Service[];

  process: {
    eyebrow: string;
    title: string;
    description: string;
    steps: ProcessStep[];
  };

  about: {
    eyebrow: string;
    title: string;
    body: string;
    /** Primeiro item usa anos desde `founded`; demais usam `value` */
    stats: Array<{ value?: string; label: string }>;
  };

  highlight: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    caption: string;
    points: HighlightPoint[];
  };

  testimonials: {
    eyebrow: string;
    title: string;
    items: Testimonial[];
  };

  faq: {
    eyebrow: string;
    title: string;
    items: FaqItem[];
  };

  aboutPage: {
    eyebrow: string;
    title: string;
    support: string;
    image: string;
    imageAlt: string;
    story: {
      title: string;
      paragraphs: string[];
    };
    mission: { title: string; text: string };
    vision: { title: string; text: string };
    values: {
      eyebrow: string;
      title: string;
      items: HighlightPoint[];
    };
    cta: { title: string; description: string };
  };

  contact: {
    title: string;
    description: string;
    pageIntro: string;
  };

  footer: {
    description: string;
  };

  metadata: {
    titleDefault: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
  };
};
