import React from "react";
import PropTypes from "prop-types";

const DiscountedPrice = ({ products }) => {
  if (!products || products.length === 0) {
    return (
      <p className="text-gray-600">
        No discounted products available at the moment.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <div
          key={product.id}
          className="rounded-lg border p-4 shadow-md transition hover:shadow-lg"
        >
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-sm text-gray-500">
            Original Price: {product.price} kr
          </p>
          <p className="text-sm text-red-500">
            Discount Price: {product.discountPrice} kr
          </p>
        </div>
      ))}
    </div>
  );
};

DiscountedPrice.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      discountPrice: PropTypes.number,
    }),
  ).isRequired,
};

export default DiscountedPrice;
