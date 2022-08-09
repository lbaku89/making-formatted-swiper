import axios from "axios";

const initialState = {
	GoodsSlider: {
		spaceBetween_768: 20,
		slidesPerView_992: 4,
		slidesPerView_768: 4,
		slidesPerView_320: 2,
	},
};

export const fetchStyleProperty = async (state = initialState, action) => {
	const response = await axios({
		method: "get",
		url: "",
	})
		.then((response) => response.data)
		.catch((err) => console.log("err message=>", err));

	return { ...response };
};
