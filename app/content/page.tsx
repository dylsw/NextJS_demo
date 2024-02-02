import React from "react";

import { Media } from "../lib/definitions";
import { fetchMediaData } from "../lib/utils";

import StaticCarousel from "../components/StaticCarousel/StaticCarousel";

const ContentPage = async () => {
  const mediaList: Media[] = await fetchMediaData();

  return (
    <>
      <StaticCarousel mediaList={mediaList} />
    </>
  );
};

export default ContentPage;
