#!/usr/bin/env node
/* Scans assets/img/gallery/ and prints data.js entries for any file that is
   not already listed in assets/js/data.js.  Usage:  node tools/build-gallery.mjs  */
import { readdirSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const CATS = {
  relief: "relief", community: "community", women: "women", child: "child",
  leadership: "leadership", media: "media", cultural: "cultural",
  awards: "awards", certificates: "certificates", documents: "documents"
};
const DOCLIKE = new Set(["awards", "certificates", "documents"]);

const data = readFileSync(join(root, "assets/js/data.js"), "utf8");
let files;
try {
  files = readdirSync(join(root, "assets/img/gallery"))
    .filter(f => /\.(jpe?g|png|webp)$/i.test(f)).sort();
} catch { console.error("No assets/img/gallery folder yet."); process.exit(1); }

const missing = files.filter(f => !data.includes(`gallery/${f}`));
if (!missing.length) {
  console.log(`All ${files.length} image(s) in assets/img/gallery are already listed in data.js.`);
  process.exit(0);
}
console.log(`// ${missing.length} new image(s) — paste into the gallery array in assets/js/data.js\n`);
for (const f of missing) {
  const slug = f.split("-")[0].toLowerCase();
  const cat = CATS[slug] || "community";
  if (!CATS[slug]) console.log(`// NOTE: "${f}" has no recognised category prefix — defaulted to "community".`);
  const isDoc = DOCLIKE.has(cat) ? ' type:"doc",' : "";
  console.log(`    { src:"assets/img/gallery/${f}", cat:"${cat}", date:"TODO", rel:"TODO",${isDoc}`);
  console.log(`      title:"TODO", desc:"TODO" },`);
}
console.log(`\n// Remember: no photographs that identify aid recipients.`);
