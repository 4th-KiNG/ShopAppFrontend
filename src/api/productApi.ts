import { API, Http } from "../constants/api";

export const GetProducts = async () => Http.get(`${API}/products`);

export const SendData = async (
  userId: string,
  username: string,
  productNames: string[],
  totalPrice: number
) =>
  Http.post(`${API}/products/order`, {
    userId: userId,
    username: username,
    productNames: productNames,
    totalPrice: totalPrice,
  });
