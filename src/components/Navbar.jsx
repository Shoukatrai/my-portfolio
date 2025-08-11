import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/skills", label: "Skills" },
    { path: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-gradient-to-r from-[#6366F1] via-[#06B6D4] to-[#6366F1] fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-white text-2xl font-bold flex items-center gap-1"
          onClick={closeMenu}
        >
          <span className="text-[#FACC15]">&lt;</span>
          <span className="text-white">Shoukat</span>
          <span className="text-[#FACC15]">Dev</span>
          <span className="text-[#FACC15]">/&gt;</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-8 text-white font-medium">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `hover:text-[#FACC15] transition-colors ${
                    isActive ? "text-[#FACC15]" : "text-white"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className="bg-[#FACC15] text-[#111827] px-4 py-2 rounded-full font-semibold shadow-md hover:bg-yellow-400 transition"
            >
              Hire Me
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-[#6366F1] via-[#06B6D4] to-[#6366F1] px-4 py-6 text-center">
          <ul className="space-y-6 text-white font-medium">
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block hover:text-[#FACC15] transition-colors ${
                      isActive ? "text-[#FACC15]" : "text-white"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="bg-[#FACC15] text-[#111827] px-6 py-2 rounded-full font-semibold shadow-md hover:bg-yellow-400 transition inline-block"
              >
                Hire Me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
