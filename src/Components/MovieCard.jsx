import { posterPath } from "../utils/constants";

const MovieCard = ({ movies }) => {
  return (
    <div className="w-32 m-3 ">
      <img
        className=" rounded-lg cursor-pointer"
        src={posterPath + movies?.poster_path}
        alt="Movie Card"
      />
    </div>
  );
};
export default MovieCard;
