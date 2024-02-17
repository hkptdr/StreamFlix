import { useEffect } from "react";
import { Option_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      Option_API
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    popularMovies();
  }, []);
};
export default usePopularMovies;
