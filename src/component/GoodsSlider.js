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
  const skinFoodStyle = useSelector((state) => {
    return state.fetchStylePropertySlice;
  });

  // fetch Goods Data
  const [goodsData, setGoodsData] = useState([]);
  useEffect(() => {
    fetchGoodsData("http://localhost:3001/defaultGoodsData", setGoodsData);
  }, []);

  return (
    <>
      <div id="goodsSliderContainer" className="max-width-1140px mx-auto">
        <Swiper
          grabCursor={true}
          modules={[Pagination, Autoplay, Mousewheel]}
          pagination={{
            clickable: true,
            type: "bullets",
          }}
          autoplay={{ delay: 2000 }}
          className={"mySwiper relative max-width-1020px pb-[32px]"}
          slidesPerView={1}
          spaceBetween={20}
          mousewheel={{ invert: true }}
          breakpoints={{
            320: {
              slidesPerView: skinFoodStyle.GoodsSlider.slidesPerView_320,
              slidesPerGroup: 2,
              spaceBetween: window.innerWidth * 0.01 * 1.6666666667,
            },
            768: {
              slidesPerView: skinFoodStyle.GoodsSlider.slidesPerView_768,
              slidesPerGroup: 2,
              spaceBetween: skinFoodStyle.GoodsSlider.spaceBetween_768,
            },
            1024: {
              slidesPerView: skinFoodStyle.GoodsSlider.slidesPerView_1024,
              slidesPerGroup: 4,
              spaceBetween: 20,
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
