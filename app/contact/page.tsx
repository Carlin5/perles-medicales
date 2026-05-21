"use client";

import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { company } from "@/lib/content";
import {
  Mail,
  MapPin,
  Send,
  Building2,
  Briefcase,
  Heart,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  return (
    <div className="page-fade">
      <PageHeader
        eyebrow="Get In Touch"
        title={
          <>
            Let&apos;s build the next chapter of{" "}
            <span className="text-forest-300">
              integrated investment
            </span>{" "}
            — together.
          </>
        }
        description="Integrated Investments in Healthcare, Livelihoods, and Sustainable Community Growth. Whether you're an investor, partner, or future collaborator — we'd love to hear from you."
      />

      <Contact />
      <InterestGrid />
    </div>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="container-max py-24">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-start">
        <Reveal className="lg:col-span-5 space-y-8">
          <div>
            <p className="eyebrow">Contact Information</p>
            <h2 className="display-serif mt-3 text-balance text-3xl md:text-4xl font-semibold leading-[1.1] text-navy">
              Visit us in Kampala, or reach out by email.
            </h2>
          </div>

          <div className="space-y-5">
            <div className="card-soft flex items-start gap-4 p-5">
              <span className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-xl bg-forest-500 text-white">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="eyebrow">Head Office</p>
                <p className="mt-1 text-navy font-medium">
                  {company.contact.headOffice}
                </p>
                {company.contact.addressLines.map((l) => (
                  <p key={l} className="text-navy/65 text-sm">
                    {l}
                  </p>
                ))}
              </div>
            </div>

            <a
              href={`mailto:${company.contact.email}`}
              className="card-soft flex items-start gap-4 p-5 transition-all hover:-translate-y-0.5"
            >
              <span className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-xl bg-navy-700 text-white">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="eyebrow">Email</p>
                <p className="mt-1 text-navy font-medium">
                  {company.contact.email}
                </p>
                <p className="text-navy/65 text-sm">
                  We typically respond within 2–3 business days.
                </p>
              </div>
            </a>

            <div className="card-soft flex items-start gap-4 p-5">
              <span className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-xl bg-cream-200 text-navy">
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <p className="eyebrow">Company</p>
                <p className="mt-1 text-navy font-medium">
                  Perles Medicales Limited
                </p>
                <p className="text-navy/65 text-sm">
                  Uganda · Private Limited Company
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-3xl bg-navy-700 p-8 md:p-10 text-white shadow-[0_30px_60px_-30px_rgba(20,32,57,0.5)]">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 grid-bg-dark opacity-40"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-forest-500/30 blur-3xl"
            />

            <div className="relative">
              <p className="eyebrow !text-forest-300">Send a Message</p>
              <h3 className="display-serif mt-3 text-2xl md:text-3xl font-semibold">
                Tell us about your interest
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 rounded-2xl border border-forest-300/40 bg-forest-500/15 p-6 text-white"
                >
                  <p className="display-serif text-xl">Thank you.</p>
                  <p className="mt-2 text-sm text-white/80">
                    Your message has been recorded. We&apos;ll be in touch soon
                    at the email you provided.
                  </p>
                </motion.div>
              ) : (
                <form
                  className="mt-8 grid gap-4 md:grid-cols-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <Field label="Full Name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                  <Field
                    label="Organization (optional)"
                    name="org"
                    className="md:col-span-2"
                  />
                  <Field
                    label="Interest"
                    name="interest"
                    as="select"
                    options={[
                      "Impact Investment",
                      "Strategic Partnership",
                      "Development Finance",
                      "Healthcare Collaboration",
                      "Agriculture & Forestry",
                      "Other",
                    ]}
                    className="md:col-span-2"
                  />
                  <Field
                    label="Message"
                    name="message"
                    as="textarea"
                    rows={5}
                    required
                    className="md:col-span-2"
                  />
                  <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4 pt-2">
                    <p className="text-xs text-white/55">
                      By submitting, you agree to be contacted by Perles
                      Medicales Limited regarding your inquiry.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-forest-500 px-6 py-3 text-sm font-semibold transition-all hover:bg-forest-400 hover:translate-x-0.5"
                    >
                      Send Message <Send className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  as = "input",
  rows,
  options,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: "input" | "textarea" | "select";
  rows?: number;
  options?: string[];
  className?: string;
}) {
  const base =
    "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-all focus:border-forest-300 focus:bg-white/10";
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="text-[11px] uppercase tracking-[0.2em] text-white/55">
        {label}
        {required && <span className="ml-1 text-forest-300">*</span>}
      </span>
      {as === "input" && (
        <input
          name={name}
          type={type}
          required={required}
          className={`${base} mt-2`}
        />
      )}
      {as === "textarea" && (
        <textarea
          name={name}
          rows={rows}
          required={required}
          className={`${base} mt-2 resize-none`}
        />
      )}
      {as === "select" && (
        <select name={name} className={`${base} mt-2`} defaultValue="">
          <option value="" disabled className="text-navy">
            Select an interest…
          </option>
          {options?.map((o) => (
            <option key={o} value={o} className="text-navy">
              {o}
            </option>
          ))}
        </select>
      )}
    </label>
  );
}

function InterestGrid() {
  const items = [
    {
      icon: Building2,
      title: "Impact Investors",
      body: "Aligned capital seeking measurable healthcare access, food security, and community development outcomes.",
    },
    {
      icon: Briefcase,
      title: "Strategic Partners",
      body: "Operators in agriculture, hospitality, infrastructure, and clinical services aligned with our ecosystem.",
    },
    {
      icon: Heart,
      title: "Development Finance",
      body: "DFIs and institutions supporting sustainable rural-urban integration and long-term asset development.",
    },
  ];
  return (
    <section className="bg-cream-50 py-24">
      <div className="container-max">
        <div className="max-w-3xl">
          <p className="eyebrow">Who We Work With</p>
          <h2 className="display-serif mt-3 text-balance text-3xl md:text-5xl font-semibold leading-[1.05] text-navy">
            A platform for investors, partners, and changemakers.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08}>
              <div className="card-soft h-full p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-500/10 text-forest-600">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="display-serif mt-5 text-xl font-semibold text-navy">
                  {it.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/65">
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
