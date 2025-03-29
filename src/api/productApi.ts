import { API, Http } from "../constants/api";

export const GetProducts = async () => Http.get(`${API}/products`);

export const SendData = async (username: string) =>
  Http.post(`${API}/products/order`, { username: username });
