import { useEffect } from "react";

// Reveal-on-scroll for [data-reveal] elements. Designed to FAIL SAFE:
// content must never stay invisible. If the observer isn't available,
// or anything is still hidden shortly after load (e.g. it was already
// on-screen, or timing was off), we force it visible.
export function useReveal(dep) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-reveal]:not(.in)"));
    if (!els.length) return;

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => io.observe(el));

    // Fail-safe: reveal anything already in or near the viewport right
    // away, and guarantee nothing is ever left stuck hidden.
    const revealVisible = () => {
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 1.1) el.classList.add("in");
      });
    };
    revealVisible();
    const t = setTimeout(revealVisible, 400);

    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, [dep]);
}
