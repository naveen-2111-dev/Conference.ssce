import React from "react";
import Nav from "./Nav";
import Image from "next/image";  // Importing Image from next/image
import Arrow from "../public/images/Arrow.png";
import "tailwindcss/tailwind.css";

const About = () => {
  return (
    <div>
      <Nav />
      <div className="textContainer relative flex flex-col justify-center items-center min-h-screen bg-black text-blue-600 pt-6"> {/* Added pt-6 to reduce space */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl mb-4 font-mono font-bold text-center"> {/* Reduced margin-bottom */}
          <span className="text-white">About</span> ICRCCT.
        </h1>
        <style jsx>{`
          @keyframes blink-shadow {
            0%, 100% {
              box-shadow: 0 0 0 rgba(0, 0, 255, 0); /* No shadow */
            }
            50% {
              box-shadow: 0 0 60px rgba(0, 0, 255, 1); /* Blue shadow */
            }
          }

          .animate-blink {
            animation: blink-shadow 3s infinite; 
          }
        `}</style>

        {/* AboutContainer as a relative positioned parent */}
        <div className="AboutContainer relative flex flex-col items-start text-justify text-sm sm:text-base md:text-lg lg:text-xl w-full sm:w-3/4 md:w-1/2 h-auto p-4 sm:p-8 rounded-lg text-white font-mono bg-black border border-white animate-blink">
          {/* Logo Div at Top Left */}
          <div className="logo absolute top-4 left-4 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24">
            <Image 
              src={Arrow} 
              alt="Logo"
              width={96}   // Define width for the Image component
              height={96}  // Define height for the Image component
              className="object-contain" // Ensures the image covers the div without distortion
            />
          </div> 
          
          {/* Text Content */}
          <div className="mt-12 sm:mt-16 text-left leading-relaxed"> {/* Reduced margin-top */}
            Welcome to the International Paper Presentation Conference, a premier
            event dedicated to advancing research and collaboration in the field of
            computer science. This conference aims to bring together scholars,
            researchers, and industry professionals from around the globe to share
            their insights, innovations, and findings.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
