import { API, BOT_TOKEN, Http, tgApp } from "../constants/api";

export const GetProducts = async () => Http.get(`${API}/products`);

export const SendOfferData = async (productId: string) => {
  const chatId = tgApp.initDataUnsafe.chat?.id;
  console.log(chatId);
  if (chatId) {
    await Http.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      chatId: chatId,
      text: productId,
    });
  }
};
