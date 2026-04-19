#!/usr/bin/env node
import fs from "fs/promises";
import path from "path";

const root = path.resolve(".");
const projectsFile = path.join(root, "src", "data", "projects.tsx");
const outFile = path.join(root, "src", "data", "project-descriptions.json");

async function main() {
  const text = await fs.readFile(projectsFile, "utf8");
  const regex = /\{[\s\S]*?id:\s*"([^"\n]+)"[\s\S]*?github:\s*"([^"\n]+)"/g;
  let m;
  const items = [];
  while ((m = regex.exec(text))) {
    items.push({ id: m[1], github: m[2] });
  }

  const descs = {};
  for (const it of items) {
    try {
      const g = it.github.match(/github.com\/(?:www\.)?([^\/]+)\/([^\/]+)(?:\.git)?$/);
      if (!g) continue;
      const owner = g[1];
      const repo = g[2];
      const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/HEAD/README.md`;
      console.log(`Fetching ${rawUrl}`);
      const res = await fetch(rawUrl);
      if (!res.ok) {
        console.warn(`Failed to fetch ${rawUrl}: ${res.status}`);
        continue;
      }
      const md = await res.text();
      // Normalize and split into paragraph blocks
      const blocks = md.split(/\r?\n\r?\n/).map((p) => p.trim());
      // Helper to detect heading or badge/frontmatter-like lines
      const isHeadingOrBadge = (s) => {
        if (!s) return true;
        const firstLine = s.split(/\r?\n/)[0].trim();
        if (/^---$/.test(firstLine)) return true; // frontmatter separator
        if (/^#+\s+/.test(firstLine)) return true; // markdown heading
        if (/^!\[.*\]\(.*\)/.test(firstLine)) return true; // image badge
        if (/^\[!\[.*\]\(.*\)\]\(.*\)/.test(firstLine)) return true; // linked badge
        if (/^\[badge\]/i.test(firstLine)) return true;
        return false;
      };

      // Find first block that's not just heading/badge and has some length
      let chosen = "";
      for (const b of blocks) {
        const trimmed = b.replace(/\r?\n/g, " ").trim();
        if (!trimmed) continue;
        if (isHeadingOrBadge(b)) continue;
        // skip short lines like license badges or one-word headings
        if (trimmed.length < 40) continue;
        chosen = trimmed;
        break;
      }

      // Fallback: if none matched, try the first non-empty block (even if heading)
      if (!chosen) {
        const fallback = blocks.find((b) => b && b.replace(/\r?\n/g, " ").trim().length > 0);
        chosen = fallback ? fallback.replace(/\r?\n/g, " ").trim() : "";
      }
      descs[it.id] = chosen;
    } catch (e) {
      console.warn(`Error fetching README for ${it.id}:`, e.message || e);
    }
  }

  await fs.writeFile(outFile, JSON.stringify(descs, null, 2), "utf8");
  console.log("Wrote", outFile);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
