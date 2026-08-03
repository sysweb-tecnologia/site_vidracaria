import { About } from "@/components/About";
import { BlindexSection } from "@/components/BlindexSection";
import { ContactCTA } from "@/components/ContactCTA";
import { Hero } from "@/components/Hero";
import { ServicesShowcase } from "@/components/ServicesShowcase";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesShowcase />
      <About />
      <BlindexSection />
      <ContactCTA />
    </>
  );
}
