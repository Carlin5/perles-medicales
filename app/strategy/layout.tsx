import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { createPageMetadata, seoPages } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(seoPages.strategy);

export default function StrategyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        name={seoPages.strategy.title}
        path={seoPages.strategy.path}
      />
      {children}
    </>
  );
}
