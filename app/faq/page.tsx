"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

const faqs = [
  {
    question: "Qu'est-ce que DreamPulse exactement ?",
    answer:
      "DreamPulse est un oreiller-réveil prototype conçu dans le cadre du Projet P2 académique en bachelier d'ingénieur civil. Il intègre un moteur vibrant miniaturisé qui s'active progressivement avant l'heure de réveil souhaitée, permettant un éveil en douceur sans alarme sonore.",
  },
  {
    question: "Est-ce que DreamPulse est disponible à l'achat ?",
    answer:
      "Non. DreamPulse est un projet académique non commercial. Il ne sera pas mis en vente. Ce site vitrine a pour seul objectif de présenter la démarche, le produit et l'équipe dans le cadre du cours de projet.",
  },
  {
    question: "Comment fonctionne le réveil par vibration ?",
    answer:
      "Un microcontrôleur (Arduino Nano) pilote un moteur excentrique placé à l'intérieur de l'oreiller. Quelques minutes avant l'heure programmée, le moteur démarre à très faible intensité. L'amplitude augmente selon une courbe progressive jusqu'à l'heure cible, imitant la montée douce de la conscience lors d'un réveil naturel.",
  },
  {
    question: "Les vibrations sont-elles perceptibles par un partenaire de lit ?",
    answer:
      "Les tests ont montré que les vibrations restent largement localisées à l'oreiller et au plan de couchage immédiat. Pour une personne dormant à plus de 30 cm, les vibrations sont imperceptibles à faible intensité. À intensité maximale, un léger transfert peut être ressenti sur le matelas.",
  },
  {
    question: "L'oreiller peut-il être utilisé sans l'électronique ?",
    answer:
      "Oui. La housse est conçue pour accueillir ou non le module électronique, qui est extractible. Sans le module, l'oreiller fonctionne comme un oreiller standard en coton, lavable à 40°C.",
  },
  {
    question: "Quelle est l'autonomie de la batterie ?",
    answer:
      "La batterie lithium intégrée offre environ 8 heures d'autonomie en veille active (moteur inactif, horloge allumée). En fonctionnement avec vibrations, la durée dépend de l'intensité et de la durée du cycle de réveil — généralement 20 à 30 minutes — ce qui n'affecte pas significativement l'autonomie globale.",
  },
  {
    question: "Comment programmer l'heure de réveil ?",
    answer:
      "Via trois boutons physiques disposés sur le module électronique : un bouton de mode, un bouton d'incrémentation et un bouton de validation. Une LED indicatrice confirme chaque réglage. L'interface a été conçue pour rester intuitive même dans l'obscurité.",
  },
  {
    question: "Y a-t-il des risques liés à l'électronique dans l'oreiller ?",
    answer:
      "Le module électronique est entièrement encapsulé dans une pochette résistante à l'humidité légère. Il ne doit pas être mouillé directement. En usage normal — aucun liquide en contact direct — le risque est nul. Le circuit fonctionne en 5V DC via USB-C, une tension sans danger.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#1A1A1A]/[0.08]">
      <button
        className="w-full flex items-start justify-between py-6 text-left gap-6 cursor-pointer group"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span
          className="text-base md:text-lg leading-snug tracking-tight text-[#1A1A1A] group-hover:text-[#0E1B2C] transition-colors duration-300"
          style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
        >
          {question}
        </span>
        <span className="shrink-0 mt-1 text-[#C9A961] transition-transform duration-300">
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-sm leading-[1.9] text-[#1A1A1A]/60 pb-6 max-w-[640px]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="pt-40 pb-20 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[10px] tracking-[0.25em] text-[#C9A961] uppercase mb-6">
              DreamPulse
            </p>
            <h1
              className="text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] tracking-[-0.02em] text-[#1A1A1A] mb-6"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              Questions fréquentes
            </h1>
            <p className="text-[15px] leading-[1.8] text-[#1A1A1A]/50 max-w-[480px]">
              Tout ce que vous souhaitez savoir sur DreamPulse,
              son fonctionnement et sa conception.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── ACCORDÉONS ───────────────────────────────────── */}
      <section className="px-8 md:px-16 py-12 border-t border-[#1A1A1A]/[0.07]">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            {faqs.map((faq, i) => (
              <FaqItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ─── ESPACE BAS ───────────────────────────────────── */}
      <div className="pb-32" />
    </>
  );
}
