"use client";

import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/scroll-reveal";

interface VideoSectionProps {
  // Pour une vidéo locale : mets le fichier dans public/videos/ et passe "/videos/promo.mp4"
  localSrc?: string;
  // Pour YouTube : colle l'ID de la vidéo (ex: "dQw4w9WgXcQ" depuis youtube.com/watch?v=dQw4w9WgXcQ)
  youtubeId?: string;
  // Pour Vimeo : colle l'ID de la vidéo (ex: "123456789")
  vimeoId?: string;
  caption?: string;
}

function LocalVideo({ src, caption }: { src: string; caption?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);

  const toggle = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
      setStarted(true);
    }
  };

  return (
    <div className="relative w-full aspect-video bg-[#0E1B2C] group cursor-pointer" onClick={toggle}>
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        onEnded={() => { setPlaying(false); setStarted(false); }}
        playsInline
      />

      {/* Overlay sombre au hover quand la vidéo tourne */}
      <div className={`absolute inset-0 transition-opacity duration-500 bg-black ${playing ? "opacity-0 group-hover:opacity-20" : "opacity-30"}`} />

      {/* Bouton play/pause */}
      <AnimatePresence>
        {(!playing || !started) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-18 h-18 rounded-full border border-white/30 backdrop-blur-sm bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
              style={{ width: "72px", height: "72px" }}>
              <Play size={22} className="text-white ml-1" fill="white" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bouton pause visible au hover quand la vidéo tourne */}
      {playing && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-18 h-18 rounded-full border border-white/30 backdrop-blur-sm bg-white/10 flex items-center justify-center"
            style={{ width: "72px", height: "72px" }}>
            <Pause size={22} className="text-white" fill="white" />
          </div>
        </div>
      )}

      {caption && (
        <p className="absolute bottom-5 left-0 right-0 text-center text-[10px] tracking-[0.2em] text-white/40 uppercase">
          {caption}
        </p>
      )}
    </div>
  );
}

function EmbedVideo({ embedSrc, caption }: { embedSrc: string; caption?: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full aspect-video bg-[#0E1B2C]">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border border-white/20 rounded-full animate-spin border-t-white/60" />
        </div>
      )}
      <iframe
        src={embedSrc}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => setLoaded(true)}
      />
      {caption && (
        <p className="absolute bottom-5 left-0 right-0 text-center text-[10px] tracking-[0.2em] text-white/40 uppercase">
          {caption}
        </p>
      )}
    </div>
  );
}

export function VideoSection({
  localSrc,
  youtubeId,
  vimeoId,
  caption,
}: VideoSectionProps) {
  const embedSrc = youtubeId
    ? `https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&color=white`
    : vimeoId
    ? `https://player.vimeo.com/video/${vimeoId}?color=C9A961&title=0&byline=0&portrait=0`
    : null;

  return (
    <section className="px-8 md:px-16 py-24">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="mb-10">
          <p className="text-[10px] tracking-[0.25em] text-[#C9A961] uppercase mb-2">
            Présentation
          </p>
          <h2
            className="text-3xl md:text-4xl tracking-tight text-[#1A1A1A]"
            style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
          >
            Voir DreamPulse en action
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          {localSrc ? (
            <LocalVideo src={localSrc} caption={caption} />
          ) : embedSrc ? (
            <EmbedVideo embedSrc={embedSrc} caption={caption} />
          ) : (
            /* Placeholder tant qu'aucune vidéo n'est configurée */
            <div className="relative w-full aspect-video bg-[#0E1B2C] flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center">
                <Play size={20} className="text-white/30 ml-1" />
              </div>
              <p className="text-[10px] tracking-[0.2em] text-white/25 uppercase">
                Vidéo à venir
              </p>
            </div>
          )}
        </ScrollReveal>

        {(youtubeId || vimeoId || localSrc) && caption && !localSrc && (
          <ScrollReveal delay={0.15} className="mt-5">
            <p className="text-xs text-[#1A1A1A]/40 tracking-wide text-center">
              {caption}
            </p>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
