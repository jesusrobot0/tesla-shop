import type { Metadata } from "next";
import { textFont } from "@/config/fonts";
import "./globals.css";

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Tesla | Shop",
  description: "Una tienda virtual de productos",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="es">
      <body className={textFont.className}>{children}</body>
    </html>
  );
}
