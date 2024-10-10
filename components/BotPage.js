"use client";

import React, { useState } from "react";
import { FaRocket } from "react-icons/fa";
import { findAnswer } from "@/utils/Bot";

const BotPage = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (message.trim() === "") return;

    const userMessage = { text: message, type: "user" };
    const botMessage = { text: findAnswer(message), type: "bot" };
    setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
    setMessage("");
  };

  return (
    <div className="relative h-full w-screen">
      {/* Background 3D Object */}
      <iframe
        src="https://my.spline.design/liquidspiral-17469e59cff3eb0e9a8344531b861aa3/"
        className="w-full h-full"
        style={{ border: "none" }}
      />

      {/* Messages Container */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-screen max-w-xl p-4 bg-transparent overflow-y-auto h-3/5">
        <div className="flex flex-col space-y-2">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`w-full flex ${
                msg.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs p-2 rounded-md ${
                  msg.type === "user"
                    ? "bg-gray-800 text-white text-right"
                    : "bg-blue-500 text-white text-left"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input and Send Button */}
      <div className="absolute flex gap-3 bottom-5 left-1/2 transform -translate-x-1/2 w-full max-w-md px-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your question..."
          className="w-full p-3 text-white bg-black bg-opacity-50 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleSendMessage}
          className="bg-opacity-70 cursor-pointer font-black text-black bg-white p-3 flex justify-center items-center gap-3 rounded-md hover:bg-green-500 hover:text-white"
        >
          Send
          <FaRocket />
        </button>
      </div>
    </div>
  );
};

export default BotPage;
