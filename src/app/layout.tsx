import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
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
  metadataBase: new URL("https://arteflex.vercel.app"),
  title: {
    default: "Arteflex | Vidros, Divisórias, Persianas e Toldos em Manaus",
    template: "%s | Arteflex Manaus",
  },
  description:
    "Arteflex — desde 2002 em Manaus. Vidro temperado Blindex®, divisórias drywall, persianas, cortinas, toldos e coberturas sob medida.",
  keywords: [
    "Arteflex",
    "vidraçaria Manaus",
    "Blindex Manaus",
    "persianas Manaus",
    "divisórias drywall",
    "toldos",
    "vidro temperado",
  ],
  openGraph: {
    title: "Arteflex | Projetos em vidro e acabamentos — Manaus",
    description:
      "Vidros, espelhos, divisórias, persianas e toldos com fabricação e instalação em Manaus.",
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
      </body>
    </html>
  );
}
