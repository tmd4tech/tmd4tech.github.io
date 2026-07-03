import { parseFrontmatter } from "./lib/frontmatter.js";
import { marked } from "marked";

import settings from "./data/settings.json";
import about from "./data/about.json";
import experience from "./data/experience.json";
import skills from "./data/skills.json";
import recognition from "./data/recognition.json";

// Read every markdown file in the content folders as raw text at build time.
const pubFiles = import.meta.glob("./content/publications/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});
const projFiles = import.meta.glob("./content/projects/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

function parseCollection(files, { renderBody = false } = {}) {
  return Object.values(files)
    .map((raw) => {
      const { data, content } = parseFrontmatter(raw);
      return {
        ...data,
        bodyText: content.trim(),
        bodyHtml: renderBody ? marked.parse(content.trim()) : null,
      };
    })
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

export const publications = parseCollection(pubFiles);
export const projects = parseCollection(projFiles, { renderBody: true });
export { settings, about, experience, skills, recognition };
