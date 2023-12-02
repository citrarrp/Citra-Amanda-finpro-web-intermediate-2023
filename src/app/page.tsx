"use client";
import React from "react";
import MovieList from "app/movieList/page";
import TrendingMovie from "components/cover";
import { useTheme } from "app/theme/themeContext";
import Metadata from "components/metadata";

const Home = () => {
  const { isDarkMode } = useTheme();

  return (
    <main
      className={`
    ${isDarkMode ? "bg-bgdark text-white" : "bg-white text-light"}`}
    >
      <Metadata
        title="Finding Movie"
        description="Jelajahi Kumpulan Movie Terpopuler, Terbaru, Trending, dan Top Rated"
        keywords={["Movie", "Next JS", "Hiburan", "Final Project"]}
      />
      <div>
        <TrendingMovie />
        <MovieList />
      </div>
    </main>
  );
};

export default Home;
