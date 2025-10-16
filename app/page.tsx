// app/page.tsx
'use client';

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Mail,
  Calendar,
  MapPin,
  Shield,
  Rocket,
  Timer,
  Sparkles,
  ArrowRight,
  Globe,
  Star
} from "lucide-react";

/* ---- Adjust these two constants ---- */
const GITHUB_USERNAME = "YOUR_GITHUB_USERNAME"; // ← replace
const DEMO_VIDEO_URL = "https://www.youtube.com/embed/VIDEO_ID?rel=0"; // ← replace
/* ----------------------------------- */

const cities = [
  "Vancouver",
  "Toronto",
  "Montréal",
  "Moncton",
  "Halifax",
  "Remote",
];

const offers = [ /* keep your offers array as-is (omitted here for brevity) */ ];

const featured = [ /* keep your featured array as-is (omitted here for brevity) */ ];

export default function GroupeGQPortfolio() {
  const [repos, setRepos] = useState([] as any[]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    async function load() {
      try {
        if (!GITHUB_USERNAME || GITHUB_USERNAME.includes("YOUR_GITHUB")) {
          setLoading(false);
          return;
        }
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`
        );
        const data = (await res.json()) as any[];
        if (ignore) return;
        const filtered = (data || [])
          .filter((r) => !r.fork && !r.archived)
          .sort(
            (a, b) =>
              new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
          )
          .slice(0, 6);
        setRepos(filtered);
      } catch (e) {
        console.error(e);
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    load();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0c1424] text-slate-100 antialiased">
      {/* Background accents */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10" style={{
        background:
          "radial-gradient(60% 50% at 85% -10%, rgba(199,164,81,0.18) 0%, rgba(199,164,81,0) 60%), radial-gradient(50% 40% at 10% 10%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 60%)",
      }} />

      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-[#0c1424]/70 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full ring-2 ring-[#c7a451]/80 flex items-center justify-center font-bold text-sm bg-white/5">GQ</div>
            <span className="font-semibold tracking-wide">Groupe GQ</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#offers" className="hover:text-white">Offers</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-[#c7a451] px-4 py-2 text-[#0c1424] font-semibold hover:brightness-105">
            Book audit <Calendar className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Build & ship your platform in <span className="text-[#c7a451]">weeks</span>, not quarters.
            </motion.h1>
            <p className="mt-5 text-slate-300 text-lg max-w-2xl">
              Fast, fixed-scope builds for SMEs & creators: AI content systems, web/app experiences, and revenue automations. One-page scopes. Weekly demos. FR/EN.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <MapPin className="h-4 w-4" />
              <span className="opacity-80">{cities.join(" • ")}</span>
              <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5"><Shield className="h-3.5 w-3.5" /> SLAs & Care Plans</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5"><Sparkles className="h-3.5 w-3.5" /> FR/EN</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={DEMO_VIDEO_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 hover:bg-white/5">
                Watch 90-sec demo <ExternalLink className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-[#c7a451] px-4 py-2 text-[#0c1424] font-semibold hover:brightness-105">
                Get 1-page scope <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Demo Frame */}
          <div className="lg:col-span-5">
            <div className="relative aspect-video overflow-hidden rounded-2xl ring-1 ring-white/15 bg-white/5">
              <iframe className="absolute inset-0 h-full w-full" src={DEMO_VIDEO_URL} title="Groupe GQ — 90-second demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                loading="lazy" allowFullScreen />
            </div>
            <p className="mt-3 text-xs text-slate-400">
              Demo: Fan hub + gated drops + UGC challenges + analytics (pilot ships in 30–45 days).
            </p>
          </div>
        </div>
      </section>

      {/* Offers (keep the same code as you already have) */}
      {/* Work, About, Contact, Footer — keep the same code as you supplied above */}
      {/* For brevity I've omitted the repeated blocks here — paste the offers, work, about, contact, footer sections from your file */}
    </div>
  );
}
