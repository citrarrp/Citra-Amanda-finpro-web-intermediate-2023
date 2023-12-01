import React, { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Nova_Square, Rubik_Mono_One } from "next/font/google";
import { FaFire } from "react-icons/fa";

type TMovie = {
  id: number;
  title: string;
  release_date: string;
  popularity: number;
  vote_average: number;
  overview: string;
  poster_path: string;
};

const NovaSquare = Nova_Square({
  weight: ["400"],
  subsets: ["latin"],
});
const TrendingMovie = () => {
  const [movies, setMovies] = useState<TMovie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL_API}/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
  };

  return (
    <div>
      <div className="flex flex-row justify-content items-center">
        <h2 className="font-bolds pl-7 pb-7 pt-7 pr-3">Trending Movie</h2>{" "}
        <FaFire />
      </div>
      <Slider {...sliderSettings} className="mb-8">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className={`relative w-full h-80 ${NovaSquare.className}`}
          >
            <div
              className="absolute inset-0"
              style={{
                filter: "blur(2px)",
              }}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_URL_POSTER}${movie.poster_path}`}
                alt={movie.title}
                className="object-cover w-full h-full mx-auto rounded-md"
                loading="lazy"
                layout="fill"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-full text-center">
              <h2
                className="text-bold text-white text-2xl"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
              >
                {movie.title}
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TrendingMovie;
