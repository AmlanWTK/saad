const L = require('./lib');
const { p, pm, bullet, bulletm, TextRun, Paragraph, AlignmentType, TabStopType, BorderStyle } = L;
const WEB = process.env.CV_WEB === '1';           // 1 = public version for the website
const sec = (t) => new Paragraph({ spacing: { before: 170, after: 40 }, keepNext: true, border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: '1F3864', space: 1 } }, children: [new TextRun({ text: t.toUpperCase(), font: 'Calibri', bold: true, size: 21, color: '1F3864' })] });
const role = (title, org, dates) => new Paragraph({ spacing: { before: 90, after: 10 }, keepNext: true, tabStops: [{ type: TabStopType.RIGHT, position: 9700 }], children: [ new TextRun({ text: title, font: 'Calibri', bold: true, size: 21 }), new TextRun({ text: ' — ' + org, font: 'Calibri', size: 21 }), new TextRun({ text: '\t' + dates, font: 'Calibri', size: 19, italics: true, color: '404040' }) ] });
const ctx = (t) => p(t, { size: 19, italic: true, after: 30, color: '404040' });
const b = (t) => bullet(t, 0, { size: 20, after: 30 });
const c = [];

c.push(new Paragraph({ spacing: { after: 30 }, children: [new TextRun({ text: 'SAAD IBN MANSUR', font: 'Calibri', bold: true, size: 36, color: '1F3864' })] }));
c.push(p('Dhaka, Bangladesh (Mirpur-11)  |  Permanent: Elenga, Kalihati, Tangail  |  +880 1864-964308  |  ibn.saad.mansur@gmail.com' + (WEB ? '' : '  |  LinkedIn: [TO ADD]'), { size: 19, after: 20 }));
c.push(p('Bangladeshi national  |  Available from November 2026  |  Willing to relocate anywhere in Bangladesh', { size: 19, after: 40 }));

c.push(sec('Profile'));
c.push(p('Community-development and programme-support professional with an accounting degree, two years of project and finance experience (2024–2026) and eight years of voluntary community leadership in Tangail. Coordinated a BDT 275,000 women’s livelihood project for 20 beneficiaries (Bangladesh NGO Foundation-supported) and a three-week community flood-relief campaign that raised BDT 475,000 and reached 200 families; one year as Assistant Accountant of a 9,250-member multipurpose cooperative, including statutory-audit preparation. ' + (WEB ? 'President' : 'Founding President') + ' of a youth social-organisation branch with 200 volunteers for twenty months. BSAFE-certified by the UN Department of Safety and Security and trained as a PSEA facilitator by UNICEF; further certified in Safeguarding, MEAL, Project Management and Core Humanitarian Essentials by the Humanitarian Leadership Academy and DisasterReady. Fluent in English and Bangla; published columnist and former news contributor. Seeking programme, community-engagement or project-support roles with development and humanitarian organisations.', { size: 20, after: 40 }));

c.push(sec('Core Competencies'));
c.push(pm([{ t: 'Programme & project support: ', b: true }, 'project cycle management, beneficiary identification and selection, relief procurement and distribution, volunteer management (up to 35), stakeholder liaison (Union Parishad, UNO office, police, schools, businesses), beneficiary follow-up and monitoring, event management (1,000-visitor book fair).'], { size: 20, after: 30 }));
c.push(pm([{ t: 'Monitoring & accountability: ', b: true }, 'MEAL Essentials certified; beneficiary verification and post-distribution follow-up; safeguarding and protection of programme participants (Safeguarding Essentials, Humanitarian Leadership Academy; PSEA Facilitator, UNICEF).'], { size: 20, after: 30 }));
c.push(pm([{ t: 'Finance & administration: ', b: true }, 'financial ledgers, petty cash, expense vouchers, monthly bank reconciliation, monthly financial statements, statutory audit preparation (Department of Cooperatives), budget tracking; Tally and QuickBooks (basic); MS Excel.'], { size: 20, after: 30 }));
c.push(pm([{ t: 'Communication & documentation: ', b: true }, 'fluent written English; news gathering and fact verification; report, letter and project documentation; quarterly columnist; public speaking at community events.'], { size: 20, after: 30 }));
c.push(pm([{ t: 'Values in practice: ', b: true }, 'non-partisan use of community resources; women’s and children’s welfare focus; voluntary blood donor and emergency-request coordinator.'], { size: 20, after: 30 }));

c.push(sec('Professional & Project Experience'));
c.push(role('Assistant Accountant (full-time)', 'Bahumukhi Desh Unnayan Sangsad (BDUS), Elenga, Tangail', 'Sep 2025 – Sep 2026'));
c.push(ctx('Multipurpose cooperative society registered with the Department of Cooperatives (Reg. No. 00481, Kalihati Upazila); 9,250+ members, 15 staff; savings, credit and community-development programmes.'));
c.push(b('Maintained financial ledgers, petty cash and monthly expense vouchers (MS Excel/Word); reconciled bank statements monthly.'));
c.push(b('Prepared monthly financial statements for the management committee.'));
c.push(b('Prepared and organised cash books, vouchers, receipts, bank statements, ledgers, member records and meeting resolutions for the annual statutory audit by the Department of Cooperatives.'));
c.push(b('Supported savings and loan record-keeping for a member portfolio with approximately 85% loan-recovery rate.'));
c.push(b('Advocated a shift from one-off assistance to sustainable livelihood support: helped identify women eligible for income-generating support and followed up beneficiaries on outcomes.'));

c.push(role('Project Coordinator', 'Women’s Sewing Machine Livelihood Project, BDUS (Bangladesh NGO Foundation-supported)', 'Oct 2024 – Sep 2025'));
c.push(b('Coordinated a 7-member team delivering sewing machines and livelihood support to 20 low-income women across five communities (Elenga, Sahajan, Deotola, Pathalia, Salla) in Kalihati; project budget approx. BDT 275,000.'));
c.push(b('Led beneficiary identification and selection with community stakeholders; organised distribution; verified that support reached intended beneficiaries; mobilised BYSO volunteers for community-level implementation.'));

c.push(role('Main Coordinator (voluntary)', 'Community Relief Collection Campaign (Gono Tran Songroho Kormosuchi), Cumilla floods', '22 Aug – 13 Sep 2024'));
c.push(b('Coordinated 30–35 volunteers; raised approx. BDT 475,000 plus in-kind donations from students, residents and local businesses in three weeks.'));
c.push(b('Managed procurement and distribution of dry food, drinking water, clothing, medicines, oral saline and sanitary napkins to approx. 200 flood-affected families.'));

c.push(role('Founding Team Member — news gathering and verification', 'Khobor Jog, online news portal (est. 2024; Facebook page 100,000+ followers), Tangail', '31 Aug 2024 – Feb 2025'));
c.push(b('One of an initial five-member team led by Abdur Razzaq, Tangail District Correspondent of Ekattor TV.'));
c.push(b('Collected news and information, verified accuracy and credibility of sources before publication, prepared news content and supported dissemination through the portal and social media — practical experience in information verification, responsible communication and digital media.'));

c.push(role('Contributor', 'The Daily Observer', '2023 (approx. 6 months)'));
c.push(b('Contributed to news and reporting; practical experience in information gathering and public-interest writing.'));
c.push(role('Intern (unpaid)', 'Saifur’s English', 'Jul – Dec 2023'));
c.push(b('Supported day-to-day academic and administrative operations in a professional education environment.'));

c.push(sec('Community Leadership (voluntary)'));
c.push(role(WEB ? 'President' : 'Founding President [CONFIRM: the BYSO certification letter records “President”, not “Founding President”]', 'Bangladesh Youngster Social Organization (BYSO) — Tangail District Branch', 'Jun 2018 – Feb 2020'));
c.push(ctx('BYSO: national, non-political, self-funded social organisation (est. 2013, Cumilla; approx. 23 branches) focused on the welfare and empowerment of women and children.'));
c.push(b('Certified by the organisation’s Founder (15 July 2026): three merit-scholarship programmes, two tree-planting campaigns, two clothing distributions and one cleanliness drive delivered during the term.'));
c.push(b('Led a 23-member executive committee, approx. 50 members and 200 volunteers; managed approx. BDT 350,000 per year from member subscriptions (BDT 300/month) and local donors.'));
c.push(b('2019 — flood relief in Tangail and Sirajganj (approx. 350 people); 2020 — 10 sewing machines as livelihood support and a sports programme for people affected by drug addiction.'));
c.push(b('Built partnerships with Salla Union Parishad, Jamuna Setu Pashchim Police Station, Elenga High School, BDUS and Alif Steel Mill; the branch received honorary recognition from Tangail District Administration.'));

c.push(role('President', 'Rajabari Honours Association (26-member community association), Kalihati', '2026 – present'));
c.push(b('Led Rajabari Book Fair 2026: 20 participating educational institutions, approx. 1,000 visitors; supported by the local Member of Parliament, the Upazila Nirbahi Officer and the Upazila Education Officer. Organised a Ramadan reunion for members living away from home. Co-organised, with a local sporting club, the Rajabari Premier Football Tournament 2026 (Season 7) — a community youth football tournament run under the anti-drug message “leave drugs, come and play” and supported by residents across the Rajabari area.'));

c.push(role('Active Member', 'Kalihati Blood Foundation (WhatsApp donor network, 500+ members)', '2022 – present'));
c.push(b('Coordinate emergency blood requests, matching donors with patients; regular O+ donor.'));

c.push(role('Publicity Secretary and Librarian', 'Majumdar Pathagar (community library), Elenga' + (WEB ? '' : ' [CONFIRM]'), 'Jan 2022 – early 2023'));
c.push(b('Managed the collection and lending, expanded holdings through donations and promoted reading among young people at grassroots level.'));

c.push(role('Founder', 'Kolorob Music Centre, Elenga (folk music and culture for young people)', 'Mar 2021 – present'));

c.push(sec('Writing & Media'));
c.push(b('Columnist and poet, Elenga Sahitya Sangsad quarterly literary magazine (society established 2004) — one column and one poem per issue since Aug 2022; Coordinator of the Sangsad.'));
c.push(b('Former contributor, The Daily Observer (2023); founding team member, Khobor Jog (2024–25); musician (ukulele), Bangladesh Udichi Shilpi Goshthi, Tangail.'));

c.push(sec('Education'));
c.push(role('Bachelor’s (Honours) in Accounting — CGPA 3.06 / 4.00' + (WEB ? '' : ' [CONFIRM from the final transcript; the 4th-year result sheet alone shows 2.55]'), 'Government M. M. Ali College, Tangail (National University of Bangladesh)', '4th Year Exam 2023; results published Nov 2025'));
c.push(role('Higher Secondary Certificate (Science) — GPA 3.83 / 5.00', 'Notre Dame College, Mymensingh', '2019'));
c.push(role('Secondary School Certificate (Science) — GPA 5.00 / 5.00', 'Elenga High School, Tangail', '2017'));
c.push(role('Bangladesh Scouts — active member', 'Elenga High School Scout Group, Kalihati Upazila', 'Classes VI – X'));

c.push(sec('Humanitarian Sector Training'));
c.push(b('BSAFE — United Nations Department of Safety and Security (23 September 2026; confirmation no. on certificate; does not expire). Prerequisite for UN field deployment.'));
c.push(b('PSEA Facilitator: Protection from Sexual Exploitation and Abuse — Classroom/Virtual Interactive Training — UNICEF, via the Agora platform (30 September 2026; QR-verifiable).'));
c.push(b('Safeguarding Essentials — Kaya, Humanitarian Leadership Academy (20 September 2026; QR-verifiable).'));
c.push(b('MEAL Essentials (Monitoring, Evaluation, Accountability and Learning) — DisasterReady, Cornerstone OnDemand Foundation (21 September 2026).'));
c.push(b('Project Management Essentials — DisasterReady, Cornerstone OnDemand Foundation (23 September 2026).'));
c.push(b('Core Humanitarian Essentials — DisasterReady, Cornerstone OnDemand Foundation (27 September 2026; 6 hours 30 minutes).'));

c.push(sec('Languages & Digital Skills'));
c.push(bulletm([{ t: 'Languages: ', b: true }, 'Bangla — mother tongue; English — fluent (reading, writing, speaking).'], 0, { size: 20, after: 30 }));
c.push(bulletm([{ t: 'Software: ', b: true }, 'MS Excel (formulas, sorting/filtering, tables, charts; basic PivotTables and lookups), Word, PowerPoint; Google Sheets and Forms; Tally and QuickBooks (basic).'], 0, { size: 20, after: 30 }));

c.push(sec('References'));
c.push(p(WEB ? 'Available on request.' : 'Available on request (three referees: BDUS Executive Director; academic referee; community-organisation referee) [TO ADD names and contacts].', { size: 19 }));

const out = process.env.CV_OUT || (WEB ? 'Saad_Ibn_Mansur_CV_web.docx' : 'Saad_Ibn_Mansur_CV.docx');
const d = L.doc([c], { title: 'Saad Ibn Mansur — CV', footer: 'Saad Ibn Mansur — Curriculum Vitae', marginTop: 800, marginSide: 950 });
L.save(d, out);
