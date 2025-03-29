import { API, Http } from "../constants/api";

export const GetProducts = async () => Http.get(`${API}/products`);
