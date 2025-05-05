import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { topNavLinks } from "../../data";

const linkBaseStyle =
  "text-gray-700 hover:text-blue-600 px-4 py-2 rounded transition duration-300";
const activeLinkStyle = "text-white bg-blue-600 shadow";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => setIsOpen(!isOpen);
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full shadow-md bg-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/">
          <img
            src="/assets/gabvicLogoLLC.svg"
            alt="Gabvic Homes LLC Official Logo"
            className="h-15"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:!flex space-x-4 items-center">
          {topNavLinks
            .filter((link) => link.path !== "/reach-us")
            .map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={`${linkBaseStyle} ${
                  isActive(link.path)
                    ? "bg-lnight-100 text-lnight-900 font-semibold"
                    : "font-semibold text-lnight-500"
                }`}
              >
                {link.name}
              </Link>
            ))}

          {location.pathname !== "/reach-us" && (
            <Link
              to="/reach-us"
              className="ml-2 px-4 py-2 rounded-lg bg-bronze-500 text-night-500 hover:bg-bronze-700 hover:text-gray-100 transition font-semibold"
            >
              Reach Us
            </Link>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg flex flex-col space-y-4 px-6 py-4"
        >
          {topNavLinks
            .filter((link) => link.path !== "/reach-us")
            .map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${linkBaseStyle} ${
                  isActive(link.path)
                    ? "bg-lnight-100 text-lnight-900 font-semibold"
                    : "font-semibold text-lnight-500"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

          {location.pathname !== "/reach-us" && (
            <Link
              to="/reach-us"
              className="px-4 py-2 text-center rounded-sm  bg-bronze-500 text-night-500 hover:bg-bronze-700 hover:text-gray-100 transition font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Reach Us
            </Link>
          )}
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;
