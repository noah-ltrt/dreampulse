"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { VideoSection } from "@/components/video-section";

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
      <div className={`bg-[#E8E5DE] flex items-center justify-center ${className}`}>
        <span className="text-[10px] tracking-[0.15em] text-[#1A1A1A]/25 uppercase">
          {label}
        </span>
      </div>
    );
  }
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 28, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Home() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-20 items-center min-h-[calc(100vh-4rem)]">

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col justify-center py-24 md:py-0"
            >
              <motion.p
                variants={itemVariants}
                className="text-[10px] tracking-[0.25em] text-[#C9A961] mb-8 uppercase"
              >
                Projet académique · Bachelier Ingénieur Civil
              </motion.p>

              <motion.h1
                variants={itemVariants}
                className="text-[clamp(3rem,7vw,6.5rem)] leading-[1.04] tracking-[-0.02em] text-[#1A1A1A] mb-8"
                style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
              >
                Le Réveil<br />
                n&rsquo;a jamais été<br />
                aussi doux.
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-[15px] leading-[1.8] text-[#1A1A1A]/55 max-w-[420px] font-light tracking-wide"
              >
                Un oreiller intelligent qui vous réveille par vibrations
                progressives, sans bruit, sans lumière — dans le respect
                de votre sommeil.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="mt-12 flex items-center gap-3 text-[#1A1A1A]/30"
              >
                <ChevronDown size={14} className="animate-bounce" />
                <span className="text-[10px] tracking-[0.2em] uppercase">
                  Défiler
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-full md:w-auto"
            >
              <SiteImage
                src="/image/photogroupe.jpeg"
                alt="Photo produit DreamPulse"
                className="w-full h-[320px] md:w-[340px] md:h-[460px]"
                label="Photo produit 3:4"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── PHRASE MANIFESTE ────────────────────────────── */}
      <section className="py-[160px] px-8 md:px-16">
        <ScrollReveal className="max-w-4xl mx-auto text-center">
          <p
            className="text-[clamp(1.9rem,4.5vw,4rem)] leading-[1.2] tracking-[-0.01em] text-[#1A1A1A]"
            style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
          >
            &ldquo;Chaque matin commence<br />la nuit précédente.&rdquo;
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
                src={null}
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
                DreamPulse intègre un système de vibration miniaturisé
                directement dans l&rsquo;oreiller. L&rsquo;intensité augmente
                progressivement, respectant les cycles naturels du sommeil.
              </p>
              <p className="text-sm leading-[1.9] text-[#1A1A1A]/60 max-w-[380px]">
                Conçu dans le cadre d&rsquo;un bachelier en ingénierie civile,
                chaque composant a été choisi pour sa fiabilité et son confort
                au contact.
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
                text: "Des vibrations qui s'intensifient graduellement, pour un réveil naturel qui imite le lever du soleil — sans lumière ni son.",
              },
              {
                num: "II",
                title: "Conception ingénieure",
                text: "Électronique embarquée, prototypage manuel et tests rigoureux réalisés en laboratoire académique, de A à Z.",
              },
              {
                num: "III",
                title: "Sommeil respecté",
                text: "Aucune lumière, aucun son. L'oreiller reste un espace de paix, même au moment du réveil.",
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

      {/* ─── IMAGE IMMERSIVE ─────────────────────────────── */}
      <section className="py-8 px-8 md:px-16">
        <ScrollReveal>
          <SiteImage
            src={null}
            alt="Ambiance — chambre, lumière douce du matin"
            className="w-full h-[70vh]"
            label="Ambiance — chambre, lumière douce du matin"
          />
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
      <VideoSection caption="DreamPulse — Prototype 2026" />

      {/* ─── TEASER PAGES ─────────────────────────────────── */}
      <section className="px-8 md:px-16 py-32">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="mb-16">
            <p className="text-[10px] tracking-[0.25em] text-[#1A1A1A]/35 uppercase mb-3">
              Explorer
            </p>
            <div className="w-8 h-px bg-[#C9A961]" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#1A1A1A]/[0.08]">
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
                  className="group block px-8 py-10 md:first:pl-0 md:last:pr-0 hover:bg-[#1A1A1A]/[0.02] transition-colors duration-300 cursor-pointer"
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
