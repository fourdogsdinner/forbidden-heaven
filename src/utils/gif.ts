"use server";

import APP from "~/constants/app.config";

export const getRandomGifsAsync = async (num = 3) => {
  const gifs = new Array(num).fill(0).map(() => {
    const ran = Math.round(Math.random() * APP.totalGifs);
    const index = ran < 10 ? `00${ran}` : ran < 100 ? `0${ran}` : ran;

    return `/gifs/Gif-${index}.webp`;
  });

  return gifs;
};
