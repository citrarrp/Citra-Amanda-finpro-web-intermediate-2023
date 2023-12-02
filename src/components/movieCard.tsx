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
};

interface TMovieCard {
  movie: TMovie;
  cari: String;
}

const MovieCard = ({ movie, cari }: TMovieCard) => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`rounded-lg transition duration-300 transform hover:scale-105 m-1 ${
        isDarkMode ? "bg-dark hover:shadow-xl" : "bg-light hover:shadow-2xl"
      } bg-opacity-10`}
    >
      <div className="flex flex-col items-start h-full px-5 pt-5 rounded-lg left-1/2">
        <div className="relative ">
          <Image
            src={`${process.env.NEXT_PUBLIC_URL_POSTER}${movie.poster_path}`}
            alt={movie.title}
            className="object-cover mb-2 border-black rounded-lg"
            loading="lazy"
            width={300}
            height={100}
          />
        </div>
        <div className="flex flex-row items-center justify-center flex-grow mb-1">
          <div className="text-left w-50">
            <Link href={`/${cari}/${movie.id}`}>
              <h2
                className={`text-md font-bold ${
                  isDarkMode ? "hover:text-light" : "hover:text-dark"
                }`}
              >
                {movie.title}
              </h2>
            </Link>
            <p className="mb-2 text-sm font-normal">{movie.release_date}</p>
          </div>
          <div className="absolute bottom-0 right-0 flex gap-1 p-3 mr-2 flew-row">
            {isDarkMode ? (
              <FaStar className="text-white"></FaStar>
            ) : (
              <FaStar className="text-light"></FaStar>
            )}
            <p className="text-sm font-bold">{movie.vote_average.toFixed(1)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
