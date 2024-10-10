import React from "react";
import "tailwindcss/tailwind.css";
import BotPage from "@/components/BotPage";

const qna = () => {
  return (
    <div className="bg-black h-screen w-screen flex items-center justify-center">
      <BotPage />
    </div>
  );
};

export default qna;
