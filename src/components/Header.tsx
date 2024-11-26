import Search from "./utils/Search";
import { LuShoppingCart } from "react-icons/lu";

const Header = () => {
  return (
    <header className="w-full h-20 flex items-center justify-between">
      <Search />
      <button className="w-12 h-12 rounded-full flex items-center justify-center">
        <LuShoppingCart className="text-2xl" />
      </button>
    </header>
  );
};

export default Header;
