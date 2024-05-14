import BookPost from "~/components/book/BookPost";
import Pagination from "~/components/pagination";
import APP from "~/constants/app.config";
import { getBookIntroAsync, getBooksDataAsync } from "~/utils/books";

export async function generateStaticParams() {
  const data = await getBooksDataAsync();
  const totalPage = Math.ceil(data.length / APP.numberOfBooksPerPage);

  return new Array(totalPage)
    .fill(1)
    .map((e: number, i: number) => ({ page: (e + i).toString() }));
}

export default async function Book({ params }: { params: { page: any } }) {
  const { page } = params;
  const { books, totalPage } = await getBookIntroAsync(Number(page));

  return (
    <main className="py-3">
      <Pagination totalPage={totalPage} currentPage={Number(page)} path="/" />
      {books.map((item) => (
        <BookPost item={item} key={item.id} />
      ))}
      <Pagination totalPage={totalPage} currentPage={Number(page)} path="/" />
    </main>
  );
}
