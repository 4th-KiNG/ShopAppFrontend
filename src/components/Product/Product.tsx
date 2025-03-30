import { observer } from "mobx-react-lite";
import { ProductProps } from "../../types/product.types";
import checkout from "../../storage/checkout";
import { STORAGE } from "../../constants/api";
import { useMemo } from "react";

const Product = observer((props: ProductProps) => {
  const { id, name, image, price } = props;
  const { getProducts } = checkout;
  const inCheckout = useMemo(() => {
    return getProducts.find((product) => product.id === id);
  }, [getProducts, id]);
  return (
    <>
      <div className="flex flex-col gap-2 items-center bg-emerald-950 p-2 rounded-xl">
        <img
          src={`${STORAGE}/${image}`}
          alt=""
          className="rounded-md w-full h-40 object-cover"
        />
        <p>{name}</p>
        <p>{price}р</p>
        <button
          className="bg-black px-2 py-1 rounded-md w-full"
          onClick={() => {
            if (!inCheckout) {
              checkout.addProduct(props);
            } else {
              checkout.removeProduct(id);
            }
          }}
        >
          {inCheckout ? "Удалить из корзины" : "В корзину"}
        </button>
      </div>
    </>
  );
});

export default Product;
