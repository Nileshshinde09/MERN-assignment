import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlices";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
