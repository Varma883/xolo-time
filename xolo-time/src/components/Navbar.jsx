import React, { useState } from "react";
import { Link, Links } from "react-router-dom";
import logo from "../assets/logo-white.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";

const navItems = [
  { name: "Home", path: "/" },
  
  { name: "Features", path: "/features" },
  { name: "Solutions", path: "/solutions" },
  { name: "Pricing", path: "/pricing" },
   { name: "Contact Us", path: "/contact" },
];

const NavBar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <nav className="bg-blue-800 sticky top-0 z-[9999] shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="logo" className="h-10" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center justify-between space-x-8 text-white font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="text-white hover:text-red-400 font-medium py-2 transition duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}

          
        {/* CTA Buttons */}
        <Link
                    to={'/signup'}
                    className="bg-cyan-400 text-white px-5 py-2 rounded-md hover:bg-cyan-500 font-medium transition duration-300"
                  >
                    Start free trial
                  </Link>
                  <Link

                   to={'/login'}
                    className="text-white flex items-center gap-2 px-4 py-2 rounded-md border-2 hover:bg-white hover:text-black hover:border-white transition duration-300"
                  >
                    <IoIosLogIn className="text-xl" /> Log in
                  </Link>

        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white text-2xl">
          {isMobileOpen ? (
            <FaTimes onClick={() => setIsMobileOpen(false)} />
          ) : (
            <FaBars onClick={() => setIsMobileOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-white text-gray-800 shadow-lg p-6 space-y-4 animate-slideDown">
          {navItems.map((item) => (
            <div key={item.name}>
              <Link
                to={item.path}
                onClick={() => setIsMobileOpen(false)}
                className="block py-2 font-medium hover:text-blue-600"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
