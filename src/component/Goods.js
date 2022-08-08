import React from "react";

export function Goods(props) {
	// 원 단위로 환산
	let KRW = props.data.goodsPrice
		.toString()
		.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
	return (
		<div className="w-full h-full">
			<a
				href={props.data.goodsUrl}
				target="_blank"
				className="block"
				rel="noreferrer"
			>
				<div className="">
					<img className="block" src={props.data.goodsImgUrl} alt="#none" />
				</div>
				<div className="">
					<p title="${data.goodsName}" className="">
						{props.data.goodsName}
					</p>
					<p className="">&#8361;{KRW}</p>
				</div>
			</a>
		</div>
	);
}
