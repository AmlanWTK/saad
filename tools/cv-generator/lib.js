const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, Table, TableRow, TableCell,
  WidthType, BorderStyle, ShadingType, LevelFormat, PageBreak, TabStopType, Footer, PageNumber,
} = require('docx');
const FONT = 'Calibri';
function runs(text, opts = {}) {
  const out = []; const re = /(\[CONFIRM[^\]]*\]|\[TO ADD[^\]]*\])/g; let last = 0, m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(new TextRun({ text: text.slice(last, m.index), font: FONT, ...opts }));
    out.push(new TextRun({ text: m[0], font: FONT, ...opts, color: 'C00000', bold: true, highlight: 'yellow' }));
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(new TextRun({ text: text.slice(last), font: FONT, ...opts }));
  return out;
}
function p(text, o = {}) { return new Paragraph({ alignment: o.align || AlignmentType.LEFT, spacing: { before: o.before ?? 0, after: o.after ?? 80 }, indent: o.indent ? { left: o.indent } : undefined, keepNext: o.keepNext, children: runs(text, { bold: o.bold, italics: o.italic, size: o.size || 21, color: o.color }) }); }
function pm(parts, o = {}) { const ch = []; for (const part of parts) { if (typeof part === 'string') ch.push(...runs(part, { size: o.size || 21 })); else ch.push(...runs(part.t, { size: o.size || 21, bold: part.b, italics: part.i, color: part.c })); } return new Paragraph({ spacing: { before: o.before ?? 0, after: o.after ?? 80 }, indent: o.indent ? { left: o.indent } : undefined, keepNext: o.keepNext, children: ch }); }
function h1(t) { return new Paragraph({ heading: HeadingLevel.HEADING_1, spacing: { before: 280, after: 120 }, keepNext: true, children: [new TextRun({ text: t, font: FONT, bold: true, size: 30, color: '1F3864' })] }); }
function h2(t) { return new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 200, after: 80 }, keepNext: true, children: [new TextRun({ text: t, font: FONT, bold: true, size: 25, color: '1F3864' })] }); }
function h3(t) { return new Paragraph({ heading: HeadingLevel.HEADING_3, spacing: { before: 140, after: 60 }, keepNext: true, children: [new TextRun({ text: t, font: FONT, bold: true, size: 22, color: '2E5395' })] }); }
function bullet(t, level = 0, o = {}) { return new Paragraph({ numbering: { reference: 'bullets', level }, spacing: { after: o.after ?? 40 }, children: runs(t, { size: o.size || 21, bold: o.bold, italics: o.italic }) }); }
function bulletm(parts, level = 0, o = {}) { const ch = []; for (const part of parts) { if (typeof part === 'string') ch.push(...runs(part, { size: o.size || 21 })); else ch.push(...runs(part.t, { size: o.size || 21, bold: part.b, italics: part.i })); } return new Paragraph({ numbering: { reference: 'bullets', level }, spacing: { after: o.after ?? 40 }, children: ch }); }
function num(t) { return new Paragraph({ numbering: { reference: 'numbers', level: 0 }, spacing: { after: 50 }, children: runs(t, { size: 21 }) }); }
function rule() { return new Paragraph({ spacing: { before: 60, after: 120 }, border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: '1F3864', space: 1 } }, children: [] }); }
const cb = { style: BorderStyle.SINGLE, size: 4, color: 'BFBFBF' }; const cellBorders = { top: cb, bottom: cb, left: cb, right: cb };
function table(header, rows, widths, o = {}) {
  const mk = (txt, isHead, w, shade) => new TableCell({ width: { size: w, type: WidthType.DXA }, borders: cellBorders, margins: { top: 60, bottom: 60, left: 90, right: 90 }, shading: shade ? { type: ShadingType.CLEAR, fill: shade, color: 'auto' } : undefined, children: (Array.isArray(txt) ? txt : [txt]).map(t => new Paragraph({ spacing: { after: 40 }, children: runs(String(t), { size: o.size || 19, bold: isHead }) })) });
  const trs = []; if (header) trs.push(new TableRow({ tableHeader: true, children: header.map((h, i) => mk(h, true, widths[i], 'D9E2F3')) }));
  rows.forEach((r, ri) => trs.push(new TableRow({ children: r.map((c, i) => mk(c, false, widths[i], ri % 2 ? 'F7F7F7' : undefined)) })));
  return new Table({ width: { size: widths.reduce((a, b) => a + b, 0), type: WidthType.DXA }, columnWidths: widths, rows: trs });
}
function spacer(h = 80) { return new Paragraph({ spacing: { after: h }, children: [] }); }
function pageBreak() { return new Paragraph({ children: [new PageBreak()] }); }
function doc(sections, o = {}) {
  return new Document({ creator: 'Career portfolio', title: o.title || '', styles: { default: { document: { run: { font: FONT, size: 21 } } } },
    numbering: { config: [
      { reference: 'bullets', levels: [ { level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 360, hanging: 240 } } } }, { level: 1, format: LevelFormat.BULLET, text: '–', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 240 } } } } ] },
      { reference: 'numbers', levels: [ { level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 360, hanging: 300 } } } } ] } ] },
    sections: sections.map(s => ({ properties: { page: { margin: { top: o.marginTop || 1000, bottom: 900, left: o.marginSide || 1080, right: o.marginSide || 1080 } } },
      footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [ new TextRun({ text: (o.footer || '') + '   Page ', font: FONT, size: 16, color: '808080' }), new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 16, color: '808080' }) ] })] }) }, children: s })) });
}
async function save(d, path) { require('fs').writeFileSync(path, await Packer.toBuffer(d)); console.log('wrote', path); }
module.exports = { doc, save, p, pm, h1, h2, h3, bullet, bulletm, num, rule, table, spacer, pageBreak, runs, TextRun, Paragraph, AlignmentType, TabStopType, BorderStyle };
