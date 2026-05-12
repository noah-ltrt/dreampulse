import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0E1B2C] text-[#F7F5F0]/70 px-8 md:px-16 pt-16 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <p
              className="text-2xl text-[#F7F5F0] mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              DreamPulse
            </p>
            <p className="text-xs leading-relaxed text-[#F7F5F0]/40 tracking-wide max-w-[180px]">
              Un réveil en douceur,<br />conçu avec soin.
            </p>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.2em] text-[#C9A961] mb-5 uppercase">
              Navigation
            </p>
            <ul className="space-y-3">
              {[
                { label: "Accueil", href: "/" },
                { label: "Le Produit", href: "/le-produit" },
                { label: "Notre Histoire", href: "/notre-histoire" },
                { label: "Manifeste", href: "/manifeste" },
                { label: "FAQ", href: "/faq" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-[#F7F5F0]/50 hover:text-[#C9A961] transition-colors duration-300 tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.2em] text-[#C9A961] mb-5 uppercase">
              Projet
            </p>
            <ul className="space-y-3">
              {[
                "Bachelier Ingénieur Civil",
                "Projet académique",
                "Année 2025–2026",
              ].map((item) => (
                <li key={item}>
                  <span className="text-xs text-[#F7F5F0]/50 tracking-wide">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.2em] text-[#C9A961] mb-5 uppercase">
              Mentions
            </p>
            <ul className="space-y-3">
              {[
                "Projet non commercial",
                "Tous droits réservés",
                "© 2026 DreamPulse",
              ].map((item) => (
                <li key={item}>
                  <span className="text-xs text-[#F7F5F0]/50 tracking-wide">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#F7F5F0]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] tracking-[0.15em] text-[#F7F5F0]/30 uppercase">
            Projet académique | Groupe 53 — Bachelier Ingénieur Civil — 2025–2026
          </p>
          <div className="w-6 h-px bg-[#C9A961]/40" />
        </div>
      </div>
    </footer>
  );
}
