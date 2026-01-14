import type { Metadata } from "next";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEO Coffee Experience — Премиальный Лендинг",
  description: "Высококлассный выездной кофейный бар. Эстетика, технология, сервис."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body style={{fontFamily: 'Manrope, Arial, Helvetica, sans-serif'}}>
        {children}
      </body>
    </html>
  );
}
