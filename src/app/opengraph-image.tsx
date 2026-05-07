import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Alexa Dupin · Full-stack engineer · 980+ users on WeSwapCards";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [fraunces, frauncesItalic] = await Promise.all([
    fetch(new URL("./og-fonts/fraunces-regular.ttf", import.meta.url)).then((res) =>
      res.arrayBuffer()
    ),
    fetch(new URL("./og-fonts/fraunces-italic.ttf", import.meta.url)).then((res) =>
      res.arrayBuffer()
    ),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#F5EFE3",
        display: "flex",
        flexDirection: "column",
        padding: 80,
        fontFamily: "Fraunces",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 44,
          fontWeight: 600,
          color: "#1F4239",
        }}
      >
        <span>AD</span>
        <span style={{ color: "#C68A14" }}>.</span>
      </div>

      <div style={{ flex: 1 }} />

      <div
        style={{
          width: 80,
          height: 4,
          background: "#C68A14",
          marginBottom: 32,
        }}
      />

      <div
        style={{
          fontSize: 96,
          fontWeight: 600,
          color: "#1F4239",
          lineHeight: 1,
        }}
      >
        Alexa Dupin
      </div>

      <div
        style={{
          fontFamily: "system-ui, sans-serif",
          fontSize: 32,
          color: "rgba(31, 66, 57, 0.78)",
          marginTop: 20,
        }}
      >
        Full-stack engineer · Brooklyn, NY
      </div>

      <div
        style={{
          fontSize: 42,
          fontStyle: "italic",
          color: "#C68A14",
          marginTop: 32,
          lineHeight: 1.2,
        }}
      >
        Currently running WeSwapCards · 980+ users.
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: fraunces, style: "normal", weight: 600 },
        { name: "Fraunces", data: frauncesItalic, style: "italic", weight: 600 },
      ],
    }
  );
}
