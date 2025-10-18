// app/about/page.tsx
'use client';

import { Rocket, Shield, Sparkles, Timer, ExternalLink } from "lucide-react";
import Link from 'next/link';

const cities = ["Vancouver", "Toronto", "Montréal", "Moncton", "Halifax", "Remote"];

export default function AboutPage() {
  return (
    <section id="about" className="py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-semibold">Build Fast, Build Right</h1>
            <p className="mt-3 text-slate-300 text-lg">
                We are a digital consultancy specializing in rapid, fixed-scope builds for small to medium-sized businesses and creators. Our process is designed for transparency, speed, and high-quality outcomes.
            </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-semibold">How We Ship Fast</h2>
            <ul className="mt-5 space-y-4 text-slate-300">
              <li className="flex gap-4"><Timer className="h-5 w-5 text-[#c7a451] shrink-0 mt-1"/><span><b>12-minute audit</b>: We start by recording a Loom video with two concrete, actionable fixes for your current system. No fluff, just value.</span></li>
              <li className="flex gap-4"><Shield className="h-5 w-5 text-[#c7a451] shrink-0 mt-1"/><span><b>1-page SOW</b>: Clear outcomes, acceptance criteria, and project milestones are defined on a single page. You know exactly what you're getting.</span></li>
              <li className="flex gap-4"><Rocket className="h-5 w-5 text-[#c7a451] shrink-0 mt-1"/><span><b>Weekly demos</b>: We believe in visible progress and no surprises. You'll see updates every week, ensuring the project is on track.</span></li>
              <li className="flex gap-4"><Sparkles className="h-5 w-5 text-[#c7a451] shrink-0 mt-1"/><span><b>Handoff kit</b>: The project concludes with comprehensive training, documentation, and a clear growth plan so you can manage your new asset with confidence.</span></li>
            </ul>
            <div className="mt-6 text-sm text-slate-400">
              We operate in FR/EN across {cities.join(", ")}.
            </div>
          </div>
          <div className="lg:col-span-5 lg:sticky top-24">
            <div className="rounded-2xl ring-1 ring-white/10 bg-white/5 p-6">
              <h3 className="font-semibold">Downloadables</h3>
              <p className="mt-1 text-sm text-slate-300">
                Useful assets for prospects and partners.
              </p>
              <div className="mt-4 grid gap-3">
                <a href="/Groupe_GQ_Leave-Behind.pdf" target="_blank" rel="noopener noreferrer" className="rounded-xl bg-white/10 px-4 py-3 hover:bg-white/15 flex items-center justify-between">
                  Leave Behind (PDF) <ExternalLink className="h-4 w-4"/>
                </a>
                <a href="/Groupe_GQ_Partner-Menu.pdf" target="_blank" rel="noopener noreferrer" className="rounded-xl bg-white/10 px-4 py-3 hover:bg-white/15 flex items-center justify-between">
                  Partner Menu (PDF) <ExternalLink className="h-4 w-4"/>
                </a>
              </div>
              <p className="mt-3 text-xs text-slate-400">Place the PDFs in your `public/` folder to enable these links.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}