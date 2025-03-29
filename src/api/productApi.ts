import { API, Http } from "../constants/api";

export const GetProducts = async () => Http.get(`${API}/products`);

export const SendData = async (userId: string) =>
  Http.post(`${API}/products/order`, { userId: userId });
