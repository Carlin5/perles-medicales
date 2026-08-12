"use client";

import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { sustainability, landStats, landAllocation, ecoSystems } from "@/lib/content";
import {
  Users,
  Sprout,
  BookOpen,
  Link2,
  Sun,
  Flame,
  Droplet,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";

const iconMap = {
  Users,
  Sprout,
  BookOpen,
  Link2,
  Sun,
  Flame,
  Droplet,
};

export default function SustainabilityPage() {
  return (
    <div className="page-fade">
      <PageHeader
        eyebrow="Social & Environmental Commitment"
        title={
          <>
            Building{" "}
            <span className="text-forest-300">sustainable communities</span>.
          </>
        }
        description="Perles Medicales Ltd integrates social and environmental sustainability directly into its operating model — ensuring business growth contributes to local development and responsible resource use."
      />

      <Pillars />
      <Stats />
      <LandAllocation />
      <EcoSystems />
      <CTASection />
    </div>
  );
}

function Pillars() {
  return (
    <section className="container-max py-24 md:py-32">
      <div className="grid gap-6 md:grid-cols-2">
        {sustainability.map((s, i) => {
          const Icon =
            (iconMap as Record<string, typeof Users>)[s.icon] ?? Users;
          return (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-3xl bg-white p-8 ring-1 ring-navy/5 transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(20,32,57,0.3)]">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-forest-500/10 blur-3xl transition-all group-hover:scale-150"
                />
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-500 text-white shadow-[0_15px_30px_-15px_rgba(45,110,61,0.7)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="display-serif mt-6 text-xl md:text-2xl font-semibold text-navy">
                  {s.title}
                </h3>
                <p className="mt-3 leading-relaxed text-navy/70">{s.body}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="container-max pb-24">
      <div className="grid gap-6 md:grid-cols-3">
        {landStats.map((s, i) => {
          const numeric = !s.value.includes("+") && !s.value.includes("–");
          return (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="relative h-full overflow-hidden rounded-3xl bg-navy-700 p-8 text-white shadow-[0_30px_60px_-30px_rgba(20,32,57,0.5)]">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-forest-500/30 blur-3xl"
                />
                <p className="eyebrow !text-forest-300">Impact</p>
                <p className="display-serif mt-4 text-5xl md:text-6xl font-semibold leading-none">
                  {numeric ? (
                    <Counter to={Number(s.value)} />
                  ) : (
                    s.value
                  )}
                </p>
                <p className="mt-4 text-base font-medium">{s.label}</p>
                <p className="text-sm text-white/60">{s.sub}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function LandAllocation() {
  const total = landAllocation.reduce((a, b) => a + b.acres, 0);
  return (
    <section className="bg-cream-50 py-24">
      <div className="container-max grid gap-12 md:grid-cols-12 md:gap-16 items-center">
        <Reveal className="md:col-span-5">
          <p className="eyebrow">Planned Land Stewardship</p>
          <h2 className="display-serif mt-3 text-balance text-3xl md:text-5xl font-semibold leading-[1.05] text-navy">
            100+ acres targeted for a high-utility mixed-use system.
          </h2>
          <p className="mt-5 text-navy/70 leading-relaxed">
            Our &ldquo;Satellite Community&rdquo; model is designed to support
            3,000–10,000 residents — providing a blueprint for modern
            rural-urban integration anchored in healthcare, agriculture, and
            community infrastructure.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-7">
          <div className="card-soft p-8">
            <div className="flex items-baseline justify-between">
              <p className="eyebrow">Target Allocation</p>
              <p className="text-sm font-semibold text-navy">{total} acres planned</p>
            </div>
            <div className="mt-6 space-y-6">
              {landAllocation.map((l, i) => {
                const pct = (l.acres / total) * 100;
                return (
                  <div key={l.name}>
                    <div className="flex items-baseline justify-between">
                      <p className="text-sm font-semibold text-navy">
                        {l.name}
                      </p>
                      <p className="text-sm text-navy/60">~{l.acres} acres planned</p>
                    </div>
                    <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-navy/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          delay: i * 0.15,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="h-full rounded-full"
                        style={{ background: l.color }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function EcoSystems() {
  return (
    <section className="container-max py-24">
      <div className="max-w-3xl">
        <p className="eyebrow">Solar + Biogas + Water Harvesting</p>
        <h2 className="display-serif mt-3 text-balance text-3xl md:text-5xl font-semibold leading-[1.05] text-navy">
          Total integration of renewable energy, organic inputs, and water
          harvesting.
        </h2>
        <p className="mt-5 text-navy/70 leading-relaxed">
          Designed to minimize our environmental footprint while enabling
          self-sufficient operations across the satellite community.
        </p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-4">
        {ecoSystems.map((e, i) => {
          const Icon =
            (iconMap as Record<string, typeof Sun>)[e.icon] ?? Sun;
          return (
            <Reveal key={e.title} delay={i * 0.06}>
              <div className="group relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-forest-500 to-forest-600 p-6 text-white">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-white/15 blur-3xl transition-all group-hover:scale-150"
                />
                <Icon className="h-7 w-7" />
                <p className="mt-6 text-lg font-semibold">{e.title}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
