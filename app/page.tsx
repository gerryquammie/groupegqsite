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
import Link from 'next/link'; // Import Link for navigation

/* ---- ⚠️ ACTION REQUIRED: Adjust these two constants ---- */
const GITHUB_USERNAME = "gerryquammie"; // ← REPLACE THIS
const DEMO_VIDEO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"; // ← REPLACE THIS with your actual video ID
/* ---------------------------------------------------- */

const cities = [
  "Vancouver", "Toronto", "Montréal", "Moncton", "Halifax", "Remote",
];

const offers = [
  { name: "AI Content Jumpstart", price: "$2–4k", bullets: ["Brand voice kit & prompt library", "Batch content pipeline", "Light automations (DM/FAQ, reviews)"] },
  { name: "Site-in-a-Week (Next.js)", price: "$2.5–5k", bullets: ["Design + build + basic SEO", "Analytics & lead capture", "Training + handoff"] },
  { name: "Ops Automation Audit", price: "$1.5–3k", bullets: ["Map processes & quick wins", "Zapier/Make/Supabase glue", "12-minute video audit included"] },
  { name: "Sales/Inventory Dashboard", price: "$3–6k", bullets: ["Data model & daily digest", "CSV/ERP/Shopify adapters", "Role-based access"] },
  { name: "Care Plan", price: "$800–2k/mo", bullets: ["SLAs & proactive fixes", "A/B tests & analytics", "Roadmap coaching"] },
];

const featured = [
  { title: "Enterprise Inventory Dashboard", description: "A lean dashboard for SMB ops: stock tracking, alerts, and daily email digests.", href: "https://enterprise-inventory-dashboard.vercel.app/", tags: ["Next.js", "Supabase", "Stripe", "Tailwind"] },
  { title: "Next.js Auth Starter Pack", description: "Production-grade auth scaffold with TypeScript, Prisma/SQL (swap to Supabase), and UI boilerplate.", href: `https://github.com/${GITHUB_USERNAME}`, tags: ["NextAuth", "TypeScript", "Tailwind", "RLS"] },
];

export default function HomePage() {
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
        const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`);
        const data = (await res.json()) as any[];
        if (ignore) return;
        const filtered = (data || []).filter((r) => !r.fork && !r.archived).sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()).slice(0, 6);
        setRepos(filtered);
      } catch (e) { console.error(e); } finally { if (!ignore) setLoading(false); }
    }
    load();
    return () => { ignore = true; };
  }, []);

  // Notice the main <div> and the <header> and <footer> are gone.
  // They are now in layout.tsx.
  return (
    <>
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
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-[#c7a451] px-4 py-2 text-[#0c1424] font-semibold hover:brightness-105">
                Get 1-page scope <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-video overflow-hidden rounded-2xl ring-1 ring-white/15 bg-white/5">
              <iframe className="absolute inset-0 h-full w-full" src={DEMO_VIDEO_URL} title="Groupe GQ — 90-second demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading="lazy" allowFullScreen />
            </div>
            <p className="mt-3 text-xs text-slate-400">Demo: Fan hub + gated drops + UGC challenges + analytics (pilot ships in 30–45 days).</p>
          </div>
        </div>
      </section>

      {/* All other sections from your original page remain here */}
      {/* Offers */}
      <section id="offers" className="py-12 lg:py-16 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">Productized offers</h2>
              <p className="mt-2 text-slate-300 max-w-2xl">
                Clear outcomes, fixed pricing, fast delivery. Upgrade paths are built-in.
              </p>
            </div>
            <Link href="/contact" className="hidden md:inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 hover:bg-white/15">
              Request sample SOW <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((o) => (
              <div key={o.name} className="group rounded-2xl ring-1 ring-white/10 bg-white/5 p-6 hover:ring-[#c7a451]/50 hover:bg-white/7 transition">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{o.name}</h3>
                  <span className="text-[#c7a451] font-semibold">{o.price}</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {o.bullets.map((b) => (<li key={b} className="flex gap-2"><Star className="h-4 w-4 text-[#c7a451] opacity-80 mt-0.5" /><span>{b}</span></li>))}
                </ul>
                <div className="mt-5 flex gap-3">
                  <Link href="/contact" className="text-sm underline underline-offset-4">Get scope</Link>
                  <Link href="/contact" className="text-sm text-slate-300 hover:text-white">Ask a question</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work, About, and Contact sections follow... keep them as they were in the original file */}
      {/* Make sure all internal links like href="#contact" are updated to <Link href="/contact"> */}
    </>
  );
}