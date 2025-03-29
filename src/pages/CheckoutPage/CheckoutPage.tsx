import { observer } from "mobx-react-lite";
import checkout from "../../storage/checkout";
import { CheckoutProduct } from "../../components";
import { tgApp } from "../../constants/api";

const CheckoutPage = observer(() => {
  const { getProducts } = checkout;
  tgApp.MainButton.setText("Оформить заказ").show();

  tgApp.MainButton.onClick(() => {
    const data = JSON.stringify({
      productId: getProducts[0].id,
    });
    tgApp.sendData(data);
  });

  return (
    <div className="relative grid grid-cols-[1fr_1fr] gap-2 p-4 pb-12 h-full">
      {getProducts.map((product) => (
        <CheckoutProduct {...product} key={product.id} />
      ))}
    </div>
  );
});

export default CheckoutPage;
