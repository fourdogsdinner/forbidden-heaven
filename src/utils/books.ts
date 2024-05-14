"use server";

import fs from "fs/promises";
import { nanoid } from "nanoid";
import path from "path";
import APP from "~/constants/app.config";
import { convertToBurmeseNumber } from "./burmese";
import { getRandomGifsAsync } from "./gif";

const BOOK_DIR = "src/constants/books";

// Get Books
export const getBooksDataAsync = async () => {
  const dirs = await fs.readdir(BOOK_DIR, "utf-8");

  const data = [];

  for (const dir of dirs) {
    const content = await fs.readFile(path.join(BOOK_DIR, dir), "utf-8");
    const title = dir.replace(".txt", "");
    const stat = await fs.stat(path.join(BOOK_DIR, dir));
    const createdAt = stat.birthtimeMs;

    data.push({ title, content, createdAt });
  }

  return data.sort((a, b) =>
    a.createdAt > b.createdAt ? -1 : a.createdAt < b.createdAt ? 1 : 0,
  );
};

// Get Books and Slice it
export const getBookIntroAsync = async (currentPage = 1) => {
  const books = await getBooksDataAsync();

  // Slice data for pagination
  const slicedData = books.slice(
    (currentPage - 1) * APP.numberOfBooksPerPage,
    currentPage * APP.numberOfBooksPerPage,
  );

  return {
    totalPage: Math.ceil(books.length / APP.numberOfBooksPerPage),
    books: slicedData.map((e: any) => ({
      ...e,
      content: e.content.slice(0, 256),
      id: nanoid(),
      href: `/book/${e.title}`,
    })),
  };
};

// Get Book with specific title
export const getSingleBookAsync = async (title: string) => {
  const content = await fs.readFile(
    path.join(BOOK_DIR, title + ".txt"),
    "utf-8",
  );

  const numOfGifs = Math.ceil(content.length / APP.gifPerChar);

  const gifs = await getRandomGifsAsync(numOfGifs || 3);

  return { title, content, gifs };
};

export const getBookTitlesAsync = async () => {
  const titles = await fs.readdir(BOOK_DIR, "utf-8");

  return titles.map((e: string, i: number) => {
    const title = e.replace(".txt", "").replaceAll("-", "");

    return {
      id: nanoid(),
      title: convertToBurmeseNumber(i + 1) + `။ ${title}`,
      href: `/book/${e.replace(".txt", "")}`,
    };
  });
};
