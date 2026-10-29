const L = require('./lib');
const { p, pm, bullet, bulletm, TextRun, Paragraph, AlignmentType, TabStopType, BorderStyle } = L;
const WEB = process.env.CV_WEB === '1';           // 1 = public version for the website
const sec = (t) => new Paragraph({ spacing: { before: 170, after: 40 }, keepNext: true, border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: '1F3864', space: 1 } }, children: [new TextRun({ text: t.toUpperCase(), font: 'Calibri', bold: true, size: 21, color: '1F3864' })] });
const role = (title, org, dates) => new Paragraph({ spacing: { before: 90, after: 10 }, keepNext: true, tabStops: [{ type: TabStopType.RIGHT, position: 9700 }], children: [ new TextRun({ text: title, font: 'Calibri', bold: true, size: 21 }), new TextRun({ text: ' — ' + org, font: 'Calibri', size: 21 }), new TextRun({ text: '\t' + dates, font: 'Calibri', size: 19, italics: true, color: '404040' }) ] });
const ctx = (t) => p(t, { size: 19, italic: true, after: 30, color: '404040' });
const b = (t) => bullet(t, 0, { size: 20, after: 30 });
const c = [];

c.push(new Paragraph({ spacing: { after: 30 }, children: [new TextRun({ text: 'SAAD IBN MANSUR', font: 'Calibri', bold: true, size: 36, color: '1F3864' })] }));
c.push(p('Dhaka (Mirpur-11)  |  Permanent: Elenga, Kalihati, Tangail  |  +880 1864-964308  |  ibn.saad.mansur@gmail.com', { size: 19, after: 20 }));
c.push(p('Portfolio: amlanwtk.github.io/saad  |  Bangladeshi national  |  Available from November 2026  |  Open to relocation', { size: 19, after: 40 }));

c.push(sec('Profile'));
c.push(p('Programme-support professional with an accounting degree and two years of NGO project and finance experience in Tangail. Coordinated a BDT 275,000 livelihood project for 20 women and a flood-relief campaign that raised BDT 475,000 for 200 families; kept the accounts and prepared the statutory audit of a 9,250-member cooperative. BSAFE-certified by the UN Department of Safety and Security and trained as a PSEA facilitator by UNICEF. Seeking programme, community-engagement or MEAL support roles with development and humanitarian organisations.', { size: 20, after: 40 }));

c.push(sec('Core Competencies'));
c.push(pm([{ t: 'Programme delivery: ', b: true }, 'beneficiary identification and selection, procurement and distribution, volunteer management (up to 35), stakeholder liaison with Union Parishad, the UNO office, police, schools and local businesses.'], { size: 20, after: 30 }));
c.push(pm([{ t: 'MEAL and safeguarding: ', b: true }, 'beneficiary verification, post-distribution follow-up, safeguarding and PSEA practice in work with women and children.'], { size: 20, after: 30 }));
c.push(pm([{ t: 'Finance and administration: ', b: true }, 'ledgers, petty cash, expense vouchers, monthly bank reconciliation and financial statements, statutory audit preparation, budget tracking.'], { size: 20, after: 30 }));
c.push(pm([{ t: 'Communication: ', b: true }, 'fluent written and spoken English and Bangla; reports and project documentation; news gathering and source verification.'], { size: 20, after: 30 }));

c.push(sec('Professional & Project Experience'));
c.push(role('Assistant Accountant (full-time)', 'BDUS, Elenga, Tangail', 'Sep 2025 – Sep 2026'));
c.push(ctx('Bahumukhi Desh Unnayan Sangsad: multipurpose cooperative registered with the Department of Cooperatives; 9,250+ members, 15 staff; savings, credit and community-development programmes.'));
c.push(b('Maintained ledgers, petty cash and monthly expense vouchers; reconciled bank statements and prepared monthly financial statements for the management committee.'));
c.push(b('Prepared the full record set — cash books, vouchers, ledgers, member records and resolutions — for the annual statutory audit by the Department of Cooperatives.'));
c.push(b('Kept savings and loan records for a member portfolio with an approximately 85% loan-recovery rate.'));
c.push(b('Helped identify women eligible for income-generating support and followed up beneficiaries on outcomes.'));

c.push(role('Project Coordinator', 'Women’s Livelihood Project, BDUS (Bangladesh NGO Foundation)', 'Oct 2024 – Sep 2025'));
c.push(b('Coordinated a 7-member team delivering sewing machines and livelihood support to 20 low-income women in five communities of Kalihati; budget approx. BDT 275,000.'));
c.push(b('Led beneficiary identification and selection with community stakeholders, organised distribution and verified that support reached the intended women.'));

c.push(role('Main Coordinator (voluntary)', 'Community flood-relief campaign for the Cumilla floods', '22 Aug – 13 Sep 2024'));
c.push(b('Coordinated 30–35 volunteers and raised approx. BDT 475,000 plus in-kind donations in three weeks.'));
c.push(b('Procured and distributed food, drinking water, clothing, medicines, oral saline and sanitary napkins to approx. 200 flood-affected families.'));

c.push(role('Founding Team Member, news gathering', 'Khobor Jog online news portal, Tangail', 'Aug 2024 – Feb 2025'));
c.push(b('Gathered news and verified sources before publication for a portal with 100,000+ followers; earlier, contributor to The Daily Observer (2023).'));

c.push(sec('Community Leadership (voluntary)'));
c.push(role('Founding President', 'BYSO — Tangail District Branch', 'Jun 2018 – Feb 2020'));
c.push(ctx('Bangladesh Youngster Social Organization: national, non-political organisation for the welfare and empowerment of women and children (est. 2013; approx. 23 branches).'));
c.push(b('Led a 23-member executive committee and 200 volunteers on approx. BDT 350,000 a year raised from member subscriptions and local donors.'));
c.push(b('Delivered three merit-scholarship programmes for schoolchildren, two clothing distributions, two tree-planting campaigns and flood relief for approx. 350 people in Tangail and Sirajganj; record certified by the organisation’s Founder.'));
c.push(b('Started livelihood support with 10 sewing machines and built partnerships with Salla Union Parishad, the local police station and Elenga High School; the branch received honorary recognition from Tangail District Administration.'));

c.push(role('President', 'Rajabari Honours Association, Kalihati', '2026 – present'));
c.push(b('Led Rajabari Book Fair 2026 with 20 educational institutions and approx. 1,000 visitors, supported by the local MP, the Upazila Nirbahi Officer and the Upazila Education Officer.'));
c.push(pm([{ t: 'Also: ', b: true }, 'emergency blood-request coordinator and regular donor, Kalihati Blood Foundation (2022 – present); Publicity Secretary and Librarian, Majumdar Pathagar community library (2022–23); columnist, Elenga Sahitya Sangsad quarterly (since 2022).'], { size: 20, before: 60, after: 30 }));

c.push(sec('Education'));
c.push(role('Bachelor’s (Honours) in Accounting — CGPA 3.06 / 4.00', 'Govt. M. M. Ali College, Tangail (NU)', '2025'));
c.push(role('HSC (Science) — GPA 3.83 / 5.00', 'Notre Dame College, Mymensingh', '2019'));
c.push(role('SSC (Science) — GPA 5.00 / 5.00', 'Elenga High School, Tangail', '2017'));

c.push(sec('Humanitarian Sector Training'));
const cert = (t, issuer, date) => new Paragraph({ spacing: { before: 0, after: 30 }, tabStops: [{ type: TabStopType.RIGHT, position: 9700 }], children: [ new TextRun({ text: t, font: 'Calibri', bold: true, size: 20 }), new TextRun({ text: ' — ' + issuer, font: 'Calibri', size: 20 }), new TextRun({ text: '\t' + date, font: 'Calibri', size: 19, italics: true, color: '404040' }) ] });
c.push(cert('BSAFE (UN security; prerequisite for UN field deployment)', 'UN Department of Safety and Security', 'Sep 2026'));
c.push(cert('PSEA Facilitator: Protection from Sexual Exploitation and Abuse', 'UNICEF (Agora)', 'Sep 2026'));
c.push(cert('Safeguarding Essentials', 'Kaya, Humanitarian Leadership Academy', 'Sep 2026'));
c.push(cert('MEAL Essentials', 'DisasterReady, Cornerstone OnDemand Foundation', 'Sep 2026'));
c.push(cert('Project Management Essentials', 'DisasterReady, Cornerstone OnDemand Foundation', 'Sep 2026'));
c.push(cert('Core Humanitarian Essentials', 'DisasterReady, Cornerstone OnDemand Foundation', 'Sep 2026'));

c.push(sec('Languages & Digital Skills'));
c.push(pm([{ t: 'Languages: ', b: true }, 'Bangla (mother tongue), English (fluent).  ', { t: 'Software: ', b: true }, 'MS Excel (formulas, tables, charts; basic PivotTables and lookups), Word, PowerPoint, Google Sheets and Forms; Tally and QuickBooks (basic).'], { size: 20, after: 30 }));

c.push(sec('References'));
const ref = (name, title, phone) => { c.push(pm([{ t: name, b: true }, ' — ' + title], { size: 20, after: 0, keepNext: true })); return p('Phone: ' + phone, { size: 19, after: 60, color: '404040' }); };
if (WEB) c.push(p('Available on request.', { size: 19 }));
else {
  // referee names and phone numbers stay out of the public repo: referees.json is git-ignored
  const fs = require('fs'), rf = require('path').join(__dirname, 'referees.json');
  if (fs.existsSync(rf)) JSON.parse(fs.readFileSync(rf, 'utf8')).forEach((r) => c.push(ref(r.name, r.title, r.phone)));
  else c.push(p('Available on request [TO ADD: referees.json missing].', { size: 19 }));
}

const out = process.env.CV_OUT || (WEB ? 'Saad_Ibn_Mansur_CV_web.docx' : 'Saad_Ibn_Mansur_CV.docx');
const d = L.doc([c], { title: 'Saad Ibn Mansur — CV', footer: 'Saad Ibn Mansur — Curriculum Vitae', marginTop: 800, marginSide: 950 });
L.save(d, out);
