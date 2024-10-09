"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import CollegeLogo from '/public/images/CollegeLogo.png';
import CseLogo from '/public/images/cse.png';
import Link from 'next/link';

const Nav = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 1000); 

    const resetTimer = setTimeout(() => {
      setIsAnimating(false);
    }, 4000); 

    return () => {
      clearTimeout(timer);
      clearTimeout(resetTimer);
    };
  }, []);

  return (
    <nav className="bg-black font-mono p-4">
      <div className="container flex justify-between items-center">
        <div className="flex items-center space-x-0">
          <Image
            src={CseLogo}
            alt="Logo"
            width={50}
            height={60}
            className="mr-3 bg-black p-1"
          />
          
          <Image
            src={CollegeLogo}
            alt="Logo"
            width={130}
            height={130}
            className={`ml-20 transition-all duration-3 ease-in-out ${
              isAnimating
                ? 'translate-x-[-100px] opacity-0' 
                : 'translate-x-0 opacity-100' 
            }`}
          />
        </div>

        <button
          className="block md:hidden text-blue-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isAnimating ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            ></path>
          </svg>
        </button>

        <ul
          className={`flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0 ${isAnimating ? 'block' : 'hidden'} md:flex`}
        >
          <li>
            <Link href="/" className="text-blue-700 hover:text-gray-400 transition">
              Home.
            </Link>
          </li>
          <li>
            <Link href="/About" className="text-blue-700 hover:text-gray-400">
              About.
            </Link>
          </li>
          <li>
            <Link href="/timeline" className="text-blue-700 hover:text-gray-400">
              Timeline.
            </Link>
          </li>
          <li>
            <Link href="/team" className="text-blue-700 hover:text-gray-400">
              Team.
            </Link>
          </li>
          <li>
            <Link href="/qna" className="text-blue-700 hover:text-gray-400">
              QnA.
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
