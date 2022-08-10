import { configureStore } from "@reduxjs/toolkit";
import fetchStylePropertySlice from "./reducer";

export const store = configureStore({
	reducer: {
		fetchStyleProperty: fetchStylePropertySlice.reducer,
	},
});
