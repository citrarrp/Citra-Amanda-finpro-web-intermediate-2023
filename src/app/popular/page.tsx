"use client";
import React, { useState, useEffect } from "react";
import MovieCard from "components/movieCard";
import { useTheme } from "app/theme/themeContext";
import LoadingPage from "components/loading";
import ErrorPage from "app/error";

type TMovie = {
  id: number;
  title: string;
  release_date: string;
  popularity: number;
  vote_average: number;
  overview: string;
  poster_path: string;
};

const PopularMovie = () => {
  const [movies, setMovies] = useState<TMovie[]>([]);
  const [loading, setLoading] = useState(true);

  const { isDarkMode } = useTheme();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL_API}/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        const data = await response.json();
        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <h1 className="">Loading ...</h1>;
  }

  return (
    <div
      className={`
      ${isDarkMode ? "bg-bgdark text-white" : "bg-white text-light"}`}
    >
      <div className="px-30 py-30">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 h-auto">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} cari="popular" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularMovie;
