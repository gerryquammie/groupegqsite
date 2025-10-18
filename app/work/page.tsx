'use client';

import React, { useEffect, useState } from "react";
import { Github, ExternalLink, Star, Globe } from "lucide-react";

// Using a constant makes it easier to update your username in one place
const GITHUB_USERNAME = "gerryquammie"; 

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
      "Production-grade auth scaffold with TypeScript, Prisma/SQL (swap to Supabase), and UI boilerplate.",
    href: `https://github.com/${GITHUB_USERNAME}/groupegqsite`, // Using the constant here
    // --- THIS IS THE FIX ---
    // Added the missing closing quote on "Tailwind" and corrected the tag.
    tags: ["NextAuth", "TypeScript", "Tailwind"], 
  },
];

export default function WorkPage() {
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
            const filtered = (data || [])
              .filter((r) => !r.fork && !r.archived)
              .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
              .slice(0, 9);
            setRepos(filtered);
          } catch (e) { console.error(e); } finally { if (!ignore) setLoading(false); }
        }
        load();
        return () => { ignore = true; };
      }, []);

  return (
    <section id="work" className="py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold">Selected Work</h1>
            <p className="mt-2 text-slate-300">A few highlights and our latest public activity.</p>
          </div>
          <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noreferrer" className="hidden md:inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 hover:bg-white/15">
            <Github className="h-4 w-4" /> View GitHub
          </a>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {featured.map((p) => (
            <a key={p.title} href={p.href} target="_blank" rel="noreferrer" className="block rounded-2xl ring-1 ring-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6 hover:ring-[#c7a451]/50 transition-all duration-300">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <ExternalLink className="h-4 w-4 text-slate-300 shrink-0 ml-4" />
              </div>
              <p className="mt-2 text-sm text-slate-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full bg-white/10 px-2 py-1 text-slate-200">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 pt-10 border-t border-white/10">
          <h2 className="text-sm uppercase tracking-wider text-slate-400">Latest from GitHub</h2>
           {loading ? (
              <p className="mt-3 text-slate-400">Loading repos…</p>
            ) : GITHUB_USERNAME.includes("YOUR_GITHUB") ? (
              <p className="mt-3 text-slate-400">Set <code>GITHUB_USERNAME</code> to auto-list public repos.</p>
            ) : repos.length === 0 ? (
              <p className="mt-3 text-slate-400">No recent public repositories found.</p>
            ) : (
              <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {repos.map((r) => (
                  <a key={r.id} href={r.html_url} target="_blank" rel="noreferrer" className="rounded-2xl ring-1 ring-white/10 bg-white/5 p-5 hover:ring-[#c7a451]/50 hover:bg-white/7 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold truncate pr-3">{r.name}</div>
                      <Github className="h-4 w-4 text-slate-300" />
                    </div>
                    <p className="mt-2 text-sm text-slate-300 line-clamp-2">{r.description || "—"}</p>
                    <div className="mt-3 flex items-center gap-3 text-xs text-slate-400">
                      <span className="inline-flex items-center gap-1"><Star className="h-3 w-3" /> {r.stargazers_count}</span>
                      <span>{new Date(r.pushed_at).toLocaleDateString()}</span>
                      <span className="ml-auto inline-flex items-center gap-1"><Globe className="h-3 w-3" /> {r.language || "—"}</span>
                    </div>
                  </a>
                ))}
              </div>
            )}
        </div>
      </div>
    </section>
  );
}