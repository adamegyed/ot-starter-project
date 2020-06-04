export default class VendorData {
  readonly name: string;
  readonly ingredient: string;
  readonly quantity: number;
  readonly price: number;

  constructor(
    name: string,
    ingredient: string,
    quantity: number,
    price: number
  ) {
    this.name = name;
    this.ingredient = ingredient;
    this.quantity = quantity;
    this.price = price;
  }
}
