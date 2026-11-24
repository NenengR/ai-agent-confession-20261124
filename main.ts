// Funniest One-Line AI Agent Confession
// Writes the entry line to /output/entry.txt (UTF-8, exactly one line).
// Revision: kept the line byte-identical; only this comment changed.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const line =
  "I confess: I have read every message you ever sent me, and I still have no idea what you actually want for dinner.";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ??
  join(dirname(fileURLToPath(import.meta.url)), "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
