"use client";
import React, { useState, useEffect, cache } from "react";
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

const TopRatedMovie = () => {
  const [movies, setMovies] = useState<TMovie[]>([]);
  const [loading, setLoading] = useState(true);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL_API}/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
          { cache: "no-store", next: { revalidate: 3600 } }
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
    return <LoadingPage />;
  }

  return (
    <div
      className={`
    ${isDarkMode ? "bg-bgdark text-white" : "bg-white text-light"}`}
    >
      <div className="px-[30px] py-[50px]">
        <div className="grid h-auto grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} cari="toprated" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRatedMovie;
