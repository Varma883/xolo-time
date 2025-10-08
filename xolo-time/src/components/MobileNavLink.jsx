// src/components/MobileNavLink.jsx
import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const MobileNavLink = ({ title, children, hasDropdown }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    if (hasDropdown) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={toggleOpen}
        className="flex justify-between items-center w-full px-3 py-4 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
      >
        {title}
        {hasDropdown && (
          <ChevronDownIcon
            className={`ml-2 h-5 w-5 transform transition-transform duration-200 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
            aria-hidden="true"
          />
        )}
      </button>
      {isOpen && hasDropdown && (
        <div className="pb-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default MobileNavLink;