"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  photo?: string | null;
}

export function TeamHoverCard({ member }: { member: TeamMember }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Portrait */}
      <div className="relative w-full aspect-[3/4] mb-5 overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_0_24px_4px_rgba(201,169,97,0.10)]">

        {/* Photo ou placeholder */}
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            className="object-cover object-top"
          />
        ) : (
          <div className="w-full h-full bg-[#E8E5DE] flex items-center justify-center">
            <span className="text-[11px] tracking-[0.15em] text-[#1A1A1A]/25 uppercase">
              Portrait
            </span>
          </div>
        )}

        {/* Hover overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 bg-[#0E1B2C]/85 flex flex-col items-center justify-center px-4 text-center"
            >
              <div className="w-6 h-px bg-[#C9A961] mb-4" />
              <p className="text-[11px] tracking-[0.2em] text-[#C9A961] uppercase mb-2">
                Groupe 53
              </p>
              <p className="text-xs leading-relaxed text-white/70">
                École Polytechnique<br />de Louvain
              </p>
              <div className="w-6 h-px bg-[#C9A961] mt-4" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Nom & rôle */}
      <motion.p
        animate={{ color: hovered ? "#C9A961" : "#1A1A1A" }}
        transition={{ duration: 0.2 }}
        className="text-[20px] tracking-tight mb-1"
        style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
      >
        {member.name}
      </motion.p>
      <p className="text-[11px] tracking-[0.12em] text-[#1A1A1A]/40 uppercase">
        {member.role}
      </p>
    </div>
  );
}
