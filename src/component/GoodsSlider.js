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
        className="goodsSliderContainer"
        style={{
          maxWidth: styleProperty.goodsSliderContainer.maxWidth,
          margin: styleProperty.goodsSliderContainer.margin,
        }}
      >
        <Swiper
          className="swiper"
          grabCursor={null}
          modules={[Pagination, Autoplay, Mousewheel]}
          // 변수화 실패
          pagination={{
            clickable: true,
            type: "bullets",
          }}
          autoplay={{ delay: 2000 }}
          style={{
            position: styleProperty.swiper.position,
            maxWidth: styleProperty.swiper.maxWidth,
            padding: styleProperty.swiper.padding,
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
              // 변수화 실패
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
              <SwiperSlide
                className="swiperSlide"
                style={{
                  display: styleProperty.swiperSlide.display,
                  justifyContent: styleProperty.swiperSlide.justifyContent,
                }}
              >
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
