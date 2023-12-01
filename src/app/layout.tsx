import type { Metadata } from "next";
import React from "react";
import { Poppins } from "next/font/google";
import Navbar from "components/navbar";
import { ThemeProvider } from "./theme/themeContext";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FindingMovie",
  description:
    "Final Project Web Intermediete : Website yang menyediakan informasi berbagai film yang diambil dari TMDb API",
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
