"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
    title: "Activation à distance",
    text: "Une télécommande infrarouge permet de régler la tension de contrôle et donc la fréquence de vibration, sans toucher à l'oreiller.",
  },
  {
    num: "02",
    title: "Démarrage à 5 Hz",
    text: "Le circuit démarre à basse fréquence (≈ 5 Hz), à peine perceptible. La membrane en carton transmet une légère vibration à travers l'oreiller.",
  },
  {
    num: "03",
    title: "Montée progressive",
    text: "L'oscillateur VCO augmente graduellement la fréquence jusqu'à environ 15 Hz, intensifiant la vibration de façon continue et douce.",
  },
  {
    num: "04",
    title: "Réveil naturel",
    text: "Le corps sort du sommeil sans sursaut ni alarme sonore — une alternative pensée aussi pour les personnes malentendantes.",
  },
];

const techBlocks = [
  {
    label: "Oscillateur VCO",
    heading: "Générer le signal de vibration",
    p1: "L'oscillateur à tension contrôlée (VCO) est le cœur du système. Il combine deux sous-blocs : un intégrateur (AOP + condensateur 1 μF) qui produit un signal triangulaire, et une bascule (AOP + potentiomètre) qui le transforme en signal carré.",
    p2: "La fréquence de sortie dépend directement de la tension de commande Vctrl, elle-même modulée par l'Arduino via PWM. Résistances dimensionnées : Rctrl = 15 kΩ, RD = 10 kΩ.",
    imgLabel: "Schéma oscillateur",
    img: "/image/NLT_5723.jpg" as string | null,
    contain: true,
    reverse: false,
  },
  {
    label: "Convertisseur Push-Pull",
    heading: "Amplifier pour actionner la bobine",
    p1: "Le signal issu de l'oscillateur ne fournit pas assez de courant pour actionner la bobine. Le bloc convertisseur Push-Pull, composé d'une paire de transistors bipolaires complémentaires (NPN + PNP, BC327), amplifie ce courant.",
    p2: "Les transistors basculent alternativement entre état saturé et bloqué, inversant le sens du courant dans la bobine à chaque demi-période. Gain mesuré : β ≈ 458 (NPN) et β ≈ 573 (PNP), dans la plage datasheet.",
    imgLabel: "Schéma convertisseur Push-Pull",
    img: "/image/NLT_5713.jpg" as string | null,
    reverse: true,
  },
  {
    label: "Bobine · Aimant · Membrane",
    heading: "Conversion électromécanique",
    p1: "La bobine (200 spires, rayon 1,7 cm) génère un champ magnétique variable qui attire et repousse alternativement l'aimant permanent collé à une membrane en carton — un bon compromis entre souplesse et rigidité.",
    p2: "Le tout est logé dans un boîtier plastique isolant, protégeant l'électronique des matériaux inflammables de l'oreiller. Alimenté par 4 piles (6 V), sans câble, sans WiFi.",
    imgLabel: "Coupe de l'oreiller",
    img: "/image/NLT_5703.jpg" as string | null,
    contain: true,
    reverse: false,
  },
];

const specs = [
  ["Alimentation", "4 piles (6 V continu)"],
  ["Fréquence de réveil", "5 Hz → ~15 Hz (progressive)"],
  ["Oscillateur", "VCO — intégrateur + bascule à AOP"],
  ["Condensateur", "1 μF"],
  ["Résistances clés", "Rctrl = 15 kΩ · RD = 10 kΩ"],
  ["Convertisseur", "Push-Pull — transistors BC327 (NPN + PNP)"],
  ["Bobine", "200 spires · rayon 1,7 cm"],
  ["Membrane", "Carton flexible (surface ≈ oreiller)"],
  ["Contrôle", "Arduino + télécommande infrarouge (PWM)"],
  ["Boîtier", "Plastique isolant — protection thermique intégrée"],
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
                    {block.img ? (
                      "contain" in block && block.contain ? (
                        <div className="w-3/5 mx-auto shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_0_24px_4px_rgba(201,169,97,0.10)]">
                          <Image src={block.img} alt={block.imgLabel} width={1200} height={800} className="w-full h-auto object-contain" />
                        </div>
                      ) : (
                        <div className="relative w-full aspect-[3/2] overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_0_24px_4px_rgba(201,169,97,0.10)]">
                          <Image src={block.img} alt={block.imgLabel} fill className="object-cover" />
                        </div>
                      )
                    ) : (
                      <ImagePlaceholder className="w-full aspect-[3/2]" label={block.imgLabel} />
                    )}
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
      {/* ↓ Remplace null par "/image/NLT_XXXX.jpg" pour afficher la photo */}
      {(() => {
        const src: string | null = "/image/NLT_5712.jpg";
        return (
          <section className="px-8 md:px-16 py-8 pb-24">
            <ScrollReveal>
              {src ? (
                <div className="relative w-full max-w-3xl mx-auto shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_0_28px_6px_rgba(201,169,97,0.12)]">
                  <Image src={src} alt="Produit fini — vue d'ensemble" width={1200} height={800} className="w-full h-auto object-contain" />
                </div>
              ) : (
                <ImagePlaceholder className="w-full h-[60vh]" label="Produit fini — vue d'ensemble" />
              )}
            </ScrollReveal>
          </section>
        );
      })()}
    </>
  );
}
