// Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold">Your Logo</div>
          <div className="flex flex-wrap justify-center sm:justify-start">
            <a
              href="#"
              className="text-white hover:text-gray-200 mr-4   mb-2
              sm:mb-0"
            >
              Link 1
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-200 mr-4 mb-2 sm:mb-0"
            >
              Link 2
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-200 mr-4 mb-2 sm:mb-0"
            >
              Link3
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              Link 4
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
