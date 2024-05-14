"use client";

import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import Icon from "~/components/icon";

export default function ThemeSwitch() {
  const [loading, setLoading] = useState(true);
  const { resolvedTheme, setTheme, themes } = useTheme();

  // Component mounted
  useEffect(() => setLoading(false), []);

  const LightIcon = useCallback(
    () => <Icon name={"sun-fill"} className="me-2" />,
    [],
  );
  const DarkIcon = useCallback(
    () => <Icon name={"moon-stars-fill"} className="me-2" />,
    [],
  );
  const SystemIcon = useCallback(
    () => <Icon name={"laptop"} className="me-2" />,
    [],
  );

  const renderThemes = useCallback(
    (theme: string) => (
      <li key={theme} onClick={() => setTheme(theme)}>
        <button type={"button"} className="dropdown-item text-capitalize">
          {theme === "dark" ? (
            <DarkIcon />
          ) : theme === "light" ? (
            <LightIcon />
          ) : (
            <SystemIcon />
          )}
          {theme}
        </button>
      </li>
    ),
    [setTheme],
  );

  // Wait component to mount
  if (loading) return null;

  return (
    <div className="dropdown">
      <button
        type="button"
        className="btn dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {resolvedTheme === "light" ? <LightIcon /> : <DarkIcon />}
      </button>
      <ul className="dropdown-menu dropdown-menu-end shadow">
        {themes.map(renderThemes)}
      </ul>
    </div>
  );
}
