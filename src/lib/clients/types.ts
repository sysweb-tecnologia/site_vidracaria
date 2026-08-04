/** Id usado em NEXT_PUBLIC_CLIENT — ver registro em index.ts */
export type ClientId = string;

export type ServiceSlug =
  | "vidros-e-espelhos"
  | "divisorias-e-paredes"
  | "persianas-e-cortinas"
  | "toldos-e-coberturas";

export type Service = {
  slug: ServiceSlug;
  title: string;
  short: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  accent: string;
};

export type ClientConfig = {
  id: ClientId;
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
};
