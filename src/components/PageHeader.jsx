import { Contour } from "./Contour.jsx";

// A compact hero for interior pages so each opens with the same
// visual language as the home hero, without repeating the whole thing.
export function PageHeader({ eyebrow, title, lede }) {
  return (
    <header className="pagehead section--dark">
      <Contour />
      <div className="wrap pagehead__inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {lede && <p className="pagehead__lede">{lede}</p>}
      </div>
    </header>
  );
}
