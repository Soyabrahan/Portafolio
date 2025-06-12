import "./globals.css";

export const metadata = {
  title: "Portafolio",
  description: "Portafolio de Abrahan Ramirez",
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
