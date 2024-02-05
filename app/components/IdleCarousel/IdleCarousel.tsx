import React from "react";
import { Media } from "../../lib/definitions";

interface IdleCarouselProps {
  mediaList: Media[];
}

const IdleCarousel: React.FC<IdleCarouselProps> = ({ mediaList }) => {
  return (
    <>
      <div className="carousel w-full">
        {mediaList.map((media, index) => (
          <div
            id={"slide" + index}
            className="carousel-item relative w-full"
            key={index}
          >
            {media.MediaType === ".mp4" ? (
              <video
                src={
                  "http://127.0.0.1:5000/media/media_data/" + media.hostedURL
                }
                autoPlay
                muted
              >
                Your browser does not support this video.
              </video>
            ) : (
              <img
                src={
                  "http://127.0.0.1:5000/media/media_data/" + media.hostedURL
                }
                alt={media.hostedURL}
              />
            )}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={
                  "#slide" + (index - 1 < 0 ? mediaList.length - 1 : index - 1)
                }
                className="btn btn-circle"
              >
                {"<"}
              </a>
              <a
                href={"#slide" + ((index + 1) % mediaList.length)}
                className="btn btn-circle"
              >
                {">"}
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default IdleCarousel;
