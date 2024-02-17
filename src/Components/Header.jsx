import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/UserSlice";
import { Logo, Supported_Languages } from "../utils/constants";
import { toggleGPTSearchPage } from "../utils/GPTSlice";
import { setLanguage } from "../utils/languageSlice";
const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const profileInfo = useSelector((store) => store.user);

  const GPTSearch = useSelector((store) => store.gpt.GPTSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleGPTSearchClick = () => {
    //toggle functionality for gpt search page
    dispatch(toggleGPTSearchPage());
  };

  const handleLanguage = (e) => {
    console.log(e.target.value);
    dispatch(setLanguage(e.target.value));
  };

  return (
    <div className=" absolute w-full flex justify-between bg-gradient-to-b from-black z-10">
      <div>
        <img className="w-40 " src={Logo} alt="logo" />
      </div>
      {profileInfo && (
        <div className="flex mx-4">
          {GPTSearch && (
            <select
              className="text-white cursor-pointer bg-transparent border-none mx-3 my-5"
              onChange={handleLanguage}
            >
              {Supported_Languages.map((lang) => (
                <option
                  key={lang.name}
                  value={lang.value}
                  className="bg-gray-900"
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="text-white font-bold cursor-pointer"
            onClick={handleGPTSearchClick}
          >
            {GPTSearch ? "Home" : "GPT Search"}
          </button>
          <img
            src={profileInfo?.photoURL}
            alt="User"
            className="w-12 h-12 rounded-full cursor-pointer m-4"
          />
          <button
            onClick={handleSignOut}
            className="text-white font-bold cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
