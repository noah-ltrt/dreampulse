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
                O
              </span>
              n a tous vécu ça. Le réveil sonne à 7h, vous devez vous lever,
              mais votre partenaire, votre colocataire ou votre frère de chambre
              peut dormir jusqu&rsquo;à 10h. En une seconde, tout le monde est réveillé.
              Pour rien. C&rsquo;est le problème que l&rsquo;on a voulu résoudre.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <p className="text-sm leading-[2.1] text-[#1A1A1A]/70 mb-10">
              Le manque de sommeil, c&rsquo;est concret. On est moins concentré en cours,
              moins efficace, de mauvaise humeur. Et souvent, ce n&rsquo;est pas qu&rsquo;on
              n&rsquo;a pas dormi assez longtemps — c&rsquo;est qu&rsquo;on a été réveillé brutalement,
              au mauvais moment, par un son qui ne nous laisse pas le choix. Sans
              parler des personnes malentendantes, pour qui un réveil sonore ne
              sert tout simplement à rien.
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
              DreamPulse, c&rsquo;est un oreiller qui vibre pour vous réveiller. Pas de son,
              pas de lumière, juste une vibration douce que vous seul ressentez.
              L&rsquo;idée est simple : un aimant fixé à une membrane en carton, une bobine
              alimentée par un circuit électrique, et le tout fait vibrer l&rsquo;oreiller
              à une fréquence que vous contrôlez. La vibration commence doucement
              autour de 5 Hz et monte progressivement jusqu&rsquo;à 15 Hz pour vous
              réveiller en douceur, sans agresser personne d&rsquo;autre autour de vous.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <p className="text-sm leading-[2.1] text-[#1A1A1A]/70 mb-10">
              Ce qu&rsquo;on aime dans la vibration, c&rsquo;est qu&rsquo;elle est discrète et personnelle.
              Elle ne traverse pas les murs, elle ne réveille pas votre colocataire,
              et elle s&rsquo;adapte à votre corps plutôt que de vous imposer un réveil
              brutal. C&rsquo;est aussi une solution vraiment utile pour les personnes
              sourdes ou malentendantes, qui n&rsquo;ont souvent pas d&rsquo;alternative pratique
              au réveil sonore traditionnel.
            </p>
          </ScrollReveal>

          {/* Deuxième citation */}
          <ScrollReveal delay={0.05} className="py-10 my-4">
            <blockquote className="text-center">
              <p
                className="text-[clamp(1.4rem,2.8vw,2.2rem)] leading-[1.3] tracking-tight text-[#1A1A1A] italic"
                style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
              >
                &ldquo;Le luxe moderne n&rsquo;est pas l&rsquo;excès.<br />
                C&rsquo;est la qualité de chaque instant.&rdquo;
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
              Ce projet, c&rsquo;est avant tout un projet de bac 1 en ingénierie civile.
              On n&rsquo;a pas la prétention d&rsquo;avoir inventé quelque chose de révolutionnaire.
              Mais on a essayé de concevoir un objet qui répond à un vrai problème
              du quotidien, en utilisant ce qu&rsquo;on a appris cette année — les circuits
              électriques, les oscillateurs, les transistors, l&rsquo;interaction aimant-bobine.
              Et on est plutôt fiers du résultat.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <p className="text-sm leading-[2.1] text-[#1A1A1A]/70 mb-16">
              Si vous lisez ce manifeste et que vous vous reconnaissez dans le
              problème — le réveil qui réveille tout le monde, les matins difficiles,
              les nuits trop courtes — alors on a atteint notre objectif. On n&rsquo;essaie
              pas de vendre un produit. On propose juste une idée simple : se
              réveiller mieux, sans déranger les autres.
            </p>
          </ScrollReveal>

          {/* Photo 3 — NLT_5644 */}
          <ScrollReveal delay={0.06} className="my-10">
            <div className="w-full max-w-xs mx-auto shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_0_28px_6px_rgba(201,169,97,0.12)]">
              <Image src="/image/NLT_5644.jpg" alt="DreamPulse — détail" width={800} height={600} className="w-full h-auto object-contain" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="flex justify-center pt-4 pb-16">
              <p className="text-[10px] tracking-[0.25em] text-[#C9A961] uppercase">
                — Le Groupe 53, 2025–2026
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
