"use client";

import { useCallback, useMemo } from "react";
import APP from "~/constants/app.config";
import { splitString } from "~/utils/string";

export default function BookContent({
  content,
  gifs,
}: {
  content: string;
  gifs: string[];
}) {
  const contentArray = useMemo(
    () => splitString(content, APP.gifPerChar),
    [content],
  );

  const renderItem = useCallback(
    (item: string, i: number) => (
      <div key={i}>
        <p className="text-break" style={{ whiteSpace: "pre-wrap" }}>
          {item}
        </p>
        <img
          className="mb-3"
          width={"100%"}
          height={"auto"}
          style={{ minHeight: "200px" }}
          alt={gifs[i]}
          src={gifs[i]}
        />
      </div>
    ),
    [],
  );

  return contentArray.map(renderItem);
}
