"use client";
import React, { useState, useEffect } from "react";
import MovieDetail from "components/movieDetail";
import { ThemeProvider } from "app/theme/themeContext";

type TMovie = {
  id: number;
  title: string;
  release_date: string;
  popularity: number;
  vote_average: number;
  overview: string;
  poster_path: string;
  genres: Array<{ id: number; name: string }>;
  runtime: number;
  homepage: string;
};

interface MovieIdProps {
  params: {
    movieTopratedId: number;
  };
}

const MovieTopRatedId = ({ params: { movieTopratedId } }: MovieIdProps) => {
  const [movie, setMovie] = useState<TMovie | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL_API}/movie/${movieTopratedId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    if (movieTopratedId) {
      fetchMovie();
    }
  }, [movieTopratedId]);

  if (!movie) {
    return <p>a</p>;
  }

  return (
    <ThemeProvider>
      <MovieDetail movie={movie} />
    </ThemeProvider>
  );
};

export default MovieTopRatedId;
