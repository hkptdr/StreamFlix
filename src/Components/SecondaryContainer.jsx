import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  return (
    movies && (
      <div className=" bg-black ">
        <div className="-mt-40 relative z-index-20 ">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Top-Rated"} movies={movies?.topRatedMovies} />
          <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"UpComing"} movies={movies?.upcomingMovies} />
          <MovieList title={"Popular"} movies={movies?.popularMovies} />
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;
