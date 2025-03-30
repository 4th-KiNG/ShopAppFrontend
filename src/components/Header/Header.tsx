import { Link } from "react-router-dom";
import { cartIcon } from "../../assets";
import { observer } from "mobx-react-lite";
import checkout from "../../storage/checkout";

const Header = observer(() => {
  const { getProducts } = checkout;
  return (
    <header className="bg-emerald-950 p-2 relative">
      <Link
        to={"/"}
        className="text-l font-bold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
      >
        ShopApp
      </Link>
      <Link to={"/checkout"} className="relative w-8 h-8">
        {getProducts.length > 0 && (
          <div className="w-4 h-4 bg-black text-white text-sm absolute flex items-center justify-center top-0 right-0 rounded-2xl">
            {getProducts.length}
          </div>
        )}
        <img src={cartIcon} className="w-8 h-8 ml-auto flex-1" alt="" />
      </Link>
    </header>
  );
});

export default Header;
