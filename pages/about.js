import React from "react";
import Nav from "./Nav";
import "tailwindcss/tailwind.css";

const About = () => {
  return (
    <div className="bg-black">
      <Nav />
      <div className="textContainer relative flex flex-col justify-center items-center h-scree text-blue-600">
        <h1 className="text-6xl mb-6 font-mono font-bold">
          <span className="text-white">About</span> ICRCCT.
        </h1>
        <style jsx>{`
          @keyframes blink-shadow {
            0%,
            100% {
              box-shadow: 0 0 0 rgba(0, 0, 255, 0);
            }
            50% {
              box-shadow: 0 0 60px rgba(0, 0, 255, 1);
            }
          }

          .animate-blink {
            animation: blink-shadow 3s infinite;
          }
        `}</style>

        <div className="AboutContainer relative flex flex-col items-start text-justify text-xl w-1/2 h-1/2 p-10 rounded-lg text-white font-mono bg-black border border-white animate-blink">
          <div className="logo absolute top-4 left-4 w-24 h-24 bg-white"></div>
          <div className="mt-32 text-left">
            Welcome to the International Paper Presentation Conference, a
            premier event dedicated to advancing research and collaboration in
            the field of computer science. This conference aims to bring
            together scholars, researchers, and industry professionals from
            around the globe to share their insights, innovations, and findings.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
