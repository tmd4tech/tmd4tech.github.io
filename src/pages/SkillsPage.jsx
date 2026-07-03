import { PageHeader } from "../components/PageHeader.jsx";
import { Skills } from "../sections/Skills.jsx";
import { skills } from "../content.js";

export function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="The technical toolkit."
        lede="The methods and tools I reach for across data science, geospatial analysis, and energy-systems work."
      />
      <Skills skills={skills} standalone />
    </>
  );
}
