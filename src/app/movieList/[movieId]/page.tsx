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
    movieId: number;
  };
}

const MovieId = ({ params: { movieId } }: MovieIdProps) => {
  const [movie, setMovie] = useState<TMovie | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL_API}/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    if (movieId) {
      fetchMovie();
    }
  }, [movieId]);

  if (!movie) {
    return <p>a</p>;
  }

  return <MovieDetail movie={movie} />;
};

export default MovieId;
