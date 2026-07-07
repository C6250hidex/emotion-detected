import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 px-6 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <h1 className="text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent cursor-pointer hover:opacity-90 transition">
          AI Emotion Sense
        </h1>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/">
            <a
              className="text-gray-600 hover:text-indigo-600 font-medium text-sm tracking-wide transition-colors duration-200 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-indigo-600 hover:after:w-full after:transition-all"
            >
              Home
            </a>
          </Link>
          <Link to="/detection">
            <a
              className="text-gray-600 hover:text-indigo-600 font-medium text-sm tracking-wide transition-colors duration-200 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-indigo-600 hover:after:w-full after:transition-all"
            >
              Detection
            </a>
          </Link>
          <Link to="/dashboard">
            <a
              className="text-gray-600 hover:text-indigo-600 font-medium text-sm tracking-wide transition-colors duration-200 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-indigo-600 hover:after:w-full after:transition-all"
            >
              Dashboard
            </a>
          </Link>
        </div>

        {/* Desktop Action Button */}
        <div className="hidden md:flex items-center">
          <Link to="/login">
            <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-medium text-sm shadow-md shadow-indigo-200 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-300 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
              Login
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-indigo-600 focus:outline-none p-1.5 rounded-lg hover:bg-gray-50 transition"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col space-y-4 px-2 pt-2 pb-4 border-t border-gray-100">
          <Link to="/">
            <a
              className="text-gray-600 hover:text-indigo-600 font-medium text-base py-1 transition"
            >
              Home
            </a>
          </Link>
          <Link to="/detection">
            <a
              className="text-gray-600 hover:text-indigo-600 font-medium text-base py-1 transition"
            >
              Detection
            </a>
          </Link>
          <Link to="/dashboard">
            <a
              className="text-gray-600 hover:text-indigo-600 font-medium text-base py-1 transition"
            >
              Dashboard
            </a>
          </Link>
          <Link to="/login">
            <button className="w-full bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-medium text-sm shadow-md hover:bg-indigo-700 transition text-center">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
