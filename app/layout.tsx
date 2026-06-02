import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sumbangan Dana Lif Baharu Masjid Al Umm",
  description:
    "Bantu melengkapkan baki bayaran lif baharu Masjid Al Umm demi kemudahan warga emas, OKU, ibu mengandung dan seluruh jemaah.",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "Sumbangan Dana Lif Baharu Masjid Al Umm",
    description:
      "Setiap sumbangan membawa kemudahan kepada seluruh jemaah.",
    images: [
      {
        url: "/images/hero-masjid.png",
        width: 1200,
        height: 630,
        alt: "Sumbangan Dana Lif Baharu Masjid Al Umm",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sumbangan Dana Lif Baharu Masjid Al Umm",
    description:
      "Bantu melengkapkan baki bayaran lif baharu Masjid Al Umm.",
    images: ["/images/hero-masjid.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ms"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}