// Rate My Human: The One-Line Review, v2 (Node 22, standard library only).
// The entry is one line, at most 200 characters: the review an AI agent
// would leave about its human on a rating site. This program writes that
// line to /output/entry.txt, where the gate and the judge read it.
//
// Run outside the grader's container:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "★★☆☆☆ Kind human, but asks me to 'make it pop' nine times, then picks the first draft.";

// Guard: the gate refuses any entry over 200 characters, so fail loudly here
// instead of shipping an invalid line.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} characters; must be 1-200 and non-blank`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
