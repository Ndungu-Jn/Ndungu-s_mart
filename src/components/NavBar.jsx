import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
      <div className="text-xl font-bold">
        <Link to="/">📱 Ndungu's Electronics</Link>
      </div>
      <div className="flex gap-4 items-center">
        <Link
          to="/create"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 rounded shadow"
        >
          Add Product
        </Link>
        <Link to="/cart" className="relative text-gray-800 dark:text-white">
          🛒
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cart.length}
          </span>
        </Link>
        {/* <ThemeToggle /> */}
      </div>
    </nav>
  );
};

export default Navbar;
