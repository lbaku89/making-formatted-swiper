import React, { useEffect, useState } from "react";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import "swiper/css/autoplay";
import axios from "axios";

// component 연결
import { Goods } from "./Goods";

const GoodsSlider = function () {
	// fake server 에서 goodsData 가져오느 Fn
	const fetchGoodsData = async () => {
		const response = await axios
			.get("http://localhost:3001/defaultGoodsData")
			.then((response) => {
				console.log(response.data);
				return response.data;
			})
			.catch((err) => {
				console.log("data get err => ", err);
			});
		setGoodsData(response);
	};

	const [goodsData, setGoodsData] = useState([]);
	// browser wdith 조정
	const [browserWidth, setBrowserWidth] = useState(window.innerWidth);

	// rendering 관리
	useEffect(() => {
		setBrowserWidth(window.browserWidth);
		console.log("useEffect!");
		fetchGoodsData();
	}, [browserWidth]);

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
