import MovieID from "./movieList/[movieId]/page";
const MovieIDPage = () => {
  const movieId = 1075794; // Ganti dengan cara mendapatkan movieId dari mana pun yang sesuai
  return <MovieID movieId={movieId} />;
};

export default MovieIDPage;
