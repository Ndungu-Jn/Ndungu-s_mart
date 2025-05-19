import ProductForm from "../components/ProductForm";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateProduct } from "../redux/productsSlice";

const EditProduct = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.find((p) => p.id === parseInt(id))
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (updatedProduct) => {
    dispatch(updateProduct({ ...updatedProduct, id: parseInt(id) }));
    navigate("/");
  };

  if (!product) return <div className="p-4">Product not found</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4 font-bold">Edit Product</h1>
      <ProductForm initialData={product} onSubmit={handleUpdate} />
    </div>
  );
};

export default EditProduct;
