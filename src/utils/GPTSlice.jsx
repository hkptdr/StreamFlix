import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "GPT",
  initialState: {
    GPTSearch: false,
  },
  reducers: {
    toggleGPTSearchPage: (state) => {
      state.GPTSearch = !state.GPTSearch;
    },
  },
});
export const { toggleGPTSearchPage } = GPTSlice.actions;
export default GPTSlice.reducer;
