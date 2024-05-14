"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback } from "react";
import { BookTitleProps } from "~/constants/types";

export default function BookTitleList({
  titles,
}: {
  titles: BookTitleProps[];
}) {
  const pathname = usePathname();

  const renderItem = useCallback(
    (e: BookTitleProps, i: number) => (
      <Link
        key={e.id + i}
        className={clsx("list-group-item", pathname === e.href && "active")}
        href={e.href}
      >
        <div data-bs-dismiss={"offcanvas"}>{e.title}</div>
      </Link>
    ),
    [pathname],
  );

  return <div className="list-group">{titles.map(renderItem)}</div>;
}
