import type { Metadata } from "next";
import { textFont } from "@/config/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tesla | Shop",
  description: "Una tienda virtual de productos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={textFont.className}>{children}</body>
    </html>
  );
}
