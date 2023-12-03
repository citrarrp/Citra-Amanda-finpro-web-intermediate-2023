"use client";
import React, { useState, useEffect } from "react";
import MovieDetail from "components/movieDetail";
import Metadata from "components/metadata";
import NotFoundPage from "app/not-found";
import Link from "next/link";

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
    movieId: number;
  };
}

const MovieId = ({ params: { movieId } }: MovieIdProps) => {
  const [movie, setMovie] = useState<TMovie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL_API}/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch movie: ${response.statusText}`);
        }

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

    if (movieId) {
      fetchMovie();
    }
  }, [movieId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!movie) {
    return <NotFoundPage />;
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Link href="/" className="px-3 py-1 mt-4 rounded-xl font-normal">
          <p>Kembali ke Halaman Utama</p>
        </Link>
      </div>
    );
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
      <MovieDetail movie={movie} />
    </>
  );
};

export default MovieId;
