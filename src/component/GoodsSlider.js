import React, { useEffect, useState } from "react";
// import swiper library
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import "swiper/css/autoplay";

// import Component, api
import { Goods } from "./Goods";
import { fetchGoodsData } from "../api/api";

const GoodsSlider = function () {
	// fetch Goods Data
	const [goodsData, setGoodsData] = useState([]);
	useEffect(() => {
		console.log("useEffect!");
		fetchGoodsData("http://localhost:3001/defaultGoodsData", setGoodsData);
	}, []);
	// fetch default style property

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
					// loop={true}
					autoplay={{ delay: 2000 }}
					className={"mySwiper relative max-width-1020px pb-[32px]"}
					slidesPerView={1}
					spaceBetween={20}
					mousewheel={{ invert: true }}
					breakpoints={{
						320: {
							slidesPerView: 2,
							slidesPerGroup: 2,
							spaceBetween: window.innerWidth * 0.01 * 1.6666666667,
						},
						768: {
							slidesPerView: 2,
							slidesPerGroup: 2,
							spaceBetween: 20,
						},
						992: {
							slidesPerView: 4,
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
