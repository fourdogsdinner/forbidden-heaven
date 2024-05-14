import { ReactNode } from "react";
import APP from "~/constants/app.config";
import { getBookTitlesAsync } from "~/utils/books";
import BookTitleList from "../book/BookTitleList";

type DrawerProps = {
  children?: ReactNode;
  title?: ReactNode;
};

export default async function Offcanvas({ children, title }: DrawerProps) {
  const titles = await getBookTitlesAsync();

  return (
    <div
      className="offcanvas offcanvas-start"
      tabIndex={-1}
      aria-labelledby="OffcanvasLabel"
      id={APP.offcanvasId}
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id={"OffcanvasLabel"}>
          {title || "Offcanvas Title"}
        </h5>
        <button
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label={"Close"}
          type="button"
        ></button>
      </div>
      <div className="offcanvas-body">
        <BookTitleList titles={titles} />
      </div>
    </div>
  );
}
