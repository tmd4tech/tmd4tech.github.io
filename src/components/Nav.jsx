import { useState } from "react";
import { to } from "./useHashRoute.js";

const LINKS = [
  { path: "/", label: "home" },
  { path: "/research", label: "research" },
  { path: "/projects", label: "projects" },
  { path: "/experience", label: "experience" },
  { path: "/skills", label: "skills" },
];

export function Nav({ route }) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="wrap nav__inner">
        <a href={to("/")} className="nav__brand" onClick={() => setOpen(false)}>
          T<b>.</b>&nbsp;Akanmu
        </a>
        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <line x1="3" y1="7" x2="21" y2="7" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="17" x2="21" y2="17" />
          </svg>
        </button>
        <ul className={`nav__links${open ? " open" : ""}`}>
          {LINKS.map((l) => (
            <li key={l.path}>
              <a
                href={to(l.path)}
                className={route === l.path ? "is-active" : ""}
                aria-current={route === l.path ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
