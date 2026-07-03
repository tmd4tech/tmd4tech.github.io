// Minimal, browser-safe frontmatter parser.
// Replaces gray-matter (which needs Node's Buffer) so the bundle runs
// in the browser. Handles the YAML subset our content files use:
// strings, numbers, and lists (both inline "- item" and nested).
import { load as yamlLoad } from "js-yaml";

export function parseFrontmatter(raw) {
  const text = String(raw).replace(/\r\n/g, "\n");
  const m = text.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return { data: {}, content: text.trim() };
  let data = {};
  try {
    data = yamlLoad(m[1]) || {};
  } catch (e) {
    console.warn("Frontmatter parse error:", e);
  }
  return { data, content: m[2].trim() };
}
