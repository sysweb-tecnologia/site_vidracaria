import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a Arteflex em Manaus — WhatsApp, e-mail e endereço na Feira Municipal do Santo Antônio.",
};

export default function ContatoPage() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[1.1fr_0.9fr] md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.24em] text-teal-deep">Contato</p>
          <h1 className="font-display mt-3 text-5xl font-bold tracking-tight text-ink md:text-6xl">
            Fale com a Arteflex
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
            Atendimento para residências, comércios e indústrias em Manaus. Peça
            orçamento pelo WhatsApp ou envie um e-mail — respondemos com foco no
            seu projeto.
          </p>

          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-copper px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-copper-deep"
          >
            Abrir WhatsApp
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass-panel space-y-8 rounded-[1.8rem] p-8">
            <div className="flex gap-4">
              <Phone className="mt-1 shrink-0 text-teal" size={20} />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-ink-soft/70">
                  Telefone / WhatsApp
                </p>
                <a
                  href={`tel:+${site.phoneE164}`}
                  className="mt-1 block text-lg font-semibold text-ink hover:text-teal-deep"
                >
                  {site.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="mt-1 shrink-0 text-teal" size={20} />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-ink-soft/70">
                  E-mail
                </p>
                <div className="mt-1 space-y-1">
                  {site.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="block font-medium text-ink hover:text-teal-deep"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="mt-1 shrink-0 text-teal" size={20} />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-ink-soft/70">
                  Endereço
                </p>
                <p className="mt-1 leading-relaxed text-ink">
                  {site.address.street}
                  <br />
                  {site.address.complement}
                  <br />
                  {site.address.neighborhood} · {site.address.city} —{" "}
                  {site.address.state}
                  <br />
                  CEP {site.address.zip}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto mt-14 max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[1.8rem] border border-[var(--line)] bg-white/40">
            <iframe
              title="Mapa Arteflex Manaus"
              src="https://www.google.com/maps?q=Av.+Pe.+Agostinho+Caballero+Martins,+460,+Manaus,+AM&output=embed"
              className="h-[320px] w-full md:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
