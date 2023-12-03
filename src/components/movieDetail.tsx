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
  const formattedDate = new Date(movie.release_date).toLocaleDateString(
    "id-ID",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div
      className={`${
        isDarkMode ? "bg-bgdark" : "bg-white"
      } justify-center p-50 min-h-screen`}
    >
      <div className="items-center justify-center max-w-screen-xl p-10 mx-auto">
        <div className="">
          <div
            className={`flex flex-col items-center gap-5 py-8 space-y-4 border rounded-md md:flex-row md:space-y-0 md:px-10 ${
              isDarkMode ? "border-white" : "border-light"
            }`}
          >
            <div className="w-auto md:w-1/3">
              <Image
                src={`${process.env.NEXT_PUBLIC_URL_POSTER}${movie.poster_path}`}
                alt={movie.title}
                width={250}
                height={350}
                className={`${
                  isDarkMode
                    ? "shadow-xl bg-opacity-90"
                    : "shadow-2xl bg-opacity-90"
                } transition-all duration-150 ease-in-out rounded-md hover:transform hover:scale-105 hover:rotate-[-2deg]`}
                style={{ maxWidth: "100%", height: "auto" }}
              ></Image>
            </div>

            <div
              className={` ${
                isDarkMode ? "text-white" : "text-light"
              } flex flex-col space-y-4 md:w-2/3 w-auto xl:mx-auto sm:mx-5 md:mx-auto `}
            >
              <h1 className="text-3xl font-bold">{movie.title}</h1>
              <div className="flex flex-row items-center gap-6 mr-2">
                <div className="flex flex-row gap-2">
                  {isDarkMode ? (
                    <FaStar size={25} className="text-white" />
                  ) : (
                    <FaStar size={25} className="text-light" />
                  )}
                  <p
                    className={` ${
                      isDarkMode ? "text-white" : "text-light"
                    } font-bold text-xl`}
                  >
                    {movie.vote_average}
                  </p>
                </div>
                <div>
                  <p className="sm:text-sm md:text-md xl:text-xl">
                    Release Date :
                  </p>
                  <p className="font-semibold">{formattedDate}</p>
                </div>
                <div>
                  <p className="sm:text-sm md:text-md xl:text-xl">Runtime :</p>
                  <p className="">{movie.runtime} minutes</p>
                </div>
              </div>
              <div className="flex xl:flex-row sm:flex-col md:flex-row gap-3">
                {movie.genres.map((genre, index) => (
                  <p
                    key={index}
                    className={`px-2 py-1 border ${
                      isDarkMode ? "border-white" : "border-light"
                    } rounded-xl`}
                  >
                    {genre.name}
                  </p>
                ))}
              </div>
              <p className="">{movie.overview}</p>

              <p className="">
                <Link
                  href={movie.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    isDarkMode ? "text-light" : "text-dark"
                  } sm:text-sm md:text-md xl:text-xl`}
                >
                  {movie.homepage}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
