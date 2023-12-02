"use client";
import React from "react";
import Link from "next/link";
import { useTheme } from "./theme/themeContext";

interface ErrorPageProps {
  message: string;
}

const ErrorPage = ({ message }: ErrorPageProps) => {
  const isDarkMode = useTheme();
  console.log(isDarkMode);
  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${
        isDarkMode.isDarkMode ? " bg-bgdark" : "bg-white"
      } bg-opacity-100`}
    >
      <p
        className={`${
          isDarkMode.isDarkMode ? "text-white" : "text-light"
        } font-bold`}
      >
        Error: {message}
      </p>
      <Link
        href="/"
        className={`px-3 py-1 mt-4 rounded-xl ${
          isDarkMode.isDarkMode ? "text-white bg-dark" : "text-white bg-light"
        } font-normal`}
      >
        <p>Kembali ke Halaman Utama</p>
      </Link>
    </div>
  );
};

export default ErrorPage;
