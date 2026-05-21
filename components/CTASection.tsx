"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="container-max py-24">
      <div className="relative overflow-hidden rounded-3xl bg-navy-700 px-8 py-16 md:px-16 md:py-24 text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 grid-bg-dark opacity-50"
        />
        <motion.div
          aria-hidden
          initial={{ opacity: 0.4, rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full border border-white/10"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(45,110,61,0.45), transparent 70%)",
          }}
        />
        <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow !text-forest-300">Partner With Us</p>
            <h2 className="display-serif mt-3 text-balance text-3xl md:text-5xl font-semibold leading-tight">
              Invest in healthcare. Grow with nature. Build with us.
            </h2>
            <p className="mt-5 max-w-xl text-white/70">
              Whether you&apos;re an impact investor, development finance
              partner, or strategic collaborator — there is a place for you in
              the Perles Medicales ecosystem.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-forest-500 px-7 py-4 text-sm font-semibold transition-all hover:bg-forest-400 hover:translate-x-0.5"
            >
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="mailto:perlesmedicalesltd@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold transition-all hover:border-white/50"
            >
              <Mail className="h-4 w-4" /> perlesmedicalesltd@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
