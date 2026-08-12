# Perles Medicales Limited — Official Website

> Integrated Investments in Healthcare, Livelihoods, and Sustainable Community Growth
> Kampala, Uganda · Private Limited Company

A modern, multi-page corporate website built directly from the official Company Profile (V1, 07 May 2026). Designed to reflect the brand's identity — **Integrating Health & Nature**.

## Tech Stack

- **Next.js 14** (App Router) · React 18 · TypeScript
- **Tailwind CSS** with the exact brand palette extracted from the PDF
- **Framer Motion** for 2D animation, page transitions, and scroll reveals
- **React Three Fiber + drei** for the 3D pearl hero scene
- **Lucide React** icons

## Brand Palette (extracted from PDF)

| Token | Hex | Use |
| --- | --- | --- |
| `navy` | `#1A294A` | Headers, dark backgrounds |
| `forest` | `#2D6E3D` | Primary accent, CTAs |
| `cream` | `#F5F1EB` | Body background |
| `logoBlue` | `#004B96` | Logo medical cross |
| `logoGreen` | `#197D19` | Logo leaves |

## Pages

- `/` — Home with animated logo intro, 3D pearl, intro, stats, pillars, advantages
- `/about` — Story, founding timeline (2003 → Now), Vision / Mission / Values
- `/business` — Four pillars in detail + competitive advantages
- `/leadership` — Governance framework + leadership profiles
- `/sustainability` — Sustainability pillars, planned land allocation, eco systems
- `/strategy` — 10-year phased outlook, jobs projection, value proposition
- `/contact` — Contact info + interest form

## Animations

- Initial brand reveal sequence (`components/LoadingScreen.tsx`) — cross, leaves, pearl, halo, wordmark
- 3D pearl scene (`components/PearlScene.tsx`) — orbiting halos, sparkles, soft distortion
- Scroll-triggered reveals everywhere via `Reveal` + `useInView`
- Animated counters, marquee, progress bars, and page transitions

## Develop

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Build

```bash
npm run build
npm run start
```

## Content Source

All copy on this site is drawn verbatim from the company profile PDF (`Perles Medicales Limited — Company Profile V1, 07 May 2026`). The single source of truth lives in `lib/content.ts`.

## Assets

Logo and leadership headshots are extracted from the PDF and stored in `public/images/`.

## Contact

**Charlie House**, Plot 1411, Lubowa, Entebbe Road, Kampala, Uganda
✉ perlesmedicalesltd@gmail.com
