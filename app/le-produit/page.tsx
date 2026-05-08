"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/scroll-reveal";

function ImagePlaceholder({
  className = "",
  label = "Image à venir",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div className={`bg-[#E8E5DE] flex items-center justify-center ${className}`}>
      <span className="text-[10px] tracking-[0.15em] text-[#1A1A1A]/25 uppercase">
        {label}
      </span>
    </div>
  );
}

const steps = [
  {
    num: "01",
    title: "Programmer l'heure",
    text: "Via une interface simple, l'utilisateur définit l'heure souhaitée et la durée de la montée en intensité.",
  },
  {
    num: "02",
    title: "Démarrage silencieux",
    text: "Quelques minutes avant l'heure cible, l'oreiller commence à vibrer à très faible intensité, imperceptiblement.",
  },
  {
    num: "03",
    title: "Montée progressive",
    text: "L'intensité augmente selon une courbe douce et régulière, guidant le corps hors du sommeil en douceur.",
  },
  {
    num: "04",
    title: "Réveil naturel",
    text: "L'utilisateur s'éveille reposé, sans sursaut, sans alarme sonore — juste la conscience douce d'un nouveau matin.",
  },
];

const techBlocks = [
  {
    label: "Électronique embarquée",
    heading: "Circuits et microcontrôleur",
    p1: "Le cœur du système repose sur un microcontrôleur programmé en C++, pilotant un moteur vibrant à courant continu via un pont en H. La consommation énergétique a été optimisée pour garantir une autonomie suffisante.",
    p2: "Le circuit intègre également un module RTC (Real-Time Clock) pour maintenir l'heure avec précision, même hors alimentation.",
    imgLabel: "Schéma électronique",
    reverse: false,
  },
  {
    label: "Prototypage",
    heading: "Du schéma au prototype",
    p1: "Chaque itération du prototype a été assemblée à la main, de la découpe du tissu à la soudure des composants. Trois versions ont été construites et testées avant d'atteindre la version finale.",
    p2: "Les tests de confort ont impliqué des dormeurs réels, permettant d'ajuster la position du moteur et la densité du matelas de mousse.",
    imgLabel: "Prototype en cours",
    reverse: true,
  },
  {
    label: "Design industriel",
    heading: "Forme et matière",
    p1: "L'enveloppe de l'oreiller a été conçue pour dissimuler entièrement l'électronique tout en restant lavable. La housse extérieure utilise un tissu respirant 100 % coton.",
    p2: "Les contraintes ergonomiques — poids, épaisseur, souplesse — ont guidé chaque choix de matériaux, en dialogue constant avec les exigences techniques.",
    imgLabel: "Rendu design industriel",
    reverse: false,
  },
];

const specs = [
  ["Alimentation", "5 V DC via USB-C"],
  ["Autonomie (batterie)", "8 heures en veille active"],
  ["Moteur vibrant", "Moteur excentrique 3 V / 12 000 tr/min"],
  ["Contrôleur", "ATmega328P (Arduino Nano)"],
  ["Interface", "3 boutons + LED indicatrice"],
  ["Housse", "Coton 200 fils, lavable à 40°C"],
  ["Dimensions", "60 × 40 × 12 cm"],
  ["Poids total", "680 g (housse + électronique)"],
];

export default function LeProduit() {
  return (
    <>
      {/* ─── HERO COURT ───────────────────────────────────── */}
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
              Le Produit
            </h1>
            <p className="text-[15px] leading-[1.8] text-[#1A1A1A]/50 max-w-[480px]">
              Architecture technique, fonctionnement et caractéristiques
              du réveil par vibration progressive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── COMMENT ÇA FONCTIONNE ────────────────────────── */}
      <section className="px-8 md:px-16 py-20 border-t border-[#1A1A1A]/[0.07]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="mb-16">
            <p className="text-[10px] tracking-[0.25em] text-[#C9A961] uppercase mb-2">
              Fonctionnement
            </p>
            <h2
              className="text-3xl md:text-4xl tracking-tight text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              Comment ça fonctionne
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.1}>
                <p
                  className="text-[#C9A961] text-sm mb-4"
                  style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
                >
                  {step.num}
                </p>
                <div className="w-6 h-px bg-[#1A1A1A]/15 mb-5" />
                <h3
                  className="text-base leading-snug text-[#1A1A1A] mb-3 tracking-tight"
                  style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-[1.85] text-[#1A1A1A]/55">
                  {step.text}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONCEPTION TECHNIQUE (ZIGZAG) ────────────────── */}
      <section className="px-8 md:px-16 py-24 border-t border-[#1A1A1A]/[0.07]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="mb-20">
            <p className="text-[10px] tracking-[0.25em] text-[#C9A961] uppercase mb-2">
              Conception
            </p>
            <h2
              className="text-3xl md:text-4xl tracking-tight text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              Conception technique
            </h2>
          </ScrollReveal>

          <div className="space-y-28">
            {techBlocks.map((block, i) => (
              <ScrollReveal key={block.label} delay={0.1}>
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-0 items-start ${
                    block.reverse ? "md:grid-flow-dense" : ""
                  }`}
                >
                  <div
                    className={`${
                      block.reverse
                        ? "md:col-start-2 md:-ml-8"
                        : "md:-mr-8"
                    } relative z-10`}
                  >
                    <ImagePlaceholder
                      className="w-full aspect-[3/2]"
                      label={block.imgLabel}
                    />
                  </div>

                  <div
                    className={`relative z-20 bg-[#F7F5F0] flex flex-col justify-center py-12 ${
                      block.reverse
                        ? "md:col-start-1 md:row-start-1 md:pr-16 md:pt-12"
                        : "md:pl-16 md:pt-12"
                    }`}
                  >
                    <p className="text-[10px] tracking-[0.25em] text-[#C9A961] uppercase mb-4">
                      {block.label}
                    </p>
                    <h3
                      className="text-2xl leading-tight tracking-tight text-[#1A1A1A] mb-5"
                      style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
                    >
                      {block.heading}
                    </h3>
                    <p className="text-sm leading-[1.9] text-[#1A1A1A]/60 mb-4 max-w-[380px]">
                      {block.p1}
                    </p>
                    <p className="text-sm leading-[1.9] text-[#1A1A1A]/60 max-w-[380px]">
                      {block.p2}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CARACTÉRISTIQUES ─────────────────────────────── */}
      <section className="px-8 md:px-16 py-24 border-t border-[#1A1A1A]/[0.07]">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal className="mb-12">
            <p className="text-[10px] tracking-[0.25em] text-[#C9A961] uppercase mb-2">
              Spécifications
            </p>
            <h2
              className="text-3xl md:text-4xl tracking-tight text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              Caractéristiques
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <table className="w-full">
              <tbody>
                {specs.map(([key, value], i) => (
                  <tr
                    key={key}
                    className="border-b last:border-none"
                    style={{ borderColor: "rgba(201, 169, 97, 0.2)" }}
                  >
                    <td className="py-4 pr-8 text-[11px] tracking-[0.12em] text-[#1A1A1A]/40 uppercase w-1/2">
                      {key}
                    </td>
                    <td className="py-4 text-sm text-[#1A1A1A]/80 tracking-wide">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── IMAGE FINALE ─────────────────────────────────── */}
      <section className="px-8 md:px-16 py-8 pb-24">
        <ScrollReveal>
          <ImagePlaceholder
            className="w-full h-[60vh]"
            label="Produit fini — vue d'ensemble"
          />
        </ScrollReveal>
      </section>
    </>
  );
}
