import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiUrl } from "../../src/api/apiUrl";
import ProductAll from "../components/ProductAll";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();

        if (Array.isArray(data.data)) {
          // Filtrera produkter som inte är på rea
          const fullPriceProducts = data.data.filter(
            (product) =>
              !product.discountedPrice ||
              product.discountedPrice >= product.price,
          );
          setProducts(fullPriceProducts);
        } else {
          setProducts([]);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-lg font-medium text-gray-600">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-lg font-medium text-red-600">
          Error: {error.message}
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8">
      <ProductAll products={products} />

      <div className="mt-8">
        <Link
          to="/sale"
          className="font-medium text-blue-500 hover:text-blue-700"
        >
          View Discounted Products
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
