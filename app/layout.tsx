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

export const metadata = {
  title:
    "Sumbangan Dana Lif Baharu Masjid Al Umm",

  description:
    "Bantu melengkapkan baki bayaran lif baharu Masjid Al Umm demi kemudahan warga emas, OKU, ibu mengandung dan seluruh jemaah.",

  openGraph: {
    title:
      "Sumbangan Dana Lif Baharu Masjid Al Umm",

    description:
      "Setiap sumbangan membawa kemudahan kepada seluruh jemaah.",

    images: [
      "/images/hero-masjid.jpg"
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
