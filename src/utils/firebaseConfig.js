// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU3tuEw2VDccGEuPWdkamgxRIe8stx1_E",
  authDomain: "netflixgpt-90faf.firebaseapp.com",
  projectId: "netflixgpt-90faf",
  storageBucket: "netflixgpt-90faf.appspot.com",
  messagingSenderId: "438749513934",
  appId: "1:438749513934:web:5f326905d11ae2aa67689f",
  measurementId: "G-MZN4KDLYQL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
