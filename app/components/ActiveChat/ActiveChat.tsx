"use client";

import React, { useState, useEffect } from "react";
import { fetchChatbotData, reloadEmbeddings } from "@/app/lib/utils";

import "./ActiveChat.css";

type ChatMessageType = "user" | "bot";

interface ChatMessage {
  type: ChatMessageType;
  text: string;
}

const ActiveChat: React.FC = () => {
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);

  const handleUserInput = async (userInput: string) => {
    // Add user's question to the chat history immediately
    const updatedChatHistory: ChatMessage[] = [
      ...chatHistory,
      { type: "user", text: userInput },
    ];
    setChatHistory(updatedChatHistory);

    // Simulate a 1-second delay before chatbot responds
    setTimeout(async () => {
      const answer = await fetchChatbotData(userInput);

      // Update chat history with chatbot's answer
      const updatedChatHistoryWithBot: ChatMessage[] = [
        ...updatedChatHistory,
        { type: "bot", text: answer },
      ];
      setChatHistory(updatedChatHistoryWithBot);
    }, 1000);
  };

  useEffect(() => {
    const onHardRefresh = () => {
      // Your function to be called on hard refresh
      console.log("Hard refresh detected. Calling your function...");
      reloadEmbeddings();
    };

    // Check if the page is loaded as a result of a hard refresh
    const navigationEntries = performance.getEntriesByType("navigation");
    if (
      navigationEntries.length > 0 &&
      navigationEntries[0] instanceof PerformanceNavigationTiming &&
      navigationEntries[0].type === "reload"
    ) {
      onHardRefresh();
    }
  }, []);

  useEffect(() => {
    // Scroll to the bottom of the chat container when chatHistory changes
    const chatContainer = document.querySelector(".chat-container");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [chatHistory]);

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
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  {chat.type === "bot" ? (
                    <img alt="Chatbot Icon" src="/ChatbotIcon.png" />
                  ) : (
                    <img alt="User Icon" src="/UserIcon.png" />
                  )}
                </div>
              </div>
              {chat.type === "bot" ? (
                <div className="chat-bubble">{chat.text}</div>
              ) : (
                <div className="chat-bubble chat-bubble-accent">
                  {chat.text}
                </div>
              )}
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
