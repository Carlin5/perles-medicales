"use client";

import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { leadership } from "@/lib/content";
import { motion } from "framer-motion";
import CTASection from "@/components/CTASection";
import { ShieldCheck, ScrollText, Gavel, FileBarChart2 } from "lucide-react";

export default function LeadershipPage() {
  return (
    <div className="page-fade">
      <PageHeader
        eyebrow="Governance & Leadership"
        title={
          <>
            Led by experienced{" "}
            <span className="text-forest-300">medical professionals</span>.
          </>
        }
        description="Perles Medicales Limited operates under a structured governance framework designed to ensure transparency, accountability, and effective decision-making in line with the Uganda Companies Act and recognized best practices."
      />

      <GovernanceFramework />
      <TeamGrid />
      <CTASection />
    </div>
  );
}

function GovernanceFramework() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Shareholder Ownership",
      body: "As a private company limited by shares, ownership is vested in shareholders with clearly defined rights and responsibilities.",
    },
    {
      icon: ScrollText,
      title: "Executive Committee",
      body: "ExCo sets strategic direction, approves major investments, and oversees financial performance, risk management, and compliance.",
    },
    {
      icon: FileBarChart2,
      title: "Financial Governance",
      body: "Established systems for budgeting, financial reporting, internal controls, and periodic audits underpin operations.",
    },
    {
      icon: Gavel,
      title: "Regulatory Alignment",
      body: "Operations aligned with the Uganda Companies Act and recognized best practices in corporate governance.",
    },
  ];
  return (
    <section className="container-max py-24">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 0.06}>
            <div className="card-soft h-full p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest-500/10 text-forest-600">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-navy">
                {it.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/65">
                {it.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function TeamGrid() {
  return (
    <section className="bg-cream-50 py-24 md:py-32">
      <div className="container-max">
        <div className="max-w-3xl">
          <p className="eyebrow">Leadership Team</p>
          <h2 className="display-serif mt-3 text-balance text-3xl md:text-5xl font-semibold leading-[1.05] text-navy">
            A team of seasoned clinicians, researchers, and operators.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {leadership.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-3xl bg-white ring-1 ring-navy/5 shadow-[0_30px_60px_-30px_rgba(20,32,57,0.2)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-navy-700/80 via-navy-700/20 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="eyebrow !text-forest-300">{m.role}</p>
                  <h3 className="display-serif mt-1 text-2xl font-semibold">
                    {m.name}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm leading-relaxed text-navy/70">{m.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
