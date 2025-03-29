import { observer } from "mobx-react-lite";
import checkout from "../../storage/checkout";
import { CheckoutProduct } from "../../components";
import { tgApp } from "../../constants/api";

const CheckoutPage = observer(() => {
  const { getProducts } = checkout;

  const handleSendData = () => {
    tgApp.sendData({
      productId: getProducts[0].id,
    });
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
