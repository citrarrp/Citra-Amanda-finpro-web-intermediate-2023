import type { Metadata } from "next";
import React from "react";
import { Poppins } from "next/font/google";
import Navbar from "components/navbar";
import { ThemeProvider } from "./theme/themeContext";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Finding Movie",
  description: "Website yang menyediakan informasi daftar film...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
