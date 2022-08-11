import { createSlice } from "@reduxjs/toolkit";
import { fetchStylePropertyAction } from "./actions/fetchStylePropertyAction";

const fetchStylePropertySlice = createSlice({
	name: "fetchStylePropertySlice",
	initialState: {
		GoodsSlider: {
			spaceBetween_768: 0,
			slidesPerView_992: 8,
			slidesPerView_768: 2,
			slidesPerView_320: 2,
		},
	},
	reducer: {},
	extraReducers: (builder) => {
		builder.addCase(fetchStylePropertyAction.pending, (state, action) => {
			state.status = "loading...";
		});
		builder.addCase(fetchStylePropertyAction.fulfilled, (state, action) => {
			state.status = "load success";
			state.GoodsSlider = action.payload.GoodsSlider;
			console.log("action.payload=>", state.GoodsSlider);
		});
		builder.addCase(fetchStylePropertyAction.rejected, (state, action) => {
			state.status = "load fail";
		});
	},
});

export default fetchStylePropertySlice;
