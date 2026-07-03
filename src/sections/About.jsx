export function About({ about }) {
  return (
    <section className="section section--paper" id="about">
      <div className="wrap">
        <div className="about">
          <div className="about__body" data-reveal>
            <p className="eyebrow">About</p>
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <aside className="about__side" data-reveal>
            <ul className="facts">
              {about.facts.map((f, i) => (
                <li key={i}>
                  <span className="k">{f.label}</span>
                  <span className="v">{f.value}</span>
                </li>
              ))}
            </ul>
            <ul className="edu">
              {about.education.map((e, i) => (
                <li key={i}>
                  <div className="deg">{e.degree}</div>
                  <div className="school">{e.school}</div>
                  <div className="dates">{e.dates}</div>
                  <div className="detail">{e.detail}</div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
