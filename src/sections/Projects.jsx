import { idx } from "../components/Contour.jsx";

export function Projects({ projects, standalone }) {
  return (
    <section className="section section--dark" id="projects" style={{ background: "var(--ink-2)" }}>
      <div className="wrap">
        {!standalone && (
          <div className="section__head" data-reveal>
            <p className="eyebrow">Projects</p>
            <h2>Case studies from model to decision.</h2>
            <p>
              Selected work spanning predictive analytics, real-time grid monitoring, and optimization for rural electrification.
            </p>
          </div>
        )}
        <div className="projects">
          {projects.map((proj, i) => (
            <article className="card" data-reveal key={i}>
              <span className="card__num">{idx(proj.order)} / Project</span>
              <h3>{proj.title}</h3>
              <p className="card__sub">{proj.subtitle}</p>
              <div
                className="card__body"
                dangerouslySetInnerHTML={{ __html: proj.bodyHtml }}
              />
              {proj.stack && (
                <ul className="card__stack">
                  {proj.stack.map((s, j) => (
                    <li key={j}>{s}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
