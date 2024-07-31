// src/components/HiddenMenu.js
import React, { useState } from 'react';

const HiddenMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="focus:outline-none"
      >
        <div className="w-8 h-8 flex flex-col justify-between items-center">
          <div className="w-full h-1 bg-black"></div>
          <div className="w-full h-1 bg-black"></div>
          <div className="w-full h-1 bg-black"></div>
        </div>
      </button>
      {isOpen && (
        <div className="absolute top-12 left-0 bg-white border rounded-md shadow-lg w-48">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-200">Menu Item 1</li>
            <li className="px-4 py-2 hover:bg-gray-200">Menu Item 2</li>
            <li className="px-4 py-2 hover:bg-gray-200">Menu Item 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HiddenMenu;
