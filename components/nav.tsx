"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "ACCUEIL", href: "/" },
  { label: "LE PRODUIT", href: "/le-produit" },
  { label: "NOTRE HISTOIRE", href: "/notre-histoire" },
  { label: "MANIFESTE", href: "/manifeste" },
  { label: "FAQ", href: "/faq" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 h-16 transition-all duration-500 ${
          scrolled
            ? "bg-[#F7F5F0]/85 backdrop-blur-md shadow-[0_1px_0_0_rgba(26,26,26,0.07)]"
            : "bg-transparent"
        }`}
      >
        <Link
          href="/"
          className="font-serif text-xl tracking-tight text-[#1A1A1A] hover:text-[#0E1B2C] transition-colors duration-300"
          style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
        >
          DreamPulse
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[11px] tracking-[0.16em] font-sans transition-colors duration-300 relative group ${
                pathname === link.href
                  ? "text-[#C9A961]"
                  : "text-[#1A1A1A]/55 hover:text-[#C9A961]"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-px bg-[#C9A961] transition-all duration-300 ${
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden p-2 cursor-pointer text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-[#F7F5F0] flex flex-col items-center justify-center gap-10"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  href={link.href}
                  className={`text-[13px] tracking-[0.2em] font-sans transition-colors duration-200 ${
                    pathname === link.href
                      ? "text-[#C9A961]"
                      : "text-[#1A1A1A]/60 hover:text-[#C9A961]"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
