import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./language";
import layoutReducer from "./layout";

const store = configureStore({
  reducer: {
    language: languageReducer,
    layout: layoutReducer,
  },
});

export default store;
