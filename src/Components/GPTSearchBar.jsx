import { useSelector } from "react-redux";
import langConstants from "../utils/langConstants";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.language.lang);
  return (
    <div className="pt-40 flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          className="p-3 m-2 rounded-lg col-span-9"
          placeholder={langConstants[langKey].placeholderText}
        />
        <button className="bg-red-700 p-3 m-2 col-span-3 rounded-lg text-lg text-white">
          {langConstants[langKey].search}
        </button>
      </form>
    </div>
  );
};
export default GPTSearchBar;
