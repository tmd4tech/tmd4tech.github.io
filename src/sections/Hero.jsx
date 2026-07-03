import { Contour } from "../components/Contour.jsx";

export function Hero({ settings, about }) {
  return (
    <header className="hero section--dark" id="top">
      <Contour />
      <div className="wrap hero__inner">
        <p className="hero__role">{about.role_line}</p>
        <h1>
          Turning energy data into <em>electrification</em> decisions.
        </h1>
        <p className="hero__lede">{settings.description}</p>
        <div className="hero__meta">
          <span>{settings.tagline}</span>
          <a href={`mailto:${settings.email}`}>{settings.email}</a>
          {settings.links?.linkedin && <a href={settings.links.linkedin}>LinkedIn ↗</a>}
          {settings.links?.scholar && <a href={settings.links.scholar}>Scholar ↗</a>}
        </div>
      </div>
    </header>
  );
}
