"use client";
import React from "react";
import MovieList from "app/movies/page";
import TrendingMovie from "components/cover";
import { useTheme } from "app/theme/themeContext";

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

const Home = ({}: HomeProps) => {
  const { isDarkMode } = useTheme();

  return (
    <header
      className={`
    ${isDarkMode ? "bg-bgdark text-white" : "bg-white text-light"}`}
    >
      <div>
        <TrendingMovie />
        <MovieList />
      </div>
    </header>
  );
};

export default Home;
