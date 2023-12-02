"use client";

import React from "react";
import { FaSearch, FaSun, FaMoon } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logo from "app/images/logoFM(L).png";
import logo_D from "app/images/logo.png";
import { useTheme } from "app/theme/themeContext";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <nav
      className={`text-md ${
        isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
      } px-4 py-4 flex flex-col lg:flex-row justify-between items-center`}
    >
      <div className="flex items-center px-5 sm:py-5 md:py-5 lg:py-0">
        <Image
          src={isDarkMode ? logo_D : logo}
          alt="Finding Movie"
          width={100}
          height={40}
        />
      </div>

      <div className="flex items-center px-2 py-2 mb-2 border border-white rounded-full lg:mb-0 lg:mr-5">
        <input
          type="text"
          placeholder="Search..."
          className={`border-none outline-none rounded-full ml-1 pl-3 pr-3 py-2 sm:w-auto md:w-64 lg:w-96 ${
            isDarkMode ? "text-dark" : "text-light"
          }`}
        />
        <FaSearch className="ml-3 mr-2 text-white" />
      </div>

      <div className="flex flex-col items-center space-x-0 menu-column lg:flex-row lg:space-x-2 lg:ml-5 lg:justify-center">
        <Link href="/" passHref>
          <p className="relative inline-block px-0 py-1 mr-3 overflow-hidden text-white text-decoration-none group">
            Home
            <span className="absolute w-full h-0.5 bg-white bottom-0 left-0 transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
          </p>
        </Link>
        <Link href="/popular" passHref>
          <p className="relative inline-block px-0 py-1 mr-3 overflow-hidden text-white text-decoration-none group">
            Popular
            <span className="absolute w-full h-0.5 bg-white bottom-0 left-0 transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
          </p>
        </Link>
        <Link href="/upcoming" passHref>
          <p className="relative inline-block px-0 py-1 mr-3 overflow-hidden text-white text-decoration-none group">
            Upcoming
            <span className="absolute w-full h-0.5 bg-white bottom-0 left-0 transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
          </p>
        </Link>
        <Link href="/toprated" passHref>
          <p className="relative inline-block px-0 py-1 mr-3 overflow-hidden text-white text-decoration-none group">
            Top Rated
            <span className="absolute w-full h-0.5 bg-white bottom-0 left-0 transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
          </p>
        </Link>
      </div>

      <div
        className="justify-center px-5 cursor-pointer sm:py-5 md:py-5 lg:py-0"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? (
          <FaSun size={23} className="text-light" />
        ) : (
          <FaMoon size={20} className="text-dark" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
