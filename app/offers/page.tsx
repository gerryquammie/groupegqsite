// app/offers/page.tsx
'use client';

import { ArrowRight, Star, Calendar } from "lucide-react";
import Link from 'next/link';

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
      name: "Site-in-a-Week (Next.js)",
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
        "12-minute video audit included",
      ],
    },
    {
      name: "Sales/Inventory Dashboard",
      price: "$3–6k",
      bullets: [
        "Data model & daily digest",
        "CSV/ERP/Shopify adapters",
        "Role-based access",
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
    {
        name: "Custom Project",
        price: "Variable",
        bullets: [
          "Complex application builds",
          "Third-party API integrations",
          "Ongoing retainer for development",
        ],
      },
  ];

export default function OffersPage() {
  return (
    <section id="offers" className="py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold">Our Offers</h1>
            <p className="mt-2 text-slate-300 max-w-2xl">
              Clear outcomes, fixed pricing, and fast delivery. We build solutions designed to scale with your business.
            </p>
          </div>
          <Link href="/contact?subject=Sample SOW Request" className="hidden md:inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 hover:bg-white/15">
            Request sample SOW <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((o) => (
            <div
              key={o.name}
              className="group rounded-2xl ring-1 ring-white/10 bg-white/5 p-6 hover:ring-[#c7a451]/50 hover:bg-white/7 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-lg">{o.name}</h3>
                <span className="text-[#c7a451] font-semibold text-right">{o.price}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-300 flex-grow">
                {o.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <Star className="h-4 w-4 shrink-0 text-[#c7a451] opacity-80 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-3 pt-4 border-t border-white/10">
                <Link href="/contact?scope=true" className="inline-flex items-center gap-2 rounded-xl bg-[#c7a451] px-4 py-2 text-[#0c1424] font-semibold hover:brightness-105 text-sm">
                  Get 1-page Scope
                </Link>
                <Link href="/contact?subject=Question about offers" className="text-sm text-slate-300 hover:text-white self-center">Ask a question</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}