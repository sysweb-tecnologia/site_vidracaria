import Link from "next/link";
import { nav, site, whatsappUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-auto border-t border-[var(--line)] bg-[#12181f] text-[#eef3f4]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <p className="font-display text-3xl font-bold tracking-tight">Arteflex</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/65">
            Desde {site.founded}, fabricando e instalando vidros, divisórias, persianas e
            toldos para residências, comércios e indústrias em Manaus.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/45">Navegação</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/75 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/45">Contato</p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>
              <a href={`tel:+${site.phoneE164}`} className="hover:text-white">
                {site.phoneDisplay}
              </a>
            </li>
            {site.emails.map((email) => (
              <li key={email}>
                <a href={`mailto:${email}`} className="hover:text-white">
                  {email}
                </a>
              </li>
            ))}
            <li className="pt-2 leading-relaxed">
              {site.address.street}
              <br />
              {site.address.complement}
              <br />
              {site.address.neighborhood} · {site.address.city} — {site.address.state}
            </li>
          </ul>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-full bg-copper px-5 py-2.5 text-sm font-semibold text-white hover:bg-copper-deep"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/40 md:px-8">
        © {new Date().getFullYear()} Arteflex Projetos · Manaus, AM
      </div>
    </footer>
  );
}
