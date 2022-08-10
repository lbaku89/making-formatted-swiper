import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// db의 style code에 맞는 style property 가져오기
const fetchStylePropertyAction = createAsyncThunk(
	"fetchStylePropertyAction",
	async () => {
		const response = await axios
			.get("http://localhost:3001/defaultStyleProperty")
			.then((response) => {
				return response.data;
			})
			.catch((err) => {
				console.log("fetchStylePropertyAction실패 =>", err);
			});
		return response;
	}
);

export { fetchStylePropertyAction };
