export function Skills({ skills, standalone }) {
  return (
    <section className="section section--dark" id="skills">
      <div className="wrap">
        {!standalone && (
          <div className="section__head" data-reveal>
            <p className="eyebrow">Skills</p>
            <h2>The technical toolkit.</h2>
          </div>
        )}
        <div className="skills">
          {skills.groups.map((col, i) => (
            <div className="skillcol" data-reveal key={i}>
              <h3>{col.group}</h3>
              <ul>
                {col.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
