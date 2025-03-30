import { observer } from "mobx-react-lite";
import checkout from "../../storage/checkout";
import { CheckoutProduct } from "../../components";
import { tgApp } from "../../constants/api";
import { SendData } from "../../api/productApi";

const CheckoutPage = observer(() => {
  const { getProducts } = checkout;

  const handleSendData = () => {
    const username = tgApp.initDataUnsafe.user?.username ?? "";
    const userId = tgApp.initDataUnsafe.user?.id.toString() ?? "";
    const productNames = getProducts.map((product) => product.name);
    let totalPrice = 0;
    getProducts.forEach((product) => (totalPrice += product.price));
    SendData(userId, username, productNames, totalPrice);
  };
  return (
    <div className="relative grid grid-cols-[1fr_1fr] gap-2 p-4 pb-12 h-full">
      {getProducts.map((product) => (
        <CheckoutProduct {...product} key={product.id} />
      ))}
      <button
        className="fixed bottom-2 left-2 w-[calc(100%-16px)] py-2 bg-white box-border text-black rounded-md"
        onClick={handleSendData}
      >
        Оформить заказ
      </button>
    </div>
  );
});

export default CheckoutPage;
