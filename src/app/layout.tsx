import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pawpals.com'),
  title: "PawPals: Animal Adoption",
  description: "Find your perfect furry companion and give a loving home to an animal in need",
  keywords: ["animal adoption", "pet rescue", "dog adoption", "cat adoption", "pet shelter"],
  openGraph: {
    title: "PawPals: Animal Adoption",
    description: "Find your perfect furry companion and give a loving home to an animal in need",
    images: ['/chewy.jpg']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-slate-50 text-gray-900 antialiased">
        <Navigation />
        <main className="min-h-screen max-w-screen-xl mx-auto px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
