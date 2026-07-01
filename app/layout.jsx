import "./globals.css";

export const metadata = {
  title: "Win Soul of Love Portfolio Hub",
  description:
    "Win Soul of Love creates music, visual storytelling, AI-assisted creative systems, Matrix 9, and human-centered symbolic experiences."
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05030f"
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
