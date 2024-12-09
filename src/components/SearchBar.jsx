import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiUrl } from "../api/apiUrl";
import debounce from "lodash.debounce";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    console.log("Search term changed:", e.target.value); // Loggar söktermen
  };

  useEffect(() => {
    const fetchProducts = async () => {
      console.log("Fetching products..."); // Loggar när produkterna hämtas
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const result = await response.json();
        setProducts(Array.isArray(result.data) ? result.data : []);
        console.log("Fetched products:", result.data); // Loggar resultatet av API-anropet
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const filterProducts = debounce(() => {
      console.log("Filtering products..."); // Loggar när filtrering pågår
      if (searchTerm && Array.isArray(products)) {
        const results = products
          .filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase()),
          )
          .slice(0, 4);
        setFilteredProducts(results);
        console.log("Filtered products:", results); // Loggar de filtrerade produkterna
      } else {
        setFilteredProducts([]);
        console.log("No search term or products found");
      }
    }, 300);

    filterProducts();

    return () => {
      filterProducts.cancel();
    };
  }, [searchTerm, products]);

  const handleProductClick = () => {
    console.log("Product clicked, clearing search term");
    setSearchTerm("");
  };

  return (
    <div className="relative mx-auto w-full max-w-xl">
      {/* Inputfält */}
      <form onSubmit={(e) => e.preventDefault()} className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search products..."
          className="w-full rounded-md border border-gray-300 p-3 pl-10 text-gray-800 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        <button
          type="submit"
          className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 hover:text-indigo-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
            />
          </svg>
        </button>

        {/* Dynamiskt meddelande */}
        {filteredProducts.length === 0 && searchTerm && (
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-sm text-gray-500">
            No products found
          </span>
        )}
      </form>

      {/* Resultatlista */}
      {filteredProducts.length > 0 && (
        <div className="absolute z-10 mt-2 w-full rounded-md border border-gray-200 bg-white shadow-lg">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              onClick={handleProductClick}
              className="flex items-center p-2 hover:bg-gray-100"
            >
              <img
                src={product.image?.url || "/default-image.jpg"}
                alt={product.title}
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="ml-3 text-sm font-medium text-gray-700">
                {product.title}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
