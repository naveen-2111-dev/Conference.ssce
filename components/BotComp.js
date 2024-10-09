"use client";

import { findAnswer } from "@/utils/Bot";
import React, { useState } from "react";

const BotComp = () => {
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
    <div className="flex flex-col h-96 rounded-lg overflow-hidden">
      <header className="bg-transparent text-white text-center py-3">
        <h2 className="text-2xl font-sans font-bold">QnA</h2>
      </header>

      <div className="flex-1 p-4 bg-transparent overflow-y-auto">
        <div className="flex flex-col space-y-2">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded-md ${
                msg.type === "user" ? "bg-gray-800 text-white" : "bg-blue-500 text-white"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
      </div>

      <footer className="flex p-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 border border-gray-300 rounded-md mr-2"
        />
        <button
          onClick={handleSendMessage}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Send
        </button>
      </footer>
    </div>
  );
};

export default BotComp;
