import React from "react";

export function Goods(props) {
  // 원 단위로 환산
  let KRW = props.data.goodsPrice
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  return (
    <div className="w-full h-full max-width-240px">
      <a
        href={props.data.goodsUrl}
        target="_blank"
        className="block"
        rel="noreferrer"
      >
        <div className="">
          <img
            className="block w-full"
            src={props.data.goodsImgUrl}
            alt="#none"
            id="goodsImg"
          />
        </div>
        <div className="w-full py-4 px-1">
          <p title="${data.goodsName}" className="" id="goodsName">
            {props.data.goodsName}
          </p>
          <p className="" id="goodsPrice">
            &#8361;{KRW}
          </p>
        </div>
      </a>
    </div>
  );
}
