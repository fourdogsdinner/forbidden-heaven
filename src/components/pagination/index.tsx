"use client";

import clsx from "clsx";
import Link from "next/link";
import { ReactNode, useCallback, useMemo } from "react";
import Icon from "../icon";

type PaginationProps = {
  totalPage: number;
  siblingCount?: number;
  currentPage?: number;
  className?: string;
  path?: string;
  onChange?: (page: number) => void;
};

export default function Pagination({
  totalPage,
  siblingCount = 2,
  currentPage = 1,
  path,
  className,
  onChange,
}: PaginationProps) {
  // Total pages to be shown, excluded first, last pages
  const count = useMemo(() => siblingCount * 2 + 1, [siblingCount]);

  // First page of paginated array
  const firstPage = useMemo(() => {
    let first = Math.max(currentPage - siblingCount, 1);
    first = Math.min(first, totalPage - siblingCount * 2);
    return first;
  }, [currentPage, siblingCount, totalPage]);

  //
  const showAllPage = useMemo(() => totalPage <= count, [totalPage, count]);

  // Condition to show first, last, etc
  const showFirstPage = useMemo(
    () => !showAllPage && firstPage > 1,
    [firstPage, showAllPage],
  );
  const showLastPage = useMemo(
    () => !showAllPage && currentPage < totalPage - siblingCount,
    [currentPage, totalPage, siblingCount, showAllPage],
  );
  const showPrevious = useMemo(() => currentPage > 1, [currentPage]);
  const showNext = useMemo(
    () => currentPage < totalPage,
    [currentPage, totalPage],
  );
  const showLeftDots = useMemo(
    () => totalPage > count + 1 && firstPage > 2,
    [totalPage, count, firstPage],
  );
  const showRightDots = useMemo(
    () => totalPage > count + 1 && currentPage < totalPage - (siblingCount + 1),
    [totalPage, count, currentPage, siblingCount],
  );

  // Paginated array of pages
  const paginateData = useMemo(
    () =>
      showAllPage
        ? new Array(totalPage).fill(1).map((e: number, i: number) => e + i)
        : new Array(count).fill(1).map((e: number, i: number) => firstPage + i),
    [firstPage, count, showAllPage, totalPage],
  );

  const renderItem = useCallback(
    (e: number) => (
      <PageItem
        key={e}
        page={e}
        href={path ? path + e : undefined}
        name={e}
        active={currentPage === e}
        onChange={onChange}
      />
    ),
    [currentPage, path, onChange],
  );

  // If total Page is 1 or 0
  if (totalPage <= 1) return null;

  return (
    <nav
      className={clsx(
        `d-flex justify-content-center align-items-center my-3`,
        className,
      )}
    >
      <ul className="pagination pagination-sm">
        {showPrevious && (
          <PageItem
            name={<Icon name={"chevron-left"} />}
            href={path ? path + (currentPage - 1) : undefined}
            page={currentPage - 1}
            onChange={onChange}
          />
        )}
        {showFirstPage && (
          <PageItem
            name={1}
            href={path ? path + "1" : undefined}
            page={1}
            onChange={onChange}
          />
        )}
        {showLeftDots && <span className="mx-2">...</span>}
        {paginateData.map(renderItem)}
        {showRightDots && <span className="mx-2">...</span>}
        {showLastPage && (
          <PageItem
            name={totalPage}
            href={path ? path + totalPage : undefined}
            page={totalPage}
            onChange={onChange}
          />
        )}
        {showNext && (
          <PageItem
            name={<Icon name={"chevron-right"} />}
            href={path ? path + (currentPage + 1) : undefined}
            page={currentPage + 1}
            onChange={onChange}
          />
        )}
      </ul>
    </nav>
  );
}

const PageItem = ({
  active,
  href,
  name,
  onChange,
  page,
}: {
  active?: boolean;
  href?: string;
  name: ReactNode;
  children?: ReactNode;
  onChange?: (page: number) => void;
  page: number;
}) => (
  <li className="page-item">
    {href ? (
      <Link href={href} className={clsx("page-link", active && "active")}>
        {name}
      </Link>
    ) : (
      onChange && (
        <span
          style={{ cursor: "pointer" }}
          onClick={() => onChange(Number(page))}
          className={clsx("page-link", active && "active")}
        >
          {name}
        </span>
      )
    )}
  </li>
);
