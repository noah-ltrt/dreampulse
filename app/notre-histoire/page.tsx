"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { TeamHoverCard } from "@/components/ui/team-hover-card";

function ImagePlaceholder({
  className = "",
  label = "Image à venir",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div className={`bg-[#E8E5DE] flex items-center justify-center shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_0_24px_4px_rgba(201,169,97,0.10)] ${className}`}>
      <span className="text-[12px] tracking-[0.15em] text-[#1A1A1A]/25 uppercase">
        {label}
      </span>
    </div>
  );
}

const teamMembers = [
  { name: "Milan Debroux", role: "Bac 1 Ingénieur Civil", photo: "/image/NLT_5685.jpg" },
  { name: "Harold Dehaes", role: "Bac 1 Ingénieur Civil", photo: "/image/NLT_5692.jpg" },
  { name: "Célestine De Meester", role: "Bac 1 Ingénieur Civil", photo: "/image/NLT_5694.jpg" },
  { name: "Lea Fontenoy", role: "Bac 1 Ingénieur Civil", photo: "/image/NLT_5680.jpg" },
  { name: "Noah La Tartara", role: "Bac 1 Ingénieur Civil", photo: "/image/NLT_5695.jpg" },
  { name: "Diane Lazzarotto", role: "Bac 1 Ingénieur Civil", photo: "/image/NLT_5687.jpg" },
];

const timeline = [
  {
    date: "Sept. 2025",
    title: "Naissance du projet",
    text: "Le cours de projet démarre. L'équipe identifie la problématique du réveil brutal comme terrain d'exploration ingénieure.",
  },
  {
    date: "Oct. 2025",
    title: "Recherche & Définition",
    text: "Études de l'existant, interviews d'utilisateurs, choix technologique du réveil par vibration. Premiers schémas.",
  },
  {
    date: "Nov. 2025",
    title: "Premier prototype",
    text: "Assemblage du prototype V1 : circuit nu, moteur vibrant, code de base. Premiers tests de réveil en laboratoire.",
  },
  {
    date: "Déc. 2025",
    title: "Itérations V2 & V3",
    text: "Ajustement de la courbe de progression, intégration dans l'oreiller, tests de confort sur dormeurs volontaires.",
  },
  {
    date: "Janv. 2026",
    title: "Version finale",
    text: "Prototype finalisé, housse cousue, documentation technique complète et présentation du site vitrine.",
  },
];

export default function NotreHistoire() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="pt-40 pb-20 px-8 md:px-16 text-center">
        <div className="max-w-3xl mx-auto">
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
              Notre Histoire
            </h1>
            <p className="text-[15px] leading-[1.8] text-[#1A1A1A]/50">
              La genèse d'un projet académique, entre contraintes d'ingénierie
              et désir de concevoir quelque chose d'utile.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── TEXTE NARRATIF ───────────────────────────────── */}
      <section className="px-8 md:px-16 py-20 border-t border-[#1A1A1A]/[0.07]">
        <div className="max-w-[700px] mx-auto">
          <ScrollReveal>
            <p
              className="text-[10px] tracking-[0.25em] text-[#C9A961] uppercase mb-8"
            >
              La genèse
            </p>
          </ScrollReveal>

          {[
            "Tout a commencé par deux frustrations concrètes : le partenaire qui part travailler tôt et met son alarme à fond, rendant le rendormissement impossible — et les personnes malentendantes, que le réveil sonore ne suffit pas à réveiller. Nous voulions changer cela.",
            "Dans le cadre du cours LEPL1102 en bachelier d'ingénieur civil à l'École Polytechnique de Louvain, nous avons eu carte blanche pour concevoir un objet qui réponde à un problème réel. Six étudiants, un quadrimestre, et une idée simple : transformer l'oreiller en réveil.",
            "Le défi technique était réel. Intégrer de l'électronique dans un objet de literie, garantir le confort, maîtriser la courbe de vibration, assurer la fiabilité — chaque contrainte a nourri notre apprentissage. Chaque prototype raté nous a appris quelque chose.",
            "DreamPulse n'est pas un produit commercial. C'est la trace d'un processus, la preuve que l'ingénierie peut naître d'une attention portée au quotidien. Un oreiller qui pense à vous, avant même que vous ne vous réveilliez.",
          ].map((para, i) => (
            <ScrollReveal key={i} delay={i * 0.08} className="mb-8">
              {i === 0 && (
                <p
                  className="text-sm leading-[2] text-[#1A1A1A]/70"
                  style={{ textIndent: "0" }}
                >
                  <span
                    className="float-left text-[4rem] leading-[0.75] mr-3 mt-1 text-[#1A1A1A]"
                    style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
                  >
                    T
                  </span>
                  out a commencé par deux frustrations concrètes : le partenaire qui part travailler tôt et met son alarme à fond, rendant le rendormissement impossible — et les personnes malentendantes, que le réveil sonore ne suffit pas à réveiller. Nous voulions changer cela.
                </p>
              )}
              {i !== 0 && (
                <>
                  {i === 2 && (
                    <div className="flex justify-center my-6">
                      <div className="w-16 h-px bg-[#C9A961]/40" />
                    </div>
                  )}
                  <p className="text-sm leading-[2] text-[#1A1A1A]/70">
                    {para}
                  </p>
                </>
              )}
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ─── PHOTO DE GROUPE ──────────────────────────────── */}
      {/* ↓ Remplace null par "/image/TON_FICHIER.jpg" pour afficher la vraie photo */}
      {(() => {
        const src: string | null = "/image/NLT_5702.jpg";
        return (
          <section className="px-8 md:px-16 py-12 border-t border-[#1A1A1A]/[0.07]">
            <ScrollReveal>
              {src ? (
                <div className="relative w-full max-w-3xl mx-auto shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_0_28px_6px_rgba(201,169,97,0.12)]">
                  <Image src="/image/NLT_5702.jpg" alt="Photo de groupe DreamPulse — Groupe 53" width={1200} height={800} className="w-full h-auto object-contain"/>
                </div>
              ) : (
                <ImagePlaceholder className="w-full h-[55vh] md:h-[70vh]" label="Photo de groupe — Groupe 53" />
              )}
            </ScrollReveal>
          </section>
        );
      })()}

      {/* ─── ÉQUIPE ───────────────────────────────────────── */}
      <section className="px-8 md:px-16 py-24 border-t border-[#1A1A1A]/[0.07]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="mb-16">
            <p className="text-[10px] tracking-[0.25em] text-[#C9A961] uppercase mb-2">
              Le Groupe 53
            </p>
            <h2
              className="text-3xl md:text-4xl tracking-tight text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              Six esprits, un projet
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {teamMembers.map((member, i) => (
              <ScrollReveal key={member.name + i} delay={i * 0.1}>
                <TeamHoverCard member={member} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─────────────────────────────────────── */}
      <section className="px-8 md:px-16 py-24 border-t border-[#1A1A1A]/[0.07]">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal className="mb-16">
            <p className="text-[10px] tracking-[0.25em] text-[#C9A961] uppercase mb-2">
              Chronologie
            </p>
            <h2
              className="text-3xl md:text-4xl tracking-tight text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              Le parcours
            </h2>
          </ScrollReveal>

          <div className="relative pl-8 border-l border-[#C9A961]/20">
            {timeline.map((event, i) => (
              <ScrollReveal key={event.date} delay={i * 0.1}>
                <div className="mb-12 last:mb-0 relative">
                  <div className="absolute -left-[calc(2rem+5px)] top-1 w-2.5 h-2.5 rounded-full bg-[#C9A961]/60 border-2 border-[#F7F5F0]" />
                  <p className="text-[10px] tracking-[0.18em] text-[#C9A961] uppercase mb-2">
                    {event.date}
                  </p>
                  <h3
                    className="text-lg text-[#1A1A1A] mb-2 tracking-tight"
                    style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
                  >
                    {event.title}
                  </h3>
                  <p className="text-sm leading-[1.85] text-[#1A1A1A]/55">
                    {event.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
