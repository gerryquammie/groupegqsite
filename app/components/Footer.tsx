'use client';

import Link from 'next/link';
import { Github, Mail } from 'lucide-react';

const GITHUB_USERNAME = "YOUR_GITHUB_USERNAME"; // ← Replace with your GitHub handle
const cities = ["Vancouver", "Toronto", "Montréal", "Moncton", "Halifax", "Remote"];

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-slate-400 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          <span>© {new Date().getFullYear()} Groupe GQ</span>
          <span className="opacity-60 hidden sm:inline">—</span>
          <span>{cities.join(" • ")}</span>
        </div>
        <div className="flex items-center gap-4 mt-3 md:mt-0">
          <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-white">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <Link href="/contact" className="inline-flex items-center gap-1 hover:text-white">
            <Mail className="h-4 w-4" /> hello@groupoegq.com
          </Link>
        </div>
      </div>
    </footer>
  );
}