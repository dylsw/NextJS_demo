import React from "react";
import Link from "next/link";

const ChatbotPage = () => {
  return (
    <main>
      <div>
        <h1>Chatbot Page</h1>
        <Link href="/chatbot/newConversation"> To New Conversation Page</Link>
      </div>
    </main>
  );
};

export default ChatbotPage;
