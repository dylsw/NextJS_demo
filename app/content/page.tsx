import React from "react";

import { Media } from "../lib/definitions";
import { fetchMediaData } from "../lib/utils";

const ContentPage = async () => {
  const mediaList: Media[] = await fetchMediaData();

  return (
    <>
      <div>
        <h1>This is the Content Page</h1>
      </div>

      <br />
      <br />

      <div>
        <h1>Media</h1>
        <ul>
          {mediaList.map((Media) => (
            <li key={Media.MediaID}>
              <div className="media-container">
                {" "}
                {Media.MediaType === ".mp4" ? (
                  <video
                    src={
                      "http://127.0.0.1:5000/media/media_data/" +
                      Media.hostedURL
                    }
                    autoPlay
                    muted
                  >
                    Browser does not support the video.
                  </video>
                ) : (
                  <img
                    src={
                      "http://127.0.0.1:5000/media/media_data/" +
                      Media.hostedURL
                    }
                    alt={Media.hostedURL}
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div></div>
    </>
  );
};

export default ContentPage;
