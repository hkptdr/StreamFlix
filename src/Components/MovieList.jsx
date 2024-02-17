import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    movies && (
      <div className="my-8">
        <h1 className="px-6 font-bold text-3xl text-white ">{title}</h1>

        <div className="flex overflow-x-scroll px-8 scrollbar-hide">
          <div className="flex">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movies={movie} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};
export default MovieList;
