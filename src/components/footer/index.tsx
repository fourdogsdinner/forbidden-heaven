import Link from "next/link";
import APP from "~/constants/app.config";
import { LinkProps } from "~/constants/types";
import FooterMap from "./FooterMap";

const test: LinkProps[] = [
  { name: "foo1", href: "/foo1" },
  { name: "foo2", href: "/foo2" },
  { name: "foo3", href: "/foo3" },
  { name: "foo4", href: "/foo4" },
  { name: "foo5", href: "/foo5" },
];

export default function Footer() {
  return (
    <div className="container-fluid py-3">
      <div className="row gx-3">
        <div className="col-12 col-lg-6">
          <div className="mb-3">
            <Link href={"/"} className="h4 text-decoration-none">
              {APP.name}
            </Link>
          </div>
          <p className="text-break">{APP.description}</p>
        </div>
        <hr className="d-lg-none" />
        <div className="col-12 col-lg-2">
          <FooterMap title={"Foo"} items={test} />
        </div>
      </div>
      <hr />
      <div className="row gx-3">
        <div className="col-12 col-lg-6">
          <small className="text-secondary">
            Copy &copy; {new Date().getFullYear()} {APP.name}
          </small>
        </div>
        <div className="col-12 col-lg-6">
          <div className="btn-group">{/**Social Icons */}</div>
        </div>
      </div>
    </div>
  );
}
