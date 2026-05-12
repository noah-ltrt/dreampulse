"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Manifeste() {
  return (
    <>
      {/* ─── TITRE MONUMENTAL ─────────────────────────────── */}
      <section className="pt-40 pb-16 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1
              className="text-[clamp(4rem,12vw,11rem)] leading-[0.95] tracking-[-0.03em] text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              Manifeste
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ─── TEXTE ÉDITORIAL ──────────────────────────────── */}
      <section className="px-8 md:px-16 py-16 border-t border-[#1A1A1A]/[0.07]">
        <div
          className="max-w-[650px] mx-auto text-justify"
          style={{ hyphens: "auto", lang: "fr" } as React.CSSProperties}
        >

          {/* DROP CAP paragraphe */}
          <ScrollReveal>
            <p className="text-sm leading-[2.1] text-[#1A1A1A]/70 mb-10">
              <span
                className="float-left text-[4.5rem] leading-[0.72] mr-3 mt-2 text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
              >
                L
              </span>
              e réveil est un acte de violence. Depuis l'invention du réveil
              mécanique au XIX{"ᵉ"} siècle, l'humanité a accepté l'idée
              qu'un son strident soit la porte d'entrée vers chaque journée.
              Nous refusons cette fatalité. Le corps mérite mieux qu'un
              arrachement.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <p className="text-sm leading-[2.1] text-[#1A1A1A]/70 mb-10">
              Le sommeil n'est pas une parenthèse. C'est le fondement sur
              lequel repose toute action éveillée — la clarté d'esprit, la
              résistance physique, la capacité à décider, à créer, à
              prendre soin. Maltraiter le réveil, c'est maltraiter l'état
              qui précède chaque journée. C'est conditionner le corps à
              la peur avant même d'avoir ouvert les yeux.
            </p>
          </ScrollReveal>

          {/* Photo 1 — NLT_5735 */}
          <ScrollReveal delay={0.06} className="my-10 flex justify-center">
            <div className="w-80 shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_0_24px_4px_rgba(201,169,97,0.10)]">
              <Image src="/image/NLT_5735.jpg" alt="DreamPulse" width={600} height={800} className="w-full h-auto object-contain" />
            </div>
          </ScrollReveal>

          {/* Citation centrale */}
          <ScrollReveal delay={0.05} className="py-12 my-4">
            <blockquote className="text-center">
              <p
                className="text-[clamp(1.5rem,3vw,2.4rem)] leading-[1.25] tracking-[-0.01em] text-[#1A1A1A] italic"
                style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
              >
                &ldquo;Dormez bien pour vivre pleinement.<br />
                Réveillez-vous doucement pour<br />commencer justement.&rdquo;
              </p>
              <div className="flex justify-center mt-6">
                <div className="w-8 h-px bg-[#C9A961]" />
              </div>
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <p className="text-sm leading-[2.1] text-[#1A1A1A]/70 mb-10 mt-4">
              DreamPulse est né d'une conviction simple : la technologie
              doit servir le corps, non le brutaliser. Un oreiller qui
              vibre doucement n'est pas un gadget. C'est une décision
              philosophique — celle de respecter les rythmes biologiques
              plutôt que de les contraindre.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <p className="text-sm leading-[2.1] text-[#1A1A1A]/70 mb-10">
              Nous avons choisi la vibration parce qu'elle parle au corps
              sans passer par la conscience. Elle traverse le tissu, la
              mousse, le drap — et parvient au système nerveux comme un
              murmure. Pas une injonction. Une invitation.
            </p>
          </ScrollReveal>

          {/* Deuxième citation */}
          <ScrollReveal delay={0.05} className="py-10 my-4">
            <blockquote className="text-center">
              <p
                className="text-[clamp(1.4rem,2.8vw,2.2rem)] leading-[1.3] tracking-tight text-[#1A1A1A] italic"
                style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
              >
                &ldquo;Le luxe moderne n'est pas l'excès.<br />
                C'est la qualité de chaque instant.&rdquo;
              </p>
              <div className="flex justify-center mt-6">
                <div className="w-8 h-px bg-[#C9A961]" />
              </div>
            </blockquote>
          </ScrollReveal>

          {/* Photo 2 — NLT_5742 */}
          <ScrollReveal delay={0.06} className="my-10">
            <div className="w-36 mx-auto shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_0_24px_4px_rgba(201,169,97,0.10)]">
              <Image src="/image/NLT_5742.jpg" alt="DreamPulse — atelier" width={800} height={600} className="w-full h-auto object-contain" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <p className="text-sm leading-[2.1] text-[#1A1A1A]/70 mb-10 mt-4">
              Ce projet est académique. Ses ambitions sont modestes dans
              leur portée, mais sincères dans leur intention. Quatre
              étudiants ont voulu prouver que l'ingénierie peut être
              attentive — qu'un objet technique peut être conçu avec
              délicatesse, autant qu'avec rigueur.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <p className="text-sm leading-[2.1] text-[#1A1A1A]/70 mb-16">
              Si DreamPulse vous convainc que votre réveil mérite
              davantage de soin, alors notre travail aura atteint son
              but. Non pas de vendre un produit, mais d'initier une
              réflexion — sur le corps, sur le temps, sur la façon
              dont nous traitons ce qui est précieux.
            </p>
          </ScrollReveal>

          {/* Photo 3 — NLT_5644 */}
          <ScrollReveal delay={0.06} className="my-10">
            <div className="w-full max-w-xs mx-auto shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_0_24px_4px_rgba(201,169,97,0.10)]">
              <Image src="/image/NLT_5644.jpg" alt="DreamPulse — détail" width={800} height={600} className="w-full h-auto object-contain" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="flex justify-center pt-4 pb-16">
              <p
                className="text-[10px] tracking-[0.25em] text-[#C9A961] uppercase"
              >
                — Le Groupe 53, 2025–2026
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
