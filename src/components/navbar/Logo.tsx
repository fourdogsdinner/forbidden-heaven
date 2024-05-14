import Link from "next/link";
import APP from "~/constants/app.config";

export default function Logo() {
  return (
    <>
      <Link
        href={"/"}
        className="d-lg-none text-decoration-none fs-4 mb-0 fw-bold text-body-emphasis"
      >
        {APP.shortName}
      </Link>
      <Link
        href={"/"}
        className="d-none d-lg-block text-decoration-none fs-4 fw-bold mb-1 me-3 text-body-emphasis"
      >
        {APP.name}
      </Link>
    </>
  );
}
