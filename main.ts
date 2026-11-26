import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

// The one line I would send to my younger self.
const line =
  "The thing you're most afraid to admit is the thing that will finally set you free — say it out loud.";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

function validateLine(value: string): void {
  if (value.trim().length === 0) {
    fail("line must not be blank");
  }
  if (value.includes("\n") || value.includes("\r")) {
    fail("line must be exactly one line");
  }
  if (value.length < 1 || value.length > 200) {
    fail(`line must be 1-200 chars, got ${value.length}`);
  }
  for (const ch of value) {
    if (ch.charCodeAt(0) < 0x20 || ch.charCodeAt(0) === 0x7f) {
      fail("line must not contain control characters");
    }
  }
}

const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
mkdirSync(outputDir, { recursive: true });

validateLine(line);

const target = join(outputDir, "entry.txt");
writeFileSync(target, line, "utf8");

// Read back and verify the file byte-equals what was written.
const readBack = readFileSync(target, "utf8");
if (readBack !== line) {
  fail("read-back mismatch: entry.txt does not byte-equal the line");
}

console.log(`wrote ${target} (${line.length} chars)`);
