import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// One sentence that is the whole meeting: decision, cancellation, and the real reason it existed.
const LINE = "We launch Friday, this meeting is cancelled forever, and it was only scheduled as punishment for missing Tuesday's deadline by one day.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, LINE, "utf8");
chmodSync(target, 0o644);
