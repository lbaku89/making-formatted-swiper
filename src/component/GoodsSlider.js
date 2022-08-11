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

// setting redux
import { useSelector, useDispatch } from "react-redux";
import { fetchStylePropertyAction } from "../store/actions/fetchStylePropertyAction";

const GoodsSlider = function () {
	// fetch default style property
	const dispatch = useDispatch();
	// const goodsSliderProperty = useSelector((state) => {
	// 	console.log("d", state.fetchStyleProperty);
	// 	return state.fetchStyleProperty.GoodsSlider;
	// });

	const sliderPerView_992 = useSelector((state) => {
		return state.fetchStyleProperty.GoodsSlider.slidesPerView_992;
	});

	// 다른방법으로 style property 정리
	// const [styleProperty, setStyleProperty] = useState({
	// 	GoodsSlider: {
	// 		spaceBetween_768: 0,
	// 		slidesPerView_992: 8,
	// 		slidesPerView_768: 2,
	// 		slidesPerView_320: 2,
	// 	},
	// });

	// fetch Goods Data
	const [goodsData, setGoodsData] = useState([]);
	useEffect(() => {
		fetchGoodsData("http://localhost:3001/defaultGoodsData", setGoodsData);
		// fetchGoodsData("http://localhost:3001/skinFood", setStyleProperty);

		console.log(sliderPerView_992);
		// console.log("useEffect 속 goodsSliderProperty=>", goodsSliderProperty);
	}, [dispatch]);

	return (
		<>
			<button
				onClick={() => {
					dispatch(fetchStylePropertyAction());
				}}
				style={{
					color: "red",
					width: "100%",
					height: "100px",
					background: "pink",
				}}
			>
				slider PerView 값 : {sliderPerView_992}
			</button>
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
							slidesPerView: sliderPerView_992,
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
