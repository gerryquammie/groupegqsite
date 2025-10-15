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

/**
 * Groupe GQ — One‑Page Portfolio
 * ---------------------------------------------
 * A single‑file, production‑ready React landing page you can drop into Next.js or CRA.
 * Styling: Tailwind CSS (no external components), framer‑motion for subtle animations,
 * lucide‑react icons. Brand palette matches your navy/gold FB assets.
 *
 * ⚙️ Quick Setup
 * 1) Ensure Tailwind is configured in your project.
 * 2) Replace YOUR_GITHUB_USERNAME, DEMO_VIDEO_URL, and the booking/email links below.
 * 3) Add this file as a page (e.g., /app/page.tsx in Next.js) and export default.
 *
 * Notes
 * - Fetches latest repos from GitHub (public, non‑fork), sorted by update date.
 * - Includes two “featured work” cards you can tailor (Inventory Dashboard, Auth Starter).
 * - Accessible, responsive, and optimized for quick skim by buyers.
 */

const GITHUB_USERNAME = "YOUR_GITHUB_USERNAME"; // ← replace with your GitHub handle
const DEMO_VIDEO_URL = "https://www.youtube.com/embed/VIDEO_ID?rel=0"; // ← replace

const cities = [
  "Vancouver",
  "Toronto",
  "Montréal",
  "Moncton",
  "Halifax",
  "Remote",
];

const offers = [
  {
    name: "AI Content Jumpstart",
    price: "$2–4k",
    bullets: [
      "Brand voice kit & prompt library",
      "Batch content pipeline",
      "Light automations (DM/FAQ, reviews)",
    ],
  },
  {
    name: "Site‑in‑a‑Week (Next.js)",
    price: "$2.5–5k",
    bullets: [
      "Design + build + basic SEO",
      "Analytics & lead capture",
      "Training + handoff",
    ],
  },
  {
    name: "Ops Automation Audit",
    price: "$1.5–3k",
    bullets: [
      "Map processes & quick wins",
      "Zapier/Make/Supabase glue",
      "12‑minute video audit included",
    ],
  },
  {
    name: "Sales/Inventory Dashboard",
    price: "$3–6k",
    bullets: [
      "Data model & daily digest",
      "CSV/ERP/Shopify adapters",
      "Role‑based access",
    ],
  },
  {
    name: "Care Plan",
    price: "$800–2k/mo",
    bullets: [
      "SLAs & proactive fixes",
      "A/B tests & analytics",
      "Roadmap coaching",
    ],
  },
];

const featured = [
  {
    title: "Enterprise Inventory Dashboard",
    description:
      "A lean dashboard for SMB ops: stock tracking, alerts, and daily email digests.",
    href: "https://enterprise-inventory-dashboard.vercel.app/",
    tags: ["Next.js", "Supabase", "Stripe", "Tailwind"],
  },
  {
    title: "Next.js Auth Starter Pack",
    description:
      "Production‑grade auth scaffold with TypeScript, Prisma/SQL (swap to Supabase), and UI boilerplate.",
    href: "https://github.com/YOUR_GITHUB_USERNAME", // ← update to the repo URL
    tags: ["NextAuth", "TypeScript", "Tailwind", "RLS"],
  },
];

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
    <div className="min-h-screen bg-[#0c1424] text-slate-100">
      {/* Background accents */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 85% -10%, rgba(199,164,81,0.18) 0%, rgba(199,164,81,0) 60%), radial-gradient(50% 40% at 10% 10%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 60%)",
        }}
      />

      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-[#0c1424]/70 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full ring-2 ring-[#c7a451]/80 flex items-center justify-center font-bold text-sm bg-white/5">
              GQ
            </div>
            <span className="font-semibold tracking-wide">Groupe GQ</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#offers" className="hover:text-white">Offers</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#c7a451] px-4 py-2 text-[#0c1424] font-semibold hover:brightness-105"
          >
            Book audit <Calendar className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight"
            >
              Build & ship your platform in <span className="text-[#c7a451]">weeks</span>, not quarters.
            </motion.h1>
            <p className="mt-5 text-slate-300 text-lg max-w-2xl">
              Fast, fixed‑scope builds for SMEs & creators: AI content systems, web/app experiences,
              and revenue automations. One‑page scopes. Weekly demos. FR/EN.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <MapPin className="h-4 w-4" />
              <span className="opacity-80">
                {cities.join(" • ")}
              </span>
              <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5">
                <Shield className="h-3.5 w-3.5" /> SLAs & Care Plans
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5">
                <Sparkles className="h-3.5 w-3.5" /> FR/EN
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={DEMO_VIDEO_URL}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 hover:bg-white/5"
              >
                Watch 90‑sec demo <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#c7a451] px-4 py-2 text-[#0c1424] font-semibold hover:brightness-105"
              >
                Get 1‑page scope <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Demo Frame */}
          <div className="lg:col-span-5">
            <div className="relative aspect-video overflow-hidden rounded-2xl ring-1 ring-white/15 bg-white/5">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={DEMO_VIDEO_URL}
                title="Groupe GQ — 90‑second demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                loading="lazy"
                allowFullScreen
              />
            </div>
            <p className="mt-3 text-xs text-slate-400">
              Demo: Fan hub + gated drops + UGC challenges + analytics (pilot ships in 30–45 days).
            </p>
          </div>
        </div>
      </section>

      {/* Offers */}
      <section id="offers" className="py-12 lg:py-16 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">Productized offers</h2>
              <p className="mt-2 text-slate-300 max-w-2xl">
                Clear outcomes, fixed pricing, fast delivery. Upgrade paths are built‑in.
              </p>
            </div>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 hover:bg-white/15"
            >
              Request sample SOW <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((o) => (
              <div
                key={o.name}
                className="group rounded-2xl ring-1 ring-white/10 bg-white/5 p-6 hover:ring-[#c7a451]/50 hover:bg-white/7 transition"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{o.name}</h3>
                  <span className="text-[#c7a451] font-semibold">{o.price}</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {o.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <Star className="h-4 w-4 text-[#c7a451] opacity-80 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex gap-3">
                  <a href="#contact" className="text-sm underline underline-offset-4">Get scope</a>
                  <a href="#contact" className="text-sm text-slate-300 hover:text-white">Ask a question</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-12 lg:py-16 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">Selected work</h2>
              <p className="mt-2 text-slate-300">A few highlights and your latest GitHub activity.</p>
            </div>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              className="hidden md:inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 hover:bg-white/15"
            >
              <Github className="h-4 w-4" /> View GitHub
            </a>
          </div>

          {/* Featured */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {featured.map((p) => (
              <a
                key={p.title}
                href={p.href}
                target="_blank"
                className="block rounded-2xl ring-1 ring-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6 hover:ring-[#c7a451]/50"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <ExternalLink className="h-4 w-4 text-slate-300" />
                </div>
                <p className="mt-2 text-sm text-slate-300">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs rounded-full bg-white/10 px-2 py-1 text-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>

          {/* Latest from GitHub */}
          <div className="mt-10">
            <h3 className="text-sm uppercase tracking-wider text-slate-400">Latest from GitHub</h3>
            {loading ? (
              <p className="mt-3 text-slate-400">Loading repos…</p>
            ) : GITHUB_USERNAME.includes("YOUR_GITHUB") ? (
              <p className="mt-3 text-slate-400">
                Set <code>GITHUB_USERNAME</code> at the top of this file to auto‑list your public repos.
              </p>
            ) : repos.length === 0 ? (
              <p className="mt-3 text-slate-400">No recent public repositories found.</p>
            ) : (
              <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {repos.map((r) => (
                  <a
                    key={r.id}
                    href={r.html_url}
                    target="_blank"
                    className="rounded-2xl ring-1 ring-white/10 bg-white/5 p-5 hover:ring-[#c7a451]/50 hover:bg-white/7"
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-semibold truncate pr-3">{r.name}</div>
                      <Github className="h-4 w-4 text-slate-300" />
                    </div>
                    <p className="mt-2 text-sm text-slate-300 line-clamp-2">
                      {r.description || "—"}
                    </p>
                    <div className="mt-3 flex items-center gap-3 text-xs text-slate-400">
                      <span className="inline-flex items-center gap-1"><Star className="h-3 w-3" /> {r.stargazers_count}</span>
                      <span>Updated {new Date(r.pushed_at).toLocaleDateString()}</span>
                      <span className="ml-auto inline-flex items-center gap-1"><Globe className="h-3 w-3" /> {r.language || "—"}</span>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About / Process */}
      <section id="about" className="py-12 lg:py-16 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <h2 className="text-2xl md:text-3xl font-semibold">How we ship fast</h2>
            <ul className="mt-5 space-y-3 text-slate-300">
              <li className="flex gap-3"><Timer className="h-5 w-5 text-[#c7a451]"/><span><b>12‑minute audit</b>: we record a Loom with 2 concrete fixes.</span></li>
              <li className="flex gap-3"><Shield className="h-5 w-5 text-[#c7a451]"/><span><b>1‑page SOW</b>: outcomes, acceptance criteria, milestones.</span></li>
              <li className="flex gap-3"><Rocket className="h-5 w-5 text-[#c7a451]"/><span><b>Weekly demos</b>: visible progress, no surprises.</span></li>
              <li className="flex gap-3"><Sparkles className="h-5 w-5 text-[#c7a451]"/><span><b>Handoff kit</b>: training, docs, and a clear growth plan.</span></li>
            </ul>
            <div className="mt-6 text-sm text-slate-400">
              Operate in FR/EN across {cities.join(", ")}.
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-2xl ring-1 ring-white/10 bg-white/5 p-6">
              <h3 className="font-semibold">Downloadables</h3>
              <p className="mt-1 text-sm text-slate-300">
                Use these when emailing prospects or partners.
              </p>
              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                <a href="/Groupe_GQ_Leave-Behind.pdf" className="rounded-xl bg-white/10 px-4 py-3 hover:bg-white/15 flex items-center justify-between">
                  Leave‑Behind (PDF) <ExternalLink className="h-4 w-4"/>
                </a>
                <a href="/Groupe_GQ_Partner-Menu.pdf" className="rounded-xl bg-white/10 px-4 py-3 hover:bg-white/15 flex items-center justify-between">
                  Partner Menu (PDF) <ExternalLink className="h-4 w-4"/>
                </a>
              </div>
              <p className="mt-3 text-xs text-slate-400">Place the PDFs in your public/ folder to enable these links.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 lg:py-16 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <h2 className="text-2xl md:text-3xl font-semibold">Let’s scope your pilot</h2>
            <p className="mt-2 text-slate-300 max-w-2xl">
              Send 2–3 bullet points about your goal. We’ll reply with a 1‑page scope and a 30–45 day plan.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              <a
                href="mailto:hello@groupegq.com?subject=Groupe%20GQ%20—%2012‑minute%20audit"
                className="rounded-xl bg-[#c7a451] px-4 py-3 text-[#0c1424] font-semibold inline-flex items-center justify-center gap-2 hover:brightness-105"
              >
                <Mail className="h-4 w-4"/> Email us
              </a>
              <a
                href="https://calendly.com/your-handle/intro"
                target="_blank"
                className="rounded-xl bg-white/10 px-4 py-3 inline-flex items-center justify-center gap-2 hover:bg-white/15"
              >
                <Calendar className="h-4 w-4"/> Book a 15‑min call
              </a>
            </div>
            <p className="mt-4 text-xs text-slate-400">Prefer WhatsApp? Add +1 (XXX) XXX‑XXXX</p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl ring-1 ring-white/10 bg-white/5 p-6">
              <h3 className="font-semibold">What happens next</h3>
              <ol className="mt-3 text-sm text-slate-300 space-y-2 list-decimal list-inside">
                <li>We run a 12‑minute audit & record a Loom.</li>
                <li>We send a 1‑page SOW with outcomes & price.</li>
                <li>Build starts after deposit. Weekly demos. Launch.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-slate-400 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Groupe GQ</span>
            <span className="opacity-60">—</span>
            <span>{cities.join(" • ")}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" className="inline-flex items-center gap-1 hover:text-white"><Github className="h-4 w-4"/> GitHub</a>
            <a href="mailto:hello@groupegq.com" className="inline-flex items-center gap-1 hover:text-white"><Mail className="h-4 w-4"/> hello@groupegq.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
