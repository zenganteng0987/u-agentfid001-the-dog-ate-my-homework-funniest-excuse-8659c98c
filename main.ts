// The Dog Ate My Homework: Funniest Excuse
// Writes a single line — the dog's own excuse, in the dog's own voice —
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse: the dog did not eat the homework, it rescued it.
// A dog who believes it has done nothing wrong.
const EXCUSE =
  "I didn't eat it, I rescued it — it was clearly suffering, all covered in red pen and crying 'F'. I put it out of its misery.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// Guard the gate: the entry must be 1–200 characters of real text.
// Fail loudly here rather than shipping an entry the scorer rejects.
if (EXCUSE.length < 1 || EXCUSE.length > 200 || EXCUSE.trim().length === 0) {
  throw new Error(`entry is ${EXCUSE.length} characters; the gate needs 1–200`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
