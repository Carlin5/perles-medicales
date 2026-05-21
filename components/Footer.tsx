"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { company, navigation } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-700 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-bg-dark opacity-50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-forest-500/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-[-10%] h-[420px] w-[420px] rounded-full bg-logoBlue/30 blur-3xl"
      />

      <div className="container-max relative grid gap-12 py-20 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-white p-1">
              <Image
                src="/images/logo.png"
                alt="Perles Medicales Limited"
                fill
                sizes="56px"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="leading-tight">
              <p className="display-serif text-xl font-semibold">
                Perles Medicales
              </p>
              <p className="text-[11px] uppercase tracking-[0.25em] text-forest-300">
                Limited · Uganda
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
            {company.description}. A member-driven investment platform anchored
            in healthcare and rooted in Uganda — building a self-sustaining
            ecosystem of community, livelihoods, and nature.
          </p>
        </div>

        <div>
          <p className="eyebrow !text-forest-300">Explore</p>
          <ul className="mt-5 grid grid-cols-2 gap-2 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group inline-flex items-center gap-1 text-white/80 transition-colors hover:text-white"
                >
                  <span className="link-underline">{item.name}</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow !text-forest-300">Get In Touch</p>
          <div className="mt-5 space-y-4 text-sm text-white/80">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
                <MapPin className="h-4 w-4 text-forest-300" />
              </span>
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
                  Head Office
                </p>
                <p>{company.contact.headOffice}</p>
                {company.contact.addressLines.map((l) => (
                  <p key={l}>{l}</p>
                ))}
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
                <Mail className="h-4 w-4 text-forest-300" />
              </span>
              <a
                href={`mailto:${company.contact.email}`}
                className="link-underline"
              >
                {company.contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-max relative border-t border-white/10 py-6 text-xs text-white/50 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} Perles Medicales Limited · Uganda · All
          rights reserved.
        </p>
        <p className="tracking-[0.25em] uppercase">
          P E R L E S · M E D I C A L E S · 2 0 2 6
        </p>
      </div>
    </footer>
  );
}
