"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import BookPost from "~/components/book/BookPost";
import Pagination from "~/components/pagination";
import APP from "~/constants/app.config";

export default function Page() {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Get Books
  useEffect(() => {
    const raw = localStorage.getItem(APP.bookStorageKey);
    const favoriteBooks = raw ? JSON.parse(raw) : [];
    setBooks(favoriteBooks);
  }, []);

  const onChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const data = useMemo(
    () => books.slice(currentPage - 1, currentPage * APP.numberOfBooksPerPage),
    [books, currentPage],
  );

  const totalPage = useMemo(
    () => Math.ceil(books.length / APP.numberOfBooksPerPage),
    [books],
  );

  if (books.length === 0) {
    return (
      <main>
        <h5>No Favorite Book Yet</h5>
      </main>
    );
  }

  return (
    <main>
      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        onChange={onChange}
      />
      {data.map((item: any) => (
        <BookPost item={item} key={item?.title} />
      ))}
      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        onChange={onChange}
      />
    </main>
  );
}
