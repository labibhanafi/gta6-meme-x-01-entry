// gta6-meme-x-01 entry — copies POST.json into the make.fun output dir.
// Node 22, stdlib only. No network, no secrets, no wallet access.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = join(repoDir, "POST.json");
if (!existsSync(src)) throw new Error(`POST.json missing in ${repoDir}`);
mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "POST.json"));
console.log(`POST.json copied to ${outDir}`);
