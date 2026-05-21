"use client";

import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { timeline, visionMission, values, company } from "@/lib/content";
import { motion } from "framer-motion";
import { Eye, Target, Star, Check } from "lucide-react";
import CTASection from "@/components/CTASection";

export default function AboutPage() {
  return (
    <div className="page-fade">
      <PageHeader
        eyebrow="About the Company"
        title={
          <>
            From a peer network of doctors to an{" "}
            <span className="text-forest-300">integrated investment platform</span>
            .
          </>
        }
        description="Perles Medicales Limited is a Uganda-based private limited company established in 2021 and formally registered in 2022 by a network of medical professionals — alumni of Mbarara University of Science and Technology (MUST)."
      />

      <Story />
      <Timeline />
      <VisionMissionValues />
      <CTASection />
    </div>
  );
}

function Story() {
  return (
    <section className="container-max py-24 md:py-32">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-5">
          <p className="eyebrow">Our Story</p>
          <h2 className="display-serif mt-3 text-balance text-3xl md:text-5xl font-semibold leading-[1.05] text-navy">
            Pooled capital. Clinical expertise. Collective vision.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-7 space-y-5 text-lg text-navy/75 leading-relaxed">
          <p>
            The company&apos;s origins trace back to a cohort of medical doctors
            (Class of 2003) who began by informally pooling resources to explore
            collective investment opportunities. Over time, this collaboration
            evolved into a structured and strategic investment group with a
            shared long-term vision.
          </p>
          <p>
            By 2022, Perles Medicales had formalized its governance framework,
            established elected leadership structures, and implemented robust
            financial oversight systems to ensure transparency, accountability,
            and disciplined decision-making.
          </p>
          <p>
            Following formal incorporation, the company transitioned into a
            professionally managed entity with a clear growth strategy and
            scalable operating model — focused on building an integrated,
            multi-sector development ecosystem spanning healthcare, agriculture,
            real estate, and related industries.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="relative bg-cream-50 py-24 md:py-32 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full bg-forest-500/10 blur-3xl"
      />
      <div className="container-max relative">
        <div className="text-center">
          <p className="eyebrow">Our Origin</p>
          <h2 className="display-serif mt-3 text-balance text-3xl md:text-5xl font-semibold leading-[1.05] text-navy">
            Founded by MUST Alumni — Class of 2003.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-navy/70 leading-relaxed">
            A network of medical doctors who turned peer collaboration into
            purposeful collective investment.
          </p>
        </div>

        <div className="mt-16 relative">
          <div
            aria-hidden
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-forest-300/60 to-transparent md:-translate-x-px"
          />
          <div className="space-y-12 md:space-y-24">
            {timeline.map((t, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative grid md:grid-cols-2 gap-6 items-center ${
                    left ? "" : "md:[&>div:first-child]:order-2"
                  }`}
                >
                  <div className={left ? "md:pr-12 md:text-right" : "md:pl-12"}>
                    <p className="display-serif text-5xl md:text-6xl font-semibold text-forest-600">
                      {t.year}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-navy">
                      {t.title}
                    </h3>
                    <p className="mt-2 text-navy/65 leading-relaxed">
                      {t.body}
                    </p>
                  </div>
                  <div className="hidden md:block" />
                  <span
                    aria-hidden
                    className="absolute left-4 md:left-1/2 top-3 h-4 w-4 -translate-x-[7px] md:-translate-x-1/2 rounded-full bg-forest-500 ring-4 ring-cream-50 shadow-[0_0_0_4px_rgba(45,110,61,0.25)]"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function VisionMissionValues() {
  return (
    <section className="container-max py-24 md:py-32">
      <div className="text-center max-w-3xl mx-auto">
        <p className="eyebrow">Our Vision and Mission</p>
        <h2 className="display-serif mt-3 text-balance text-3xl md:text-5xl font-semibold leading-[1.05] text-navy">
          What We Stand For
        </h2>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        <Reveal>
          <div className="relative h-full overflow-hidden rounded-3xl bg-navy-700 p-8 text-white shadow-[0_30px_60px_-30px_rgba(20,32,57,0.5)]">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/5 blur-2xl"
            />
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
              <Eye className="h-5 w-5 text-forest-300" />
            </div>
            <p className="eyebrow !text-forest-300 mt-6">Vision</p>
            <p className="mt-4 leading-relaxed text-white/85">
              {visionMission.vision}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative h-full overflow-hidden rounded-3xl bg-forest-500 p-8 text-white shadow-[0_30px_60px_-30px_rgba(45,110,61,0.6)]">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-2xl"
            />
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20">
              <Target className="h-5 w-5 text-white" />
            </div>
            <p className="eyebrow !text-white/80 mt-6">Mission</p>
            <p className="mt-4 leading-relaxed text-white/95">
              {visionMission.mission}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="relative h-full overflow-hidden rounded-3xl bg-white p-8 ring-1 ring-navy/10 shadow-[0_30px_60px_-30px_rgba(20,32,57,0.25)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-700 text-white">
              <Star className="h-5 w-5" />
            </div>
            <p className="eyebrow mt-6">Values</p>
            <ul className="mt-4 space-y-3">
              {values.map((v) => (
                <li key={v} className="flex items-center gap-3 text-navy">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-forest-500/10 text-forest-600">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="font-medium">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-14">
        <div className="card-soft p-8 md:p-10">
          <p className="eyebrow">Strategic Priorities & Investment Model</p>
          <p className="mt-4 text-lg leading-relaxed text-navy/75">
            Perles Medicales Ltd is pursuing a long-term strategy to develop an
            integrated investment ecosystem anchored on a{" "}
            <span className="font-semibold text-navy">
              satellite community model
            </span>
            . The approach is designed to progressively build a self-sustaining
            environment where healthcare, serving as the anchor sector, drives
            and connects livelihoods, infrastructure and commercial activities —
            reinforcing value across all sectors rather than operating in
            isolation.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
