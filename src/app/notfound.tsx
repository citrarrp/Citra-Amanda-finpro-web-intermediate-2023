import React from "react";
import Link from "next/link";
import { useTheme } from "./theme/themeContext";

const NotFoundPage = () => {
  const isDarkMode = useTheme();
  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
      <p className="text-lg mb-4">
        Maaf, halaman yang Anda cari tidak ditemukan.
      </p>
      <Link href="/">
        <a
          className={`${
            isDarkMode ? "text-light" : "text-dark"
          } text-blue-500 hover:underline`}
        >
          Kembali ke Halaman Utama
        </a>
      </Link>
    </div>
  );
};

export default NotFoundPage;
