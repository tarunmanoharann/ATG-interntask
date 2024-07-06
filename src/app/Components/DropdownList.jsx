'use client'
import React, { useState } from 'react';

const DropdownList = (props) => {
  // State to manage dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when an item is clicked
  const closeDropdown = () => {
    setIsOpen(false);
  };

  // Menu items data
  const menuItems = [
    { text: 'People - Community' },
    { text: 'Place - Venues' },
    { text: 'Programs - Events' },
    { text: 'Products - Store' },
    { text: 'Blogs' },
  ];

  return (
    <div className={`${props.className}`}>
      <div className="relative inline-block">
        {/* Dropdown button */}
        <button
          type="button"
          className="flex items-center gap-2 font-semibold text-[14px] leading-[22px] ml-2"
          onClick={toggleDropdown}
        >
          {props.name}
          {/* Dropdown icon */}
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" className={isOpen ? 'rotate-180' : ''}>
            <path d="M6.00015 5.07101L2.17915 1.25001C1.76515 0.836014 1.09315 0.836014 0.679152 1.25001C0.265152 1.66401 0.265152 2.33601 0.679152 2.75001L5.29315 7.36401C5.68415 7.75501 6.31715 7.75501 6.70715 7.36401L11.3212 2.75001C11.7352 2.33601 11.7352 1.66401 11.3212 1.25001C10.9072 0.836014 10.2352 0.836014 9.82115 1.25001L6.00015 5.07101Z" fill="#939CA3" />
          </svg>
        </button>

        {/* Dropdown content */}
        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-[220px] shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            {menuItems.map((item) => (
              <div
                className="cursor-pointer block p-3 shadow text-[14px] leading-[18px] tracking-wide text-[#6D747A] hover:bg-gray-100"
                onClick={closeDropdown}
                key={item.text}
              >
                {item.text}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownList;