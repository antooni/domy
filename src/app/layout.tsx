import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HBE.domy — Nowoczesne domy z drewna klejonego",
  description:
    "Nowoczesne domy z drewna klejonego w technologii HBE. Szybka budowa, ekologia i energooszczędność.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${fraunces.variable} ${instrumentSans.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
