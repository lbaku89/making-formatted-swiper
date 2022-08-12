import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import "swiper/css/autoplay";

import { Goods } from "./Goods";
import { fetchGoodsData } from "../function/api/fetchGoodsData";
import { useSelector } from "react-redux";

const GoodsSlider = function () {
  //redux store에 접근
  const styleProperty = useSelector((state) => {
    return state.fetchStylePropertySlice;
  });

  // fetch Goods Data
  const [goodsData, setGoodsData] = useState([]);
  useEffect(() => {
    fetchGoodsData("http://localhost:3001/defaultGoodsData", setGoodsData);
  }, []);

  return (
    <>
      <div
        id="goodsSliderContainer"
        className=""
        style={{
          maxWidth: styleProperty.goodsSliderContainer.maxWidth,
          margin: styleProperty.goodsSliderContainer.margin,
        }}
      >
        <Swiper
          id="swiper"
          grabCursor={null}
          modules={[Pagination, Autoplay, Mousewheel]}
          pagination={{
            clickable: true,
            type: "bullets",
          }}
          autoplay={{ delay: 2000 }}
          // className={"relative max-width-1020px pb-[32px]"}
          style={{
            position: styleProperty.swiper.position,
            maxWidth: styleProperty.swiper.maxWidth,
            padding: styleProperty.swiper.padding,
            // "@media(max-width: 576px)": {
            //   maxWidth: "89.7916666667vw",
            //   padding: "0 5.2083333333vw",
            // },
          }}
          slidesPerView={1}
          spaceBetween={20}
          mousewheel={{ invert: true }}
          breakpoints={{
            320: {
              slidesPerView: styleProperty.swiper.breakpoints.slidesPerView_320,
              slidesPerGroup:
                styleProperty.swiper.breakpoints.slidesPerGroup_320,
              spaceBetween: window.innerWidth * 0.01 * 1.6666666667,
            },
            768: {
              slidesPerView: styleProperty.swiper.breakpoints.slidesPerView_768,
              slidesPerGroup:
                styleProperty.swiper.breakpoints.slidesPerGroup_768,
              spaceBetween: styleProperty.swiper.breakpoints.spaceBetween_768,
            },
            1024: {
              slidesPerView:
                styleProperty.swiper.breakpoints.slidesPerView_1024,
              slidesPerGroup:
                styleProperty.swiper.breakpoints.slidesPerGroup_1024,
              spaceBetween: styleProperty.swiper.breakpoints.spaceBetween_1024,
            },
          }}
        >
          {goodsData.map((goodsData) => {
            return (
              <SwiperSlide className="flex justify-center swiperSlide">
                <Goods data={goodsData} className=""></Goods>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};
export { GoodsSlider };
