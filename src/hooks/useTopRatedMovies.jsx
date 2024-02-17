import { useEffect } from "react";
import { Option_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedmovies = () => {
  const dispatch = useDispatch();

  const topRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      Option_API
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    topRatedMovies();
  }, []);
};
export default useTopRatedmovies;
