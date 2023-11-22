import React, { useState, useEffect } from "react";
import Image from "next/image";
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

interface MovieListProps {
  movies: TMovie[];
}

const MovieList: React.FC<MovieListProps> = () => {
  const [movies, setMovies] = useState<TMovie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const { isDarkMode } = useTheme();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-auto">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="flex flex-col items-center justify-center left-1/2"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_URL_POSTER}${movie.poster_path}`}
            alt={movie.title}
            className="border-black object-cover rounded-lg"
            width={300}
            height={100}
          />
          <div className="justify-center text-center mt-3 mb-8 bg-transparent">
            <h2 className="text-lg font-bold">{movie.title}</h2>
            <p className="text-sm font-bold">{movie.release_date}</p>
            <p className="text-sm font-normal">
              Popularity: <span className="font-bold">{movie.popularity}</span>
            </p>
            <p className="text-sm font-normal">
              Vote Average:{" "}
              <span className="font-bold mb-5">{movie.vote_average}</span>
            </p>
            {/* <p className="text-sm font-normal text-justify">
            {movie.overview}
          </p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { useTheme } from "app/theme/themeContext";

// type TMovie = {
//   id: number;
//   title: string;
//   release_date: string;
//   popularity: number;
//   vote_average: number;
//   overview: string;
//   poster_path: string;
// };

// interface MovieListProps {
//   movies: TMovie[];
// }

// const MovieList = ({}: MovieListProps) => {
//   const [movies, setMovies] = useState<TMovie[]>([]);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await fetch(
//           `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
//         );
//         const data = await response.json();
//         setMovies(data.results);
//       } catch (error) {
//         console.error("Error fetching movies:", error);
//       }
//     };

//     fetchMovies();
//   }, []);

//   const { isDarkMode, toggleDarkMode } = useTheme();
//   const darkModeClasses = isDarkMode
//     ? "border-color-dark"
//     : "border-color-light";

//   return (
//     <div className="mx-10">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
//         {movies.map((movie) => (
//           <div
//             key={movie.id}
//             className={`card
//           ${darkModeClasses}`}
//           >
//             <div className="poster">
//               <Image
//                 src={`${process.env.NEXT_PUBLIC_URL_POSTER}${movie.poster_path}`}
//                 alt={movie.title}
//                 className={`img object-cover rounded-lg
//     ${darkModeClasses}`}
//                 width={300}
//                 height={100}
//               />
//             </div>
//             <div className="details max-w-xs mx-auto ">
//               <h2 className="text-lg font-bold mb-2">{movie.title}</h2>
//               <p className="text-sm mb-2">Release Date: {movie.release_date}</p>
//               <p className="text-sm mb-2">Popularity: {movie.popularity}</p>
//               <p className="text-sm  mb-2">
//                 Vote Average: {movie.vote_average}
//               </p>
//               <p className="text-sm ">{movie.overview}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MovieList;
// import React from "react";
// import Image from "next/image";

// type TMovie = {
//   id: number;
//   title: string;
//   release_date: string;
//   popularity: number;
//   vote_average: number;
//   overview: string;
//   poster_path: string;
// };

// interface MovieListProps {
//   movies: TMovie[];
// }

// const MovieList = ({ movies }: MovieListProps) => {
//   return (
//     <div>
//       <h2>Movie List</h2>
//       <ul>
//         {movies.map((movie) => (
//           <li key={movie.id}>
//             <p>Title: {movie.title}</p>
//             <p>Release Date: {movie.release_date}</p>
//             <p>Popularity: {movie.popularity}</p>
//             <p>Vote Average: {movie.vote_average}</p>
//             <p>Overview: {movie.overview}</p>
//             <Image
//               src={`${process.env.NEXT_PUBLIC_URL_POSTER}${movie.poster_path}`}
//               alt={movie.title}
//               width={200}
//               height={300}
//             />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MovieList;

// import React from 'react';
// import Image from 'next/image';

// async function listMovie(): Promise<TMovie[]> {
//   const res = await fetch(
//     `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
//     {
//       next: {
//         revalidate: 10,
//       },
//     }
//   );
//   const movies = await res.json();

//   return movies;
// }
// export async function getServerSideProps() {
//   try {
//     const response = await fetch(
//       `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
//     );
//     const data = await response.json();

//     return {
//       props: {
//         movies: data.results,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching movies:", error);
//     return {
//       props: {
//         movies: [],
//       },
//     };
//   }
// }

// export default async function IncrementalStaticRegeneration() {
//   const movies = await listMovie();
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//       {movies.map((movie) => (
//         <div key={movie.id} className="bg-white p-4 rounded-md shadow-md">
//           <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
//           <p className="text-gray-500 mb-2">
//             Release Date: {movie.release_date}
//           </p>
//           <p className="text-gray-500 mb-2">Popularity: {movie.popularity}</p>
//           <p className="text-gray-500 mb-2">
//             Vote Average: {movie.vote_average}
//           </p>
//           <p className="text-gray-700">{movie.overview}</p>
//           <Image
//             src={`${process.env.NEXT_PUBLIC_URL_POSTER}${movie.poster_path}`}
//             alt={movie.title}
//             width={200}
//             height={300}
//             className="mt-4"
//           />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default MovieList;

// import React from "react";
// import Image from "next/image";

// type TMovie = {
//   id: number;
//   title: string;
//   release_date: string;
//   popularity: number;
//   vote_average: number;
//   overview: string;
//   poster_path: string;
// };

// interface MovieListProps {
//   movies: TMovie[];
// }

// const MovieList = ({ movies }: MovieListProps) => {
//   return (
//     <div>
//       <h2>Movie List</h2>
//       <ul>
//         {movies.map((movie) => (
//           <li key={movie.id}>
//             <p>Title: {movie.title}</p>
//             <p>Release Date: {movie.release_date}</p>
//             <p>Popularity: {movie.popularity}</p>
//             <p>Vote Average: {movie.vote_average}</p>
//             <p>Overview: {movie.overview}</p>
//             <Image
//               src={`${process.env.NEXT_PUBLIC_URL_POSTER}${movie.poster_path}`}
//               alt={movie.title}
//               width={200}
//               height={300}
//             />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MovieList;

// import React from "react";
// import Image from "next/image";

// type TMovie = {
//   id: number;
//   title: string;
//   release_date: string;
//   popularity: number;
//   vote_average: number;
//   overview: string;
//   poster_path: string;
// };

// interface MovieListProps {
//   movies: TMovie[];
// }

// const MovieList = ({ movies }: MovieListProps) => {
//   return (
//     <div>
//       <h2>Movie List</h2>
//       console.log(movies);
//       <ul>
//         {movies.map((movie) => (
//           <li key={movie.id}>
//             <p>Title: {movie.title}</p>
//             <p>Release Date: {movie.release_date}</p>
//             <p>Popularity: {movie.popularity}</p>
//             <p>Vote Average: {movie.vote_average}</p>
//             <p>Overview: {movie.overview}</p>
//             <Image
//               src={`${process.env.NEXT_PUBLIC_URL_POSTER}${movie.poster_path}`}
//               alt={movie.title}
//               width={200}
//               height={300}
//             />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MovieList;

// import React from "react";
// import Image from "next/image";

// type TMovie = {
//   id: number;
//   title: string;
//   release_date: string;
//   popularity: number;
//   vote_average: number;
//   overview: string;
//   poster_path: string;
// };

// interface MovieListProps {
//   movies: TMovie[];
// }

// const MovieList = ({ movies }: MovieListProps) => {
//   return (
//     <div>
//       <h2>Movie List</h2>
//       <ul>
//         {movies.map((movie) => (
//           <li key={movie.id}>
//             <p>Title: {movie.title}</p>
//             <p>Release Date: {movie.release_date}</p>
//             <p>Popularity: {movie.popularity}</p>
//             <p>Vote Average: {movie.vote_average}</p>
//             <p>Overview: {movie.overview}</p>
//             <Image
//               src={`${process.env.NEXT_PUBLIC_URL_POSTER}${movie.poster_path}`}
//               alt={movie.title}
//               width={200}
//               height={300}
//             />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MovieList;

// import React from "react";
// import Image from "next/image";

// type TMovie = {
//   id: number;
//   title: string;
//   release_date: string;
//   popularity: number;
//   vote_average: number;
//   overview: string;
//   poster_path: string;
// };

// async function listMovie(): Promise<TMovie[]> {
//   const res = await fetch(
//     `https://api.themoviedb.org/3/discover/movie?api_key=6fd9585d446054ebcf387d4b385b918d`
//   );
//   const { results } = await res.json(); // Ambil properti 'results' dari respon JSON

//   return results;
// }
// async function listMovie(): Promise<TMovie[]> {
//   try {
//     const res = await fetch(
//       `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
//     );
//     console.log("API Response:", res);

//     if (!res.ok) {
//       throw new Error(`Failed to fetch data. Status: ${res.status}`);
//     }

//     const { results } = await res.json();
//     console.log("Fetched movie results:", results);

//     return results || [];
//   } catch (error) {
//     console.error("Error fetching movies:", error);
//     throw error;
//   }
// }

// export default function IncrementalStaticRegeneration({
//   movies,
// }: {
//   movies: TMovie[];
// }) {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//       {movies && movies.length > 0 ? (
//         movies.map((movie) => (
//           <div key={movie.id} className="bg-white p-4 rounded-md shadow-md">
//             {/* ... Komponen film Anda di sini ... */}
//           </div>
//         ))
//       ) : (
//         <p>No movies available.</p>
//       )}
//     </div>
//   );
// }

// export async function getServerSideProps() {
//   try {
//     const movies = await listMovie();
//     console.log(movies);
//     return {
//       props: {
//         movies: movies || [], // Ensure movies is defined, use an empty array if it's not
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching movies:", error);
//     return {
//       props: {
//         movies: [], // Handle the case where an error occurred during the API request
//       },
//     };
//   }
// }

// export default function IncrementalStaticRegeneration({
//   movies,
// }: {
//   movies: TMovie[];
// }) {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//       {movies.map((movie) => (
//         <div key={movie.id} className="bg-white p-4 rounded-md shadow-md">
//           <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
//           <p className="text-gray-500 mb-2">
//             Release Date: {movie.release_date}
//           </p>
//           <p className="text-gray-500 mb-2">Popularity: {movie.popularity}</p>
//           <p className="text-gray-500 mb-2">
//             Vote Average: {movie.vote_average}
//           </p>
//           <p className="text-gray-700">{movie.overview}</p>
//           <Image
//             src={`${process.env.NEXT_PUBLIC_URL_POSTER}${movie.poster_path}`}
//             alt={movie.title}
//             width={200}
//             height={300}
//             className="mt-4"
//           />
//         </div>
//       ))}
//     </div>
//   );
// }

// export async function getServerSideProps() {
//   try {
//     const movies = await listMovie();
//     return {
//       props: {
//         movies,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching movies:", error);
//     return {
//       props: {
//         movies: [],
//       },
//     };
//   }
// }

// import React from "react";
// import Image from "next/image";

// type TMovie = {
//   id: number;
//   title: string;
//   release_date: string;
//   popularity: number;
//   vote_average: number;
//   overview: string;
//   poster_path: string;
// };

// async function listMovie(): Promise<TMovie[]> {
//   try {
//     const res = await fetch(
//       `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
//     );

//     if (!res.ok) {
//       throw new Error(`Failed to fetch data. Status: ${res.status}`);
//     }

//     const { results } = await res.json();
//     return results || [];
//   } catch (error) {
//     console.error("Error fetching movies:", error);
//     throw error;
//   }
// }

// export default function MovieList({ movies }: { movies: TMovie[] }) {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//       {movies && movies.length > 0 ? (
//         movies.map((movie) => (
//           <div key={movie.id} className="bg-white p-4 rounded-md shadow-md">
//             <p>Title: {movie.title}</p>
//             <p>Release Date: {movie.release_date}</p>
//             <p>Popularity: {movie.popularity}</p>
//             <p>Vote Average: {movie.vote_average}</p>
//             <p>Overview: {movie.overview}</p>
//             <Image
//               src={`${process.env.NEXT_PUBLIC_URL_POSTER}${movie.poster_path}`}
//               alt={movie.title}
//               width={200}
//               height={300}
//             />
//           </div>
//         ))
//       ) : (
//         <p>No movies available.</p>
//       )}
//     </div>
//   );
// }

// export async function getStaticProps() {
//   try {
//     const movies = await listMovie();
//     console.log(movies);
//     return {
//       props: {
//         movies: movies || [],
//       },
//       revalidate: 60, // Regenerate the page every 60 seconds (adjust as needed)
//     };
//   } catch (error) {
//     console.error("Error fetching movies:", error);
//     return {
//       props: {
//         movies: [],
//       },
//       revalidate: 60, // Still include revalidate even if there's an error
//     };
//   }
// }
