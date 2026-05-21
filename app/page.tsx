"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import CTASection from "@/components/CTASection";
import {
  company,
  landStats,
  pillars,
  competitive,
} from "@/lib/content";

const PearlScene = dynamic(() => import("@/components/PearlScene"), {
  ssr: false,
  loading: () => (
    <div className="grid h-full w-full place-items-center bg-[#0E1728]">
      <div className="h-12 w-12 animate-pulse rounded-full bg-forest-400/40" />
    </div>
  ),
});

export default function HomePage() {
  return (
    <div className="page-fade">
      <Hero />
      <MarqueeStrip />
      <IntroSection />
      <StatsSection />
      <PillarsPreview />
      <AdvantageSection />
      <CTASection />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-700 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-bg-dark opacity-40"
      />
      {/* 3D pearl scene fills the right side, full bg on mobile */}
      <div className="absolute inset-0 md:left-auto md:right-0 md:w-[58%] opacity-90">
        <PearlScene />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-navy-700 via-navy-700/85 to-transparent md:from-navy-700 md:via-navy-700/30"
        />
      </div>

      <div className="container-max relative grid min-h-[100vh] grid-cols-1 items-center gap-12 py-32 md:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-white/80 backdrop-blur"
          >
            <Sparkles className="h-3 w-3 text-forest-300" />
            Company Profile · 2025
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="display-serif mt-6 text-balance text-5xl leading-[1.02] md:text-7xl font-semibold"
          >
            Perles <span className="text-forest-300">Medicales</span> Limited
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-6 max-w-xl text-base md:text-xl text-white/75 leading-relaxed"
          >
            Integrated investments in healthcare, livelihoods, and sustainable
            community growth — anchored in Kampala, Uganda.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full bg-forest-500 px-6 py-3 text-sm font-semibold transition-all hover:bg-forest-400 hover:translate-x-0.5"
            >
              Discover our story <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/business"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition-all hover:border-white/50"
            >
              Explore business pillars
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="mt-12 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/40"
          >
            <MapPin className="h-3 w-3 text-forest-300" />
            Uganda · Private Limited Company
          </motion.div>
        </div>

        <div className="hidden md:block" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-white/50"
      >
        <span>Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}

function MarqueeStrip() {
  const items = [
    "Healthcare-Anchored Model",
    "Agro-Industrial Production",
    "Real Estate & Infrastructure",
    "Hospitality & Wellness",
    "Sustainable Community Growth",
    "MUST Alumni · Class of 2003",
    "Phased De-Risked Growth",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-navy/10 bg-cream-100 py-5">
      <div className="flex w-max items-center gap-12 animate-marquee">
        {doubled.map((it, i) => (
          <div
            key={i}
            className="flex items-center gap-12 text-xs md:text-sm uppercase tracking-[0.3em] text-navy/60"
          >
            <span>{it}</span>
            <span className="h-1 w-1 rounded-full bg-forest-500" />
          </div>
        ))}
      </div>
    </div>
  );
}

function IntroSection() {
  return (
    <section className="container-max py-24 md:py-32">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-5">
          <p className="eyebrow">Who We Are</p>
          <h2 className="display-serif mt-3 text-balance text-3xl md:text-5xl font-semibold leading-[1.05] text-navy">
            A healthcare-anchored ecosystem, built by doctors, for communities.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-7">
          <p className="text-lg leading-relaxed text-navy/75">
            Perles Medicales Limited is a Uganda-based private limited company
            established in 2021 and formally registered in 2022 by a network of
            medical professionals — alumni of Mbarara University of Science and
            Technology (MUST). We operate as a member-driven investment
            platform with healthcare as our anchor sector, shaping our broader
            strategy across agriculture, real estate, and hospitality.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-navy/75">
            By leveraging pooled capital and deep clinical expertise, we
            generate sustainable financial returns while advancing socio-
            economic development and improving access to essential services.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-forest-600 link-underline"
          >
            Read our full story <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="container-max pb-24">
      <div className="grid gap-6 md:grid-cols-3">
        {landStats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="card-soft relative overflow-hidden p-8 h-full">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-forest-500/10 blur-3xl"
              />
              <p className="eyebrow">Stewardship</p>
              <p className="display-serif mt-3 text-5xl md:text-6xl font-semibold leading-none text-navy">
                {s.value.includes("+") || s.value.includes("–") ? (
                  s.value
                ) : (
                  <Counter to={Number(s.value)} suffix="" />
                )}
              </p>
              <p className="mt-4 text-base font-medium text-navy">{s.label}</p>
              <p className="text-sm text-navy/55">{s.sub}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function PillarsPreview() {
  return (
    <section className="relative bg-cream-50 py-24 md:py-32">
      <div className="container-max">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="eyebrow">Strategic Pillars</p>
            <h2 className="display-serif mt-3 text-balance text-3xl md:text-5xl font-semibold leading-[1.05] text-navy">
              Four sectors, one ecosystem.
            </h2>
          </div>
          <Link
            href="/business"
            className="btn-ghost self-start md:self-end"
          >
            See all pillars <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <Link
                href={`/business#${p.id}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-7 ring-1 ring-navy/5 transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(20,32,57,0.3)]"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-forest-500/10 blur-3xl transition-all group-hover:scale-150"
                />
                <span className="inline-flex w-fit items-center rounded-full bg-forest-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-forest-600">
                  {p.badge}
                </span>
                <h3 className="display-serif mt-5 text-2xl font-semibold text-navy">
                  {p.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/65">
                  {p.summary}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest-600">
                  Explore
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AdvantageSection() {
  return (
    <section className="container-max py-24 md:py-32">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16 items-start">
        <Reveal className="md:col-span-5 md:sticky md:top-28">
          <p className="eyebrow">Competitive Advantage</p>
          <h2 className="display-serif mt-3 text-balance text-3xl md:text-5xl font-semibold leading-[1.05] text-navy">
            A differentiated, integrated investment platform.
          </h2>
          <p className="mt-5 text-navy/70 leading-relaxed">
            Our model addresses critical gaps in healthcare access, food
            systems, and infrastructure — building a resilient ecosystem that
            balances near-term revenue with long-term asset appreciation.
          </p>
        </Reveal>

        <div className="md:col-span-7 grid gap-4 sm:grid-cols-2">
          {competitive.slice(0, 4).map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <div className="card-soft p-6 h-full">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-500/10 text-forest-600">
                  <span className="text-xl">✚</span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-navy">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/65">
                  {c.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
