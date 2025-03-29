import { makeAutoObservable, toJS } from "mobx";
import { ProductProps } from "../types/product.types";

class CheckoutStorage {
  products: ProductProps[];

  constructor() {
    makeAutoObservable(this);
    this.products = [];
  }

  addProduct(newProduct: ProductProps) {
    this.products = [...this.products, newProduct];
  }

  removeProduct(productId: string) {
    this.products = this.products.filter((product) => product.id !== productId);
  }

  get getProducts() {
    return toJS(this.products);
  }
}

const checkout = new CheckoutStorage();

export default checkout;
