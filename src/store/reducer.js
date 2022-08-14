import { createSlice } from "@reduxjs/toolkit";

const fetchStylePropertySlice = createSlice({
  name: "fetchStylePropertySlice",
  initialState: {
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

        // spaceBetween_320: window.innerWidth * 0.01 * 1.6666666667,
        // spaceBetween_768: 20,
        // slidesPerView_1024: 4,
        // slidesPerView_768: 2,
        // slidesPerView_320: 2,
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
  reducer: {},
});

export default fetchStylePropertySlice;
