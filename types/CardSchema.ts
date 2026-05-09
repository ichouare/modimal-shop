

export type TProduct = {
  id: string,
  quantity: number,
  price: number,
  thumbail: string,
  color: string,
  size: string,
}

export type TCard = {
  productsInfo : TProduct[],

}