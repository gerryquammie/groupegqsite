
import './globals.css';
import { ReactNode } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'Groupe GQ — AI & Web Development',
  description: 'AI Content • Web • Apps • Automation for SMEs. Fixed-scope builds. FR/EN.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // The root <html> tag is REQUIRED.
    <html lang="en">
      {/* The root <body> tag is REQUIRED. */}
      <body className="min-h-screen bg-[#0c1424] text-slate-100 antialiased flex flex-col">
        
        {/* Background gradient from your original design */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 85% -10%, rgba(199,164,81,0.18) 0%, rgba(199,164,81,0) 60%), radial-gradient(50% 40% at 10% 10%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 60%)",
          }}
        />
        
        <Header />
        
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />

      </body>
    </html>
  );
}




















