import { useEffect, useState } from "react";

// Minimal hash-based router. Hash routing is the safe choice on GitHub
// Pages: URLs like /#/research never 404 on refresh or when shared,
// and need no server config. Returns the current route path, e.g. "/research".
export function useHashRoute() {
  const read = () => {
    const h = window.location.hash.replace(/^#/, "");
    return h === "" ? "/" : h;
  };
  const [route, setRoute] = useState(read);

  useEffect(() => {
    const onChange = () => {
      setRoute(read());
      window.scrollTo(0, 0); // start each page at the top
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return route;
}

// Helper so links produce correct hash targets.
export const to = (path) => `#${path}`;
