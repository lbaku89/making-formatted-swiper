import { createSlice } from "@reduxjs/toolkit";

const fetchStylePropertySlice = createSlice({
	name: "fetchStylePropertySlice",
	initialState: {
		GoodsSlider: {
			spaceBetween_768: 20,
			slidesPerView_1024: 4,
			slidesPerView_768: 2,
			slidesPerView_320: 2,
		},
	},
	reducer: {},
});

export default fetchStylePropertySlice;
