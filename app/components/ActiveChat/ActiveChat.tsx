"use client";

import React, { useState, KeyboardEvent } from "react";
import { fetchChatbotData } from "@/app/lib/utils";

import "./ActiveChat.css";

type ChatMessageType = "user" | "bot";

interface ChatMessage {
  type: ChatMessageType;
  text: string;
}

const ActiveChat: React.FC = () => {
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);

  const handleUserInput = async (userInput: string) => {
    const answer = await fetchChatbotData(userInput);

    // Update chat history with user's question and chatbot's answer
    setChatHistory([
      ...chatHistory,
      { type: "user", text: userInput },
      { type: "bot", text: answer },
    ]);

    // Scroll to the bottom of the chat container
    const chatContainer = document.querySelector(".chat-container");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  };

  return (
    <>
      <div className="activechat-container">
        <div className="chat-container">
          {chatHistory.map((chat: ChatMessage, index: number) => (
            <div
              key={index}
              className={`chat ${
                chat.type === "bot" ? "chat-start" : "chat-end"
              }`}
            >
              <div className="chat-bubble">{chat.text}</div>
            </div>
          ))}
        </div>

        <div className="input-container">
          <input
            className="input input-bordered w-full max-w-xs mx-2"
            type="text"
            placeholder="Ask me something..."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleUserInput(e.currentTarget.value);
                e.currentTarget.value = "";
              }
            }}
          />
          <button
            className="btn btn-neutral mx-2"
            onClick={() => {
              const inputValue = document.querySelector(
                ".input-bar"
              ) as HTMLInputElement;
              handleUserInput(inputValue.value);
              inputValue.value = "";
            }}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default ActiveChat;
