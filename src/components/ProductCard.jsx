import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/productsSlice";
import { addToCart } from "../redux/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white dark:bg-gray-700 rounded shadow-md p-4">
      <img
        src={product.image || "https://via.placeholder.com/150"}
        alt={product.name}
        className="w-full h-40 object-cover rounded mb-4"
      />
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
        {product.name}
      </h2>
      <p className="text-gray-600 dark:text-gray-300">${product.price}</p>
      <div className="flex gap-2 mt-3">
        <Link
          to={`/product/${product.id}`}
          className="text-blue-600 dark:text-blue-400"
        >
          View
        </Link>
        <Link
          to={`/edit/${product.id}`}
          className="text-green-600 dark:text-green-400"
        >
          Edit
        </Link>
        <button
          onClick={() => dispatch(deleteProduct(product.id))}
          className="text-red-600 dark:text-red-400 ml-1"
        >
          Delete
        </button>
      </div>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-1 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
