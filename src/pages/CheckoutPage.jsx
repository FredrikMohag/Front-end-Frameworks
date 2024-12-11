import React from "react";
import { useStore } from "../store/cart"; // Importera useStore från din zustand store
import { Link } from "react-router-dom"; // Importera Link

export default function CheckOutPage() {
  const { cart, addToCart, removeFromCart, clearCart } = useStore();

  // Uppdaterad för att beräkna totalen med kvantitet
  const total = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  const handleAddToCart = (item) => {
    console.log("Adding to cart:", item); // Loggar när ett item läggs till i varukorgen
    addToCart(item); // Lägg till item utan att skapa nytt objekt
  };

  const handleRemoveFromCart = (itemId) => {
    console.log("Removing from cart, item ID:", itemId); // Loggar när ett item tas bort från varukorgen
    removeFromCart(itemId); // Antingen minska quantity eller ta bort objektet
  };

  const handleClearCart = () => {
    console.log("Clearing the cart..."); // Loggar när varukorgen rensas
    clearCart();
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="mb-8 text-center text-3xl font-semibold">Your Cart</h2>

      <div className="overflow-x-auto rounded-lg bg-white shadow-md">
        <div className="flex border-b-2 border-gray-200">
          <div className="flex-1 p-4 text-lg font-medium text-gray-700">
            Product
          </div>
          <div className="w-32 p-4 text-lg font-medium text-gray-700">
            Price
          </div>
          <div className="w-32 p-4 text-lg font-medium text-gray-700">
            Quantity
          </div>
          <div className="w-32 p-4 text-lg font-medium text-gray-700">
            Subtotal
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center p-4">
              {/* Produktbild och titel */}
              <div className="flex flex-1 items-center">
                <img
                  src={item.image?.url || "/default-image.jpg"}
                  alt={item.title}
                  className="mr-4 h-16 w-16 rounded-md object-cover"
                />
                <span className="text-lg font-medium text-gray-800">
                  {item.title}
                </span>
              </div>

              {/* Pris */}
              <div className="w-32 text-lg text-gray-700">
                SEK {parseFloat(item.price).toFixed(2)}
              </div>

              {/* Quantity and Controls */}
              <div className="flex w-32 items-center justify-center space-x-2">
                <span className="text-lg">{item.quantity}</span>
                <div className="space-x-2">
                  <button
                    className="rounded-full bg-green-500 p-2 text-white hover:bg-green-600 focus:outline-none"
                    onClick={() => handleAddToCart(item)}
                  >
                    +
                  </button>
                  <button
                    className="rounded-full bg-red-500 p-2 text-white hover:bg-red-600 focus:outline-none"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    -
                  </button>
                </div>
              </div>

              {/* Subtotal */}
              <div className="w-32 text-lg font-medium text-gray-700">
                SEK {parseFloat(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col items-end space-y-4">
        {/* Total */}
        <div className="flex text-xl font-semibold text-gray-800">
          <span className="mr-4">Total:</span>
          <span className="text-2xl text-green-600">SEK{total}</span>
        </div>

        <div className="flex space-x-4">
          {/* Clear Cart Button */}
          {cart.length > 0 && (
            <button
              className="rounded-md bg-red-600 px-6 py-2 text-white shadow-md hover:bg-red-700 focus:outline-none"
              onClick={handleClearCart} // Loggar när användaren rensar varukorgen
            >
              Clear Cart
            </button>
          )}

          {/* Checkout Button */}
          <Link to="/checkout-success">
            <button className="rounded-md bg-indigo-600 px-6 py-2 text-white shadow-md hover:bg-indigo-700 focus:outline-none">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
