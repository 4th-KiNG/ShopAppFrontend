import { useEffect, useState } from "react";
import { GetProducts } from "../../api/productApi";
import { ProductProps } from "../../types/product.types";
import { Product } from "../../components";
import { observer } from "mobx-react-lite";

const CatalogPage = observer(() => {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    GetProducts().then(({ data }) => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-[1fr_1fr] gap-2 p-4">
      {products.map((product) => (
        <Product {...product} key={product.id} />
      ))}
    </div>
  );
});

export default CatalogPage;
