import React from "react";
import Image from "next/image";
import { useTheme } from "app/theme/themeContext";
import { FaStar } from "react-icons/fa";

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

interface TMovieCard {
  movie: TMovie;
}

const MovieDetail = ({ movie }: TMovieCard) => {
  const { isDarkMode } = useTheme();

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0">
        <div className="md:w-1/3 relative">
          <div className="shadow-xl bg-white bg-opacity-50 p-4 rounded-md absolute inset-0 transition-all duration-300 ease-in-out hover:backdrop-blur-lg hover:bg-opacity-75">
            <Image
              src={`${process.env.NEXT_PUBLIC_URL_POSTER}${movie.poster_path}`}
              alt={movie.title}
              width={200}
              height={250}
              className="rounded-md"
            />
          </div>
        </div>
        <div
          className={`container mx-auto p-8 ${
            isDarkMode ? "text-light" : "text-dark"
          }md:w-2/3 flex flex-col space-y-4`}
        >
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          <p className="">{movie.release_date}</p>
          <p className="">
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
          <p className="">{movie.runtime} minutes</p>
          <div className="absolute flex flew-row bottom-0 right-0 gap-1 p-3 mr-2">
            {isDarkMode ? (
              <FaStar className="colors-bgdark" />
            ) : (
              <FaStar className="text-light" />
            )}
            <p className="font-bold text-sm">{movie.vote_average}</p>
          </div>
          <p className="">
            <a href={movie.homepage} target="_blank" rel="noopener noreferrer">
              {movie.homepage}
            </a>
          </p>
          <p className="">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
