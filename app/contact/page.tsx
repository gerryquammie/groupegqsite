// app/contact/page.tsx
'use client';

import { Mail, Calendar, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <section id="contact" className="py-12 lg:py-24">
            <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7">
                    <h1 className="text-3xl md:text-4xl font-semibold">Let’s Scope Your Pilot</h1>
                    <p className="mt-3 text-slate-300 text-lg max-w-2xl">
                        Send 2–3 bullet points about your goal. We’ll reply within one business day with a 1-page scope and a 30–45 day plan.
                    </p>
                    <div className="mt-8 grid sm:grid-cols-2 gap-4">
                        <a href="mailto:hello@groupoegq.com?subject=Groupe GQ — Project Inquiry" className="rounded-xl bg-[#c7a451] px-4 py-3 text-[#0c1424] font-semibold inline-flex items-center justify-center gap-2 hover:brightness-105 transition-all">
                            <Mail className="h-4 w-4"/> Email Us
                        </a>
                        <a href="https://calendly.com/your-handle/15min" target="_blank" rel="noreferrer" className="rounded-xl bg-white/10 px-4 py-3 inline-flex items-center justify-center gap-2 hover:bg-white/15 transition-all">
                            <Calendar className="h-4 w-4"/> Book a 15-min Call
                        </a>
                    </div>
                     <div className="mt-8 pt-6 border-t border-white/10 text-slate-300">
                        <h3 className="font-semibold text-white">Contact Information</h3>
                        <div className="mt-3 space-y-2">
                           <a href="mailto:hello@groupoegq.com" className="flex items-center gap-3 group">
                                <Mail className="h-4 w-4 text-slate-400 group-hover:text-[#c7a451]"/>
                                <span>hello@groupegq.com</span>
                           </a>
                           <a href="tel:438-483-1249" className="flex items-center gap-3 group">
                                <Phone className="h-4 w-4 text-slate-400 group-hover:text-[#c7a451]"/>
                                <span>438-483-1249</span>
                           </a>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-5">
                    <div className="rounded-2xl ring-1 ring-white/10 bg-white/5 p-6">
                        <h3 className="font-semibold text-white">What Happens Next</h3>
                        <ol className="mt-3 text-sm text-slate-300 space-y-2 list-decimal list-inside">
                            <li>We run a 12-minute audit & record a Loom.</li>
                            <li>We send a 1-page SOW with outcomes & price.</li>
                            <li>Build starts after deposit. Weekly demos. Launch.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
}