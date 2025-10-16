// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Groupe GQ — Portfolio',
  description: 'AI Content • Web • Apps • Automation for SMEs. Fixed-scope builds. FR/EN.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
