import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Hero, Footer } from "@components";

import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime Vault",
  description: "Your favorite anime, all in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <main className="mx-auto max-w-7xl bg-slate-900">
          <Hero />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
