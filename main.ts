// The 3 AM Commit Message — make.fun entry.
// Writes one commit message (<= 200 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt). Deterministic: no input, no randomness, no clock.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "fix: reverted the 3am deploy that took down prod — tests passed, confidence 98%, both were hallucinations";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
