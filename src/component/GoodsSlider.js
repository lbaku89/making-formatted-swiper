import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import "swiper/css/autoplay";

import { Goods } from "./Goods";
import { fetchGoodsData } from "../function/api/fetchGoodsData";
import { useSelector, useDispatch } from "react-redux";
import { thunkFetchStyleProperty } from "../store/thunkFetchStyleProperty";

const GoodsSlider = function () {
	const dispatch = useDispatch();

	//redux store에 접근
	const styleProperty = useSelector((state) => {
		return state.fetchStylePropertySlice.style;
	});

	// const testData = useSelector((state) => {
	//   return state.fetchStylePropertySlice.swiper.breakpoints.slidesPerView_1024;
	// });

	// fetch Goods Data
	const [goodsData, setGoodsData] = useState([]);
	useEffect(() => {
		console.log("useEffect시작");
		fetchGoodsData("http://localhost:3001/defaultGoodsData", setGoodsData);
		console.log("styleProperty=>", styleProperty);
	}, [styleProperty]);

	const [isSelected, setIsSelected] = useState(undefined);

	return (
		<>
			<button
				onClick={() => {
					dispatch(thunkFetchStyleProperty("midasB"));
				}}
			>
				midasB style
			</button>
			<br></br>
			<button
				onClick={() => {
					dispatch(thunkFetchStyleProperty("skinfood"));
				}}
			>
				skinfood style
			</button>
			<br></br>
			<button
				onClick={() => {
					setIsSelected(undefined);
				}}
			>
				reset
			</button>
			<br></br>
			<button
				onClick={() => {
					setIsSelected(true);
				}}
			>
				show!
			</button>

			{isSelected !== undefined ? (
				<>
					<p>{styleProperty.swiper.breakpoints.slidesPerView_1024}</p>
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
									slidesPerView:
										styleProperty.swiper.breakpoints.slidesPerView_320,
									slidesPerGroup:
										styleProperty.swiper.breakpoints.slidesPerGroup_320,
									spaceBetween: window.innerWidth * 0.01 * 1.6666666667,
									// 변수화 실패
								},
								768: {
									slidesPerView:
										styleProperty.swiper.breakpoints.slidesPerView_768,
									slidesPerGroup:
										styleProperty.swiper.breakpoints.slidesPerGroup_768,
									spaceBetween:
										styleProperty.swiper.breakpoints.spaceBetween_768,
								},
								1024: {
									slidesPerView:
										styleProperty.swiper.breakpoints.slidesPerView_1024,
									slidesPerGroup:
										styleProperty.swiper.breakpoints.slidesPerGroup_1024,
									spaceBetween:
										styleProperty.swiper.breakpoints.spaceBetween_1024,
								},
							}}
						>
							{goodsData.map((goodsData, index) => {
								return (
									<SwiperSlide
										className="swiperSlide"
										style={{
											display: styleProperty.swiperSlide.display,
											justifyContent: styleProperty.swiperSlide.justifyContent,
										}}
										key={index}
									>
										<Goods data={goodsData} className=""></Goods>
									</SwiperSlide>
								);
							})}
						</Swiper>
					</div>
				</>
			) : (
				<h1>없음</h1>
			)}
		</>
	);
};
export { GoodsSlider };
