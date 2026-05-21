"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
};

export default function PageHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  return (
    <section className="relative overflow-hidden bg-navy-700 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-bg-dark opacity-50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-forest-500/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-[-10%] h-[420px] w-[420px] rounded-full bg-logoBlue/30 blur-3xl"
      />

      <div
        className={`container-max relative flex min-h-[42vh] flex-col justify-end pb-16 pt-40 ${
          align === "center" ? "items-center text-center" : ""
        }`}
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow !text-forest-300"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="display-serif mt-4 text-balance text-4xl md:text-6xl font-semibold leading-[1.05]"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-3xl text-base md:text-lg text-white/70 leading-relaxed"
          >
            {description}
          </motion.p>
        )}

        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </section>
  );
}
