"use client";
import React, { useState, useEffect, useRef } from 'react';

const Team = () => {
  const [hoveredFacultyIndex, setHoveredFacultyIndex] = useState(null);
  const [hoveredStudentIndex, setHoveredStudentIndex] = useState(null);
  const [opacity, setOpacity] = useState(0);
  const teamRef = useRef(null);

  const facultyDetails = [
    "Details about Coordinator 1",
  ];

  const studentDetails = [
    "Details about Student Coordinator 1",
    "Details about Student Coordinator 2",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setOpacity(1); // Fade in
        }
      });
    });

    if (teamRef.current) {
      observer.observe(teamRef.current);
    }

    return () => {
      if (teamRef.current) {
        observer.unobserve(teamRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={teamRef}
      className={`flex flex-col items-center justify-center min-h-screen text-center transition-opacity duration-300`}
      style={{ opacity }}
    >
      <h1 className="mb-6 text-3xl font-bold text-blue-600">Head Of The Department - CSE</h1>
      <div className="flex flex-wrap justify-center space-x-4 md:space-x-24">
        {facultyDetails.map((detail, index) => (
          <div
            key={index}
            className={`relative w-48 h-48 md:w-56 md:h-56 bg-blue-300 border-2 border-black flex items-center justify-center transition-transform duration-300 ease-in-out ${
              hoveredFacultyIndex === index ? 'scale-105' : 'scale-100'
            }`}
            onMouseEnter={() => setHoveredFacultyIndex(index)}
            onMouseLeave={() => setHoveredFacultyIndex(null)}
          >
            {/* Popup positioned below the square */}
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ease-in-out mt-1 w-48 bg-gray-800 text-white flex items-center justify-center rounded ${
                hoveredFacultyIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              style={{ top: '100%' }}
            >
              {detail}
            </div>
          </div>
        ))}
      </div>

      {/* Space between sections */}
      <div className="mt-12" />

      {/* Student Coordinators Section */}
      <h1 className="mb-6 mt-10 text-3xl font-bold text-blue-600">Student Coordinators</h1>
      <div className="flex flex-wrap justify-center space-x-4 md:space-x-24">
        {studentDetails.map((detail, index) => (
          <div
            key={index}
            className={`relative w-48 h-48 md:w-56 md:h-56 bg-blue-300 border-2 border-black flex items-center justify-center transition-transform duration-300 ease-in-out ${
              hoveredStudentIndex === index ? 'scale-105' : 'scale-100'
            }`}
            onMouseEnter={() => setHoveredStudentIndex(index)}
            onMouseLeave={() => setHoveredStudentIndex(null)}
          >
            {/* Popup positioned below the square */}
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ease-in-out mt-1 w-48 bg-gray-800 text-white flex items-center justify-center rounded ${
                hoveredStudentIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              style={{ top: '100%' }}
            >
              {detail}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
