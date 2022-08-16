import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const thunkFetchStyleProperty = createAsyncThunk(
	"thunkFetchStyle",
	async (styleName) => {
		const styleProperty = await axios
			.get(`http://localhost:3001/${styleName}`)
			.then((response) => {
				return response.data;
			})
			.catch((err) => {});

		console.log("fetchAPI=>", styleProperty);
		return styleProperty;
	}
);

export { thunkFetchStyleProperty };
