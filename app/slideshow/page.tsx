import React from "react";
import IdleCarousel from "../components/IdleCarousel/IdleCarousel";

import { Media } from "../lib/definitions";
import { fetchMediaData } from "../lib/utils";

const Slideshow = async () => {
  const mediaList: Media[] = await fetchMediaData();

  return (
    <div>
      This is the slideshow page
      <br />
      <br />
      <IdleCarousel mediaList={mediaList} />
    </div>
  );
};

export default Slideshow;
