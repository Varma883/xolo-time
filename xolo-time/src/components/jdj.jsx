import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import logo from "../assets/logo-white.svg";

 const navItems = [
    { name: "Home", path: "/" },
    { name: "Highlights", path: "/highlights" },
    {
      name: "Features",
      dropdown: [
        { name: "Timekeeping", path: "/timekeeping" },
        { name: "Sites and apps monitoring", path: "/sites-monitoring" },
        { name: "Activity tracking", path: "/activity-tracking" },
        { name: "Screenshots capturing", path: "/screenshot-capturing" },
        { name: "Task management", path: "/task-management" },
      ],
    },
    {
      name: "Solutions",
      dropdown: [
        { name: "Employee Management", path: "/employee-management" },
        {
          name: "By Industry",
          subItems: [
            { name: "IT", path: "/it" },
            { name: "Finance", path: "/finance" },
            { name: "BPO", path: "/bpo" },
          ],
        },
        { name: "Activity tracking", path: "/activity-tracking" },
        { name: "Screenshots capturing", path: "/screenshot-capturing" },
        { name: "Task management", path: "/task-management" },
      ],
    },
    { name: "Pricing", path: "/pricing" },
  ];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (name) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <nav className="bg-sky-800 text-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div>
            <a href="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8" />
        </a>
        </div>
       

        {/* Desktop Menu */}
        <div className="me-40 flex items-center">
            <ul className="hidden md:flex space-x-10 items-center">
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center space-x-1 hover:text-gray-300 transition-colors"
                  >
                    <span>{item.name}</span>
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 10 6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {openDropdowns[item.name] && (
                    <ul className="absolute bg-white text-black mt-2 rounded-md shadow-lg w-48 z-20">
                      {item.dropdown.map((sub) => (
                        <li key={sub.name}>
                          <a
                            href={sub.path}
                            className="block px-4 py-2 hover:bg-gray-200"
                          >
                            {sub.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <a
                  href={item.path}
                  className="hover:text-gray-300 transition-colors"
                >
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ul>

        
        </div>
        

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-lg hover:bg-blue-800 transition-colors"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <RxCross1 className="w-6 h-6" /> : <RxHamburgerMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-blue-800 overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col p-4 space-y-2">
          {navItems.map((item) => (
            <li key={item.name} className="relative">
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex justify-between w-full px-4 py-2 hover:bg-blue-700 rounded-md transition-colors"
                  >
                    <span>{item.name}</span>
                    <svg
                      className="w-3 h-3 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 10 6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  {openDropdowns[item.name] && (
                    <ul className="bg-blue-700 mt-1 rounded-md overflow-hidden">
                      {item.dropdown.map((sub) => (
                        <li key={sub.name}>
                          <a
                            href={sub.path}
                            className="block px-4 py-2 hover:bg-blue-600 rounded-md transition-colors"
                          >
                            {sub.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <a
                  href={item.path}
                  className="block px-4 py-2 hover:bg-blue-700 rounded-md transition-colors"
                >
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
