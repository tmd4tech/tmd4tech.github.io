import "./styles.css";
import { useReveal } from "./components/useReveal.js";
import { useHashRoute, to } from "./components/useHashRoute.js";
import { Nav } from "./components/Nav.jsx";
import { Footer } from "./sections/Recognition.jsx";
import { Home } from "./pages/Home.jsx";
import { ResearchPage } from "./pages/ResearchPage.jsx";
import { ProjectsPage } from "./pages/ProjectsPage.jsx";
import { ExperiencePage } from "./pages/ExperiencePage.jsx";
import { SkillsPage } from "./pages/SkillsPage.jsx";
import { settings } from "./content.js";

const ROUTES = {
  "/": Home,
  "/research": ResearchPage,
  "/projects": ProjectsPage,
  "/experience": ExperiencePage,
  "/skills": SkillsPage,
};

function NotFound() {
  return (
    <header className="pagehead section--dark">
      <div className="wrap pagehead__inner">
        <p className="eyebrow">404</p>
        <h1>Page not found.</h1>
        <p className="pagehead__lede">
          That page doesn't exist. <a href={to("/")} style={{ color: "var(--teal-line)" }}>Return home</a>.
        </p>
      </div>
    </header>
  );
}

export default function App() {
  const route = useHashRoute();
  const Page = ROUTES[route] || NotFound;

  // Re-run reveal observer whenever the page changes.
  useReveal(route);

  return (
    <>
      <Nav route={route} />
      <Page />
      <Footer settings={settings} />
    </>
  );
}
