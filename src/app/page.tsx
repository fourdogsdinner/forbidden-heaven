import BookPost from "~/components/book/BookPost";
import Pagination from "~/components/pagination";
import { getBookIntroAsync } from "~/utils/books";

export default async function Home() {
  const { books, totalPage } = await getBookIntroAsync();

  return (
    <main>
      <Pagination totalPage={totalPage} path="/" />
      {books.map((item) => (
        <BookPost item={item} key={item.id} />
      ))}
      <Pagination totalPage={totalPage} path="/" />
    </main>
  );
}
