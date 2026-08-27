import type { Metadata } from "next";
import { AboutPageContent } from "@/components/AboutPageContent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre",
  description: `${site.name} — ${site.aboutPage.support}`,
};

export default function SobrePage() {
  return <AboutPageContent />;
}
