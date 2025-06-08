import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mi Aplicación",
  description: "Aplicación creada con Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
