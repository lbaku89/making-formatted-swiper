import { createSlice } from "@reduxjs/toolkit";
import { thunkFetchStyleProperty } from "./thunkFetchStyleProperty";

const fetchStylePropertySlice = createSlice({
  name: "fetchStylePropertySlice",
  initialState: {
    style: {
      goodsSliderContainer: {
        maxWidth: "1140px",
        margin: "0 auto",
      },
      swiper: {
        position: "relative",
        maxWidth: "1020px",
        padding: "0 0 32px 0",

        breakpoints: {
          slidesPerView_320: 2,
          slidesPerGroup_320: 2,
          slidesPerView_768: 2,
          slidesPerGroup_768: 2,
          spaceBetween_768: 20,
          slidesPerView_1024: 4,
          slidesPerGroup_1024: 4,
          spaceBetween_1024: 20,
        },
        goodsDiv: {},
      },
      swiperSlide: {
        display: "flex",
        justifyContent: "center",
      },
      goodsDiv: {
        width: "100%",
        height: "100%",
        maxWidth: "240px",
      },
      goodsAtag: {
        display: "block",
      },
      goodsImg: {
        display: "block",
        width: "100%",
      },
      goodsTextDiv: {
        width: "100%",
        padding: "16px 4px",
      },
      goodsName: {
        fontSize: "15px",
        fontWeight: "normal",
        color: "#333333",
        overFlow: "hidden",
        wordBreak: "break-word",
        display: "-webkit-box",
        webkitLineClamp: "2",
        webkitBoxOrient: "vertical",
      },
      goodsPrice: {
        padding: "5px 0 0 0",
        fontSize: "18px",
        fontWeight: "bold",
      },
    },
  },
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(thunkFetchStyleProperty.pending, (state, action) => {
      console.log("fetch loading중...");
    });
    builder.addCase(thunkFetchStyleProperty.fulfilled, (state, action) => {
      console.log("fetch success!");
      console.log(action.payload);
      state.style = action.payload;
      //state 값으로 바로 들어가면 먹히지 않는다!
    });
    builder.addCase(thunkFetchStyleProperty.rejected, (state, action) => {
      console.log("thunk fail...");
    });
  },
});

export default fetchStylePropertySlice;
