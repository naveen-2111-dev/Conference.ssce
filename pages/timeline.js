"use client";
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image'; 
import "tailwindcss/tailwind.css";
// import Nav from './Nav';
import ScrollGif from '/public/images/scroll-down.gif';

// Timeline data with event titles and descriptions
const timelineData = [
  { title: "Paper Submission Last Date", description: "29.10.2024" },
  { title: "Acceptance Notification Date", description: "04.11.2024" },
  { title: "Registration Last Date", description: "09.11.2024" },
  { title: "Event Day", description: "14.11.2024 & 15.11.2024" },
];

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleItems(prev => new Set(prev).add(entry.target.dataset.index));
        } else {
          setVisibleItems(prev => {
            const newSet = new Set(prev);
            newSet.delete(entry.target.dataset.index);
            return newSet;
          });
        }
      });
    });

    // Observe each item
    itemsRef.current.forEach(item => {
      if (item) { // Check if the item is defined
        observer.observe(item);
      }
    });

    return () => {
      // Unobserve each item on cleanup
      itemsRef.current.forEach(item => {
        if (item) { // Check if the item is defined
          observer.unobserve(item);
        }
      });
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-black">
      {/* <Nav /> */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-black relative px-4"> {/* Added padding */}
        <h1 className="text-blue-600 text-6xl m-10 font-mono font-bold text-center">Timeline</h1>
        {timelineData.map((item, index) => (
          <div
            key={index}
            ref={el => itemsRef.current[index] = el}
            data-index={index}
            className={`bg-blue-600 bg-opacity-30 backdrop-blur-md p-4 m-4 rounded-lg w-full max-w-2xl text-white flex flex-col items-center justify-center border border-white/30 transition-all duration-300 ease-in-out transform cursor-pointer ${
              visibleItems.has(index.toString())
                ? 'opacity-100 translate-x-0'
                : index % 2 === 0
                  ? '-translate-x-[100%] opacity-0' 
                  : 'translate-x-[100%] opacity-0'
            } hover:bg-blue-500 hover:scale-105`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <h2 className="text-lg font-bold">{item.title}</h2>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}

        <div className="fixed bottom-4 right-4 w-24 h-24">
          <Image 
            src={ScrollGif} 
            alt="Scroll Down" 
            width={180}  
            height={180} 
            className="object-contain animate-bounce"
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
