// A single fixed voicemail line, recorded by Fig the cat and written out verbatim.
import { mkdirSync, writeFileSync } from "node:fs";
const greeting =
  "You've reached Fig. Your call woke me from my eighteenth nap. Leave a message after the beep — I'll judge it.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the file holds exactly the greeting, nothing else.
writeFileSync(`${outDir}/entry.txt`, greeting);
