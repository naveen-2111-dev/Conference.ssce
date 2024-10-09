import BotComp from "@/components/BotComp";
import React from "react";
import "tailwindcss/tailwind.css";
import Bot from "../public/images/bot.svg";
import Image from "next/image";

const qna = () => {
  return (
    <div className="bg-black h-screen flex gap-36 items-center pl-24 justify-center">
      <BotComp />
      <div className="relative mr-10">
        {/* Hardcoded styles for floating animation */}
        <style jsx>{`
          @keyframes float {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px); /* Move up */
            }
            100% {
              transform: translateY(0); /* Move back to original */
            }
          }

          .float-animation {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>

        {/* Ensure the image is displayed correctly and apply the animation */}
        <div className="float-animation">
          <Image
            src={Bot}
            alt="Logo"
            width={500} // Adjusted width for better visibility
            height={200} // Adjusted height for better visibility
          />
        </div>
      </div>
    </div>
  );
};

export default qna;
