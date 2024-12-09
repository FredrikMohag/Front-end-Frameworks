import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Logga ut årtalet för felsökning
  console.log("Current year in footer:", currentYear);

  return (
    <footer className="mt-auto bg-gray-900 py-6 text-gray-300">
      <div className="mx-auto max-w-screen-xl px-4 text-center">
        {/* Logo or Brand Name */}
        <h2 className="mb-2 text-2xl font-bold tracking-widest text-white">
          My Store
        </h2>

        {/* Links */}
        <div className="mb-4 flex justify-center space-x-6">
          <a
            href="/"
            className="transition-colors duration-300 hover:text-indigo-400"
          >
            Home
          </a>
          <a
            href="/about"
            className="transition-colors duration-300 hover:text-indigo-400"
          >
            About Us
          </a>
          <a
            href="/contact"
            className="transition-colors duration-300 hover:text-indigo-400"
          >
            Contact
          </a>
          <a
            href="/privacy"
            className="transition-colors duration-300 hover:text-indigo-400"
          >
            Privacy Policy
          </a>
        </div>

        {/* Social Media Links */}
        <div className="mb-4 flex justify-center space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 transition-colors duration-300 hover:text-indigo-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="h-6 w-6"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V11.22h3.128V8.412c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.099 2.796.143v3.244h-1.918c-1.504 0-1.796.716-1.796 1.764v2.311h3.588l-.467 3.486h-3.121V24h6.116c.731 0 1.324-.593 1.324-1.326V1.326C24 .593 23.407 0 22.675 0z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 transition-colors duration-300 hover:text-indigo-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="h-6 w-6"
              viewBox="0 0 24 24"
            >
              <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775a4.932 4.932 0 0 0 2.163-2.723 9.864 9.864 0 0 1-3.127 1.184 4.924 4.924 0 0 0-8.388 4.482c-4.09-.205-7.719-2.165-10.141-5.144a4.822 4.822 0 0 0-.664 2.475 4.923 4.923 0 0 0 2.188 4.1 4.903 4.903 0 0 1-2.229-.616v.061a4.92 4.92 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.224.084 4.936 4.936 0 0 0 4.6 3.417 9.868 9.868 0 0 1-6.102 2.105c-.398 0-.79-.023-1.175-.067a13.945 13.945 0 0 0 7.548 2.209c9.057 0 14.01-7.503 14.01-14.009 0-.213-.004-.425-.014-.636a9.935 9.935 0 0 0 2.459-2.548z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 transition-colors duration-300 hover:text-indigo-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="h-6 w-6"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311C8.416 2.175 8.796 2.163 12 2.163M12 0C8.741 0 8.332.015 7.052.072 5.775.128 4.548.39 3.467 1.467 2.39 2.548 2.128 3.775 2.072 5.052.015 8.332 0 8.741 0 12s.015 3.668.072 4.948c.056 1.277.318 2.504 1.395 3.583 1.079 1.079 2.306 1.341 3.583 1.395C8.332 23.985 8.741 24 12 24s3.668-.015 4.948-.072c1.277-.056 2.504-.318 3.583-1.395 1.079-1.079 1.341-2.306 1.395-3.583.057-1.277.072-1.686.072-4.948s-.015-3.668-.072-4.948c-.056-1.277-.318-2.504-1.395-3.583C20.455 1.318 19.228 1.056 17.948.072 16.668.015 16.259 0 12 0z" />
              <circle cx="12" cy="12" r="3.515" />
              <path d="M18.406 5.594a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 1 1 2.88 0z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          &copy; {currentYear} My Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
