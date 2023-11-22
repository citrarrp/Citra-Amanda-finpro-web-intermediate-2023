"use client";
import "./globals.css";
import React from "react";
import MovieList from "components/movieList";
import TrendingMovie from "components/cover";
import { useTheme } from "app/theme/themeContext";

type TMovie = {
  id: number;
  title: string;
  release_date: string;
  popularity: number;
  vote_average: number;
  overview: string;
  poster_path: string;
};

interface HomeProps {
  movies: TMovie[];
}

const Home = ({ movies }: HomeProps) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const darkModeClasses = isDarkMode
    ? "bg-bgdark text-white"
    : "bg-white text-light";

  return (
    <div
      className={`
      ${darkModeClasses}`}
    >
      <TrendingMovie />
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;

// const Home = ({ movies }: HomeProps) => {
//   return (
//     <div>
//       <Movie movies={movies} />
//     </div>
//   );
// };
// Define the type for a single movie
// type TMovie = {
//   id: number;
//   title: string;
//   release_date: string;
//   popularity: number;
//   vote_average: number;
//   overview: string;
//   poster_path: string;
//   // Add other properties as needed
// };

// interface HomeProps {
//   movies: TMovie[];
// }

// const Home: React.FC<HomeProps> = ({ movies }) => {
//   return (
//     <div>
//       <h1>Movie List</h1>
//       <MovieList movies={movies} />
//     </div>
//   );
// };

// export async function getServerSideProps() {
//   // Fetch data from the movie API
//   const response = await fetch(
//     `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
//   );
//   const data = await response.json();

//   // Pass data to the page component as props
//   return {
//     props: {
//       movies: data.results as TMovie[], // Assuming the movie data is in the "results" property
//     },
//   };
// }

// "https://api.themoviedb.org/3/discover/movie?api_key=6fd9585d446054ebcf387d4b385b918d";
// cari dari query https://api.themoviedb.org/3/search/movie?api_key=6fd9585d446054ebcf387d4b385b918d&query=Child
// cari dari id https://api.themoviedb.org/3/movie/507089?api_key=6fd9585d446054ebcf387d4b385b918d
