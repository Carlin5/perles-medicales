import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import JsonLd from "@/components/JsonLd";
import { company } from "@/lib/content";
import { googleSiteVerification, siteUrl } from "@/lib/site";
import { seoPages } from "@/lib/seo";

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
  metadataBase: new URL(siteUrl),
  alternates: { canonical: siteUrl },
  title: {
    default: seoPages.home.title,
    template: "%s | Perles Medicales Limited",
  },
  description: seoPages.home.description,
  keywords: [...seoPages.home.keywords],
  applicationName: "Perles Medicales Limited",
  category: "investment",
  creator: "Perles Medicales Limited",
  publisher: "Perles Medicales Limited",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "Perles Medicales Limited" }],
  openGraph: {
    title: seoPages.home.title,
    description: seoPages.home.description,
    url: siteUrl,
    type: "website",
    siteName: "Perles Medicales Limited",
    images: [
      {
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Perles Medicales Limited — Integrating Health & Nature",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoPages.home.title,
    description: seoPages.home.description,
    images: [`${siteUrl}/opengraph-image`],
  },
  verification: { google: googleSiteVerification },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-cream-100 text-navy-700 antialiased">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": `${siteUrl}/#organization`,
                name: company.short,
                legalName: company.name,
                url: siteUrl,
                logo: `${siteUrl}/icon.svg`,
                email: `mailto:${company.contact.email}`,
                foundingDate: "2021",
                address: {
                  "@type": "PostalAddress",
                  name: company.contact.headOffice,
                  streetAddress: "Plot 1411, Lubowa, Entebbe Road",
                  addressLocality: "Kampala",
                  addressCountry: "UG",
                },
              },
              {
                "@type": "WebSite",
                "@id": `${siteUrl}/#website`,
                name: company.name,
                url: siteUrl,
                publisher: { "@id": `${siteUrl}/#organization` },
                inLanguage: "en",
              },
            ],
          }}
        />
        <LoadingScreen />
        <ScrollProgress />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
