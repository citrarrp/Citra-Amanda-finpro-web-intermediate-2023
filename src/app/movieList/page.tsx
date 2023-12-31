"use client";
import React, { useState, useEffect } from "react";
import MovieCard from "components/movieCard";
import LoadingPage from "components/loading";

type TMovie = {
  id: number;
  title: string;
  release_date: string;
  popularity: number;
  vote_average: number;
  overview: string;
  poster_path: string;
};

const MovieList = () => {
  const [movies, setMovies] = useState<TMovie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL_API}/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
          {
            cache: "no-store",
            next: { revalidate: 3600 },
          }
        );
        const data = await response.json();
        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className="px-[30px] pt-[7px] pb-[50px]">
      <div className="grid h-auto grid-cols-2 gap-2 m-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:gap-6 lg:gap-3">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} cari="movieList" />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
