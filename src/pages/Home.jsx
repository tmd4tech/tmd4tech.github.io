import { Hero } from "../sections/Hero.jsx";
import { About } from "../sections/About.jsx";
import { settings, about } from "../content.js";

// Home = the hero + About + (footer is rendered globally in App).
// Clean, single-purpose landing page as requested.
export function Home() {
  return (
    <>
      <Hero settings={settings} about={about} />
      <About about={about} />
    </>
  );
}
