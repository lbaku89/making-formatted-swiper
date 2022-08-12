export function addComma(goodsPrice) {
  return goodsPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
