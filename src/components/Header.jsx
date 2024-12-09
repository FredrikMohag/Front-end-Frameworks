import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { AiOutlineShoppingCart } from "react-icons/ai"; // React Icon för Cart

const Header = () => {
  // State för att hålla koll på om användaren har skrollat ner
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State för att hantera menyn

  // Logga initialt tillstånd
  console.log("Initial isScrolled state:", isScrolled);

  // Effect för att lyssna på skroll-händelser
  useEffect(() => {
    const handleScroll = () => {
      // Om skrollpositionen är större än 50px, sätt isScrolled till true
      if (window.scrollY > 50) {
        if (!isScrolled) {
          console.log("User has scrolled down. Updating isScrolled to true.");
          setIsScrolled(true);
        }
      } else {
        if (isScrolled) {
          console.log("User has scrolled up. Updating isScrolled to false.");
          setIsScrolled(false);
        }
      }
    };

    // Lägg till skroll-lyssnaren när komponenten laddas
    window.addEventListener("scroll", handleScroll);

    // Rensa skroll-lyssnaren när komponenten avmonteras
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  return (
    <header
      className={`header ${isScrolled ? "scrolled" : ""}`} // Lägg till 'scrolled' klass när användaren skrollat
    >
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold uppercase tracking-widest transition-transform duration-300 hover:scale-105"
        >
          My Store
        </Link>

        {/* Centered Search Bar */}
        <div className="mx-8 hidden flex-1 md:block">
          <SearchBar
            onSearch={(searchTerm) => console.log("Sökterm:", searchTerm)}
          />
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
            className="flex items-center transition-colors duration-300 hover:text-indigo-300"
          >
            <AiOutlineShoppingCart className="h-6 w-6" />
          </Link>
        </nav>

        {/* Hamburger Menu for Small Screens */}
        <button
          className="text-2xl md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Visa ☰ om menyn är stängd, visa × om menyn är öppen */}
          {isMenuOpen ? "×" : "☰"}
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute left-0 top-0 h-full w-full bg-gray-800 bg-opacity-75 md:hidden ${
            isMenuOpen ? "block" : "hidden"
          } backdrop-blur-md md:backdrop-blur-none`} // Här justeras backdrop-blur effekten på mindre skärmar
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="flex justify-end p-6">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl text-white"
            >
              &times;
            </button>
          </div>
          <div className="mt-12 flex flex-col items-center space-y-4">
            <Link
              to="/"
              className="text-lg font-medium text-white transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="text-lg font-medium text-white transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/checkout"
              className="flex items-center text-lg font-medium text-white transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <AiOutlineShoppingCart className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
