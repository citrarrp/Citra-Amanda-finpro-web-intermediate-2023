"use client";
import React, { useState, useEffect } from "react";
import MovieDetail from "components/movieDetail";
import Metadata from "components/metadata";
import ErrorPage from "app/error";
import LoadingPage from "components/loading";
import NotFoundPage from "app/notfound";

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
    popularMovieId: number;
  };
}

const MoviePopularId = ({ params: { popularMovieId } }: MovieIdProps) => {
  const [movie, setMovie] = useState<TMovie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL_API}/movie/${popularMovieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching movie:", error);
        if (typeof error === "string") {
          setError(error);
        } else {
          setError("An error occurred while fetching the movie.");
        }
      } finally {
        setLoading(false);
      }
    };

    if (popularMovieId) {
      fetchMovie();
    }
  }, [popularMovieId]);

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return <ErrorPage message={error} />;
  }

  if (!movie) {
    return <NotFoundPage />;
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

export default MoviePopularId;
