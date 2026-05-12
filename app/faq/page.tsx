"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

const faqs = [
  {
    question: "Qu'est-ce que DreamPulse exactement ?",
    answer:
      "DreamPulse est un oreiller vibrant prototype conçu dans le cadre du cours LEPL1102 (Projet 2) en bachelier d'ingénieur civil à l'École Polytechnique de Louvain. Il repose sur un circuit électronique qui génère des vibrations progressives via une interaction bobine-aimant-membrane, pour remplacer le réveil sonore traditionnel.",
  },
  {
    question: "Est-ce que DreamPulse est disponible à l'achat ?",
    answer:
      "Non. DreamPulse est un projet académique non commercial (Groupe 53, année 2025–2026). Ce site vitrine a pour seul objectif de présenter la démarche, le produit et l'équipe dans le cadre du cours de projet.",
  },
  {
    question: "Comment fonctionne le réveil par vibration ?",
    answer:
      "Un oscillateur à tension contrôlée (VCO) génère un signal carré dont la fréquence varie de 5 à ~15 Hz. Ce signal est amplifié par un convertisseur Push-Pull (transistors BC327) et envoyé dans une bobine (200 spires). Le champ magnétique produit attire et repousse alternativement un aimant fixé à une membrane en carton, dont les vibrations se propagent à travers l'oreiller.",
  },
  {
    question: "Comment contrôle-t-on la fréquence de vibration ?",
    answer:
      "Un Arduino utilise la technique PWM (modulation de largeur d'impulsion) pour faire varier la tension de commande Vctrl de l'oscillateur. Un récepteur infrarouge permet de modifier cette tension à distance via une télécommande — chaque bouton correspond à une fréquence différente, permettant une montée progressive sans toucher l'oreiller.",
  },
  {
    question: "Pourquoi avoir choisi une membrane en carton ?",
    answer:
      "Le carton offre un bon compromis entre souplesse (nécessaire au confort) et rigidité (nécessaire à la tenue mécanique du système). L'aimant est collé contre cette membrane, dont la surface est légèrement inférieure à celle de l'oreiller, afin que les vibrations se propagent uniformément.",
  },
  {
    question: "Quelle est la source d'alimentation ?",
    answer:
      "Le circuit est alimenté par 4 piles fournissant 6 V en continu. Ce choix favorise la portabilité et l'autonomie du système, sans câble d'alimentation. Le circuit a été conçu et testé pour rester fonctionnel même lorsque la tension des piles chute légèrement avec le temps.",
  },
  {
    question: "Y a-t-il des risques liés à l'électronique dans l'oreiller ?",
    answer:
      "Le circuit électronique est entièrement logé dans un boîtier plastique isolant placé à l'intérieur de l'oreiller. Ce boîtier garantit l'isolation thermique vis-à-vis des matériaux inflammables (comme les plumes). Le circuit fonctionne en 6 V DC via piles — une tension sans danger pour l'utilisateur.",
  },
  {
    question: "Pour qui DreamPulse est-il conçu ?",
    answer:
      "DreamPulse répond à deux besoins concrets : éviter de réveiller son partenaire avec une alarme sonore lorsqu'on part tôt, et offrir une alternative de réveil efficace aux personnes malentendantes, pour qui les alarmes traditionnelles sont insuffisantes.",
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
