import type { MetadataRoute } from "next";
import { navigation } from "@/lib/content";
import { siteUrl } from "@/lib/site";

const priorities: Record<string, number> = {
  "/": 1,
  "/about": 0.8,
  "/business": 0.9,
  "/leadership": 0.7,
  "/sustainability": 0.8,
  "/strategy": 0.8,
  "/contact": 0.7,
};

export default function sitemap(): MetadataRoute.Sitemap {
  return navigation.map(({ href }) => ({
    url: `${siteUrl}${href === "/" ? "" : href}`,
    changeFrequency: href === "/" ? "weekly" : "monthly",
    priority: priorities[href] ?? 0.5,
  }));
}
