import ProductForm from "../components/ProductForm";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/productsSlice";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products);

  const handleCreate = (product) => {
    const newProduct = {
      ...product,
      id: products.length ? Math.max(...products.map((p) => p.id)) + 1 : 1,
    };
    dispatch(addProduct(newProduct));
    navigate("/");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4 font-bold">Add New Product</h1>
      <ProductForm onSubmit={handleCreate} />
    </div>
  );
};

export default CreateProduct;
