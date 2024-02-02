import React from "react";
import Link from "next/link";

import ActiveChat from "../components/ActiveChat/ActiveChat";

const ChatbotPage = () => {
  return (
    <main>
      <div>
        <ActiveChat />
      </div>
    </main>
  );
};

export default ChatbotPage;
