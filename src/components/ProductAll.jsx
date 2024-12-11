import React from "react";
import { Link } from "react-router-dom";

const ProductAll = ({ products }) => {
  console.log("ProductAll rendered with products:", products);

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.length === 0 ? (
        <p className="col-span-full text-center text-gray-600">
          No products available.
        </p>
      ) : (
        products.map((product) => {
          const price = parseFloat(product.price);
          const discountedPrice = parseFloat(product.discountedPrice);
          const isDiscounted = discountedPrice && discountedPrice < price;

          return (
            <div
              key={product.id}
              className="flex h-full flex-col rounded-lg border border-gray-200 p-4 shadow transition-shadow duration-300 hover:shadow-lg"
            >
              <img
                src={product.image?.url || "/default-image.jpg"}
                alt={product.title}
                className="mb-4 h-48 w-full rounded-lg object-cover"
              />
              <h2 className="mb-2 text-lg font-semibold text-gray-800">
                {product.title}
              </h2>
              <p className="mb-4 line-clamp-3 flex-grow overflow-hidden text-sm text-gray-600">
                {product.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                {isDiscounted ? (
                  <div className="flex items-center">
                    <p className="text-lg font-bold text-green-600">
                      SEK {discountedPrice.toFixed(2)}
                    </p>
                    <p className="ml-2 text-sm text-gray-500 line-through">
                      SEK {price.toFixed(2)}
                    </p>
                  </div>
                ) : (
                  <p className="text-lg font-semibold text-gray-800">
                    SEK {price.toFixed(2)}
                  </p>
                )}
              </div>
              <div className="mt-auto">
                <Link
                  to={`/product/${product.id}`}
                  className="block rounded-lg bg-indigo-600 py-2 text-center text-white transition-colors duration-300 hover:bg-indigo-500"
                >
                  View Details
                </Link>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default ProductAll;
