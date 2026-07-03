import { Contour, idx } from "../components/Contour.jsx";

export function Research({ publications, standalone }) {
  return (
    <section className="section section--dark" id="research">
      <Contour />
      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        {!standalone && (
          <div className="section__head" data-reveal>
            <p className="eyebrow">Research &amp; Publications</p>
            <h2>Peer-reviewed work on ML for energy access.</h2>
            <p>
              Three papers accepted for 2026 publication across IEEE Xplore and IJCAI proceedings, plus earlier policy work.
            </p>
          </div>
        )}
        {publications.map((pub, i) => (
          <article className="pub" data-reveal key={i}>
            <div className="pub__idx">
              {idx(pub.order)}
              <span className="pub__year">{pub.year}</span>
            </div>
            <div>
              <h3>
                <a href={pub.link}>{pub.title}</a>
              </h3>
              <p className="pub__meta">
                {pub.authors} · <span className="pub__venue">{pub.venue}</span>
                {pub.proceedings ? ` · ${pub.proceedings}` : ""} ·{" "}
                <span className="status">{pub.status}</span>
              </p>
              <p className="pub__abs">{pub.bodyText}</p>
              {pub.tags && (
                <ul className="tags">
                  {pub.tags.map((t, j) => (
                    <li key={j}>{t}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
