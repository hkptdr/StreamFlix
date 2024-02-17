import { useRef, useState } from "react";
import Header from "./Header";
import { validateLogin } from "../utils/validatelogin";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { addUser } from "../utils/UserSlice";
import { useDispatch } from "react-redux";
import { background_img, photo_URL } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();

  const [signIn, setSignIn] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const validatePage = () => {
    const message = validateLogin(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!signIn) {
      // signUp authentication

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: photo_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {});
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      // signIn authentication

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  const toggleSignIn = () => {
    setSignIn(!signIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute -z-10">
        <img src={background_img} alt="background poster" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black w-3/12 px-8 pb-8 my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="text-white text-3xl pb-4 my-6">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        {!signIn && (
          <input
            ref={name}
            type="text"
            placeholder="Enter Full Name"
            className="p-2 m-2 w-full bg-gray-700 text-sm"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Enter Email"
          className="p-2 m-2 w-full bg-gray-700 text-sm"
        />
        <input
          ref={password}
          type="password"
          placeholder="Enter Password"
          className="p-2 m-2 w-full bg-gray-700 text-sm"
        />
        <p className="text-sm text-red-500">{errorMessage} </p>
        <button
          className="p-2 m-2 my-8 w-full bg-red-700 rounded-lg"
          onClick={validatePage}
        >
          {signIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-sm cursor-pointer" onClick={() => toggleSignIn()}>
          {signIn
            ? "Don't have an account? Sign Up"
            : "Already have an account? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
