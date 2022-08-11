import { createSlice } from "@reduxjs/toolkit";
import { fetchStylePropertyAction } from "./actions/fetchStylePropertyAction";

const fetchStylePropertySlice = createSlice({
	name: "fetchStylePropertySlice",
	initialState: {
		styleProperty: {
			GoodsSlider: {
				spaceBetween_768: "20",
				slidesPerView_992: "2",
				slidesPerView_768: "2",
				slidesPerView_320: "2",
			},
		},
		status: "style data 요청 안함",
	},
	reducer: {},
	extraReducers: (builder) => {
		builder.addCase(fetchStylePropertyAction.pending, (state, action) => {
			state.status = "loading...";
		});
		builder.addCase(fetchStylePropertyAction.fulfilled, (state, action) => {
			state.status = "load success";
			state.styleProperty = action.payload;
		});
		builder.addCase(fetchStylePropertyAction.rejected, (state, action) => {
			state.status = "load fail";
		});
	},
});

export default fetchStylePropertySlice;
