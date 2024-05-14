"use client";

import clsx from "clsx";
import { useCallback, useEffect, useState } from "react";
import APP from "~/constants/app.config";
import Icon from "../icon";

export default function FavoriteToggler({
  className,
  title,
  content,
}: {
  className?: string;
  title: string;
  content: string;
}) {
  const [isFavorite, setFavorite] = useState<boolean | null>(null);

  // Check localstorage
  useEffect(() => {
    const raw = localStorage.getItem(APP.bookStorageKey) || "[]";
    const favoriteBooks = JSON.parse(raw);
    setFavorite(favoriteBooks.filter((e: any) => e.title === title).length > 0);
  }, [title]);

  // Handle Favorite
  const toggleFavorite = useCallback(() => {
    setFavorite(!isFavorite);
    const raw = localStorage.getItem(APP.bookStorageKey) || "[]";
    const favoriteBooks = JSON.parse(raw);
    // Toggle title
    const newBooks = isFavorite
      ? favoriteBooks.filter((e: any) => e.title !== title)
      : [...favoriteBooks, { title, content: content.slice(0, 256) }];

    localStorage.setItem(APP.bookStorageKey, JSON.stringify(newBooks));
  }, [isFavorite, title, content]);

  if (isFavorite === null) return null;

  return (
    <div className={className}>
      <button
        onClick={toggleFavorite}
        className={clsx("btn", isFavorite ? "btn-danger" : "btn-success")}
      >
        <span className="me-2">
          {isFavorite ? "Remove From Favorite" : "Add To Favorite"}
        </span>
        <Icon name={isFavorite ? "heart-fill" : "heart"} />
      </button>
    </div>
  );
}
