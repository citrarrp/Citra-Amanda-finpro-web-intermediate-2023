import React from "react";
import Image from "next/image";
import { useTheme } from "app/theme/themeContext";
import { FaStar } from "react-icons/fa";
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
};

interface TMovieCard {
  movie: TMovie;
}

const MovieDetail = ({ movie }: TMovieCard) => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`container mx-auto p-8 ${
        isDarkMode ? "bg-light" : "bg-dark"
      }md:w-2/3 flex flex-col space-y-4`}
    >
      <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0">
        <div className="relative md:w-1/3">
          <div className="inset-0 p-4 transition-all duration-300 ease-in-out bg-white bg-opacity-50 rounded-md shadow-xl hover:backdrop-blur-lg hover:bg-opacity-75">
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
          <p>
            Release Date :{" "}
            <span className="font-semibold">{movie.release_date}</span>
          </p>
          <p className="">
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
          <p className="">{movie.runtime} minutes</p>
          <div className="flex items-center gap-1 mr-2 flew-row">
            {isDarkMode ? (
              <FaStar size={30} className="colors-bgdark" />
            ) : (
              <FaStar size={30} className="text-light" />
            )}
            <p className="text-lg font-bold">{movie.vote_average}</p>
          </div>
          <p className="">
            <Link
              href={movie.homepage}
              target="_blank"
              rel="noopener noreferrer"
            >
              {movie.homepage}
            </Link>
          </p>
          <p className="">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
