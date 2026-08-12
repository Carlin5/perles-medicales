import JsonLd from "@/components/JsonLd";
import { siteUrl } from "@/lib/site";

type BreadcrumbJsonLdProps = {
  name: string;
  path: string;
};

export default function BreadcrumbJsonLd({
  name,
  path,
}: BreadcrumbJsonLdProps) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name,
            item: `${siteUrl}${path}`,
          },
        ],
      }}
    />
  );
}
