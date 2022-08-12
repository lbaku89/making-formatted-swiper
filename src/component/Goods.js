import React from "react";
import { addComma } from "../function/utilities/addComma";
export function Goods(props) {
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
            alt="상품IMG URL"
            id="goodsImg"
          />
        </div>
        <div className="w-full py-[16px] px-[4px]">
          <p title="${data.goodsName}" className="" id="goodsName">
            {props.data.goodsName}
          </p>
          <p className="" id="goodsPrice">
            &#8361;{addComma(props.data.goodsPrice)}
          </p>
        </div>
      </a>
    </div>
  );
}
