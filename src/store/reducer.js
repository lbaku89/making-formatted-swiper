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
    },
    swiperSlide: {
      display: "flex",
      justifyContent: "center",
    },
  },
  reducer: {},
});

export default fetchStylePropertySlice;
