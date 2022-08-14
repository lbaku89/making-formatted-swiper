import React from "react";
import { addComma } from "../function/utilities/addComma";
import { useSelector } from "react-redux";

export function Goods(props) {
  const styleProperty = useSelector((state) => {
    return state.fetchStylePropertySlice;
  });
  return (
    <div
      className="goodsDiv"
      style={{
        width: styleProperty.goodsDiv.width,
        height: styleProperty.goodsDiv.height,
        maxWidth: styleProperty.goodsDiv.maxWidth,
      }}
    >
      <a
        href={props.data.goodsUrl}
        target="_blank"
        className="goodsAtag"
        rel="noreferrer"
        style={{
          display: styleProperty.goodsAtag.display,
        }}
      >
        <div className="">
          <img
            className="goodsImg"
            src={props.data.goodsImgUrl}
            alt="상품IMG URL"
            style={{
              dispaly: styleProperty.goodsImg.display,
              width: styleProperty.goodsImg.width,
            }}
          />
        </div>
        <div
          className="goodsTextDiv"
          style={{
            width: styleProperty.goodsTextDiv.width,
            padding: styleProperty.goodsTextDiv.padding,
          }}
        >
          <p
            title="${data.goodsName}"
            className="goodsName"
            style={{
              fontSize: styleProperty.goodsName.fontSize,
              fontWeight: styleProperty.goodsName.fontWeight,
              color: styleProperty.goodsName.color,
              overFlow: styleProperty.goodsName.overFlow,
              wordBreak: styleProperty.goodsName.wordBreak,
              display: styleProperty.goodsName.dispaly,
              webkitLineClamp: styleProperty.goodsName.webkitLineClamp,
              webkitBoxOrient: styleProperty.goodsName.webkitBoxOrient,
            }}
          >
            {props.data.goodsName}
          </p>
          <p
            className="goodsPrice"
            style={{
              padding: "5px 0 0 0",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            &#8361;{addComma(props.data.goodsPrice)}
          </p>
        </div>
      </a>
    </div>
  );
}
