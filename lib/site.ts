// Set NEXT_PUBLIC_SITE_URL in production; this fallback keeps local builds valid.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://perlesmedicales.org"
).replace(/\/+$/, "");

export const googleSiteVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
  "ZFHS_PsRFwa61sCaTm8JRO0HoqoTTe2LEE2ZoVGMG0w";
