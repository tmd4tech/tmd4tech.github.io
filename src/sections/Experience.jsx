export function Experience({ experience, standalone }) {
  return (
    <section className="section section--paper" id="experience">
      <div className="wrap">
        {!standalone && (
          <div className="section__head" data-reveal>
            <p className="eyebrow">Experience</p>
            <h2>Where the work has happened.</h2>
          </div>
        )}
        <div className="exp">
          {experience.roles.map((job, i) => (
            <div className="exp__item" data-reveal key={i}>
              <div className="exp__when">
                <div className="dates">{job.dates}</div>
                <div className="loc">{job.location}</div>
              </div>
              <div className="exp__role">
                <h3>{job.role}</h3>
                <div className="org">{job.org}</div>
                <p className="sum">{job.summary}</p>
                <ul>
                  {job.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
