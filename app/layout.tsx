import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Perles Medicales Limited · Integrated Investments in Healthcare, Livelihoods, and Sustainable Community Growth",
  description:
    "A Uganda-based, healthcare-anchored investment platform integrating healthcare, agriculture, real estate, and hospitality to build sustainable communities.",
  keywords: [
    "Perles Medicales",
    "Healthcare Investment",
    "Uganda",
    "Sustainable Development",
    "Satellite Community",
    "MUST Alumni",
    "Agro-Industrial",
  ],
  authors: [{ name: "Perles Medicales Limited" }],
  openGraph: {
    title: "Perles Medicales Limited",
    description:
      "Integrated Investments in Healthcare, Livelihoods, and Sustainable Community Growth — Kampala, Uganda",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-cream-100 text-navy-700 antialiased">
        <LoadingScreen />
        <ScrollProgress />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
