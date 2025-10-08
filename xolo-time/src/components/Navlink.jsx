// src/components/NavLink.jsx
import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const NavLink = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center text-gray-600 hover:text-blue-600 text-sm font-medium focus:outline-none">
        {title}
        <ChevronDownIcon
          className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${
            isOpen ? '-rotate-180' : 'rotate-0'
          }`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-max max-w-4xl bg-white shadow-lg rounded-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
          {children}
        </div>
      )}
    </div>
  );
};

export default NavLink;