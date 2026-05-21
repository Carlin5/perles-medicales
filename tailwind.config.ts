import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors extracted directly from the PDF
        navy: {
          DEFAULT: "#1A294A",
          50: "#EAEEF6",
          100: "#C8D1E3",
          200: "#9CA9C6",
          300: "#6F7FA5",
          400: "#465A86",
          500: "#283A60",
          600: "#1A294A",
          700: "#142039",
          800: "#0E1728",
          900: "#080E1A",
        },
        forest: {
          DEFAULT: "#2D6E3D",
          50: "#EBF5EE",
          100: "#CFE5D6",
          200: "#A2CCAF",
          300: "#74B287",
          400: "#4F9663",
          500: "#2D6E3D",
          600: "#235732",
          700: "#1A4126",
          800: "#11291A",
          900: "#08140D",
        },
        cream: {
          DEFAULT: "#F5F1EB",
          50: "#FBFAF7",
          100: "#F5F1EB",
          200: "#E8DFD0",
          300: "#D8CAB1",
          400: "#C2AC83",
        },
        // Logo accent colors
        logoBlue: "#004B96",
        logoBlueLight: "#006496",
        logoGreen: "#197D19",
        logoGreenLight: "#329619",
        pearl: "#F8F6F3",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slow-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 0 0 rgba(45, 110, 61, 0.45)",
          },
          "50%": {
            boxShadow: "0 0 0 24px rgba(45, 110, 61, 0)",
          },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.7s ease-out forwards",
        "slow-spin": "slow-spin 40s linear infinite",
        "pulse-glow": "pulse-glow 2s infinite",
        shimmer: "shimmer 3s linear infinite",
        float: "float 4s ease-in-out infinite",
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(circle at 50% 50%, rgba(45,110,61,0.18), transparent 60%)",
        "noise":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
