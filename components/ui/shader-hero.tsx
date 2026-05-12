"use client";

import { MeshGradient } from "@paper-design/shaders-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

export function ShaderHero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Mesh gradient background — warm ivory tones */}
      <MeshGradient
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        colors={["#F7F5F0", "#E8E2D4", "#C9A961", "#0E1B2C"]}
        speed={0.3}
        distortion={0.5}
        swirl={0.06}
        grainOverlay={0.05}
      />

      {/* Subtle overlay to unify tones */}
      <div className="absolute inset-0 bg-[#F7F5F0]/30" />

      {/* Gradient fade to ivory at the bottom — smooth transition to the rest of the page */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-[#F7F5F0]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 w-full min-h-screen flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-20 items-center w-full py-32 md:py-0">

          {/* Hero text */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            className="flex flex-col"
          >
            <p className="text-[10px] tracking-[0.25em] text-[#C9A961] mb-8 uppercase">
              Projet académique | Groupe 53 · Bachelier Ingénieur Civil
            </p>

            <h1
              className="text-[clamp(3rem,7vw,6.5rem)] leading-[1.04] tracking-[-0.02em] text-[#1A1A1A] mb-8"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              Le Réveil<br />
              n&rsquo;a jamais été<br />
              aussi doux.
            </h1>

            <p className="text-[15px] leading-[1.8] text-[#1A1A1A]/55 max-w-[420px] font-light tracking-wide">
              Un oreiller intelligent qui vous réveille par vibrations
              progressives, sans bruit, sans lumière — dans le respect
              de votre sommeil.
            </p>

            <div className="mt-12 flex items-center gap-3 text-[#1A1A1A]/30">
              <ChevronDown size={14} className="animate-bounce" />
              <span className="text-[10px] tracking-[0.2em] uppercase">Défiler</span>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
            className="w-full md:w-auto"
          >
            <div className="relative w-full h-[400px] md:w-[420px] md:h-[540px] overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_0_32px_8px_rgba(201,169,97,0.15)]">
              <Image
                src="/image/NLT_5732.jpg"
                alt="Photo produit DreamPulse"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
