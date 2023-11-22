import React, { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; //npm install react-slick slick-carousel
import "slick-carousel/slick/slick-theme.css";
import { Rubik_Mono_One } from "next/font/google";
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

const rubik = Rubik_Mono_One({
  weight: ["400"],
  subsets: ["latin"],
});

const TrendingMovie = () => {
  const [movies, setMovies] = useState<TMovie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
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
    speed: 500,
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
            className={`text-center relative w-full h-64 ${rubik.className}`}
          >
            <h2 className="absolute top-1/2 left-1/2 text-bold text-black">
              {movie.title}
            </h2>
            <Image
              src={`${process.env.NEXT_PUBLIC_URL_POSTER}${movie.poster_path}`}
              alt={movie.title}
              className="object-cover rounded-md"
              width={1600}
              height={900}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TrendingMovie;
