"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import APP from "~/constants/app.config";
import { LinkProps } from "~/constants/types";

export default function NavItem({ href, name, target }: LinkProps) {
  const pathname = usePathname();

  return (
    <li className="nav-item">
      <Link
        className={clsx("nav-link", pathname === href && "active")}
        href={href}
        target={target}
      >
        <div
          data-bs-target={`#${APP.navbarCollapseId}`}
          data-bs-toggle={"collapse"}
        >
          {name}
        </div>
      </Link>
    </li>
  );
}
