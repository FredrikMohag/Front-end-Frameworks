import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SearchBar from "./SearchBar";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { useStore } from "../store/cart";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cart = useStore((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <motion.div
            className="text-indigo-600"
            initial={{ scale: 0.8, rotate: -15, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ duration: 1.2 }} // Långsammare in-glidning
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
          >
            <FiShoppingBag className="h-8 w-8" />
          </motion.div>
          <motion.span
            className="font-serif text-3xl font-extrabold uppercase tracking-wider"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }} // Långsammare animation
            whileHover={{
              color: "#4F46E5", // Färgändring vid hovring
              scale: 1.1, // Lätt skalning vid hovring
              transition: { duration: 0.3 },
            }}
            style={{ color: "#6366F1" }} // Ursprunglig färg
          >
            Shop4Life
          </motion.span>
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
            to="/sale"
            className="text-lg font-medium text-red-600 transition-colors duration-300 hover:text-red-400"
          >
            Sale
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
        <MobileMenu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          totalItems={totalItems}
        />
      </div>
    </header>
  );
};

export default Header;
