import { useEffect, useState } from "react";
import { apiUrl } from "../../src/api/apiUrl";
import ProductAll from "../components/ProductAll"; // Importera den nya komponenten

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log("Using apiUrl:", apiUrl); // Logga URL för API-anropet
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        console.log("Fetched data:", data); // Logga den hämtade datan

        // Kontrollera om datan är i rätt format
        if (Array.isArray(data.data)) {
          setProducts(data.data);
          console.log("Set products state:", data.data); // Logga när state uppdateras med produkter
        } else {
          console.warn("Data is not in the expected format:", data); // Logga om datan inte är som förväntat
          setProducts([]);
        }
      } catch (error) {
        console.error("Error fetching products:", error); // Logga eventuella fel
        setError(error);
      } finally {
        setLoading(false);
        console.log("Loading finished"); // Logga när laddningen är klar
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    console.log("Loading products..."); // Logga medan produkterna laddas
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-lg font-medium text-gray-600">Loading products...</p>
      </div>
    );
  }

  if (error) {
    console.log("Error occurred:", error); // Logga om ett fel inträffade
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-lg font-medium text-red-600">
          Error:{" "}
          {error instanceof Error ? error.message : "An unknown error occurred"}
        </p>
      </div>
    );
  }

  console.log("Rendering products:", products); // Logga produkterna som renderas
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8">
      {/* Visa produkterna utan SaleBanner */}
      <ProductAll products={products} />
    </div>
  );
};

export default HomePage;
