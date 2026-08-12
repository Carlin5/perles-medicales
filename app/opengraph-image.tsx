import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Perles Medicales Limited — Integrating Health & Nature";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#1A294A",
          color: "#F5F1EB",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 92,
            height: 92,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 24,
            background: "#2D6E3D",
            color: "#F5F1EB",
            fontSize: 54,
            fontWeight: 700,
          }}
        >
          PM
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 38,
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: "-2px",
          }}
        >
          Perles Medicales Limited
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            color: "#9DCAA8",
            fontSize: 30,
            letterSpacing: "3px",
          }}
        >
          INTEGRATING HEALTH &amp; NATURE
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            right: 80,
            bottom: 72,
            color: "#F5F1EB",
            fontSize: 22,
            opacity: 0.75,
          }}
        >
          Healthcare · Livelihoods · Community Growth
        </div>
      </div>
    ),
    size,
  );
}
