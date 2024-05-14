import Link from "next/link";
import Icon from "../icon";

type PrevNextProps = {
  prev: null | { title: string; href: string };
  next: null | { title: string; href: string };
};

export default function PrevNext({ prev, next }: PrevNextProps) {
  return (
    <div className="d-flex flex-row align-items-center justify-content-between my-3">
      <div className="">
        {prev ? (
          <Link className="btn btn-primary" href={prev.href}>
            <Icon name={"chevron-left"} />
            <span className="ms-2">{prev?.title}</span>
          </Link>
        ) : null}
      </div>
      <div className="">
        {next ? (
          <Link className="btn btn-primary" href={next.href}>
            {next?.title}
            <Icon name={"chevron-right"} />
          </Link>
        ) : null}
      </div>
    </div>
  );
}
