/* ============================================================================
   CONTENT FILE — everything on the site comes from here.
   Add a project, photograph or document by editing this file only.

   THIS SITE IS PUBLIC once pushed to GitHub. Never add:
     - NID, birth certificate, passport, or any full-resolution signature
     - Certificates showing registration or roll numbers (crop or blur them)
     - Referee phone numbers or email addresses
     - Names, faces, addresses or lists of programme beneficiaries.
       Publishing identifiable aid recipients without written consent is a
       safeguarding failure and INGO recruiters treat it as one. Use wide
       shots of the activity, not close-ups of the people receiving help.
   Sensitive items stay in a private folder, shared with employers on request.
   ========================================================================== */
window.SITE = {

  person: {
    eyebrow: "Community development · Tangail, Bangladesh",
    /* <em> marks the words set in blue */
    nameHtml: "Saad Ibn <em>Mansur</em>",
    name: "Saad Ibn Mansur",
    lede: "I coordinate community programmes in Tangail, Dhaka — livelihood support for low-income women, emergency flood response, and the accounting that keeps both accountable.",
    pills: ["Programme coordination", "Emergency response", "Livelihoods", "Programme finance"],
    portrait: "assets/img/saad-portrait.jpg",
    cvFile: "documents/Saad_Ibn_Mansur_CV.pdf",
    email: "ibn.saad.mansur@gmail.com",
    phone: "+880 1864-964308",     // set to null to hide publicly
    linkedin: null                 // e.g. "https://www.linkedin.com/in/…"
  },

  heroBadge: {
    title: "Honorary recognition",
    sub: "Tangail District Administration, for community welfare work"
  },

  metrics: [
    { n: "৳1,000,000+", l: "in programme funds handled", s: "relief, livelihoods and branch operations, 2018–2026" },
    { n: "200", l: "families reached", s: "Cumilla floods, 2024" },
    { n: "20", l: "women given livelihood assets", s: "sewing-machine project, 2024–25" },
    { n: "200", l: "volunteers led", s: "BYSO Tangail, 2018–20" },
    { n: "9,250+", l: "member cooperative", s: "as Assistant Accountant, 2025–26" },
    { n: "1,000", l: "book fair visitors", s: "20 institutions, 2026" }
  ],

  statement: "Six years of community work in one upazila of Tangail — and two years spent making sure it was properly run, properly funded and properly recorded.",

  about: [
    "I grew up in Elenga, Kalihati, and most of what I have done since has been within a few unions of it. At eighteen I became founding president of the Tangail district branch of the Bangladesh Youngster Social Organization and led it for twenty months, learning that volunteers stay when the work is organised, the money is accounted for and the results are visible.",
    "I have since coordinated a donor-supported livelihood project from beneficiary selection through distribution to follow-up, run an emergency relief campaign that raised and spent close to half a million taka in three weeks, and spent a year inside a 9,250-member cooperative keeping the ledgers and preparing the file for the government's annual audit.",
    "I write in Bangla and English, and I have worked as a news contributor where verifying information before publishing it was the job. I am looking for programme, community-engagement and project-support roles with development and humanitarian organisations."
  ],

  focus: [
    "Community mobilisation and volunteer coordination",
    "Livelihoods and women's economic empowerment",
    "Emergency relief and flood response",
    "Programme finance, records and audit readiness",
    "Documentation, reporting and public communication"
  ],

  workIntro: "Both were run in Kalihati and Cumilla with local volunteers, local money and written records. The photographs and supporting letters are listed under Evidence.",

  projects: [
    {
      id: "flood-2024",
      kicker: "Emergency response",
      title: "Community relief campaign, Cumilla floods",
      titleBn: "গণ ত্রাণ সংগ্রহ কর্মসূচি — Gono Tran Songroho Kormosuchi",
      when: "22 August – 13 September 2024 · Main Coordinator",
      desc: "When the 2024 floods hit Cumilla there was no organised collection point in our area. I set one up: volunteers split into collection, purchasing and packing teams, a running record of every taka and every item, and supplies moving to affected families within days.",
      stats: [["≈ ৳475,000", "raised in three weeks"], ["30–35", "volunteers coordinated"], ["≈ 200", "families reached"]],
      outcomes: [
        "Mobilised cash and in-kind donations from students, local residents and businesspeople.",
        "Managed procurement and distribution of dry food, mineral water, clothing, basic medicines, oral saline and sanitary napkins.",
        "Kept collection and expenditure recorded throughout the campaign."
      ],
      lead: { src: "assets/img/gallery/relief-03.jpg", caption: "A family relief package handed over during distribution" },
      strip: [
        { src: "assets/img/gallery/relief-01.jpg", caption: "Donation collection point, Elenga" },
        { src: "assets/img/gallery/relief-04.jpg", caption: "Loading supplies for transport" }
      ]
    },
    {
      id: "sewing-2025",
      kicker: "Livelihoods",
      title: "Women's sewing machine livelihood project",
      titleBn: "আর্থ-সামাজিক উন্নয়নে মহিলাদের সেলাই মেশিন প্রকল্প",
      when: "15 October 2024 – 14 September 2025 · Project Coordinator",
      desc: "A livelihood project rather than a handout: sewing machines given free of cost to twenty low-income women, chosen with their own communities, so that the support would still be earning money a year later. Implemented by Bahumukhi Desh Unnayan Sangsad with support from the Bangladesh NGO Foundation.",
      stats: [["≈ ৳275,000", "project budget"], ["20", "women equipped"], ["5", "communities covered"]],
      outcomes: [
        "Coordinated a seven-member team; BYSO volunteers supported community-level implementation.",
        "Covered Elenga, Sahajan, Deotola, Pathalia and Salla in Kalihati, Tangail.",
        "Led beneficiary identification and selection, stakeholder communication and distribution, and verified that support reached the intended beneficiaries."
      ],
      lead: { src: "assets/img/gallery/women-03.jpg", caption: "A beneficiary at work during a follow-up visit, Kalihati" },
      strip: [
        { src: "assets/img/gallery/women-01.jpg", caption: "Sewing machine handover, Kalihati" },
        { src: "assets/img/gallery/women-04.jpg", caption: "Machines checked before distribution" }
      ]
    }
  ],

  expIntro: "Two years of paid project and finance work, and the reporting roles that came before it.",

  experience: [
    {
      when: "Sep 2025 – Sep 2026", tag: "Full-time",
      role: "Assistant Accountant",
      org: "Bahumukhi Desh Unnayan Sangsad (BDUS), Elenga, Tangail",
      ctx: "Multipurpose cooperative registered with the Department of Cooperatives (Reg. 00481, Kalihati Upazila); 9,250+ members, 15 staff; savings, credit and community-development programmes.",
      bullets: [
        "Maintained financial ledgers, petty cash and monthly expense vouchers; reconciled bank statements each month.",
        "Prepared monthly financial statements for the management committee.",
        "Compiled cash books, vouchers, receipts, bank statements, ledgers, member records and meeting resolutions for the annual statutory audit by the Department of Cooperatives.",
        "Supported savings and loan record-keeping for a member portfolio with approximately 85% loan recovery.",
        "Argued for and supported a shift from one-off assistance to livelihood support for women who could build an income, with follow-up on outcomes."
      ],
      tags: ["Financial reporting", "Audit preparation", "Bank reconciliation", "Excel"]
    },
    {
      when: "Oct 2024 – Sep 2025", tag: "Project",
      role: "Project Coordinator",
      org: "Women's Sewing Machine Livelihood Project, BDUS",
      ctx: "Supported by the Bangladesh NGO Foundation (BNF).",
      bullets: [
        "Coordinated a seven-member team delivering livelihood assets to 20 low-income women across five communities in Kalihati, on a budget of about ৳275,000.",
        "Led beneficiary identification and selection with community stakeholders, organised distribution and verified that support reached the intended households."
      ],
      tags: ["Project coordination", "Beneficiary selection", "Donor-funded"]
    },
    {
      when: "22 Aug – 13 Sep 2024", tag: "Voluntary",
      role: "Main Coordinator",
      org: "Community Relief Collection Campaign — Cumilla floods",
      bullets: [
        "Coordinated 30–35 volunteers; raised roughly ৳475,000 in cash plus in-kind donations from students, residents and local businesses in three weeks.",
        "Managed procurement and distribution of dry food, drinking water, clothing, medicines, oral saline and hygiene items to about 200 flood-affected families."
      ],
      tags: ["Emergency response", "Volunteer management", "Fundraising", "Procurement"]
    },
    {
      when: "31 Aug 2024 – Feb 2025", tag: "Founding team",
      role: "Founding Team Member — news gathering and verification",
      org: "Khobor Jog, online news portal",
      ctx: "Established 2024; own news portal and a Facebook page with more than 100,000 followers. Team led by Abdur Razzaq, Tangail District Correspondent of Ekattor TV.",
      bullets: [
        "One of an initial five-member team; collected news and information and verified its accuracy and credibility before publication.",
        "Prepared news content and supported its publication across the portal and social media."
      ],
      tags: ["Information verification", "Digital media", "Public communication"]
    },
    {
      when: "2023", tag: "Contributor", compact: true,
      role: "Contributor",
      org: "The Daily Observer",
      bullets: ["Contributed to news and reporting; information gathering and public-interest writing."]
    },
    {
      when: "Jul – Dec 2023", tag: "Internship", compact: true,
      role: "Intern",
      org: "Saifur's English",
      bullets: ["Six-month unpaid internship supporting day-to-day academic and organisational operations."]
    }
  ],

  leadIntro: "Unpaid roles, listed separately from employment so the record stays clear.",

  leadership: [
    {
      feature: true,
      when: "Jun 2018 – Feb 2020",
      role: "Founding President",
      org: "Bangladesh Youngster Social Organization (BYSO) — Tangail District Branch",
      ctx: "BYSO: national, non-political, self-funded social organisation (established 2013, Cumilla; around 23 branches) working on the welfare and empowerment of women and children.",
      bullets: [
        "Led a 23-member executive committee, about 50 members and 200 volunteers, on roughly ৳350,000 a year from member subscriptions (৳300/month) and local donors.",
        "Certified by the organisation’s Founder: three merit-scholarship programmes, two tree-planting campaigns, two clothing distributions and one cleanliness drive delivered during the term.",
        "2019 — flood relief in Tangail and Sirajganj (≈350 people); 2020 — 10 sewing machines as livelihood support and a sports programme for people affected by drug addiction.",
        "Partnered with Salla Union Parishad, Jamuna Setu Pashchim Police Station, Elenga High School, BDUS and Alif Steel Mill. The branch received honorary recognition from the Tangail District Administration."
      ],
      photo: { src: "assets/img/saad-portrait-2.jpg", title: "Founding President, BYSO \u2014 Tangail District Branch",
               caption: "Founding President of the BYSO Tangail District Branch, June 2018 to February 2020.",
               desc: "Saad Ibn Mansur. He was the founding president of the Tangail district branch of the Bangladesh Youngster Social Organization from the age of eighteen for twenty months, leading a 23-member executive committee, about 50 members and 200 volunteers, on roughly \u09f3350,000 a year raised entirely from member subscriptions and local donors." }
    },
    {
      when: "2026 – present",
      role: "President",
      org: "Rajabari Honours Association — community association of about 26 members",
      bullets: [
        "Organised the Rajabari Book Fair 2026: 20 participating educational institutions and around 1,000 visitors, supported by the local Member of Parliament, the Upazila Nirbahi Officer and the Upazila Education Officer.",
        "Organised a Ramadan iftar reunion bringing back members who live away for study or work."
      ],
      photo: { src: "assets/img/saad-rajabari.jpg", title: "President, Rajabari Honours Association",
               caption: "President of the Association \u2014 on the platform at the opening prayer of a community programme.",
               desc: "Saad Ibn Mansur (centre) standing for the \u09ae\u09c1\u09a8\u09be\u099c\u09be\u09a4 that opens a community programme, alongside village elders and fellow members of the Association. He has been President since January 2026; the Association has about 26 members drawn from Rajabari, many of them working or studying away from home." }
    },
    {
      when: "2022 – present",
      role: "Active member",
      org: "Kalihati Blood Foundation — voluntary donor network of 500+ members on WhatsApp",
      bullets: ["Coordinate emergency blood requests, matching donors to patients at short notice. Regular O+ donor."]
    },
    {
      when: "Jan 2022 – early 2023",
      role: "Publicity Secretary and Librarian",
      org: "Majumdar Pathagar, Elenga",
      bullets: ["Managed and organised the collection and lending, expanded holdings through donations, and promoted reading among young people at grassroots level."]
    },
    {
      when: "Mar 2021 – present",
      role: "Founder",
      org: "Kolorob Music Centre, Elenga",
      bullets: ["Founded a centre to promote and preserve local folk music and cultural traditions, with a focus on engaging younger people."]
    }
  ],

  writingIntro: "A quarterly column and poem in Bangla for a literary magazine, and reporting in English.",

  featured: {
    photo: { src: "assets/img/writing-journal.jpg",
             caption: "Writing by candlelight, with বাংলা সাহিত্য, বাংলাদেশের মুক্তিযুদ্ধ and ছোটদের বিশ্বকোষ at his elbow." },
    kicker: "Feature reporting",
    title: "Homebound Eid rush turns Elenga into a sea of vehicles",
    byline: "English · reported in Elenga, Tangail",
    quote: "This is the season when the country turns inside out. Almost all of them going north must pass through Elenga — and so it becomes the place where a whole country's homesickness has to queue.",
    body: [
      "ELENGA, TANGAIL — Shahida Khatun has not seen her mother since last Eid. On Thursday afternoon she was sitting on the floor of a bus near Elenga, her nine-year-old son asleep across her lap, twelve hours into a journey that should have taken five. She was not angry. She was counting.",
      "“Two more hours to the bridge, maybe three,” she said. “Then Bogura. Then a van. Then home.”",
      "This is the season when the country turns inside out. In the days before Eid-ul-Azha, the people who stitch shirts in Ashulia and Gazipur for a year — the people who live four to a room and send most of what they earn to villages they rarely see — get their wages, get their leave, and start walking towards the bus stands. Almost all of them going north or north-west must pass through Elenga, where the Dhaka–Tangail highway narrows towards the Jamuna Bridge. Traffic bound for some 25 districts funnels into this one point. And so Elenga becomes the place where a whole country's homesickness has to queue.",
      "The line stretched nearly nine kilometres towards Tangail by late afternoon. Buses sat with their engines off to save fuel. Children were handed out of windows to relieve themselves by the roadside while women stood around them, holding up shawls. Men climbed down to stretch their backs and stood in the thin shade of their own vehicles, watching the road ahead for the smallest movement.",
      "Nobody here talks much about the traffic. They talk about what is waiting.",
      "Mizanur Rahman, 26, a cutting-section worker from Kurigram, was travelling with a bag that held two saris, a shirt for his father and a plastic doll. “My daughter was seven months old when I left,” he said. “She walks now. I have seen it only on the phone.” He had been standing in the aisle since Konabari. He said he would stand for another ten hours if the bus kept moving.",
      "Some could not afford even a seat. On the open backs of trucks and pickups, families rode standing, packed together and holding one another's wrists, tarpaulins pulled over their heads against the sun. The fares had doubled, sometimes tripled. They paid. A year is a long time.",
      "The reasons for the jam are ordinary ones — factories closing on the same night, cattle trucks moving the other way, roadside markets eating into the lanes, a broken-down lorry that no one can move. Highway police said around 700 officers were deployed between Chandra and the bridge, and that the pressure thins after midnight before rising again at dawn. They asked for patience. Mostly, they got it.",
      "What stays with a visitor is not the noise. It is the quietness of the waiting: people who work standing up for eleven months, standing up again for one more night, because at the end of the road someone has already started cooking.",
      "“My mother has kept the ducks,” said a young man from Gaibandha, grinning through a bus window, dust in his hair. “She says she will not cook them until I am there.”",
      "He had been on that bus for seventeen hours. He said it as though he were the lucky one. Perhaps he was."
    ]
  },

  writing: [
    {
      title: "I Have Seen",
      byline: "Poetry · English",
      verse: true,
      excerpt: "“I have seen / gun is conquering flower!”",
      body: ["I have seen\ngreed is reclaiming love!\nI have seen\nracism is excelling fraternity!\nI have seen\nhunger is surpassing existence!\nI have seen\ngun is conquering flower!\nOh! dear god, I have seen.\n\nI have seen\nvanity is taking off cordiality!\nI have seen\nhate is winning over love!\nI have seen\ndarkness is conquesting light!\nI have seen\ndeath is overcoming life!\n\nWhat else I’ll have to see?\nI have no clue!\nI have no clue!\nI have no clue."]
    },
    {
      title: "আফিম",
      bn: true,
      byline: "Poetry · Bangla · from ‘যে শৈত্য প্রবাহে আমার জন্ম’",
      verse: true,
      excerpt: "“বেঁচে থাকা এখন প্রায় নেশার মতো হয়ে গিয়েছে…”",
      body: ["বেঁচে থাকা এখন প্রায় নেশার মতো হয়ে গিয়েছে,\nপ্রতিদিন এই জীর্ণ সকালে উঠে\nবিষাদের আঘাত পেতে পেতে হৃৎপিণ্ড আজ ধূসর।\nতবুও সব ভুলে বেঁচে থাকা চাই এই লাশের স্তূপে\nশ্বাস নেয়া চাই এই নগ্ন বাতাসে,\nএই চকমকে শহর যে কতটা কালো\nতা কেবল অনাহারী চোখ দুটোই দেখতে পারে।\nযাত্রা, আহার, ঘুম আর সেই প্রিয় স্বার্থ\nযা আমাকে কখনো একা করে নি।\nএই করে করে সময় কাটাতে দেখি\nমাঝে মধ্যে আমার মাটির কথা খুব মনে পরে;\nআমার ছোট্ট ঘর, যেখানে শীতল শান্তি ছিলো।\nকিন্তু সেই মাটির কাছে যাবার সাহস আজ নেই\nকারণ, আমি তো ঈশ্বর কে খুঁজতে বের হওয়া এক বেদুইন।\nশান্তির খোঁজে আমি আজ পথভ্রষ্ট\nতবুও, বেঁচে থাকতে হয় বেঁচে থাকার আফিম !"]
    },
    {
      title: "Pohela Boishakh at Elenga Shamsul Haque College",
      byline: "Community reporting · English",
      excerpt: "“The celebration brought students, teachers and members of the local community together, creating an opportunity for people of different generations to reconnect with Bengali traditions.”",
      body: [
        "Elenga, Tangail: Elenga Shamsul Haque College came alive with the colours and spirit of Bengali culture as the institution celebrated Pohela Boishakh, welcoming the Bengali New Year in a festive atmosphere.",
        "The celebration brought students, teachers and members of the local community together, creating an opportunity for people of different generations to reconnect with Bengali traditions and cultural heritage.",
        "The event was more than a New Year celebration; it provided a platform for young people to experience and appreciate the cultural identity of Bangladesh. Such programmes play an important role in keeping traditional values alive among the younger generation while strengthening interaction between educational institutions and the wider community.",
        "Local residents also joined the celebration, making the occasion a community gathering rather than an event limited to the college — a reminder that traditions remain alive when communities come together to celebrate, practise and pass them on."
      ]
    },
    {
      title: "Quarterly columnist since 2022",
      byline: "Elenga Sahitya Sangsad · society established 2004, Elenga, Tangail",
      excerpt: "One column and one poem in every quarterly issue since August 2022, on literary, social, cultural and community themes."
    }
  ],


  /* ==========================================================================
     GALLERY — the master evidence archive.
     Every entry: src, title, desc, date, cat (a key from galleryCategories),
     rel (related project or organisation), and type "doc" for scanned
     letters/certificates so they are framed as documents, not photographs.

     Adding many images: name files assets/img/gallery/<cat-slug>-<nn>.jpg and
     run  node tools/build-gallery.mjs  to generate the entries to paste here.
     Never add a photograph that identifies an aid recipient — see
     assets/img/gallery/README.txt.
     ====================================================================== */

  galleryIntro: "A working archive of the photographs, letters and records behind the projects on this page. Each item names its date, category and the project or organisation it belongs to.",
  galleryNote: "Identity documents, beneficiary lists and anything naming or identifying a programme participant are deliberately excluded from this archive. Certificates are shown with registration numbers removed. Originals are provided to employers on request.",

  trainIntro: "Six certifications \u2014 two issued by United Nations bodies (UNDSS and UNICEF), four from the humanitarian sector\u2019s own learning platforms. Not general e\u2011learning: every issuer here is recognised across the sector by name.",

  training: {
    items: [
      {
        title: "BSAFE \u2014 UN security certification",
        issuer: "United Nations Department of Safety and Security",
        issuerNote: "issued by the UN itself, not a partner platform",
        date: "23 September 2026",
        verify: "confirmation number on the certificate \u00b7 does not expire",
        covers: "The UN\u2019s security awareness course, and a prerequisite for UN field deployment. Passing requires 80% or above.",
        scan: "assets/img/gallery/training-bsafe-undss.jpg",
        pdf: "assets/certificate/bsafe-undss.pdf"
      },
      {
        title: "PSEA Facilitator \u2014 Protection from Sexual Exploitation and Abuse",
        issuer: "UNICEF \u00b7 Agora learning platform",
        issuerNote: "issued by UNICEF through Agora",
        date: "30 September 2026",
        verify: "QR code and certificate code on the certificate",
        covers: "Classroom/virtual interactive training for facilitators of PSEA sessions \u2014 the safeguards every UN agency and INGO requires of its staff, volunteers and partners to prevent sexual exploitation and abuse of the people they serve.",
        scan: "assets/img/gallery/training-psea-unicef.jpg",
        pdf: "assets/certificate/psea-unicef.pdf"
      },
      {
        title: "Safeguarding Essentials",
        issuer: "Kaya \u00b7 Humanitarian Leadership Academy",
        issuerNote: "founded by Save the Children",
        date: "20 September 2026",
        verify: "QR-verifiable on the certificate",
        covers: "The framework governing how organisations protect the people they serve from harm, abuse and exploitation \u2014 including how their images and information may be used.",
        scan: "assets/img/gallery/training-safeguarding-kaya.jpg",
        pdf: "assets/certificate/safeguarding-kaya.pdf"
      },
      {
        title: "MEAL Essentials",
        issuer: "DisasterReady \u00b7 Cornerstone OnDemand Foundation",
        issuerNote: "the sector\u2019s principal free learning platform",
        date: "21 September 2026",
        covers: "Monitoring, Evaluation, Accountability and Learning \u2014 measuring whether a programme did what it set out to do, and being answerable to the people it served. Named as a required or desirable competency in a large share of INGO programme vacancies.",
        scan: "assets/img/gallery/training-meal-disasterready.jpg",
        pdf: "assets/certificate/meal-disasterready.pdf"
      },
      {
        title: "Project Management Essentials",
        issuer: "DisasterReady \u00b7 Cornerstone OnDemand Foundation",
        issuerNote: "courses used by IFRC, Save the Children and others",
        date: "23 September 2026",
        covers: "Project cycle management for humanitarian and development work \u2014 planning, budgeting, implementation and closure.",
        scan: "assets/img/gallery/training-projectmgmt-disasterready.jpg",
        pdf: "assets/certificate/projectmgmt-disasterready.pdf"
      },
      {
        title: "Core Humanitarian Essentials",
        issuer: "DisasterReady \u00b7 Cornerstone OnDemand Foundation",
        issuerNote: "6 hours 30 minutes of coursework",
        date: "27 September 2026",
        covers: "The foundations of humanitarian work \u2014 the humanitarian principles, how the international response system is organised, and the standards that hold aid accountable to the people it serves.",
        scan: "assets/img/gallery/training-core-humanitarian-disasterready.jpg",
        pdf: "assets/certificate/core-humanitarian-disasterready.pdf"
      }
    ],
    next: ""
  },

  galleryCategories: [
    { key: "relief",       label: "Humanitarian Relief" },
    { key: "community",    label: "Community Development" },
    { key: "women",        label: "Women Empowerment" },
    { key: "child",        label: "Child Welfare" },
    { key: "leadership",   label: "Leadership" },
    { key: "media",        label: "Media & Journalism" },
    { key: "cultural",     label: "Cultural Activities" },
    { key: "awards",       label: "Awards & Recognition" },
    { key:"training", label:"Training & Certification" },
    { key: "certificates", label: "Certificates" },
    { key: "documents",    label: "Project Documents" }
  ],

  gallery: [
    /* ---- Humanitarian relief ---- */
    { src:"assets/img/gallery/relief-01.jpg", cat:"relief", date:"August 2024", rel:"Community Relief Collection Campaign", project:"flood-2024",
      title:"Donation collection point, Elenga", desc:"The collection point set up at the start of the campaign, where cash and in-kind donations from students, residents and local businesses were received and recorded.", cv:"Main Coordinator, Community Relief Collection Campaign (22 Aug – 13 Sep 2024)" },
    { src:"assets/img/gallery/relief-02.jpg", cat:"relief", date:"August 2024", rel:"Community Relief Collection Campaign", project:"flood-2024",
      title:"Sorting donated goods", desc:"Volunteers sorting the donated clothing and supplies that came in through the collection drive, grading and bagging them for dispatch.", cv:"Main Coordinator, Community Relief Collection Campaign (22 Aug – 13 Sep 2024)" },
    { src:"assets/img/gallery/relief-03.jpg", cat:"relief", date:"September 2024", rel:"Community Relief Collection Campaign", project:"flood-2024",
      title:"Relief package handed over", desc:"A family relief package handed to a recipient during distribution. Around 200 households received emergency supplies over the course of the campaign.", cv:"Main Coordinator, Community Relief Collection Campaign (22 Aug – 13 Sep 2024)" },
    { src:"assets/img/gallery/relief-04.jpg", cat:"relief", date:"August 2024", rel:"Community Relief Collection Campaign", project:"flood-2024",
      title:"Loading supplies for transport", desc:"Sacks and bagged parcels being loaded onto a trailer for the journey out to the affected unions, with residents waiting alongside. Transport was arranged locally and loaded by the same volunteers who packed the parcels.", cv:"Main Coordinator, Community Relief Collection Campaign (22 Aug – 13 Sep 2024)" },
    { src:"assets/img/gallery/relief-05.jpg", cat:"relief", date:"August 2024", rel:"Community Relief Collection Campaign", project:"flood-2024",
      title:"Packing dry-food family parcels", desc:"Volunteers weighing and bagging rice, lentils, oil, oral saline and basic medicines into individual family parcels before dispatch.", cv:"Main Coordinator, Community Relief Collection Campaign (22 Aug – 13 Sep 2024)" },
    { src:"assets/img/gallery/relief-06.jpg", cat:"relief", date:"2019", rel:"BYSO Tangail Branch",
      title:"Beneficiary listing in the field", desc:"Households being identified and listed against a written register before relief was handed out. Relief support reached approximately 350 people.", cv:"Founding President, Bangladesh Youngster Social Organization — Tangail Branch (Jun 2018 – Feb 2020)" },
    { src:"assets/img/gallery/relief-07.jpg", cat:"relief", date:"2019", rel:"Notre Dame College Mymensingh \u00b7 BYSO Mymensingh District Branch",
      title:"Winter clothing distribution", desc:"Blankets handed to residents during the winter cold spell, one of roughly a hundred families reached. Recipients were mostly older women from the surrounding villages, and the handover was made in the open with the community present.", cv:"Founding President, Bangladesh Youngster Social Organization — Tangail Branch (Jun 2018 – Feb 2020)" },
    { src:"assets/img/gallery/relief-08.jpg", cat:"relief", date:"2019", rel:"Notre Dame College Mymensingh \u00b7 BYSO Mymensingh District Branch",
      title:"Winter clothing distribution \u2014 organising team", desc:"The stock of blankets before distribution, behind the campaign banner: \u0936\u09c0\u09a4\u0995\u09be\u09b2\u09c0\u09a8 \u09ac\u09b8\u09cd\u09a4\u09cd\u09b0 \u09ac\u09bf\u09a4\u09b0\u09a3 \u09e8\u09e6\u09e7\u09ef \u2014 a joint initiative of Notre Dame College Mymensingh and the Bangladesh Youngster Social Organization Mymensingh District Branch.", cv:"Founding President, Bangladesh Youngster Social Organization — Tangail Branch (Jun 2018 – Feb 2020)" },

    { src:"assets/img/gallery/community-10.jpg", cat:"community", date:"February 2025", rel:"Book fair, Government Shamsul Haque College field, Elenga",
      title:"Elenga High School stall", desc:"The Elenga High School stall, its banner naming এলেঙ্গা উচ্চ বিদ্যালয়, কালিহাতি, টাঙ্গাইল. Teachers and students stand behind a table of Bangla fiction, translated titles and children’s books — schools took stalls of their own rather than simply sending pupils to browse." },
    { src:"assets/img/gallery/community-12.jpg", cat:"community", date:"February 2025", rel:"Book fair, Government Shamsul Haque College field, Elenga",
      title:"Visiting guests at a school stall", desc:"Guests being shown a student-built model — a river, embankments, a bridge and buildings — displayed alongside the books at a school stall. Science models and reading stalls shared the same tables." },
    { src:"assets/img/gallery/community-13.jpg", cat:"community", date:"February 2025", rel:"Book fair, Government Shamsul Haque College field, Elenga",
      title:"Food stall at the fair", desc:"A home-made food stall run alongside the book stalls, with pithas and sweets under glass. Fairs like this one fund themselves partly through the food stalls that grow up around them." },
    /* ---- Women empowerment ---- */
    { src:"assets/img/gallery/women-01.jpg", cat:"women", date:"2025", rel:"Women's Sewing Machine Livelihood Project", project:"sewing-2025",
      title:"Sewing machine handover, Kalihati", desc:"A machine handed over to its recipient, with thread, fabric and scissors supplied alongside it so that she could begin work the same day. The handovers were made in a local school room rather than at an office, and each machine went free of cost to a woman chosen with her own community.", cv:"Project Coordinator, Women’s Sewing Machine Livelihood Project (Oct 2024 – Sep 2025)" },
    { src:"assets/img/gallery/women-02.jpg", cat:"women", date:"2024", rel:"Women's Sewing Machine Livelihood Project", project:"sewing-2025",
      title:"Community selection meeting", desc:"Meeting with community stakeholders to identify and agree the households that would receive livelihood support. Selection was done openly with the communities themselves rather than from a list drawn up in an office, so that the choice of beneficiaries could be defended locally.", cv:"Project Coordinator, Women’s Sewing Machine Livelihood Project (Oct 2024 – Sep 2025)" },
    { src:"assets/img/gallery/women-03.jpg", cat:"women", date:"2025", rel:"Women's Sewing Machine Livelihood Project", project:"sewing-2025",
      title:"Follow-up visit, Kalihati", desc:"A beneficiary at work on her machine during a follow-up visit to one of the five project communities. Checking that the machines were in use and earning money \u2014 not simply delivered and counted \u2014 was written into the project rather than left to chance, and it is the difference between a livelihood project and a handout. The participant is not named, and no beneficiary is identified by name anywhere in this archive.", cv:"Project Coordinator, Women’s Sewing Machine Livelihood Project (Oct 2024 – Sep 2025)" },
    { src:"assets/img/gallery/women-04.jpg", cat:"women", date:"2024", rel:"Women's Sewing Machine Livelihood Project", project:"sewing-2025",
      title:"Machines before distribution", desc:"New Singer treadle machines, boxed and checked before the distribution across Elenga, Sahajan, Deotola, Pathalia and Salla. Buying new rather than second-hand mattered: a machine that breaks in the first year is a cost to the recipient, not an income.", cv:"Project Coordinator, Women’s Sewing Machine Livelihood Project (Oct 2024 – Sep 2025)" },
    { src:"assets/img/gallery/women-06.jpg", cat:"women", date:"2024–25", rel:"Women’s Sewing Machine Livelihood Project", project:"sewing-2025",
      title:"Project programme with donors and stakeholders", desc:"An open-air project programme on an institutional campus, with the donors and invited guests at the head table and the gathering seated in front. Sessions like this are where a small project is explained publicly, the supporting organisations are named, and the plan is put on record in front of the people it concerns.", cv:"Project Coordinator, Women’s Sewing Machine Livelihood Project (Oct 2024 – Sep 2025)" },
    { src:"assets/img/gallery/women-07.jpg", cat:"women", date:"2024–25", rel:"Women’s Sewing Machine Livelihood Project", project:"sewing-2025",
      title:"Donors and guests at the project meeting", desc:"The head table at the same programme. Bringing donors, the implementing organisation and local guests to one table is how a community project of this size secures both its money and its legitimacy.", cv:"Project Coordinator, Women’s Sewing Machine Livelihood Project (Oct 2024 – Sep 2025)" },
    
    { src:"assets/img/gallery/women-05.jpg", cat:"women", date:"2020", rel:"BYSO Tangail Branch",
      title:"Livelihood support, BYSO", desc:"Ten sewing machines provided as livelihood support — the branch’s first move from relief towards income generation, and the idea later carried into the 2024–25 project with twenty machines and a formal budget.", cv:"Founding President, Bangladesh Youngster Social Organization — Tangail Branch (Jun 2018 – Feb 2020)" },
    /* ---- Child welfare ---- */
    { src:"assets/img/gallery/child-01.jpg", cat:"child", date:"2018", rel:"BYSO Tangail Branch",
      title:"Child welfare event", desc:"A community event with roughly 300 children participating, focused on children's wellbeing and community engagement.", cv:"Founding President, Bangladesh Youngster Social Organization — Tangail Branch (Jun 2018 – Feb 2020)" },
    { src:"assets/img/gallery/child-02.jpg", cat:"child", rel:"Elenga High School, Tangail",
      title:"Victory Day prize-giving, Elenga High School", desc:"The platform party at a Victory Day (মহান বিজয় দিবস) school ceremony, trophies waiting on the table in front of them. The banner carries homage to the martyrs and freedom fighters of the Liberation War, and the school’s own name and Tangail beneath it." },
    { src:"assets/img/gallery/child-06.jpg", cat:"child", rel:"Elenga High School, Tangail",
      title:"Trophy presented to a girl competitor", desc:"A winning student receiving her trophy at the Victory Day ceremony. Girls competed and were placed alongside the boys, which is worth noticing in a rural upazila school and is the part of a school programme that actually shifts anything." },
    { src:"assets/img/gallery/child-07.jpg", cat:"child", rel:"Elenga High School, Tangail",
      title:"Medal placed on a winning competitor", desc:"A medal being placed over a prize-winner’s head as the other competitors wait their turn. Prizes were handed over individually rather than called out from a list." },

    { src:"assets/img/gallery/child-08.jpg", cat:"child", rel:"Elenga, Kalihati, Tangail",
      title:"Students sitting a written examination", desc:"Schoolgirls at work on an examination paper while an invigilator moves between the desks. Girls made up much of the hall, which in a rural upazila is the measure of whether an education programme is reaching the students it is hardest to reach." },
    { src:"assets/img/gallery/child-03.jpg", cat:"child", date:"21 February 2019", rel:"BYSO Tangail Branch · Shahid Jamal High School, Kalihati",
      title:"Scholarship examination and school-materials distribution", desc:"The 2nd BYSO Scholarship Examination and a distribution of school materials for students from low-income families, held at Shahid Jamal High School, Kalibari, Kalihati on the morning of 21 February 2019. The banner names the Bangladesh Youngster Social Organization district branch as organiser and carries the branch mottos — পাশে দাঁড়ানোর অঙ্গীকার (a pledge to stand beside) and BYSO আমার অহংকার.", cv:"Founding President, Bangladesh Youngster Social Organization — Tangail Branch (Jun 2018 – Feb 2020)" },
    { src:"assets/img/gallery/child-05.jpg", cat:"child", date:"21 February 2019", rel:"BYSO Tangail Branch · Shahid Jamal High School, Kalihati",
      title:"School materials prepared for distribution", desc:"Individually wrapped packets of exercise books, geometry boxes, pens and pencils stacked on a desk in front of the assembled students, ready to be handed out. Sitting an examination and receiving the materials happened at the same event, so that a child who came for one left with the other.", cv:"Founding President, Bangladesh Youngster Social Organization — Tangail Branch (Jun 2018 – Feb 2020)" },
    { src:"assets/img/gallery/child-04.jpg", cat:"child", date:"21 February 2019", rel:"BYSO Tangail Branch", type:"doc",
      title:"Scholarship examination certificates", desc:"Certificates of Achievement from the BYSO 2nd Scholarship Examination-2019, printed on Tangail Branch letterhead and signed at the foot by two Presidium Members and by Saad Ibn Mansur as President (2018-19) of the Tangail Branch. The participating students’ names have been covered here: they were schoolchildren, and no child is identified anywhere in this archive.", cv:"Founding President, Bangladesh Youngster Social Organization — Tangail Branch (Jun 2018 – Feb 2020)" },
    { src:"assets/img/gallery/child-09.jpg", cat:"child", rel:"Bangladesh Youngster Social Organization",
      title:"Serving a meal to children", desc:"A volunteer pouring water for children sitting down to a cooked meal on the grass beside a pond. The food was carried out and served where the children already were, rather than asking them to come and collect it somewhere else.", cv:"Founding President, Bangladesh Youngster Social Organization — Tangail Branch (Jun 2018 – Feb 2020)" },
    { src:"assets/img/gallery/child-10.jpg", cat:"child", rel:"Bangladesh Youngster Social Organization",
      title:"Children eating, cooking pot in the foreground", desc:"Rice cooked on site in a single large pot and served onto plates under the trees. Cooking rather than handing out packets is more work for the volunteers and gives a hot meal instead of dry rations.", cv:"Founding President, Bangladesh Youngster Social Organization — Tangail Branch (Jun 2018 – Feb 2020)" },
    { src:"assets/img/gallery/child-11.jpg", cat:"child", rel:"Bangladesh Youngster Social Organization",
      title:"The meal under way", desc:"Children eating together on the grass while volunteers move between them. Sitting down to eat in a group, unhurried, is the part of a feeding programme that is easiest to leave out and hardest to replace.", cv:"Founding President, Bangladesh Youngster Social Organization — Tangail Branch (Jun 2018 – Feb 2020)" },

    /* ---- Community development ---- */
    { src:"assets/img/gallery/community-01.jpg", cat:"community", rel:"Bangladesh Youngster Social Organization",
      title:"Saplings distributed to schoolchildren", desc:"Two lines of pupils across a school field, each child holding a potted sapling to take away and plant, with a BYSO volunteer in a branded shirt standing between the rows. Handing a tree to every child rather than planting a plot as adults is what makes a plantation drive stick — each sapling goes home to someone who has a reason to keep it alive.", cv:"Founding President, Bangladesh Youngster Social Organization — Tangail Branch (Jun 2018 – Feb 2020)" },
    { src:"assets/img/gallery/community-15.jpg", cat:"community", rel:"Bangladesh Youngster Social Organization",
      title:"সবুজায়ন — BYSO greening campaign", desc:"Volunteers planting a sapling beside a school building, behind the campaign banner for সবুজায়ন, the organisation’s greening project. The banner carries the BYSO roundel, the organisation’s name in English — Bangladesh Youngster Social Organization — and its slogan: “সবুজে সাজাই দেশ, দেখবো অদেখা বাংলাদেশ” — let us dress the country in green, and we shall see an unseen Bangladesh.", cv:"Founding President, Bangladesh Youngster Social Organization — Tangail Branch (Jun 2018 – Feb 2020)" },
    { src:"assets/img/gallery/community-07.jpg", cat:"community", date:"14 September 2026", rel:"Rajabari Honours Association · Rajabari, Elenga, Kalihati",
      title:"Rajabari Premier Football Tournament 2026 — opening", desc:"The chief guest being pinned with a rosette before the first-round match of Season 7. The banner names the organisers as a local sporting club together with the Rajabari Honours Association, with support from residents across the Rajabari area, and carries the tournament’s motto: “খেলাধুলায় বাড়ে বল, মাদক ছেড়ে খেলতে চল” — sport builds strength, leave drugs and come and play.", cv:"President, Rajabari Honours Association (2026 – present)" },
    { src:"assets/img/gallery/community-08.jpg", cat:"community", date:"14 September 2026", rel:"Rajabari Honours Association · Rajabari, Elenga, Kalihati",
      title:"Teams lined up before kick-off", desc:"Dakatia Sporting Club and Surma Sporting Club facing each other before the opening whistle, with match officials, organisers and a crowd of several hundred from the surrounding villages. Now in its seventh season, the tournament is a standing fixture rather than a one-off event.", cv:"President, Rajabari Honours Association (2026 – present)" },
    { src:"assets/img/gallery/community-14.jpg", cat:"community", rel:"Tree-planting ceremony, Kalihati, Tangail",
      title:"Sapling planted at a tree-planting ceremony", desc:"A sapling going into the ground at a formal tree-planting ceremony, with local dignitaries and elders gathered round and a gardener setting the roots. The banner behind refers to a nationally declared tree-planting programme; most of its text, including the date and the organising body, is hidden by the people standing in front of it." },
    { src:"assets/img/gallery/community-04.jpg", cat:"community", date:"2022", rel:"Majumdar Pathagar",
      title:"Community library, Elenga", desc:"The library collection during my term as Publicity Secretary and Librarian, when holdings were expanded through donations.", cv:"Majumdar Pathagar, Elenga — community library (see the verification letter under Evidence)" },
    { src:"assets/img/gallery/community-05.jpg", cat:"community", date:"2023", rel:"Kalihati Blood Foundation",
      title:"Blood donation coordination", desc:"Voluntary donation activity coordinated through a 500-member donor network, where emergency requests are matched to donors by blood group and location. A regular O+ donor himself.", cv:"Voluntary blood donation — see the Udayan Foundation letter under Evidence" },
    { src:"assets/img/gallery/community-06.jpg", cat:"community", date:"2020", rel:"BYSO Tangail Branch",
      title:"Sports and recreation programme", desc:"A sports programme run for people affected by drug addiction, using regular organised recreation as a route back into community life rather than treating the problem as a matter for policing alone.", cv:"Founding President, Bangladesh Youngster Social Organization — Tangail Branch (Jun 2018 – Feb 2020)" },

    /* ---- Leadership ---- */
    { src:"assets/img/gallery/leadership-01.jpg", cat:"leadership", date:"21 February", rel:"BYSO Tangail Branch · Shahid Jamal High School, Kalihati",
      title:"Branch executive members, Ekushey wreath-laying", desc:"The branch’s executive members at the Shaheed Minar after laying a শ্রদ্ধাঞ্জলি wreath on নেখুশে ফেব্রুয়ারি, International Mother Language Day. The banner behind them reads “২১ আমাদের অহংকার” — the twenty-first is our pride. Around twenty members are present, against the twenty-three-member executive committee the branch ran with; shoes are off, as they are at every Shaheed Minar in the country on that morning.", cv:"Founding President, Bangladesh Youngster Social Organization — Tangail Branch (Jun 2018 – Feb 2020)" },
    { src:"assets/img/gallery/leadership-02.jpg", cat:"leadership", date:"2026", rel:"Rajabari Honours Association",
      title:"Association committee meeting", desc:"Planning session of the association’s committee ahead of the 2026 book fair. The association has 26 members, all from Rajabari, many of them working or studying away from home.", cv:"President, Rajabari Honours Association (2026 – present)" },
    { src:"assets/img/gallery/leadership-03.jpg", cat:"leadership", date:"2019", rel:"Salla Union Parishad",
      title:"Partnership meeting, Salla Union Parishad", desc:"One of the local institutional partnerships behind the branch’s outreach work. Union Parishad backing mattered for beneficiary lists and for permission to run activities in the union.", cv:"Founding President, Bangladesh Youngster Social Organization — Tangail Branch (Jun 2018 – Feb 2020)" },
    { src:"assets/img/gallery/leadership-04.jpg", cat:"leadership", date:"2019", rel:"BYSO Tangail Branch",
      title:"Volunteer mobilisation", desc:"Volunteers assembling for a community activity. The branch worked with around 200 volunteers drawn from local schools, colleges and the wider community.", cv:"Founding President, Bangladesh Youngster Social Organization — Tangail Branch (Jun 2018 – Feb 2020)" },

    /* ---- Media & journalism ---- */
    { src:"assets/img/gallery/media-01.jpg", cat:"media", date:"August 2024", rel:"Khobor Jog",
      title:"Khobor Jog founding team", desc:"The initial five-member team of the online news portal, led by Abdur Razzaq, Tangail District Correspondent of Ekattor TV.", cv:"Founding team member, Khobor Jog (Aug 2024 – Feb 2025)" },
    { src:"assets/img/gallery/media-02.jpg", cat:"media", date:"2024", rel:"Khobor Jog",
      title:"Reporting to camera for Khobor Jog", desc:"Recording a piece to camera with a Khobor Jog branded microphone — খবর যোগ on the flag. The portal’s working rule was that a claim was checked against a second source before it went out, which is the practical habit behind the “information verification” line on the CV.", cv:"Founding team member, Khobor Jog (Aug 2024 – Feb 2025)" },
    { src:"assets/img/gallery/media-03.jpg", cat:"media", date:"2023", rel:"Elenga Sahitya Sangsad", type:"doc",
      title:"Published column", desc:"A column as printed in the quarterly magazine of Elenga Sahitya Sangsad, where I have contributed one column and one poem per issue since August 2022.", cv:"Columnist and poet, Elenga Sahitya Sangsad quarterly (since 2022)" },

    /* ---- Cultural ---- */
    { src:"assets/img/writing-journal.jpg", cat:"media", rel:"Writing practice, Elenga",
      title:"Writing by candlelight", desc:"Working in a dated journal by candlelight, with বাংলা সাহিত্য, বাংলাদেশের মুক্তিযুদ্ধ, সাধারণ জ্ঞান and ছোটদের বিশ্বকোষ stacked at his elbow. A column and a poem every quarter since 2022 come out of notebooks like this one.", cv:"Columnist and poet, Elenga Sahitya Sangsad quarterly (since 2022)" },
    { src:"assets/img/gallery/cultural-01.jpg", cat:"cultural", date:"23 May 2022", rel:"Bangladesh Udichi Shilpi Goshthi, Tangail",
      title:"গান ও কবিতা সন্ধ্যা — Udichi song and poetry evening", desc:"Playing the ukulele at গান ও কবিতা সন্ধ্যা, an evening of song and poetry held by বাংলাদেশ উদীচী শিল্পীগোষ্ঠী at Battola, Tangail on 23 May 2022. The banner carries Udichi’s motto — মানুষের সংস্কৃতির জন্য, for the culture of the people. Udichi has organised cultural resistance in Bangladesh since 1968.", cv:"Member, Bangladesh Udichi Shilpi Goshthi, Tangail" },
    { src:"assets/img/gallery/cultural-02.jpg", cat:"cultural", date:"2022", rel:"Kolorob Music Centre",
      title:"Kolorob Music Centre session", desc:"Playing at the centre he founded in Elenga in March 2021 to keep local folk music alive among younger people, and to give them somewhere to go outside school hours. He plays guitar and ukulele.", cv:"Founder, Kolorob Music Centre, Elenga (2021 – present)" },
    { src:"assets/img/gallery/cultural-03.jpg", cat:"cultural", rel:"Pohela Boishakh celebration, Elenga",
      title:"Pohela Boishakh stall — traditional pottery", desc:"A Boishakhi mela stall laid out with village earthenware — সরা, কলস, clay cups and covered pots — alongside flowers and sweets, with guests and organisers behind it. পহেলা বৈশাখ, the Bengali New Year, is the largest secular public festival of the year and the one occasion when rural crafts are given a marketplace of their own." },
    { src:"assets/img/gallery/cultural-04.jpg", cat:"cultural", rel:"Pohela Boishakh celebration, Elenga",
      title:"Guests at the Boishakh celebration", desc:"Organisers and invited guests at the stall during the New Year celebration." },

    { src:"assets/img/gallery/cultural-05.jpg", cat:"cultural", date:"2022", rel:"Elenga Sahitya Sangsad, Elenga, Tangail",
      title:"Performing at the Sahitya Sangsad poetry programme", desc:"Singing at the society’s কবিতা পাঠ অনুষ্ঠান-২০২২ — its poetry reading programme for 2022. The banner behind names the society, এলেঙ্গা সাহিত্য সংসদ, gives its founding year as ২০০৪ (2004), and lists the Mayor of Elenga Municipality as chief guest and the President of Tangail Sahitya Sangsad as special guest.", cv:"Coordinator and contributor, Elenga Sahitya Sangsad" },
    { src:"assets/img/gallery/cultural-06.jpg", cat:"cultural", date:"21 February", rel:"Bangladesh Udichi Shilpi Goshthi, Tangail",
      title:"Candle-lighting on Ekushey February", desc:"Holding a candle at the night-time observance of একুশে ফেব্রুয়ারি, with floral wreaths laid at the Shaheed Minar behind. Candles are lit and kept burning through the night into the small hours of the twenty-first — the hour the language martyrs were killed in 1952.", cv:"Member, Bangladesh Udichi Shilpi Goshthi, Tangail" },
    /* ---- Awards & recognition ---- */
    { src:"assets/img/gallery/awards-01.jpg", cat:"awards", date:"2020", rel:"Tangail District Administration", type:"doc",
      title:"Honorary recognition", desc:"Recognition awarded to the BYSO Tangail Branch for its contribution to community welfare and social development in the district, during my tenure as Founding President.", cv:"Founding President, Bangladesh Youngster Social Organization — Tangail Branch (Jun 2018 – Feb 2020)" },

    /* ---- Certificates ---- */
    { src:"assets/img/gallery/certificates-bdus-experience-en.jpg", cat:"certificates", date:"15 September 2026", rel:"Bahumukhi Desh Unnayan Sangsad", type:"doc",
      title:"Experience certificate (English)", desc:"Signed letter from the Executive Director confirming full-time employment as Assistant Accountant from 01/09/2025 to 01/09/2026, and listing the duties carried out: maintaining financial ledgers, handling petty cash, preparing monthly expense vouchers, reconciling bank statements and assisting in project audit preparations. Reference verification letter/bdus/906.", cv:"Assistant Accountant, Bahumukhi Desh Unnayan Sangsad (Sep 2025 – Sep 2026)" },
    { src:"assets/img/gallery/certificates-bdus-experience-bn.jpg", cat:"certificates", date:"15 September 2026", rel:"Bahumukhi Desh Unnayan Sangsad", type:"doc",
      title:"Experience certificate (Bangla)", desc:"The Bangla original of the same experience certificate (অভিজ্ঞতার সনদপত্র), reference প্রত্যয়ন/বিডিইউএস/৯০৬.", cv:"Assistant Accountant, Bahumukhi Desh Unnayan Sangsad (Sep 2025 – Sep 2026)" },
    { src:"assets/img/gallery/certificates-bdus-appointment.jpg", cat:"certificates", date:"1 September 2025", rel:"Bahumukhi Desh Unnayan Sangsad", type:"doc",
      title:"Appointment letter, Assistant Accountant", desc:"Appointment to the post of Assistant Accountant with effect from 01/09/2025, on a monthly remuneration, issued by the organisation's selection committee. Reference APPOINTMENT LETTER/BDUS/906.", cv:"Assistant Accountant, Bahumukhi Desh Unnayan Sangsad (Sep 2025 – Sep 2026)" },
    { src:"assets/img/gallery/certificates-scouts.jpg", cat:"certificates", date:"Classes VI–X", rel:"Bangladesh Scouts, Kalihati Upazila", type:"doc",
      title:"Bangladesh Scouts certificate", desc:"Certificate from the Elenga High School Scout Group confirming active participation in Scout activities from class six through class ten, signed by the Scout Unit Leader, the Group Scout Leader and the Head Teacher.", cv:"Bangladesh Scouts — Elenga High School Scout Group (classes VI–X)" },
    { src:"assets/img/gallery/certificates-hsc-transcript.jpg", cat:"certificates", date:"Result published 17 July 2019", rel:"Board of Intermediate and Secondary Education, Dhaka", type:"doc",
      title:"HSC academic transcript (Science)", desc:"Higher Secondary Certificate transcript from Notre Dame College, Mymensingh. GPA 3.83 with the additional subject, 3.67 without. Bangla A, English A-, ICT A, Physics A-, Chemistry A-, Biology A-, Higher Mathematics B. Roll and registration numbers are covered; the original is provided to employers on request.", cv:"Education" },
    { src:"assets/img/gallery/certificates-jsc-transcript.jpg", cat:"certificates", date:"Result published 30 December 2014", rel:"Board of Intermediate and Secondary Education, Dhaka", type:"doc",
      title:"JSC academic transcript", desc:"Junior School Certificate transcript from Elenga High School, GPA 5.00 — A+ in Bangla, Science, ICT, Religion, Bangladesh & Global Studies, Arts and Crafts, Physical Education and the optional Agriculture Studies. Roll, registration and date of birth are covered.", cv:"Education" },
    { src:"assets/img/gallery/certificates-byso-president.jpg", cat:"certificates", date:"15 July 2026", rel:"Bangladesh Youngster Social Organization — Tangail District Branch", type:"doc",
      title:"Verification of BYSO presidency", desc:"প্রত্যয়ন পত্র from the Founder of the Bangladesh Youngster Social Organization, on Tangail District Branch letterhead (organisation established 2013, byso-bd.org). It certifies him as a regular and active member and records that he held the office of সভাপতি — President — from June 2018 to February 2020, and that during his term the branch carried out three merit-scholarship programmes, two tree-planting campaigns, two clothing distributions and one cleanliness drive. Reference প্র/প/২৫২. Parents' names and telephone numbers are covered here; the original is provided to employers on request.", cv:"Founding President, Bangladesh Youngster Social Organization — Tangail Branch (Jun 2018 – Feb 2020)" },

    { src:"assets/img/gallery/certificates-astro-olympiad.jpg", cat:"certificates", date:"2018", rel:"Bangladesh Astro-Olympiad National Committee", type:"doc",
      title:"Astro-Olympiad participation certificate", desc:"Certificate of Appreciation from the Bangladesh Astro-Olympiad National Committee for divisional-level participation in the 13th Bangladesh Astro-Olympiad, 2018, signed by the Committee Chairman. Organised jointly by the National Museum of Science and Technology, the Bangladesh Astronomical Association and Samakal, with the Embassy of the Russian Federation in Bangladesh, The Daily Star Youth and Ekattor TV. The recipient’s name was never filled in on this copy, so the certificate records the event rather than the individual.", cv:"Education" },
    { src:"assets/img/gallery/certificates-ssc-transcript.jpg", cat:"certificates", date:"Result published 4 May 2017", rel:"Board of Intermediate and Secondary Education, Dhaka", type:"doc",
      title:"SSC academic transcript (Science)", desc:"Secondary School Certificate transcript from Elenga High School, Science group, GPA 5.00 — 4.77 without the additional subject. A+ in English (162), Mathematics, Bangladesh and Global Studies, Physics, Chemistry, Higher Mathematics, Physical Education, ICT, Career Education and the optional Biology; A in Bangla. Serial numbers, roll, registration, date of birth and parents’ names are covered; the original is provided to employers on request.", cv:"Education" },
    { src:"assets/img/gallery/certificates-nu-4th-year.jpg", cat:"certificates", date:"Result published 13 November 2025", rel:"National University of Bangladesh", type:"doc",
      title:"Honours 4th year result sheet", desc:"Bachelor Degree (Honours) 4th Year Examination 2023, course-wise letter grades across ten papers with an A+ in the final course, GPA 2.55 for the year. This is a single year’s result, not the final consolidated CGPA — that comes with the degree transcript, which is still to be issued. Roll and registration numbers are covered.", cv:"Education" },

    /* ---- Training and certification ---- */
    { src:"assets/img/gallery/training-bsafe-undss.jpg", cat:"training", date:"23 September 2026", rel:"United Nations Department of Safety and Security", type:"doc",
      title:"BSAFE — UN security certification", desc:"Certificate of Achievement issued directly by the United Nations Department of Safety and Security, signed by the Chief a.i. of its Training and Development Section. BSAFE is the UN’s security awareness course and is a prerequisite for UN field deployment; the certificate does not expire and carries a confirmation number for verification. Passing requires a score of 80% or above.", cv:"Humanitarian sector training" },
    { src:"assets/img/gallery/training-psea-unicef.jpg", cat:"training", date:"30 September 2026", rel:"UNICEF · Agora learning platform", type:"doc",
      title:"PSEA Facilitator — Protection from Sexual Exploitation and Abuse", desc:"Certificate issued by UNICEF through its Agora learning platform for completing “Facilitator: Protection from sexual exploitation and abuse – Classroom/Virtual Interactive Training”. PSEA is the set of safeguards that every UN agency and INGO requires of its staff, volunteers and partners; the facilitator course prepares participants to run PSEA sessions for others. The certificate carries a QR code and certificate code for verification.", cv:"Humanitarian sector training" },
    { src:"assets/img/gallery/training-safeguarding-kaya.jpg", cat:"training", date:"20 September 2026", rel:"Kaya · Humanitarian Leadership Academy", type:"doc",
      title:"Safeguarding Essentials", desc:"Certificate of completion from Kaya, the learning platform of the Humanitarian Leadership Academy, which was founded by Save the Children. Safeguarding is the framework that governs how organisations protect the people they serve from harm, abuse and exploitation — including how their images and information may be used. The certificate carries a QR code for direct verification by an employer.", cv:"Humanitarian sector training" },
    { src:"assets/img/gallery/training-meal-disasterready.jpg", cat:"training", date:"21 September 2026", rel:"DisasterReady · Cornerstone OnDemand Foundation", type:"doc",
      title:"MEAL Essentials", desc:"Monitoring, Evaluation, Accountability and Learning — the discipline of measuring whether a programme actually did what it set out to do, and being answerable to the people it served. MEAL is named as a required or desirable competency in a large share of INGO programme vacancies. Issued by DisasterReady, the humanitarian sector’s principal free learning platform.", cv:"Humanitarian sector training" },
    { src:"assets/img/gallery/training-projectmgmt-disasterready.jpg", cat:"training", date:"23 September 2026", rel:"DisasterReady · Cornerstone OnDemand Foundation", type:"doc",
      title:"Project Management Essentials", desc:"Project cycle management for humanitarian and development work — planning, budgeting, implementation and closure. Issued by DisasterReady, an initiative of the Cornerstone OnDemand Foundation, whose courses are used across the sector by IFRC, Save the Children and others.", cv:"Humanitarian sector training" },
    { src:"assets/img/gallery/training-core-humanitarian-disasterready.jpg", cat:"training", date:"27 September 2026", rel:"DisasterReady · Cornerstone OnDemand Foundation", type:"doc",
      title:"Core Humanitarian Essentials", desc:"Record of course completion from DisasterReady, signed by its Director, for a 6 hour 30 minute course on the foundations of humanitarian work: the humanitarian principles, how the international response system is organised, and the standards that hold aid accountable to the people it serves.", cv:"Humanitarian sector training" },

    /* ---- Project documents ---- */
    { src:"assets/img/gallery/documents-rajabari-president.jpg", cat:"documents", date:"January 2026", rel:"Rajabari Honours Association", type:"doc",
      title:"Verification of presidency", desc:"Letter confirming election and service as President from 01/01/2026, and recording the association's work on educational development, seminars, merit awards and social awareness programmes in the area. Reference প্র/প-০০৪৮.", cv:"President, Rajabari Honours Association (2026 – present)" },
    { src:"assets/img/gallery/documents-khoborjog-letter.jpg", cat:"documents", date:"17 August 2026", rel:"Khobor Jog", type:"doc",
      title:"Verification of news work", desc:"Letter from the proprietor of Khobor Jog — Abdur Razzaq, Tangail District Correspondent of Ekattor TV — confirming work as a news journalist from 31 August 2024 to February 2025, collecting news across Tangail, verifying information and supporting publication. Reference প্র/প/০০১.", cv:"Founding team member, Khobor Jog (Aug 2024 – Feb 2025)" },
    { src:"assets/img/gallery/documents-sahitya-membership.jpg", cat:"documents", date:"21 August 2026", rel:"Elenga Sahitya Sangsad", type:"doc",
      title:"Membership letter", desc:"Membership letter (সদস্যপত্র) from the President of Elenga Sahitya Sangsad confirming association with the literary society and active participation in its literary, educational and cultural activities. Reference এ/সা/স/সংসদ/০৫/২০২৬.", cv:"Columnist and poet, Elenga Sahitya Sangsad quarterly (since 2022)" },
    { src:"assets/img/gallery/documents-udichi-membership.jpg", cat:"documents", date:"10 August 2026", rel:"Bangladesh Udichi Shilpi Goshthi, Tangail", type:"doc",
      title:"Membership letter", desc:"Membership letter confirming membership first of the Elenga branch council and later of the Tangail District Council, where he remains an active participating artist. Reference উদীচী/টাং/সদস্য/৩২/২০২৬.", cv:"Member, Bangladesh Udichi Shilpi Goshthi, Tangail" },
    { src:"assets/img/gallery/documents-granthagar-membership.jpg", cat:"documents", date:"12 September 2026", rel:"Gopinath Majumdar Smriti Granthagar, Elenga", type:"doc",
      title:"Library membership letter", desc:"Letter from the library at Moshajan, Elenga, confirming regular membership since the library was founded and active participation in the pathagar (library) movement and its educational activities. Signed by the Convener. Reference গো/ম/স্মৃ/গ্র/সদস্য/০১/২০২৬.", cv:"Majumdar Pathagar, Elenga — community library" },
    { src:"assets/img/gallery/documents-udayan-membership.jpg", cat:"documents", date:"15 July 2026", rel:"Udayan Foundation, Elenga", type:"doc",
      title:"Blood donation service certification", desc:"Letter from the founder of Udayan Foundation — a voluntary blood donation organisation established in 2020 at Elenga, Kalihati — confirming two years as a regular and active member, with contributions to emergency blood collection for critically ill patients, blood donation awareness, and free blood group determination camps. Reference প্র/প/৭২.", cv:"Voluntary blood donation, Elenga / Kalihati" }
  ],

  evIntro: "Documents marked “held” are in hand and can be sent on request. Identity documents and anything naming a beneficiary are deliberately not published here.",

  honour: {
    title: "Honorary recognition, Tangail District Administration",
    note: "Awarded to the BYSO Tangail Branch during my tenure as Founding President, in acknowledgement of the branch's contribution to community welfare and social development in the district." },

  documentGroups: [
    {
      group: "Employment and project work",
      items: [
        { label: "Experience certificate", issuer: "Bahumukhi Desh Unnayan Sangsad", meta: "15 September 2026 · duties as Assistant Accountant", status: "held", scan: "assets/img/gallery/certificates-bdus-experience-en.jpg" },
        { label: "Appointment letter", issuer: "Bahumukhi Desh Unnayan Sangsad", meta: "Assistant Accountant · 1 September 2025", status: "held", scan: "assets/img/gallery/certificates-bdus-appointment.jpg" },
        { label: "Project documentation", issuer: "Women's Sewing Machine Livelihood Project", meta: "Bangladesh NGO Foundation-supported · 2024–25", status: "request" }
      ]
    },
    {
      group: "Leadership and community organisations",
      items: [
        { label: "Scholarship examination certificate", issuer: "BYSO — Tangail Branch", meta: "21 February 2019 · signed as President (2018-19)", status: "held", scan: "assets/img/gallery/child-04.jpg" },
        { label: "Verification of presidency", issuer: "BYSO — Tangail District Branch", meta: "15 July 2026 · President, June 2018 – February 2020", status: "held", scan: "assets/img/gallery/certificates-byso-president.jpg" },
        { label: "Verification of presidency", issuer: "Rajabari Honours Association", meta: "President since 1 January 2026", status: "held", scan: "assets/img/gallery/documents-rajabari-president.jpg" },
        { label: "Blood donation service certification", issuer: "Udayan Foundation, Elenga", meta: "15 July 2026 · voluntary blood donation organisation", status: "held", scan: "assets/img/gallery/documents-udayan-membership.jpg" },
        { label: "Library membership letter", issuer: "Gopinath Majumdar Smriti Granthagar, Elenga", meta: "12 September 2026 · member since founding", status: "held", scan: "assets/img/gallery/documents-granthagar-membership.jpg" },
        { label: "Membership letter", issuer: "Bangladesh Udichi Shilpi Goshthi, Tangail", meta: "10 August 2026 · Elenga branch, then Tangail District Council", status: "held", scan: "assets/img/gallery/documents-udichi-membership.jpg" }
      ]
    },
    {
      group: "Writing and media",
      items: [
        { label: "Membership letter", issuer: "Elenga Sahitya Sangsad", meta: "21 August 2026 · literary society", status: "held", scan: "assets/img/gallery/documents-sahitya-membership.jpg" },
        { label: "Verification of news work", issuer: "Khobor Jog news portal", meta: "17 August 2026 · 31 Aug 2024 – Feb 2025", status: "held", scan: "assets/img/gallery/documents-khoborjog-letter.jpg" }
      ]
    },
    {
      group: "Education and training",
      items: [
        { label: "Bangladesh Scouts certificate", issuer: "Elenga High School Scout Group · Kalihati Upazila", meta: "Active in Scouting, classes VI–X", status: "held", scan: "assets/img/gallery/certificates-scouts.jpg" },
        { label: "HSC academic transcript", issuer: "Board of Intermediate and Secondary Education, Dhaka", meta: "Notre Dame College, Mymensingh · GPA 3.83", status: "held", scan: "assets/img/gallery/certificates-hsc-transcript.jpg" },
        { label: "JSC academic transcript", issuer: "Board of Intermediate and Secondary Education, Dhaka", meta: "Elenga High School · GPA 5.00", status: "held", scan: "assets/img/gallery/certificates-jsc-transcript.jpg" },
        { label: "SSC academic transcript", issuer: "Board of Intermediate and Secondary Education, Dhaka", meta: "Elenga High School, 2017 · GPA 5.00", status: "held", scan: "assets/img/gallery/certificates-ssc-transcript.jpg" },
        { label: "Honours 4th year result sheet", issuer: "National University of Bangladesh", meta: "4th Year Examination 2023 · published 13 November 2025", status: "held", scan: "assets/img/gallery/certificates-nu-4th-year.jpg" },
        { label: "Bachelor's degree certificate and final transcript", issuer: "National University of Bangladesh", meta: "Final consolidated CGPA still to be confirmed", status: "request" },
        { label: "Astro-Olympiad participation certificate", issuer: "Bangladesh Astro-Olympiad National Committee", meta: "13th Bangladesh Astro-Olympiad, 2018 · divisional level · recipient name not filled in", status: "held", scan: "assets/img/gallery/certificates-astro-olympiad.jpg" },
        { label: "BSAFE — UN security certification", issuer: "United Nations Department of Safety and Security", meta: "23 September 2026 · confirmation number · does not expire", status: "held", scan: "assets/img/gallery/training-bsafe-undss.jpg" },
        { label: "Safeguarding Essentials", issuer: "Kaya · Humanitarian Leadership Academy", meta: "20 September 2026 · QR-verifiable", status: "held", scan: "assets/img/gallery/training-safeguarding-kaya.jpg" },
        { label: "MEAL Essentials", issuer: "DisasterReady · Cornerstone OnDemand Foundation", meta: "21 September 2026", status: "held", scan: "assets/img/gallery/training-meal-disasterready.jpg" },
        { label: "Project Management Essentials", issuer: "DisasterReady · Cornerstone OnDemand Foundation", meta: "23 September 2026", status: "held", scan: "assets/img/gallery/training-projectmgmt-disasterready.jpg" },
        { label: "PSEA Facilitator — Protection from Sexual Exploitation and Abuse", issuer: "UNICEF · Agora learning platform", meta: "30 September 2026 · QR-verifiable", status: "held", scan: "assets/img/gallery/training-psea-unicef.jpg" },
        { label: "Core Humanitarian Essentials", issuer: "DisasterReady · Cornerstone OnDemand Foundation", meta: "27 September 2026 · 6 hours 30 minutes", status: "held", scan: "assets/img/gallery/training-core-humanitarian-disasterready.jpg" },
        { label: "References", issuer: "Three referees", meta: "Contact details provided to employers on request", status: "request" }
      ]
    }
  ],

  privacy: {
    title: "Privacy and safeguarding",
    text: "Identity documents, certificates carrying registration numbers, referee contact details and any record identifying a programme beneficiary are deliberately not published on this site. They are shared directly with employers on request."
  },

  close: {
    head: "Available from November 2026",
    text: "Open to programme, community-engagement and project-support roles anywhere in Bangladesh, including Cox's Bazar.",
    endline: "Saad Ibn Mansur · Elenga, Kalihati, Tangail · Last updated September 2026",
    /* prefilled into the To and Subject of the message when a visitor
       clicks "Send an email", so the enquiry arrives already labelled */
    mailSubject: "Enquiry via your portfolio"
  }
};
