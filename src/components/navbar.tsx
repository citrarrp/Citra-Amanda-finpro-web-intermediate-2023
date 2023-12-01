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

      <div className="flex items-center border border-white rounded-full px-2 py-2 mb-2 lg:mb-0 lg:mr-5">
        <input
          type="text"
          placeholder="Search..."
          className="border-none outline-none rounded-full ml-1 pl-3 pr-3 py-2 sm:w-auto md:w-64 lg:w-96"
        />
        <FaSearch className="text-white ml-3 mr-2" />
      </div>

      <div className="menu-column flex flex-col lg:flex-row space-x-0 lg:space-x-2 lg:ml-5 items-center lg:justify-center">
        <Link href="/" passHref>
          <p className="relative inline-block px-0 mr-3 text-white text-decoration-none overflow-hidden py-1 group">
            Home
            <span className="absolute w-full h-0.5 bg-white bottom-0 left-0 transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
          </p>
        </Link>
        <Link href="/popular" passHref>
          <p className="relative inline-block px-0 mr-3 text-white text-decoration-none overflow-hidden py-1 group">
            Popular
            <span className="absolute w-full h-0.5 bg-white bottom-0 left-0 transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
          </p>
        </Link>
        <Link href="/upcoming" passHref>
          <p className="relative inline-block px-0 mr-3 text-white text-decoration-none overflow-hidden py-1 group">
            Upcoming
            <span className="absolute w-full h-0.5 bg-white bottom-0 left-0 transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
          </p>
        </Link>
        <Link href="/toprated" passHref>
          <p className="relative inline-block px-0 mr-3 text-white text-decoration-none overflow-hidden py-1 group">
            Top Rated
            <span className="absolute w-full h-0.5 bg-white bottom-0 left-0 transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
          </p>
        </Link>
      </div>

      <div
        className="cursor-pointer px-5 sm:py-5 md:py-5 lg:py-0 justify-center"
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
