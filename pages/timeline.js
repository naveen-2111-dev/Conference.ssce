import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';  // Import Next.js Image component
import "tailwindcss/tailwind.css";
import Nav from './Nav';
import ScrollGif from '/public/images/scroll-down.gif';  // Assuming the GIF is in the public/images folder

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const itemsRef = useRef([]);

  const handleScroll = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!visibleItems.has(entry.target.dataset.index)) {
            setVisibleItems(prev => new Set([...prev, entry.target.dataset.index]));
          }
        } else {
          if (visibleItems.has(entry.target.dataset.index)) {
            setVisibleItems(prev => {
              const newSet = new Set(prev);
              newSet.delete(entry.target.dataset.index);
              return newSet;
            });
          }
        }
      });
    });

    itemsRef.current.forEach(item => {
      observer.observe(item);
    });

    return () => {
      itemsRef.current.forEach(item => {
        observer.unobserve(item);
      });
    };
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleItems]);

  return (
    <div>
      <Nav />
      <div className="flex flex-col items-center justify-center min-h-screen bg-black relative">
        <h1 className="text-blue-600 text-6xl m-10 font-mono font-bold">Timeline</h1>
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            ref={el => itemsRef.current[index] = el}
            data-index={index}
            className={`bg-blue-600 bg-opacity-30 backdrop-blur-md p-4 m-4 rounded-lg w-1/2 h-[200px] text-white flex items-center justify-center border border-white/30 transition-all duration-300 ease-in-out transform cursor-pointer ${
              visibleItems.has(index.toString())
                ? 'opacity-100 translate-x-0'
                : index % 2 === 0
                  ? '-translate-x-[100%] opacity-0' 
                  : 'translate-x-[100%] opacity-0' 
            } hover:bg-blue-500 hover:scale-105`}
            style={{
              transitionDelay: `${index * 100}ms`, 
            }}
          >
            Item {index + 1}
          </div>
        ))}

        {/* Scroll down indicator */}
        <div className="fixed bottom-4 right-4 w-24 h-24">  {/* Increased size and set to fixed */}
          <Image 
            src={ScrollGif}  // Path to the image in the public folder
            alt="Scroll Down" 
            width={180}  // Larger size
            height={180} 
            className="object-contain animate-bounce"  // Bounce animation
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
