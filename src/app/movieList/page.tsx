import React, { useState, useEffect } from "react";
import MovieCard from "components/movieCard";

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
        setLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL_API}/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        const data = await response.json();
        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="px-30 py-30">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 h-auto m-20">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} cari="movieList" />
        ))}
      </div>
    </div>
  );
};

export default MovieList;