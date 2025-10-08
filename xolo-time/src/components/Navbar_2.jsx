import React, { useState, useRef } from "react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  IoIosStats,
  IoIosPhotos,
  IoIosGlobe,
  IoIosDocument,
  IoIosNotifications,
  IoIosAnalytics,
  IoIosSpeedometer,
  IoIosPerson,
  IoIosDownload,
  IoIosCalendar,
  IoIosPeople,
  IoIosCheckmarkCircle,
  IoIosContacts,
} from "react-icons/io";
import logo from "../assets/logo-white.svg";
import { IoIosLogIn } from "react-icons/io";
import { IoMdTime, IoMdAnalytics, IoMdCheckmarkCircle } from "react-icons/io";

const Navbar = () => {
  const navItems = [
    {
      name: "Features",
      dropdown: [
        {
          title: "Time Tracking",
          description: "Effortless time tracking with our desktop app",
          icon: "⏰",
          subItems: [
            {
              name: "Automatic Tracking",
              description: "Effortless time tracking with our desktop app",
              icon: <IoMdTime className="text-2xl text-blue-500" />,
            },
            {
              name: "Idle Time Detection",
              description: "Let users take a break from tracking when needed",
              icon: <IoMdAnalytics className="text-2xl text-blue-500" />,
            },
            {
              name: "Offline Time Entry",
              description:
                "Track time manually and see when employees take breaks from working",
              icon: <IoMdCheckmarkCircle className="text-2xl text-blue-500" />,
            },
            {
              name: "Project Time Tracking",
              description:
                "Track time manually and see when employees take breaks from working",
              icon: <IoMdTime className="text-2xl text-blue-500" />,
            },
          ],
        },
        {
          title: "Productivity insights",
          description: "Track time and progress of tasks",
          icon: "📊",
          subItems: [
            {
              name: "Productivity calculation",
              description: "Get data about your employees’ productivity",
              icon: <IoIosStats className="text-2xl text-blue-500" />,
            },
            {
              name: "Screenshots",
              description:
                "Get proof-of-work in cases of questionable productivity or integrity",
              icon: <IoIosPhotos className="text-2xl text-blue-500" />,
            },
            {
              name: "URL & app tracking",
              description: "See what sites and apps your employees visit",
              icon: <IoIosGlobe className="text-2xl text-blue-500" />,
            },
            {
              name: "Document title tracking",
              description: "Keep track of document titles and email subjects",
              icon: <IoIosDocument className="text-2xl text-blue-500" />,
            },
            {
              name: "Notifications",
              description:
                "Receive notifications about important activity updates",
              icon: <IoIosNotifications className="text-2xl text-blue-500" />,
            },
          ],
        },
        {
          title: "Analytics and reports ",
          description: "Track time manually and see when employees take breaks",
          icon: "✍️",
          subItems: [
            {
              name: "Reports",
              description: "Get in-depth data about your team’s performance",
              icon: <IoIosAnalytics className="text-2xl text-blue-500" />,
            },
            {
              name: "Admin dashboard",
              description:
                "Gain insights about your employees' work hours and productivity levels",
              icon: <IoIosSpeedometer className="text-2xl text-blue-500" />,
            },
            {
              name: "User dashboard",
              description: "See your team’s overall activities and performance",
              icon: <IoIosPerson className="text-2xl text-blue-500" />,
            },
            {
              name: "Exports",
              description: "Download and save tracked data",
              icon: <IoIosDownload className="text-2xl text-blue-500" />,
            },
          ],
        },
        {
          title: "Analytics & reports",
          description: "Get deep insights into team performance",
          icon: "📈",
          subItems: [
            {
              name: "Shift scheduling",
              description: "Plan and manage employee shifts in one place",
              icon: <IoIosCalendar className="text-2xl text-blue-500" />,
            },
            {
              name: "Absence calendar",
              description: "See who’s sick, on vacation, OOO and more",
              icon: <IoIosPeople className="text-2xl text-blue-500" />,
            },
            {
              name: "Attendance management",
              description: "See how much time your employees spend working",
              icon: <IoIosCheckmarkCircle className="text-2xl text-blue-500" />,
            },
            {
              name: "Employee directory",
              description:
                "Easily find another colleague’s contact information",
              icon: <IoIosContacts className="text-2xl text-blue-500" />,
            },
          ],
        },
      ],
    },
    { name: "Solutions" },
    { name: "Resources" },
    { name: "Pricing", href: "#", isLink: true },
    { name: "Demo", href: "#", isLink: true },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMegaMenu, setOpenMegaMenu] = useState(null); // top-level menu open
  const [activeDropdown, setActiveDropdown] = useState(
    navItems[0]?.dropdown?.[0]?.title || null
  ); // currently hovered dropdown title
  const closeTimeoutRef = useRef(null);

  // --- Hover delay handlers ---
  const handleMouseEnter = (name) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenMegaMenu(name);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenMegaMenu(null);
      setActiveDropdown(null);
    }, 200); // delay for smooth experience
  };

  const handleClickToggle = (name) => {
    setOpenMegaMenu(openMegaMenu === name ? null : name);
  };

  return (
    <nav className="bg-blue-800 sticky top-0 z-[9999] shadow-md">
      <div className="mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6 relative">
          <ul className="flex space-x-6 items-center">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={() =>
                  item.dropdown && handleMouseEnter(item.name)
                }
                onMouseLeave={() => item.dropdown && handleMouseLeave()}
              >
                {item.isLink ? (
                  <a
                    href={item.href}
                    className="text-white hover:text-red-400 font-medium py-2 transition duration-300"
                  >
                    {item.name}
                  </a>
                ) : (
                  <button
                    onClick={() => handleClickToggle(item.name)}
                    className="flex items-center text-white hover:text-red-400 font-medium py-2 focus:outline-none transition duration-300"
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDownIcon
                        className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                          openMegaMenu === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>
                )}
              </li>
            ))}
          </ul>

          {/* CTA buttons */}
          <a
            href="#"
            className="bg-cyan-400 text-white px-5 py-2 rounded-md hover:bg-cyan-500 font-medium transition duration-300"
          >
            Start free trial
          </a>
          <a
            href="#"
            className="text-white flex items-center gap-2 px-4 py-2 rounded-md border-2 hover:bg-white hover:text-black hover:border-white transition duration-300"
          >
            <IoIosLogIn className="text-xl" /> Log in
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-4">
          <a
            href="#"
            className="bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700 font-medium transition duration-300"
          >
            Trial
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-green-400 focus:outline-none transition duration-300"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mega Menu */}
      {navItems.map(
        (item, index) =>
          item.dropdown &&
          openMegaMenu === item.name && (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
              className="absolute left-0 top-full w-screen bg-white shadow-lg z-50 animate-slideDown border-t border-gray-200"
            >
              <div className=" mx-auto px-6 py-8 flex gap-10">
                {/* Left Column: dropdown titles */}
                <div className="flex flex-col gap-3 w-56 border-r border-gray-200 pr-4">
                  {item.dropdown.map((subItem) => (
                    <button
                      key={subItem.title}
                      onMouseEnter={() => setActiveDropdown(subItem.title)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 ${
                        activeDropdown === subItem.title
                          ? "bg-blue-50 text-blue-700 shadow-inner"
                          : ""
                      }`}
                    >
                      {subItem.title}
                    </button>
                  ))}
                </div>

                {/* Right Column: subItems cards */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                  {item.dropdown
                    .filter((subItem) => subItem.title === activeDropdown)
                    .map((subItem) =>
                      subItem.subItems.map((si) => (
                        <div
                          key={si.name}
                          className="flex flex-col p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg hover:bg-blue-50 transition-all duration-200"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <div className="text-blue-500">{si.icon}</div>
                            <h3 className="font-semibold text-gray-900 text-md">
                              {si.name}
                            </h3>
                          </div>
                          <p className="text-sm text-gray-500">
                            {si.description}
                          </p>
                        </div>
                      ))
                    )}

                  <div>
                    <button
                      type="button"
                      class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                    >
                      Light
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg py-4 px-4 absolute top-full left-0 w-full animate-fade-in-down">
          <ul className="space-y-4">
            {navItems.map((item, index) => (
              <li key={index}>
                {item.isLink ? (
                  <a
                    href={item.href}
                    className="block text-gray-800 hover:text-green-600 font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <>
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.name ? null : item.name
                        )
                      }
                      className="flex items-center justify-between w-full text-gray-800 hover:text-green-600 font-medium py-2 focus:outline-none transition duration-300"
                    >
                      {item.name}
                      {item.dropdown && (
                        <ChevronDownIcon
                          className={`h-5 w-5 transform transition-transform duration-300 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>
                    {activeDropdown === item.name && item.dropdown && (
                      <div className="ml-4 mt-2 space-y-2 border-l-2 border-gray-100 pl-4">
                        {item.dropdown.map((subItem) => (
                          <div key={subItem.title}>
                            <p className="font-semibold">{subItem.title}</p>
                            {subItem.subItems &&
                              subItem.subItems.map((si) => (
                                <a
                                  key={si.name}
                                  href={si.href}
                                  className="block text-sm text-gray-600 hover:text-green-600 py-1"
                                >
                                  {si.name}
                                </a>
                              ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </li>
            ))}
            <li className="pt-4 border-t border-gray-100">
              <a
                href="#"
                className="block bg-green-600 text-white px-5 py-2 rounded-md text-center hover:bg-green-700 font-medium transition duration-300"
              >
                Start free trial
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-gray-700 px-4 py-2 rounded-md text-center hover:bg-gray-100 transition duration-300"
              >
                Log in
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
