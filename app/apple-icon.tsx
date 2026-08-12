import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 32,
          background: "#1A294A",
          color: "#F5F1EB",
          fontSize: 56,
          fontWeight: 700,
        }}
      >
        PM
      </div>
    ),
    size,
  );
}
