"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Animated brand intro:
 * - Cross fades in with a vertical sweep
 * - Leaves grow outward and rotate to their positions
 * - Pearl scales up with a shimmering radial highlight
 * - Wordmark types in beneath
 * - Whole screen lifts away after ~2.4s
 */
export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Avoid showing again within the same session
    if (typeof window !== "undefined") {
      const seen = sessionStorage.getItem("perles_intro_seen");
      if (seen) {
        setVisible(false);
        return;
      }
    }
    const t = setTimeout(() => {
      setVisible(false);
      if (typeof window !== "undefined") {
        sessionStorage.setItem("perles_intro_seen", "1");
      }
    }, 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -40,
            transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] },
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#0E1728]"
        >
          {/* Background concentric rings (echo PDF cover) */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            {[1, 2, 3, 4].map((i) => (
              <motion.span
                key={i}
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.18 }}
                transition={{
                  delay: 0.1 + i * 0.12,
                  duration: 1.2,
                  ease: "easeOut",
                }}
                className="absolute rounded-full border border-forest-400/40"
                style={{
                  width: `${220 + i * 140}px`,
                  height: `${220 + i * 140}px`,
                }}
              />
            ))}
          </div>

          {/* Logo construction */}
          <div className="relative flex flex-col items-center">
            <AnimatedLogoMark />
            <Wordmark />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "240px" }}
              transition={{ delay: 1.4, duration: 0.9, ease: "easeInOut" }}
              className="mt-6 h-[2px] overflow-hidden rounded-full bg-white/10"
            >
              <motion.div
                className="h-full w-full"
                style={{
                  background:
                    "linear-gradient(90deg, #2D6E3D, #4F9663, #2D6E3D)",
                }}
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.6,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="mt-4 text-[10px] uppercase tracking-[0.5em] text-white/40"
            >
              Integrating Health &amp; Nature
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function AnimatedLogoMark() {
  return (
    <svg
      width="160"
      height="160"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_10px_30px_rgba(45,110,61,0.4)]"
    >
      <defs>
        <radialGradient id="pearl" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#E8EFE9" />
          <stop offset="80%" stopColor="#B9C9BD" />
          <stop offset="100%" stopColor="#6B8A73" />
        </radialGradient>
        <linearGradient id="leaf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#329619" />
          <stop offset="100%" stopColor="#197D19" />
        </linearGradient>
      </defs>

      {/* Cross — slides in from top */}
      <motion.g
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
      >
        <rect
          x="86"
          y="22"
          width="28"
          height="80"
          rx="4"
          fill="#004B96"
        />
        <rect
          x="64"
          y="44"
          width="72"
          height="28"
          rx="4"
          fill="#004B96"
        />
      </motion.g>

      {/* Left leaf */}
      <motion.path
        d="M100,115 C70,115 48,98 40,72 C66,72 90,90 100,115 Z"
        fill="url(#leaf)"
        initial={{ scale: 0, rotate: -30, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ delay: 0.55, duration: 0.7, ease: "easeOut" }}
        style={{ transformOrigin: "100px 115px" }}
      />
      {/* Right leaf */}
      <motion.path
        d="M100,115 C130,115 152,98 160,72 C134,72 110,90 100,115 Z"
        fill="url(#leaf)"
        initial={{ scale: 0, rotate: 30, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
        style={{ transformOrigin: "100px 115px" }}
      />

      {/* Pearl */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 0.95,
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{ transformOrigin: "100px 80px" }}
      >
        <circle cx="100" cy="80" r="22" fill="url(#pearl)" />
        <circle cx="92" cy="72" r="6" fill="#FFFFFF" opacity="0.85" />
      </motion.g>

      {/* Halo */}
      <motion.circle
        cx="100"
        cy="80"
        r="22"
        stroke="#FFFFFF"
        strokeWidth="1"
        opacity="0"
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
        transition={{
          delay: 1.3,
          duration: 1.4,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
    </svg>
  );
}

function Wordmark() {
  const letters = "Perles Medicales Limited".split("");
  return (
    <div className="mt-6 flex flex-wrap justify-center gap-[1px] text-2xl md:text-3xl font-semibold tracking-tight text-white display-serif">
      {letters.map((l, i) => (
        <motion.span
          key={`${l}-${i}`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 1.2 + i * 0.025,
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          {l === " " ? "\u00A0" : l}
        </motion.span>
      ))}
    </div>
  );
}
