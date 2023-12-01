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
};

interface TMovieCard {
  movie: TMovie;
}

const MovieCard = ({ movie }: TMovieCard) => {
  const { isDarkMode } = useTheme();
  console.log(isDarkMode);

  return (
    <div
      className={`rounded-lg transition duration-300 transform hover:scale-105 m-1 ${
        isDarkMode ? "bg-dark hover:shadow-xl" : "bg-light hover:shadow-2xl"
      } bg-opacity-10`}
    >
      <div className="flex flex-col items-start left-1/2 px-5 pt-5 rounded-lg h-full">
        <div className="relative ">
          <Image
            src={`${process.env.NEXT_PUBLIC_URL_POSTER}${movie.poster_path}`}
            alt={movie.title}
            className="border-black object-cover rounded-lg mb-2"
            width={300}
            height={100}
          />
        </div>
        <div className="flex flex-grow flex-row items-center justify-center mb-1">
          <div className="text-left w-50">
            <h2 className="text-md font-bold">{movie.title}</h2>
            <p className="text-sm font-normal mb-2">{movie.release_date}</p>
          </div>
          <div className="absolute flex flew-row bottom-0 right-0 gap-1 p-3 mr-2">
            {isDarkMode ? (
              <FaStar className="colors-bgdark"></FaStar>
            ) : (
              <FaStar className="text-light"></FaStar>
            )}
            <p className="font-bold text-sm">{movie.vote_average.toFixed(1)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
