import Link from "next/link";
import { BookProps } from "~/constants/types";

export default function BookPost({ item }: { item: BookProps }) {
  return (
    <Link
      href={item.href || `/book/${item.title}`}
      className="card mx-auto text-decoration-none mb-3 shadow"
    >
      <div className="card-body">
        <h5 className="card-title fw-bold">{item.title}</h5>
        <p className="card-text">{item.content}...</p>
      </div>
    </Link>
  );
}
