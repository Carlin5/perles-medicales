import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";

export type SeoPage = {
  path: string;
  title: string;
  description: string;
};

export const seoPages = {
  home: {
    path: "/",
    title: "Perles Medicales | Healthcare Investment in Uganda",
    description:
      "Perles Medicales Limited integrates healthcare, livelihoods, and sustainable community growth across Uganda through medical-professional-led investment.",
  },
  about: {
    path: "/about",
    title: "About the Company",
    description:
      "Learn how MUST medical alumni built Perles Medicales Limited from a 2003 peer network into a governed, multi-sector investment company reconnecting in 2021.",
  },
  business: {
    path: "/business",
    title: "Business Pillars",
    description:
      "Explore Perles Medicales Limited's healthcare, agro-industrial, real estate, and hospitality pillars, designed to create integrated value across Uganda.",
  },
  leadership: {
    path: "/leadership",
    title: "Leadership & Governance",
    description:
      "Meet Perles Medicales Limited's medical leaders, guided by accountable governance, investment discipline, and a long-term community development vision.",
  },
  sustainability: {
    path: "/sustainability",
    title: "Sustainability",
    description:
      "Discover Perles Medicales Limited's sustainability model: land procurement underway, renewable energy, agriculture, jobs, and community infrastructure.",
  },
  strategy: {
    path: "/strategy",
    title: "Investment Strategy",
    description:
      "See Perles Medicales Limited's phased investment strategy for healthcare, agriculture, infrastructure, hospitality, jobs, and sustainable community growth.",
  },
  contact: {
    path: "/contact",
    title: "Contact the Company",
    description:
      "Contact Perles Medicales Limited in Kampala to discuss healthcare, agriculture, real estate, hospitality, and sustainable community investment opportunities.",
  },
} as const satisfies Record<string, SeoPage>;

export function createPageMetadata(page: SeoPage): Metadata {
  const url = `${siteUrl}${page.path === "/" ? "" : page.path}`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
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
      title: page.title,
      description: page.description,
      images: [`${siteUrl}/opengraph-image`],
    },
  };
}
