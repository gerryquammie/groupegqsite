export const metadata = {
  title: "Groupe GQ — Portfolio",
  description: "AI Content • Web • Apps • Automation for SMEs. Fixed-scope builds. FR/EN."
};
import "./globals.css";
import { ReactNode } from "react";
export default function RootLayout({ children }: { children: ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}
