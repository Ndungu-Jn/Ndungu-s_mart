import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.find((p) => p.id === parseInt(id))
  );

  if (!product) return <div className="p-4">Product not found</div>;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <img
        src={product.image || "https://via.placeholder.com/300"}
        alt={product.name}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-2">
        ${product.price}
      </p>
      <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
    </div>
  );
};

export default ProductDetails;
