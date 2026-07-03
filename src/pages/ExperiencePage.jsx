import { PageHeader } from "../components/PageHeader.jsx";
import { Experience } from "../sections/Experience.jsx";
import { Recognition } from "../sections/Recognition.jsx";
import { experience, recognition } from "../content.js";

export function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Where the work has happened."
        lede="Roles across energy-access research and predictive grid analytics — plus leadership, awards, and certifications."
      />
      <Experience experience={experience} standalone />
      <Recognition recognition={recognition} />
    </>
  );
}
