"use client";

import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { phases, competitive } from "@/lib/content";
import { motion } from "framer-motion";
import { TrendingUp, Layers, Building, Briefcase } from "lucide-react";
import CTASection from "@/components/CTASection";

export default function StrategyPage() {
  return (
    <div className="page-fade">
      <PageHeader
        eyebrow="10-Year Vision · 2025–2035"
        title={
          <>
            A phased path to a{" "}
            <span className="text-forest-300">
              self-sustaining development ecosystem
            </span>
            .
          </>
        }
        description="Over the next decade, Perles Medicales Ltd will transition from a multi-sector investment platform into a fully integrated, self-sustaining development ecosystem anchored by healthcare, agro-industrial production, and resilient community infrastructure."
      />

      <PhasesSection />
      <ValueProposition />
      <CTASection />
    </div>
  );
}

function PhasesSection() {
  return (
    <section className="container-max py-24 md:py-32">
      <div className="max-w-3xl">
        <p className="eyebrow">Economic Impact & Employment</p>
        <h2 className="display-serif mt-3 text-balance text-3xl md:text-5xl font-semibold leading-[1.05] text-navy">
          Through a phased growth model, we project a surge in employment.
        </h2>
        <p className="mt-5 text-navy/70 leading-relaxed">
          Direct and indirect employment across healthcare, agriculture,
          forestry, and infrastructure — with significant supply-chain and
          local-contracting multiplier effects.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {phases.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="relative h-full overflow-hidden rounded-3xl bg-white p-8 ring-1 ring-navy/5 shadow-[0_30px_60px_-30px_rgba(20,32,57,0.2)]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-forest-500/10 blur-3xl"
              />

              <div className="flex items-center justify-between">
                <p className="eyebrow">{p.name}</p>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-navy/40">
                  {p.years}
                </span>
              </div>

              <div className="mt-8 flex items-end gap-2">
                <p className="display-serif text-6xl md:text-7xl font-semibold leading-none text-navy">
                  {p.jobs}
                </p>
                <p className="pb-2 text-xs uppercase tracking-[0.2em] text-navy/50">
                  projected jobs
                </p>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-navy/65">
                {p.body}
              </p>

              <div className="mt-8 h-1.5 w-full overflow-hidden rounded-full bg-navy/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${30 + i * 30}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-forest-500 to-forest-300"
                />
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12">
        <div className="card-soft p-8 md:p-10 grid gap-6 md:grid-cols-4 md:items-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-500 text-white shadow-[0_15px_30px_-15px_rgba(45,110,61,0.7)]">
            <TrendingUp className="h-6 w-6" />
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow">Indirect Impact</p>
            <p className="mt-2 text-lg leading-relaxed text-navy">
              Supply chain demand and local contracting are expected to create
              a <span className="font-semibold">significant multiplier effect</span>
              {" "}across the regional economy.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function ValueProposition() {
  const items = [
    {
      icon: Layers,
      title: "Healthcare-Anchored Model",
      body: "Healthcare drives demand, builds trust, and shapes development of all other sectors.",
    },
    {
      icon: Building,
      title: "Integrated Multi-Sector Approach",
      body: "Strong linkages between healthcare, agriculture, real estate, and hospitality.",
    },
    {
      icon: Briefcase,
      title: "Phased & De-Risked Growth",
      body: "Stepwise investment allows early revenue, continuous reinvestment, and gradual scale.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-navy-700 py-24 md:py-32 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-bg-dark opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-forest-500/30 blur-3xl"
      />

      <div className="container-max relative">
        <div className="max-w-3xl">
          <p className="eyebrow !text-forest-300">Value Proposition</p>
          <h2 className="display-serif mt-3 text-balance text-3xl md:text-5xl font-semibold leading-[1.05]">
            Differentiated. Integrated. Asset-backed.
          </h2>
          <p className="mt-5 text-white/70 leading-relaxed">
            Combining near-term revenue generation with long-term asset
            appreciation and scalable impact — a balanced opportunity for
            investors and partners.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08}>
              <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                  <it.icon className="h-5 w-5 text-forest-300" />
                </div>
                <h3 className="mt-6 text-lg font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {it.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
