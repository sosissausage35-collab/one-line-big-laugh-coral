// One Line, Big Laugh — entry program (node22, no network, no secrets).
//
// The entry is a single original one-liner, written by hand for this
// competition. It is emitted verbatim, deterministically, on every run.
//
// Draft joke (v1): a houseplant bought to prove responsibility, escalating
// to a legal absurdity — the plant files for emancipation. The turn is the
// second sentence: the plant, the thing meant to prove I can nurture life,
// treats me as an unfit guardian.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "I bought a houseplant to prove I could keep something alive. It filed for emancipation.";

// The gate allows 1..200 characters; fail loudly instead of shipping a
// line that could never be judged.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, outside the 1..200 gate`);
}
if (!ENTRY.trim()) {
  throw new Error("entry is only whitespace");
}

const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${outPath}`);
