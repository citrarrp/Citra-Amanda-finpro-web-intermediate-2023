"use client";
import React from "react";
import MovieList from "app/movieList/page";
import TrendingMovie from "components/cover";
import { useTheme } from "app/theme/themeContext";
import Metadata from "components/metadata";

type TMovie = {
  id: number;
  title: string;
  release_date: string;
  popularity: number;
  vote_average: number;
  overview: string;
  poster_path: string;
};

interface HomeProps {
  movies: TMovie[];
}

const Home = () => {
  const { isDarkMode } = useTheme();

  return (
    <main>
      <Metadata
        title="Finding Movie"
        description="Jelajahi Kumpulan Movie Terpopuler, Terbaru, Trending, dan Top Rated"
        keywords={["Movie", "Next JS", "Hiburan", "Final Project"]}
      />
      <div
        className={`
      ${isDarkMode ? "bg-bgdark text-white" : "bg-white text-light"}`}
      >
        <TrendingMovie />
        <MovieList />
      </div>
    </main>
  );
};

export default Home;
