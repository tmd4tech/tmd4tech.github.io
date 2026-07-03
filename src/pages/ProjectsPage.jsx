import { PageHeader } from "../components/PageHeader.jsx";
import { Projects } from "../sections/Projects.jsx";
import { projects } from "../content.js";

export function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Case studies from model to decision."
        lede="Selected work spanning predictive analytics, real-time grid monitoring, and optimization for rural electrification."
      />
      <Projects projects={projects} standalone />
    </>
  );
}
