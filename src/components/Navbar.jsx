import { useState } from "react";
import { Link } from "react-scroll";
import image from "../assets/logo192.png";

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "services", label: "Services" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900 dark:text-white flex items-center mr-4 ml-2">
          <img src={image} alt="Logo" className="h-10 w-10 inline-block mr-2" />
          Elfrian Dev
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              {link.label}
            </Link>
          ))}

          {/* Dark Mode Switch */}
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={darkMode}
                onChange={() => setDarkMode((prev) => !prev)}
              />
              <div className="block w-10 h-6 bg-gray-400 rounded-full"></div>
              <div
                className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${
                  darkMode ? "translate-x-4" : ""
                }`}
              ></div>
            </div>
          </label>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 dark:text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Toggle */}
          <label className="flex items-center cursor-pointer mt-2">
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <div className="block w-10 h-6 bg-gray-400 rounded-full"></div>
              <div
                className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${
                  darkMode ? "translate-x-4" : ""
                }`}
              ></div>
            </div>
          </label>
        </div>
      )}
    </nav>
  );
}
