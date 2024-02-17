import { useEffect } from "react";
import { Option_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingTrailer } from "../utils/movieSlice";
const useMovieTrailer = (id) => {
  const dispatch = useDispatch();

  const movieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos",
      Option_API
    );
    const json = await data.json();

    const filteredTrailer = json.results.filter(
      (video) => video.type === "Trailer"
    );

    const trailer = filteredTrailer.length
      ? filteredTrailer[0]
      : json.results[0];

    dispatch(addNowPlayingTrailer(trailer));
  };

  useEffect(() => {
    movieVideo();
  }, []);
};
export default useMovieTrailer;
