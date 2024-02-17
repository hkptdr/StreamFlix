import { background_img } from "../utils/constants";
import GPTSearchBar from "./GPTSearchBar";
import GPTSuggestions from "./GPTSuggestions";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={background_img} alt="background poster" />
      </div>
      <GPTSearchBar />
      <GPTSuggestions />
    </div>
  );
};
export default GPTSearch;
