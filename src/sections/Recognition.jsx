import { Contour } from "../components/Contour.jsx";

export function Recognition({ recognition }) {
  return (
    <section className="section section--paper" id="recognition">
      <div className="wrap">
        <div className="section__head" data-reveal>
          <p className="eyebrow">Leadership · Awards · Certifications</p>
        </div>
        <div className="recog" data-reveal>
          <div>
            <h3>Leadership &amp; Awards</h3>
            <ul className="recog--lead">
              {recognition.leadership.map((l, i) => (
                <li key={i}>{l}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Certifications</h3>
            <ul className="recog--cert">
              {recognition.certifications.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer({ settings }) {
  const year = new Date().getFullYear();
  return (
    <footer className="foot section--dark" id="contact">
      <Contour />
      <div className="wrap foot__inner">
        <p className="eyebrow">Get in touch</p>
        <h2>Building the evidence base for electrification. Let's talk.</h2>
        <a className="foot__mail" href={`mailto:${settings.email}`}>
          {settings.email}
        </a>
        <div className="foot__links">
          {settings.links?.linkedin && <a href={settings.links.linkedin}>LinkedIn</a>}
          {settings.links?.scholar && <a href={settings.links.scholar}>Google Scholar</a>}
          {settings.links?.github && <a href={settings.links.github}>GitHub</a>}
          <a href={`tel:${settings.phone}`}>{settings.phone}</a>
        </div>
        <p className="foot__fine">
          © {year} {settings.title} · Built with React + Vite on GitHub Pages
        </p>
      </div>
    </footer>
  );
}
