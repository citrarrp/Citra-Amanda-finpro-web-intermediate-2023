"use client";
import React from "react";
import Link from "next/link";
import { useTheme } from "./theme/themeContext";

const NotFoundPage = () => {
  const isDarkMode = useTheme();
  return (
    <div className="p-[150px]">
      <div className="p-5 mx-auto text-center">
        <h1 className="mb-4 text-4xl font-bold">404 - Not Found</h1>
        <p className="mb-4 text-lg">
          Maaf, halaman yang Anda cari tidak ditemukan.
        </p>
        <Link href="/">
          <p
            className={`${
              isDarkMode ? "text-light" : "text-dark"
            } text-blue-500 hover:underline`}
          >
            Kembali ke Halaman Utama
          </p>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
