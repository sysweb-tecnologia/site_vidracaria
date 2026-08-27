import { MapPin, Mail, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { site, whatsappUrl } from "@/lib/site";

export function ContactCTA() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-[#12181f] px-6 py-12 text-white md:px-12 md:py-16">
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-teal/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-copper/20 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-white/50">
                  Contato
                </p>
                <h2 className="font-display mt-3 max-w-xl text-4xl font-bold tracking-tight md:text-5xl">
                  {site.contact.title}
                </h2>
                <p className="mt-4 max-w-lg text-base text-white/70">
                  {site.contact.description}
                </p>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shimmer relative mt-8 inline-flex rounded-full bg-copper px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-copper-deep"
                >
                  Chamar no WhatsApp
                </a>
              </div>

              <div className="space-y-5 text-sm text-white/75">
                <div className="flex gap-3">
                  <Phone className="mt-0.5 shrink-0 text-copper" size={18} />
                  <a href={`tel:+${site.phoneE164}`} className="hover:text-white">
                    {site.phoneDisplay}
                  </a>
                </div>
                <div className="flex gap-3">
                  <Mail className="mt-0.5 shrink-0 text-copper" size={18} />
                  <div className="space-y-1">
                    {site.emails.map((email) => (
                      <a
                        key={email}
                        href={`mailto:${email}`}
                        className="block hover:text-white"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin className="mt-0.5 shrink-0 text-copper" size={18} />
                  <p className="leading-relaxed">
                    {site.address.street}
                    <br />
                    {site.address.complement}
                    <br />
                    {site.address.neighborhood}, {site.address.city} — {site.address.state}
                    <br />
                    CEP {site.address.zip}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
