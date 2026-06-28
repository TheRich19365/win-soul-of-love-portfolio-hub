import "./globals.css";

export const metadata = {
  title: "Win Soul of Love Portfolio Hub",
  description: "Premium spiritual-tech portfolio hub for Win Soul of Love."
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
