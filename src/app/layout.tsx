import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Manrope, Syne } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/lib/site";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://site-vidracaria.vercel.app",
  ),
  title: {
    default: `${site.name} | Vidros, Divisórias, Persianas e Toldos`,
    template: `%s | ${site.name}`,
  },
  description: `${site.name} — vidro temperado Blindex®, divisórias drywall, persianas, cortinas, toldos e coberturas sob medida.`,
  keywords: [
    site.name,
    "vidraçaria",
    "Blindex",
    "persianas",
    "divisórias drywall",
    "toldos",
    "vidro temperado",
  ],
  openGraph: {
    title: `${site.name} | Projetos em vidro e acabamentos`,
    description: `Vidros, espelhos, divisórias, persianas e toldos com fabricação e instalação.`,
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${syne.variable} ${manrope.variable} h-full`}>
      <body className="relative flex min-h-full flex-col antialiased">
        <div className="noise" aria-hidden />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
