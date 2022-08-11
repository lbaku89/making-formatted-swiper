import axios from "axios";

// get 방식으로 Data 가져오는 api
const fetchGoodsData = async (url, setData) => {
	const response = await axios
		.get(url)
		.then((response) => {
			console.log(response.data);
			return response.data;
		})
		.catch((err) => {
			console.log("data get err => ", err);
		});
	setData(response);
};

export { fetchGoodsData };
