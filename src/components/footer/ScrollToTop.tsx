"use client";

import { useCallback } from "react";
import Icon from "~/components/icon";

export default function ScrollToTop() {
  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <button
      type="button"
      className="rounded-circle position-fixed bottom-0 end-0 d-flex align-items-center justify-content-center btn btn-primary m-4"
      style={{ width: "2.5rem", height: "2.5rem", zIndex: "100000" }}
      aria-label="Scroll to top"
      onClick={handleScrollToTop}
    >
      <Icon name="chevron-up" />
    </button>
  );
}
