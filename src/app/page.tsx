import { About } from "@/components/About";
import { ContactCTA } from "@/components/ContactCTA";
import { FaqSection } from "@/components/FaqSection";
import { Hero } from "@/components/Hero";
import { HighlightSection } from "@/components/HighlightSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesShowcase } from "@/components/ServicesShowcase";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { TrustStrip } from "@/components/TrustStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesShowcase />
      <ProcessSection />
      <About />
      <HighlightSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactCTA />
    </>
  );
}
