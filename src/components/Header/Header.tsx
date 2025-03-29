import { Link } from "react-router-dom";
import { cartIcon } from "../../assets";

const Header = () => {
  return (
    <header className="bg-emerald-950 p-2 relative">
      <Link
        to={"/"}
        className="text-l font-bold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        ShopApp
      </Link>
      <Link to={"/checkout"}>
        <img src={cartIcon} className="w-8 h-8 ml-auto flex-1" alt="" />
      </Link>
    </header>
  );
};

export default Header;
