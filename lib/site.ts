// Set NEXT_PUBLIC_SITE_URL in production; this fallback keeps local builds valid.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://perlesmedicales.org"
).replace(/\/+$/, "");
