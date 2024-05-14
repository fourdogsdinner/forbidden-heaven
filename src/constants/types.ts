import { ReactNode } from "react";
import { Url } from "url";

export type LinkProps = {
  href: string;
  name: ReactNode;
  target?: "_blank" | "_parent" | "_self" | "_top";
};

export type BookProps = {
  title: string;
  content: string;
  id?: string;
  href: string;
};

export type BookTitleProps = {
  title: string;
  href: string | Url;
  id: string;
};
