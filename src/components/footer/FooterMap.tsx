"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback } from "react";
import { LinkProps } from "~/constants/types";

type FooterMapProps = {
  title?: string;
  items: LinkProps[];
};

export default function FooterMap({ title, items }: FooterMapProps) {
  const pathname = usePathname();

  const renderItem = useCallback(
    (item: LinkProps, i: number) => (
      <small key={item.name + i.toString()}>
        <Link
          className={clsx(
            "py-1 text-capitalize link-underline link-underline-opacity-0 link-underline-opacity-100-hover d-block",
            pathname === item.href ? "link-body-emphasis" : "link-secondary",
          )}
          href={item.href}
          target={item.target}
        >
          {item.name}
        </Link>
      </small>
    ),
    [],
  );

  return (
    <div>
      <div className="fs-5 mb-3 fw-bold">{title}</div>
      <div>{items.map(renderItem)}</div>
    </div>
  );
}
