import React from "react";

interface Media {
  MediaID: string;
  ConfigID: string;
  MediaType: string;
  MediaOrder: number;
  PresignedURL: string;
  hostedURL: string;
}

const ContentPage = async () => {
  const response = await fetch(
    "http://127.0.0.1:5000/media/download_latest_media",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  const mediaList: Media[] = data.media;

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
              <img
                src={
                  "http://127.0.0.1:5000/media/media_data/" + Media.hostedURL
                }
                alt={Media.hostedURL}
              />
            </li>
          ))}
        </ul>
      </div>

      <div></div>
    </>
  );
};

export default ContentPage;
