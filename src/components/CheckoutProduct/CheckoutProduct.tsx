import { observer } from "mobx-react-lite";
import checkout from "../../storage/checkout";
import { ProductProps } from "../../types/product.types";

const CheckoutProduct = observer((props: ProductProps) => {
  const { id, name, image } = props;
  return (
    <div className="flex flex-col gap-2 items-center bg-emerald-950 p-2 rounded-xl">
      <img src={image} alt="" className="rounded-md w-full h-40 object-cover" />
      <p>{name}</p>
      <button
        className="bg-black px-2 py-1 rounded-md w-full"
        onClick={() => checkout.removeProduct(id)}
      >
        Удалить из корзины
      </button>
    </div>
  );
});

export default CheckoutProduct;
