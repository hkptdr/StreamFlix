import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";
import MovieReducer from "./movieSlice";
import TrailerReducer from "./movieSlice";
import GPTReducer from "./GPTSlice";
import languageReducer from "./languageSlice";
const appStore = configureStore({
  reducer: {
    user: UserReducer,
    movies: MovieReducer,
    trailer: TrailerReducer,
    gpt: GPTReducer,
    language: languageReducer,
  },
});
export default appStore;
