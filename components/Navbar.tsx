"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "@/lib/content";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream-100/80 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(20,32,57,0.18)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-max flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 transition-transform hover:scale-[0.99]"
        >
          <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-navy/10">
            <Image
              src="/images/logo.png"
              alt="Perles Medicales Limited"
              fill
              priority
              sizes="48px"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm font-semibold text-navy display-serif">
              Perles Medicales Ltd
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-forest-600">
              Integrating Health &amp; Nature
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-navy"
                    : "text-navy-500 hover:text-navy"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white shadow-[0_8px_20px_-10px_rgba(20,32,57,0.3)] ring-1 ring-navy/10"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden md:inline-flex btn-primary !py-2 !px-5 !text-xs"
          >
            Partner With Us
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-navy/10 text-navy lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-navy/5 bg-cream-100/95 backdrop-blur-xl"
          >
            <div className="container-max flex flex-col gap-1 py-4">
              {navigation.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      active
                        ? "bg-white text-navy ring-1 ring-navy/10"
                        : "text-navy-500 hover:bg-white/60"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="mt-2 btn-primary justify-center"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
