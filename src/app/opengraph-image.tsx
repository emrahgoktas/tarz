import { ImageResponse } from "next/og";

export const alt = "Tarz Yapı Cam Balkon Sistemleri";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1F1F1F",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div style={{ width: 72, height: 6, background: "#C5A35A" }} />
        <div
          style={{
            color: "white",
            fontSize: 68,
            fontWeight: 700,
            marginTop: 28,
            letterSpacing: -1,
          }}
        >
          Tarz Yapı
        </div>
        <div style={{ color: "#C5A35A", fontSize: 32, marginTop: 12 }}>Cam Balkon Sistemleri</div>
        <div style={{ color: "#e6e6e6", fontSize: 24, marginTop: 28 }}>
          Pendik · Alüminyum · PVC · Sineklik
        </div>
      </div>
    ),
    { ...size },
  );
}
