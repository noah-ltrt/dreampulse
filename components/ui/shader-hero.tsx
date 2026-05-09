"use client";

import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ShaderHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Animated mesh gradient background */}
      <MeshGradient
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        colors={["#0E1B2C", "#1a2d44", "#C9A961", "#F7F5F0"]}
        speed={0.4}
        distortion={0.6}
        swirl={0.08}
        grainOverlay={0.04}
      />

      {/* Overlay for text legibility */}
      <div className="absolute inset-0 bg-[#0E1B2C]/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full max-w-7xl mx-auto px-8 md:px-16 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-end">

          {/* Hero text — bottom left */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <p className="text-[10px] tracking-[0.3em] text-[#C9A961] uppercase mb-6">
              Projet académique · Bachelier Ingénieur Civil
            </p>
            <h1
              className="text-[clamp(3rem,7vw,6.5rem)] leading-[1.04] tracking-[-0.02em] text-white mb-8"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              Le Réveil<br />
              n&rsquo;a jamais été<br />
              aussi doux.
            </h1>
            <p className="text-[15px] leading-[1.8] text-white/60 max-w-[420px] font-light tracking-wide mb-10">
              Un oreiller intelligent qui vous réveille par vibrations
              progressives, sans bruit, sans lumière.
            </p>
            <Link
              href="/le-produit"
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.2em] text-white/50 uppercase hover:text-[#C9A961] transition-colors duration-300 group cursor-pointer"
            >
              Découvrir le projet
              <ArrowRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          {/* Pulsing border logo — bottom right, desktop only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="hidden md:flex items-center justify-center"
          >
            <div className="relative w-[180px] h-[180px]">
              <PulsingBorder
                style={{ width: "100%", height: "100%" }}
                colorBack="#0E1B2C"
                colors={["#C9A961", "#F7F5F0", "#C9A96199"]}
                speed={0.7}
                roundness={1}
                thickness={0.08}
                pulse={0.35}
                intensity={0.4}
                bloom={0.3}
                spots={4}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                <p
                  className="text-3xl text-white/90 mb-1"
                  style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
                >
                  DP
                </p>
                <p className="text-[8px] tracking-[0.35em] text-[#C9A961] uppercase">
                  DreamPulse
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
