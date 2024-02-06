import React from "react";
import Link from "next/link";
import "./HomeHero.css";

const HomeHero = () => {
  return (
    <>
      <div className="hero-container">
        <div
          className="hero min-h-full"
          style={{
            backgroundImage: "url(/SingHealthHomeHero2.jpg)",
            maxHeight: "80%",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Greetings!</h1>
              <p className="mb-5">Welcome to SingHealth RedBox Kiosk.</p>
              <p className="mb-5">
                Click on the button below to chat with our very own AI Chatbot
                Now!
              </p>
              <Link href="/chatbot" className="btn btn-primary">
                AI Chatbot
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
