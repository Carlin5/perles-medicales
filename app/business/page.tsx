"use client";

import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { pillars, competitive } from "@/lib/content";
import {
  Plus,
  Wheat,
  Building2,
  Leaf,
  CheckCircle2,
  Hexagon,
  Diamond,
  Scale,
  Triangle,
  Star,
} from "lucide-react";
import CTASection from "@/components/CTASection";

const iconMap = {
  Plus,
  Wheat,
  Building2,
  Leaf,
  Hexagon,
  Diamond,
  Scale,
  Triangle,
  Star,
};

export default function BusinessPage() {
  return (
    <div className="page-fade">
      <PageHeader
        eyebrow="Strategic Pillars"
        title={
          <>
            Four business pillars, one{" "}
            <span className="text-forest-300">integrated ecosystem</span>.
          </>
        }
        description="Perles Medicales Ltd operates across four key business pillars that translate its long-term strategy into practical, revenue-generating activities."
      />

      <Pillars />
      <Advantages />
      <CTASection />
    </div>
  );
}

function Pillars() {
  return (
    <section className="container-max py-24 md:py-32 space-y-16 md:space-y-24">
      {pillars.map((p, i) => {
        const Icon = (iconMap as Record<string, typeof Plus>)[p.icon] ?? Plus;
        const reverse = i % 2 === 1;
        return (
          <div
            key={p.id}
            id={p.id}
            className={`grid scroll-mt-32 gap-10 md:grid-cols-12 md:gap-16 items-center ${
              reverse ? "" : ""
            }`}
          >
            <Reveal
              className={`md:col-span-5 ${reverse ? "md:order-2" : ""}`}
            >
              <div className="relative h-[360px] md:h-[460px] overflow-hidden rounded-3xl bg-navy-700 text-white shadow-[0_30px_60px_-30px_rgba(20,32,57,0.5)]">
                <div
                  aria-hidden
                  className="absolute inset-0 grid-bg-dark opacity-40"
                />
                <div
                  aria-hidden
                  className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-forest-500/30 blur-3xl"
                />
                <div className="relative flex h-full flex-col justify-between p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                    <Icon className="h-6 w-6 text-forest-300" />
                  </div>
                  <div>
                    <p className="eyebrow !text-forest-300">{p.badge}</p>
                    <h3 className="display-serif mt-3 text-3xl md:text-4xl font-semibold leading-tight">
                      {p.name}
                    </h3>
                    <p className="mt-4 text-white/70 leading-relaxed">
                      {p.summary}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal
              delay={0.1}
              className={`md:col-span-7 ${reverse ? "md:order-1" : ""}`}
            >
              <p className="eyebrow">
                {p.id === "healthcare" ? "Anchor Sector" : "Pillar"} ·{" "}
                {String(i + 1).padStart(2, "0")}
              </p>
              <h4 className="display-serif mt-3 text-2xl md:text-3xl font-semibold text-navy">
                Key activities
              </h4>
              <ul className="mt-6 space-y-4">
                {p.activities.map((a, idx) => (
                  <li
                    key={idx}
                    className="group flex items-start gap-4 rounded-2xl bg-white p-4 ring-1 ring-navy/5 transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-25px_rgba(20,32,57,0.25)]"
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-forest-500/10 text-forest-600">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <span className="text-navy/80 leading-relaxed">{a}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        );
      })}
    </section>
  );
}

function Advantages() {
  return (
    <section className="bg-cream-50 py-24 md:py-32">
      <div className="container-max">
        <div className="max-w-3xl">
          <p className="eyebrow">Why Perles Medicales</p>
          <h2 className="display-serif mt-3 text-balance text-3xl md:text-5xl font-semibold leading-[1.05] text-navy">
            A differentiated, healthcare-anchored platform.
          </h2>
          <p className="mt-5 text-navy/70 leading-relaxed">
            Our competitive advantage is rooted in the ability to combine
            professional expertise, integrated sector development, and a
            long-term investment approach into a single, cohesive platform.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {competitive.map((c, i) => {
            const Icon =
              (iconMap as Record<string, typeof Plus>)[c.icon] ?? Star;
            return (
              <Reveal key={c.title} delay={i * 0.05}>
                <div className="group relative h-full overflow-hidden rounded-3xl bg-white p-7 ring-1 ring-navy/5 transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(20,32,57,0.3)]">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-forest-500/10 blur-3xl transition-all group-hover:scale-150"
                  />
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-700 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-navy">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/65">
                    {c.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
