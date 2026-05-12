"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

function Counter({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const steps = 60;
    const increment = target / steps;
    const interval = (duration * 1000) / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

const stats = [
  { value: 200,  suffix: "",    label: "spires dans la bobine" },
  { value: 15,   suffix: " Hz", label: "fréquence maximale" },
  { value: 5,    suffix: " Hz", label: "fréquence de départ" },
  { value: 6,    suffix: " V",  label: "alimentation par piles" },
];

export function AnimatedStats() {
  return (
    <section className="px-8 md:px-16 py-24 border-t border-[#1A1A1A]/[0.07]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
              className="text-center md:text-left"
            >
              <p
                className="text-[clamp(2.8rem,5vw,4.5rem)] leading-none tracking-[-0.03em] text-[#1A1A1A] mb-3"
                style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
              >
                <Counter target={stat.value} suffix={stat.suffix} duration={1.8} />
              </p>
              <div className="w-6 h-px bg-[#C9A961] mb-3 mx-auto md:mx-0" />
              <p className="text-[11px] tracking-[0.18em] text-[#1A1A1A]/45 uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
