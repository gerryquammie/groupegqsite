// app/components/Header.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Calendar } from 'lucide-react';

// Define your navigation links in an array for easier management
const navLinks = [
  { name: 'Offers', href: '/offers' },
  { name: 'Work', href: '/work' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-[#0c1424]/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full ring-2 ring-[#c7a451]/80 flex items-center justify-center font-bold text-sm bg-white/5">
            GQ
          </div>
          <span className="font-semibold tracking-wide">Groupe GQ</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={isActive ? 'text-[#c7a451] font-semibold' : 'hover:text-white'}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl bg-[#c7a451] px-4 py-2 text-[#0c1424] font-semibold hover:brightness-105"
        >
          Book audit <Calendar className="h-4 w-4" />
        </Link>
      </div>
    </header>
  );
}