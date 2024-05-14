"use server";

import BookContent from "~/components/book/BookContent";
import FavoriteToggler from "~/components/book/FavoriteToggler";
import PrevNext from "~/components/pagination/PrevNext";
import { getBooksDataAsync, getSingleBookAsync } from "~/utils/books";

export async function generateMetadata({
  params,
}: {
  params: { title: never };
}) {
  const book = await getSingleBookAsync(decodeURI(params.title));

  return {
    title: book.title,
    description: book.content?.slice(0, 256),
  };
}

export async function generateStaticParams() {
  const data = await getBooksDataAsync();

  return data.map((e: any) => ({ title: e.title }));
}

export default async function Book({ params }: { params: { title: never } }) {
  const { title } = params;
  const book = await getSingleBookAsync(decodeURI(title));

  return (
    <div className="py-3 mb-5 mx-auto">
      <h5 className="mb-3 fw-bold">{book?.title.replaceAll("-", " ")}</h5>
      <FavoriteToggler
        className="mb-3"
        title={decodeURI(title)}
        content={book?.content}
      />
      <BookContent content={book?.content} gifs={book?.gifs} />
      <PrevNext prev={book.prev} next={book.next} />
    </div>
  );
}
