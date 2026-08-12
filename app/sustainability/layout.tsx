import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { createPageMetadata, seoPages } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(seoPages.sustainability);

export default function SustainabilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        name={seoPages.sustainability.title}
        path={seoPages.sustainability.path}
      />
      {children}
    </>
  );
}
