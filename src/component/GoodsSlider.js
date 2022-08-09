import React, { useEffect, useState } from "react";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import "swiper/css/autoplay";

// component 연결
import { Goods } from "./Goods";

const GoodsSlider = function () {
	let data = [
		{
			goodsCode: "1995726",
			goodsName: "센테카솔 연고 40ml",
			goodsUrl:
				"https://www.cellfusionc.co.kr/shop/shopdetail.html?branduid=1995726",
			goodsImgUrl:
				"https://www.cellfusionc.co.kr/shopimages/cfccms/0130040000063.jpg",
			goodsPrice: 26800,
			rank: 1,
		},
		{
			goodsCode: "2175873",
			goodsName: "아쿠아 포린 크림 60ml ",
			goodsUrl:
				"https://www.cellfusionc.co.kr/shop/shopdetail.html?branduid=2175873",
			goodsImgUrl:
				"https://www.cellfusionc.co.kr/shopimages/cfccms/0130040000073.jpg",
			goodsPrice: 24000,
			rank: 2,
		},
		{
			goodsCode: "2148058",
			goodsName: "파이널 레스큐 시럽 앰플 30ml ",
			goodsUrl:
				"https://www.cellfusionc.co.kr/shop/shopdetail.html?branduid=2148058",
			goodsImgUrl:
				"https://www.cellfusionc.co.kr/shopimages/cfccms/0130050000023.jpg",
			goodsPrice: 24000,
			rank: 3,
		},
		{
			goodsCode: "2175971",
			goodsName: "캘러스 레이저 리페어 크림50ml",
			goodsUrl:
				"https://www.cellfusionc.co.kr/shop/shopdetail.html?branduid=2175971",
			goodsImgUrl:
				"https://www.cellfusionc.co.kr/shopimages/cfccms/0130040000183.jpg",
			goodsPrice: 34000,
			rank: 4,
		},
		{
			goodsCode: "2148767",
			goodsName: "퍼스트 큐어 세럼50ml",
			goodsUrl:
				"https://www.cellfusionc.co.kr/shop/shopdetail.html?branduid=2148767",
			goodsImgUrl:
				"https://www.cellfusionc.co.kr/shopimages/cfccms/0130050000033.jpg",
			goodsPrice: 28000,
			rank: 5,
		},
		{
			goodsCode: "2176035",
			goodsName: "약산성 패리어 수분 크림 80ml",
			goodsUrl:
				"https://www.cellfusionc.co.kr/shop/shopdetail.html?branduid=2176035",
			goodsImgUrl:
				"https://www.cellfusionc.co.kr/shopimages/cfccms/0130040000333.jpg",
			goodsPrice: 28800,
			rank: 6,
		},
		{
			goodsCode: "2148057",
			goodsName: "모이스처 젤 오인트 100ml",
			goodsUrl:
				"https://www.cellfusionc.co.kr/shop/shopdetail.html?branduid=2148057",
			goodsImgUrl:
				"https://www.cellfusionc.co.kr/shopimages/cfccms/0130040000033.jpg",
			goodsPrice: 20800,
			rank: 7,
		},
		{
			goodsCode: "2176006",
			goodsName: "[더블기획]레이저 썬스크린 50ml+50ml",
			goodsUrl:
				"https://www.cellfusionc.co.kr/shop/shopdetail.html?branduid=2176006",
			goodsImgUrl:
				"https://www.cellfusionc.co.kr/shopimages/cfccms/0130020000463.jpg",
			goodsPrice: 47000,
			rank: 8,
		},
		{
			goodsCode: "2175801",
			goodsName: "트리악 데일리 트러블 케어 폼 클렌저 130ml * 2EA",
			goodsUrl:
				"https://www.cellfusionc.co.kr/shop/shopdetail.html?branduid=2175801",
			goodsImgUrl:
				"https://www.cellfusionc.co.kr/shopimages/cfccms/0130010000073.jpg",
			goodsPrice: 24000,
			rank: 9,
		},
		{
			goodsCode: "2175978",
			goodsName: "약산성 패리어 클렌징폼 165ml",
			goodsUrl:
				"https://www.cellfusionc.co.kr/shop/shopdetail.html?branduid=2175978",
			goodsImgUrl:
				"https://www.cellfusionc.co.kr/shopimages/cfccms/0130010000103.jpg",
			goodsPrice: 16100,
			rank: 10,
		},
	];

	// browser wdith 조정
	const [browserWidth, setBrowserWidth] = useState(window.innerWidth);
	useEffect(() => {
		setBrowserWidth(window.browserWidth);
		console.log("useEffect!");
	}, [browserWidth]);

	// mobile gap

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
					{data.map((goodsInfo) => {
						return (
							<SwiperSlide className="flex justify-center swiperSlide">
								<Goods data={goodsInfo} className=""></Goods>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</>
	);
};
export { GoodsSlider };
