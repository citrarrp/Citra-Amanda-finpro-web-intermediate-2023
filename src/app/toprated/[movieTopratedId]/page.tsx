"use client";
import React, { useState, useEffect } from "react";
import MovieDetail from "components/movieDetail";
import { ThemeProvider } from "app/theme/themeContext";
import Metadata from "components/metadata";

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
  tagline: string;
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

  const keywords: string[] = [
    ...movie.genres.map((genre) => genre.name),
    movie.tagline,
  ];

  return (
    <>
      <Metadata
        title={movie.title}
        description={movie.overview}
        keywords={keywords}
      />
      <MovieDetail movie={movie} />;
    </>
  );
};

export default MovieTopRatedId;
