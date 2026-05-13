"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { VideoSection } from "@/components/video-section";
import { ShaderHero } from "@/components/ui/shader-hero";
import { AnimatedStats } from "@/components/ui/animated-counter";

// ─── Pour remplacer un placeholder par une vraie photo :
// 1. Copie ton image dans  public/images/  (ex: hero-produit.jpg)
// 2. Remplace  src={null}  par  src="/images/hero-produit.jpg"
// 3. Sauvegarde — la page se recharge automatiquement

function SiteImage({
  src,
  alt,
  className = "",
  label = "Image à venir",
}: {
  src: string | null;
  alt: string;
  className?: string;
  label?: string;
}) {
  if (!src) {
    return (
      <div className={`bg-[#E8E5DE] flex items-center justify-center shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_0_28px_6px_rgba(201,169,97,0.08)] ${className}`}>
        <span className="text-[10px] tracking-[0.15em] text-[#1A1A1A]/25 uppercase">
          {label}
        </span>
      </div>
    );
  }
  return (
    <div className={`relative overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_0_28px_6px_rgba(201,169,97,0.12)] ${className}`}>
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}


export default function Home() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <ShaderHero />

      {/* ─── PHRASE MANIFESTE ────────────────────────────── */}
      <section className="py-[160px] px-8 md:px-16">
        <ScrollReveal className="max-w-4xl mx-auto text-center">
          <p
            className="text-[clamp(1.9rem,4.5vw,4rem)] leading-[1.2] tracking-[-0.01em] text-[#1A1A1A]"
            style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
          >
            &ldquo;Sentir le matin<br />avant de l'entendre.&rdquo;
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-10 h-px bg-[#C9A961]" />
          </div>
        </ScrollReveal>
      </section>

      {/* ─── PRÉSENTATION PRODUIT AVEC OVERLAP ───────────── */}
      <section className="px-8 md:px-16 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0 items-start">

            <ScrollReveal className="relative z-10 md:-mr-8">
              <SiteImage
                src="/image/NLT_5660.jpg"
                alt="Vue 3/4 du produit DreamPulse"
                className="w-full aspect-[4/5]"
                label="Vue 3/4 produit"
              />
            </ScrollReveal>

            <ScrollReveal
              delay={0.15}
              className="relative z-20 bg-[#F7F5F0] md:pl-16 md:pt-20 flex flex-col justify-center py-12 md:py-0"
            >
              <p className="text-[10px] tracking-[0.25em] text-[#C9A961] uppercase mb-5">
                Le produit
              </p>
              <h2
                className="text-[clamp(1.8rem,3vw,2.8rem)] leading-[1.15] tracking-tight text-[#1A1A1A] mb-6"
                style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
              >
                Technologie<br />au service du sommeil
              </h2>
              <p className="text-sm leading-[1.9] text-[#1A1A1A]/60 mb-4 max-w-[380px]">
                DreamPulse repose sur un circuit électronique logé dans un
                boîtier plastique au cœur de l&rsquo;oreiller. Une bobine génère
                un champ magnétique qui actionne un aimant fixé à une membrane
                en carton — c&rsquo;est cette membrane qui vibre.
              </p>
              <p className="text-sm leading-[1.9] text-[#1A1A1A]/60 max-w-[380px]">
                La fréquence monte progressivement de 5 à 15 Hz via un
                oscillateur à tension contrôlée, piloté par Arduino et
                télécommande infrarouge. Alimenté par piles, sans fil.
              </p>

              <Link
                href="/le-produit"
                className="mt-10 inline-flex items-center gap-3 text-[11px] tracking-[0.18em] text-[#1A1A1A]/50 uppercase hover:text-[#C9A961] transition-colors duration-300 group cursor-pointer w-fit"
              >
                Découvrir le produit
                <ArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── TROIS PILIERS ───────────────────────────────── */}
      <section className="px-8 md:px-16 py-28 border-t border-[#1A1A1A]/[0.07]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            {[
              {
                num: "I",
                title: "Réveil progressif",
                text: "Les vibrations démarrent à 5 Hz et montent graduellement jusqu'à 15 Hz, guidant le corps hors du sommeil sans sursaut ni alarme sonore.",
              },
              {
                num: "II",
                title: "Conception ingénieure",
                text: "Oscillateur VCO, convertisseur Push-Pull à transistors BC327, interaction bobine-aimant — chaque bloc conçu, calculé et mesuré en laboratoire.",
              },
              {
                num: "III",
                title: "Discret et autonome",
                text: "Alimenté par piles, contrôlé à distance par télécommande infrarouge. Aucun bruit, aucune lumière — idéal aussi pour les personnes malentendantes.",
              },
            ].map((pilier, i) => (
              <ScrollReveal key={pilier.num} delay={i * 0.12}>
                <p
                  className="text-[#C9A961] mb-5 text-lg"
                  style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
                >
                  {pilier.num}
                </p>
                <h3
                  className="text-xl leading-snug text-[#1A1A1A] mb-4 tracking-tight"
                  style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
                >
                  {pilier.title}
                </h3>
                <p className="text-sm leading-[1.9] text-[#1A1A1A]/55">
                  {pilier.text}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS ANIMÉES ───────────────────────────────── */}
      <AnimatedStats />

      {/* ─── IMAGE IMMERSIVE ─────────────────────────────── */}
      <section className="py-8 px-8 md:px-16">
        <ScrollReveal>
          <div className="relative w-full max-w-3xl mx-auto shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_0_28px_6px_rgba(201,169,97,0.12)]">
            <Image
              src="/image/photodreampulse.jpg"
              alt="DreamPulse — le produit"
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* ─── VIDÉO PROMOTIONNELLE ────────────────────────── */}
      {/*
        Pour ajouter ta vidéo, choisis UNE option :

        Option A — Vidéo locale (fichier dans public/videos/) :
          <VideoSection localSrc="/videos/dreampulse-promo.mp4" caption="DreamPulse — Prototype 2026" />

        Option B — YouTube (remplace l'ID) :
          <VideoSection youtubeId="XXXXXXXX" caption="DreamPulse — Prototype 2026" />

        Option C — Vimeo (remplace l'ID) :
          <VideoSection vimeoId="XXXXXXXX" caption="DreamPulse — Prototype 2026" />
      */}
      <VideoSection localSrc="/videos/dreampulse.mov" caption="DreamPulse — Prototype 2026" />

      {/* ─── TEASER PAGES ─────────────────────────────────── */}
      <section className="px-8 md:px-16 py-32">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="mb-16">
            <p className="text-[10px] tracking-[0.25em] text-[#1A1A1A]/35 uppercase mb-3">
              Explorer
            </p>
            <div className="w-8 h-px bg-[#C9A961]" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#1A1A1A]/[0.15]">
            {[
              {
                num: "01",
                title: "Le Produit",
                text: "Fonctionnement, conception technique et caractéristiques.",
                href: "/le-produit",
              },
              {
                num: "02",
                title: "Notre Histoire",
                text: "La genèse du projet, l'équipe, et le chemin parcouru.",
                href: "/notre-histoire",
              },
              {
                num: "03",
                title: "Manifeste",
                text: "Notre philosophie du réveil et du sommeil comme luxe moderne.",
                href: "/manifeste",
              },
            ].map((card, i) => (
              <ScrollReveal key={card.num} delay={i * 0.1}>
                <Link
                  href={card.href}
                  className="group block px-12 py-10 md:first:pl-0 md:last:pr-0 hover:bg-[#1A1A1A]/[0.02] transition-colors duration-300 cursor-pointer"
                >
                  <p className="text-[10px] tracking-[0.2em] text-[#C9A961] mb-4">
                    {card.num}
                  </p>
                  <h3
                    className="text-2xl text-[#1A1A1A] mb-3 tracking-tight group-hover:text-[#0E1B2C] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#1A1A1A]/50 leading-relaxed mb-6">
                    {card.text}
                  </p>
                  <div className="flex items-center gap-2 text-[11px] tracking-[0.15em] text-[#1A1A1A]/35 group-hover:text-[#C9A961] transition-colors duration-300">
                    <span>Voir</span>
                    <ArrowRight
                      size={12}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
