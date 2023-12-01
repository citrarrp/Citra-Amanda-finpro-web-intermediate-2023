"use client";
import React from "react";
import Link from "next/link";

interface ErrorPageProps {
  message: string;
}

const ErrorPage = ({ message }: ErrorPageProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p className="text-red-500">Error: {message}</p>
      <Link href="/" className="bg-[#DB2887] px-3 py-1 rounded-xl mt-4">
        Go back to home
      </Link>
    </div>
  );
};

export default ErrorPage;
