import { PageHeader } from "../components/PageHeader.jsx";
import { Research } from "../sections/Research.jsx";
import { publications } from "../content.js";

export function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research & Publications"
        title="Peer-reviewed work on ML for energy access."
        lede="Three papers accepted for 2026 publication across IEEE Xplore and IJCAI proceedings, plus earlier policy work."
      />
      <Research publications={publications} standalone />
    </>
  );
}
