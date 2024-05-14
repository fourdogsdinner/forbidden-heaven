import { useCallback } from "react";
import Icon from "~/components/icon";
import APP from "~/constants/app.config";
import { LinkProps } from "~/constants/types";
import Logo from "./Logo";
import NavItem from "./NavItem";
import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {
  const renderItem = useCallback(
    (item: LinkProps) => <NavItem {...item} />,
    [],
  );

  return (
    <nav
      className="navbar navbar-expand-lg bg-body shadow sticky-top"
      id={APP.navbarId}
    >
      <div className="container-fluid">
        {/**Offcanvas Toggler */}
        <div className="d-flex flex-row items-center gap-2">
          <button
            type="button"
            className="navbar-toggler"
            aria-expanded={false}
            aria-label="toggle offcanvas"
            data-bs-toggle={"offcanvas"}
            aria-controls={APP.offcanvasId}
            data-bs-target={`#${APP.offcanvasId}`}
          >
            <Icon name="list" />
          </button>
          <Logo />
        </div>
        {/**Togglers */}
        <div className="d-flex flex-row items-center order-lg-last">
          <ThemeSwitch />
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle={"collapse"}
            data-bs-target={`#${APP.navbarCollapseId}`}
            aria-controls={APP.navbarCollapseId}
            aria-expanded={false}
            aria-label="toggle navigation"
          >
            <Icon name={"three-dots-vertical"} />
          </button>
        </div>
        {/**Collapse */}
        <div className="navbar-collapse collapse" id={APP.navbarCollapseId}>
          <ul className="navbar-nav me-auto  mb-2 mb-lg-0">
            {APP.navItems.map(renderItem)}
          </ul>
        </div>
      </div>
    </nav>
  );
}
