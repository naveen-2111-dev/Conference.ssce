"use client";
import React, { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-0">
          <div className="logo bg-white w-10 h-10 "></div>
          <div className="text-blue-700 text-2xl font-bold ml-2">
            ICRCCT.
          </div>
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <button
          className="block md:hidden text-blue-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {/* Hamburger Icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <ul className={`flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0 ${isOpen ? 'block' : 'hidden'} md:flex`}>
          <li><a href="#home" className="text-blue-700 hover:text-gray-400 transition">Home.</a></li>
          <li><a href="#about" className="text-blue-700 hover:text-gray-400">About.</a></li>
          <li><a href="#timeline" className="text-blue-700 hover:text-gray-400">Timeline.</a></li>
          <li><a href="#team" className="text-blue-700 hover:text-gray-400">Team.</a></li>
          <li><a href="#qna" className="text-blue-700 hover:text-gray-400">QnA.</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
