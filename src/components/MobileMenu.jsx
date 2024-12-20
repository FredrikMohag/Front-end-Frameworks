import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { motion } from "framer-motion";

const MobileMenu = ({ isMenuOpen, setIsMenuOpen, totalItems }) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isMenuOpen ? 0 : "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      className="fixed inset-y-0 right-0 z-40 w-2/3 bg-gray-800 p-6 shadow-lg md:hidden"
    >
      <button
        className="text-2xl text-white"
        onClick={() => setIsMenuOpen(false)}
      >
        ×
      </button>
      <nav className="mt-6 flex flex-col space-y-6">
        <Link
          to="/"
          className="text-lg font-medium text-white hover:text-indigo-300"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/contact"
          className="text-lg font-medium text-white hover:text-indigo-300"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
        <Link
          to="/sale"
          className="text-lg font-medium text-red-400 hover:text-red-300"
          onClick={() => setIsMenuOpen(false)}
        >
          Sale
        </Link>
        <Link
          to="/checkout"
          className="flex items-center text-lg font-medium text-white hover:text-indigo-300"
          onClick={() => setIsMenuOpen(false)}
        >
          <AiOutlineShoppingCart className="h-6 w-6" />
          {totalItems > 0 && (
            <span className="ml-2 rounded-full bg-red-500 px-2 py-1 text-xs text-white">
              {totalItems}
            </span>
          )}
        </Link>
      </nav>
    </motion.div>
  );
};

export default MobileMenu;
