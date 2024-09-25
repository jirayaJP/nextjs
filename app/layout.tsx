import type { Metadata } from "next";
import { useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wanji pwa test",
  description: "pwa test by me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel='manifest' href='/manifest.webmanifest' />
      <link rel='icon' href='/icons/icon1.png' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
