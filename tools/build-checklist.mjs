// Regenerates EVIDENCE-CHECKLIST.md from assets/js/data.js plus tools/checklist-notes.md.
// Run from the site root:  node tools/build-checklist.mjs
import fs from 'node:fs';

global.window = {};
// eslint-disable-next-line no-eval
eval(fs.readFileSync('assets/js/data.js', 'utf8'));
const S = window.SITE;

const have = S.gallery.filter(g => fs.existsSync(g.src));
const miss = S.gallery.filter(g => !fs.existsSync(g.src));
const docs = S.documentGroups.flatMap(g => g.items.map(i => ({ group: g.group, ...i })));
const today = new Date().toISOString().slice(0, 10);
const L = [];

L.push('# Evidence checklist — what is still needed', '');
L.push(`_Generated ${today} from the live site data._`, '');
L.push(`**${have.length} of ${S.gallery.length} archive records now have their image or scan.** ${miss.length} are still empty slots.`, '');
L.push(`**${docs.filter(d => d.scan).length} of ${docs.length} verification cards** on the site point at a real scan.`, '');

L.push('## Already received and published', '');
for (const g of have) {
  L.push(`- [x] **${g.title}** — ${g.rel} · ${g.date}  `);
  L.push(`      \`${g.src.split('/').pop()}\``);
}
L.push('', '## Still to collect, by category', '');
for (const cat of S.galleryCategories) {
  const rows = miss.filter(m => m.cat === cat.key);
  if (!rows.length) continue;
  L.push(`### ${cat.label} — ${rows.length} outstanding`, '');
  for (const r of rows) {
    L.push(`- [ ] **${r.title}** — ${r.rel} · ${r.date}  `);
    L.push(`      save as \`${r.src.split('/').pop()}\``);
  }
  L.push('');
}
L.push('## Documents named on the site but not yet scanned', '');
for (const d of docs.filter(x => !x.scan)) {
  L.push(`- [ ] **${d.label}** — ${d.issuer} _(${d.group}; currently marked "${d.status}")_`);
}
L.push('');

fs.writeFileSync('EVIDENCE-CHECKLIST.md', L.join('\n') + '\n' + fs.readFileSync('tools/checklist-notes.md', 'utf8'));
console.log(`wrote EVIDENCE-CHECKLIST.md — ${have.length}/${S.gallery.length} images, ${docs.filter(d => d.scan).length}/${docs.length} documents`);
