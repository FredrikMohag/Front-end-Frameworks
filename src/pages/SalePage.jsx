import { useEffect, useState } from "react";
import { apiUrl } from "../../src/api/apiUrl";
import ProductAll from "../components/ProductAll"; // Använd samma komponent som på HomePage

const SalePage = () => {
  const [discountedProducts, setDiscountedProducts] = useState([]);
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
        console.log("Fetched data from API:", data);

        if (Array.isArray(data.data)) {
          // Filtrera produkter med rabatterade priser
          const salesProducts = data.data.filter((product) => {
            return (
              product.discountedPrice !== null &&
              product.discountedPrice < product.price
            );
          });

          console.log("Filtered discounted products:", salesProducts);
          setDiscountedProducts(salesProducts);
        } else {
          console.warn("Unexpected data format:", data);
          setDiscountedProducts([]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
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
        <p className="text-lg font-medium text-gray-600">
          Loading discounted products...
        </p>
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
      <ProductAll products={discountedProducts} />
    </div>
  );
};

export default SalePage;
