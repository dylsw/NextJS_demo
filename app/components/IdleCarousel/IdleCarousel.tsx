"use client";
import React from "react";
import { Media } from "../../lib/definitions";

import { useState, useEffect } from "react";

import "./IdleCarousel.css";

interface IdleCarouselProps {
  mediaList: Media[];
}

const IdleCarousel: React.FC<IdleCarouselProps> = ({ mediaList }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoEnd = () => {
    // When a video ends, set isVideoPlaying to false and advance to the next slide
    setIsVideoPlaying(false);
    setCurrentSlide((prevSlide) => (prevSlide + 1) % mediaList.length);
  };

  useEffect(() => {
    // Auto-scroll every 5 seconds for images
    const imageInterval = setInterval(() => {
      if (!isVideoPlaying) {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % mediaList.length);
      }
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(imageInterval);
  }, [isVideoPlaying, mediaList.length]);

  return (
    <>
      <div className="idlecarousel-container">
        <div className="carousel w-full">
          {mediaList.map((media, index) => (
            <div
              id={"slide" + index}
              className={`carousel-item relative w-full ${
                index === currentSlide ? "visible" : "hidden"
              }`}
              key={index}
            >
              {media.MediaType === ".mp4" ? (
                <video
                  className="carousel-video"
                  src={
                    "http://127.0.0.1:5000/media/media_data/" + media.hostedURL
                  }
                  autoPlay
                  muted
                  onPlay={() => setIsVideoPlaying(true)}
                  onEnded={() => handleVideoEnd()}
                >
                  Your browser does not support this video.
                </video>
              ) : (
                <img
                  className="carousel-image"
                  src={
                    "http://127.0.0.1:5000/media/media_data/" + media.hostedURL
                  }
                  alt={media.hostedURL}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default IdleCarousel;
