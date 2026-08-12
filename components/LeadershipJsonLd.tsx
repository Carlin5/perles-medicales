import { leadership } from "@/lib/content";
import { siteUrl } from "@/lib/site";
import JsonLd from "@/components/JsonLd";

export default function LeadershipJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": leadership.map((member) => ({
          "@type": "Person",
          "@id": `${siteUrl}/leadership#${member.name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "")}`,
          name: member.name,
          jobTitle: member.role,
          worksFor: { "@id": `${siteUrl}/#organization` },
        })),
      }}
    />
  );
}
