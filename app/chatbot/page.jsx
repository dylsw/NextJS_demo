import React from "react";
import "./chatbot.css";

import ActiveChat from "../components/ActiveChat/ActiveChat";

const ChatbotPage = () => {
  return (
    <main>
      <div className="chatbot-container">
        <ActiveChat />
      </div>
    </main>
  );
};

export default ChatbotPage;
