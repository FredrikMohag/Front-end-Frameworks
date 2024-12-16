import React, { useEffect } from "react";
import { useStore } from "../store/cart"; // Se till att importera din zustand store här

const CheckoutSuccessPage = () => {
  // Hämta funktionen för att tömma kundvagnen från store
  const clearCart = useStore((state) => state.clearCart);

  // Använd useEffect för att tömma kundvagnen när sidan renderas
  useEffect(() => {
    console.log("Clearing the cart..."); // Logga när kundvagnen töms
    clearCart(); // Töm kundvagnen
  }, [clearCart]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-400 via-blue-500 to-purple-600">
      <div className="space-y-6 px-4 text-center text-white md:px-10">
        <h1 className="animate-bounce text-4xl font-bold md:text-6xl">
          🎉 Thank You for Your Purchase! 🎉
        </h1>
        <p className="text-lg md:text-xl">
          Your order was successfully placed. We truly appreciate your business!
        </p>
        <div className="mt-8 flex items-center justify-center space-x-4">
          <a
            href="/"
            className="transform rounded-md bg-blue-500 px-6 py-2 font-semibold text-white shadow-lg transition-transform hover:scale-110 hover:bg-blue-600"
          >
            Home
          </a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0">
        {/* Background Effects */}
        <div className="absolute left-1/4 top-1/4 h-48 w-48 animate-pulse rounded-full bg-pink-300 opacity-50 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 h-72 w-72 animate-pulse rounded-full bg-yellow-300 opacity-40 blur-3xl"></div>
        <div className="absolute left-1/2 top-1/2 h-64 w-64 animate-pulse rounded-full bg-purple-400 opacity-50 blur-3xl"></div>
      </div>
    </div>
  );
};

export default CheckoutSuccessPage;
