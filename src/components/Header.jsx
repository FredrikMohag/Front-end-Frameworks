import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi"; // Ny shopping ikon
import { useStore } from "../store/cart"; // Importera cart store

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Hämta cart state och antal objekt
  const cart = useStore((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0); // Beräkna totalantalet produkter

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-2 text-3xl font-extrabold tracking-wider text-indigo-600"
        >
          <FiShoppingBag className="h-8 w-8 text-indigo-600" />{" "}
          {/* Shopping ikon */}
          <span className="font-serif uppercase">Shop4Life</span>{" "}
          {/* Namnet "Shop4Life" */}
        </Link>

        {/* Search Bar */}
        <div className="mx-8 hidden flex-1 md:block">
          <SearchBar />
        </div>

        {/* Navbar */}
        <nav className="hidden items-center space-x-8 md:flex">
          <Link
            to="/"
            className="text-lg font-medium transition-colors duration-300 hover:text-indigo-300"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="text-lg font-medium transition-colors duration-300 hover:text-indigo-300"
          >
            Contact
          </Link>
          <Link
            to="/checkout"
            className="relative flex items-center transition-colors duration-300 hover:text-indigo-300"
          >
            <AiOutlineShoppingCart className="h-6 w-6" />
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="text-2xl md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "×" : "☰"}
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute left-0 top-0 h-full w-full bg-gray-800 bg-opacity-75 md:hidden ${
            isMenuOpen ? "block" : "hidden"
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="flex justify-end p-6">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl text-white"
            >
              ×
            </button>
          </div>
          <div className="mt-12 flex flex-col items-center space-y-4">
            <Link
              to="/"
              className="text-lg font-medium text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="text-lg font-medium text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/checkout"
              className="flex items-center text-lg font-medium text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <AiOutlineShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="ml-2 rounded-full bg-red-500 px-2 py-1 text-xs text-white">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
