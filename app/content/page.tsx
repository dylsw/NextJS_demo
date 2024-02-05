import React from "react";
import StaticCarousel from "../components/StaticCarousel/StaticCarousel";

import { Media } from "../lib/definitions";
import { fetchMediaData } from "../lib/utils";

const ContentPage = async () => {
  const mediaList: Media[] = await fetchMediaData();

  return (
    <>
      <StaticCarousel mediaList={mediaList} />
    </>
  );
};

export default ContentPage;
