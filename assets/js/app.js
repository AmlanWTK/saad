/* Renderer — all content lives in data.js. */
(function () {
  "use strict";
  var S = window.SITE || {}, P = S.person || {};
  function $(i) { return document.getElementById(i); }
  function el(t, c, x) { var n = document.createElement(t); if (c) n.className = c; if (x != null) n.textContent = x; return n; }
  function ns(tag) { return document.createElementNS("http://www.w3.org/2000/svg", tag); }
  function icon(d) {
    var s = ns("svg"); s.setAttribute("viewBox", "0 0 24 24"); s.setAttribute("fill", "none");
    s.setAttribute("stroke", "currentColor"); s.setAttribute("stroke-width", "1.7");
    s.setAttribute("stroke-linecap", "round"); s.setAttribute("stroke-linejoin", "round"); s.setAttribute("aria-hidden", "true");
    var p = ns("path"); p.setAttribute("d", d); s.appendChild(p); return s;
  }
  var I = {
    photo: "M3 5h18v14H3zM3 15l5-5 4 4 3-3 6 6",
    doc: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M8 13h8M8 17h5",
    award: "M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM8.2 13.5 7 22l5-2.6L17 22l-1.2-8.5",
    check: "m5 12 5 5L20 7"
  };

  /* ---------- count-up (final value is in the DOM first) ---------- */
  var REDUCE = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function whenSeen(node, cb) {
    if (!window.IntersectionObserver) { cb(); return; }
    var o = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { o.unobserve(e.target); cb(); } });
    }, { threshold: 0.35 });
    o.observe(node);
  }
  function countUp(node, finalText, delay, dur) {
    var m = String(finalText).match(/^(\D*)([\d,]+)(.*)$/);
    if (!m) return;
    var pre = m[1], grouped = m[2].indexOf(",") !== -1,
        target = parseInt(m[2].replace(/,/g, ""), 10), post = m[3];
    if (!isFinite(target) || target < 2) return;
    dur = dur || 1500; var t0 = null;
    function fmt(v) { return pre + (grouped ? v.toLocaleString("en-US") : String(v)) + post; }
    function frame(ts) {
      if (t0 === null) t0 = ts;
      var t = Math.min(1, (ts - t0) / dur);
      node.textContent = fmt(Math.round(target * (1 - Math.pow(1 - t, 3))));
      if (t < 1) requestAnimationFrame(frame); else node.textContent = finalText;
    }
    node.textContent = fmt(0);
    requestAnimationFrame(function () { setTimeout(function () { requestAnimationFrame(frame); }, delay || 0); });
  }
  function animate(host, node, value, i, dur) {
    if (REDUCE) return;
    whenSeen(host, function () { countUp(node, value, i * 70, dur); });
  }

  /* ---------- photo component ---------- */
  function photo(spec, shape, withCap, group) {
    if (group && group.indexOf(spec) < 0) group.push(spec);
    var wrap = el("div");
    var fig = el("figure", "photo " + (shape || "wide"));
    var btn = el("button"); btn.type = "button";
    btn.setAttribute("aria-label", "Enlarge: " + (spec.title || spec.caption || "photograph"));
    var im = new Image(); im.alt = spec.caption || spec.title || ""; im.loading = "lazy";
    im.onerror = function () {
      spec.missing = true;
      var e = el("div", "photo-empty");
      var ring = el("div", "ring"); ring.appendChild(icon(I.photo)); e.appendChild(ring);
      e.appendChild(el("span", "t", spec.caption || spec.title || "Photograph"));
      e.appendChild(el("code", null, spec.src.replace(/^assets\/img\//, "")));
      btn.replaceWith(e);
    };
    im.src = spec.src;
    btn.appendChild(im);
    btn.addEventListener("click", function () { openView(group || [spec], spec); });
    fig.appendChild(btn);
    wrap.appendChild(fig);
    if (withCap && spec.caption) wrap.appendChild(el("p", "cap", spec.caption));
    return wrap;
  }

  /* ---------- hero ---------- */
  $("heroEyebrow").textContent = P.eyebrow || "";
  $("heroName").innerHTML = P.nameHtml || (P.name || "");
  $("heroLede").textContent = P.lede || "";
  document.title = (P.name || "Portfolio") + " — Community Development Portfolio";
  (P.pills || []).forEach(function (t) {
    var s = el("span", "pill"); s.appendChild(el("i")); s.appendChild(document.createTextNode(t));
    $("heroPills").appendChild(s);
  });
  var cta = $("heroCta");
  if (P.cvFile) { var a = el("a", "btn btn-1", "Download CV"); a.href = P.cvFile; a.setAttribute("download", ""); cta.appendChild(a);
                  var nc = $("navCv"); nc.href = P.cvFile; }
  else { cta.appendChild(el("span", "btn btn-q", "CV — add the final PDF")); $("navCv").remove(); }
  if (P.email) { var b = el("a", "btn btn-2", "Get in touch"); b.href = gmailHref(); b.target = "_blank"; b.rel = "noopener"; cta.appendChild(b); }

  [$("portrait"), $("portrait2")].forEach(function (img) {
    if (!img) return;
    img.alt = P.name || "Portrait";
    img.onerror = function () { img.onerror = null; img.src = "assets/img/portrait-placeholder.svg"; };
    img.src = P.portrait || "assets/img/portrait-placeholder.svg";
  });
  if (S.heroBadge) {
    var bd = $("heroBadge");
    var ic = el("div", "ic"); ic.appendChild(icon(I.award)); bd.appendChild(ic);
    var tx = el("div"); tx.appendChild(el("b", null, S.heroBadge.title)); tx.appendChild(el("span", null, S.heroBadge.sub));
    bd.appendChild(tx);
  }

  /* ---------- metrics ---------- */
  (S.metrics || []).forEach(function (m, i) {
    var d = el("div", "metric"), n = el("span", "num", m.n);
    d.appendChild(n); d.appendChild(el("span", "lb", m.l));
    if (m.s) d.appendChild(el("span", "sub", m.s));
    $("metrics").appendChild(d); animate(d, n, m.n, i, 1500);
  });

  /* ---------- statement + focus ---------- */
  $("statement").textContent = S.statement || "";
  (S.about || []).forEach(function (t) { $("aboutBody").appendChild(el("p", null, t)); });
  (S.focus || []).forEach(function (t) {
    var li = el("li"); li.appendChild(icon(I.check)); li.appendChild(el("span", null, t));
    $("focusList").appendChild(li);
  });

  /* ---------- project spreads ---------- */
  $("workIntro").textContent = S.workIntro || "";
  (S.projects || []).forEach(function (pr, i) {
    var sec = el("div", "spread" + (i % 2 ? " flip" : ""));
    var media = el("div", "spread-media"), grp = [];
    if (pr.lead) media.appendChild(photo(pr.lead, "wide", true, grp));
    if (pr.strip && pr.strip.length) {
      var strip = el("div", "strip");
      pr.strip.forEach(function (sh) { strip.appendChild(photo(sh, "sq", false, grp)); });
      media.appendChild(strip);
    }
    var body = el("div");
    body.appendChild(el("span", "kicker", pr.kicker));
    body.appendChild(el("h3", null, pr.title));
    if (pr.titleBn) body.appendChild(el("p", "bn-sub bn", pr.titleBn));
    body.appendChild(el("p", "when", pr.when));
    body.appendChild(el("p", "desc", pr.desc));
    if (pr.stats) {
      var row = el("div", "statrow");
      pr.stats.forEach(function (st) {
        var c = el("div"); c.appendChild(el("span", "v", st[0])); c.appendChild(el("span", "k", st[1])); row.appendChild(c);
      });
      body.appendChild(row);
    }
    if (pr.outcomes) {
      var ul = el("ul", "did");
      pr.outcomes.forEach(function (o) { ul.appendChild(el("li", null, o)); });
      body.appendChild(ul);
    }
    var inArchive = (S.gallery || []).filter(function (g) { return g.project === pr.id; }).length;
    if (inArchive) {
      var gl = el("a", "gal-link", "See all " + inArchive + " records from this project →");
      gl.href = "#gallery";
      gl.addEventListener("click", function () { if (window.galleryFocus) window.galleryFocus(pr.id); });
      body.appendChild(gl);
    }
    sec.appendChild(media); sec.appendChild(body);
    $("spreads").appendChild(sec);
  });

  /* ---------- experience records ---------- */
  $("expIntro").textContent = S.expIntro || "";
  var pair = null;
  (S.experience || []).forEach(function (e) {
    var r = el("div", "rec" + (e.compact ? " compact" : ""));
    var w = el("div", "rec-when", e.when);
    if (e.tag) w.appendChild(el("span", "tag", e.tag));
    r.appendChild(w);
    var c = el("div");
    c.appendChild(el("h3", null, e.role));
    c.appendChild(el("p", "org", e.org));
    if (e.ctx) c.appendChild(el("p", "ctx", e.ctx));
    if (e.bullets) {
      var box = el("div", "rec-cols"), ul = el("ul");
      e.bullets.forEach(function (b) { ul.appendChild(el("li", null, b)); });
      box.appendChild(ul); c.appendChild(box);
    }
    if (e.tags) {
      var tg = el("div", "tags");
      e.tags.forEach(function (t) { tg.appendChild(el("span", "tag-s", t)); });
      c.appendChild(tg);
    }
    r.appendChild(c);
    if (e.compact) {
      if (!pair) { pair = el("div", "rec-pair"); $("records").appendChild(pair); }
      pair.appendChild(r);
      if (pair.children.length === 2) pair = null;      /* start a new row */
    } else { pair = null; $("records").appendChild(r); }
  });

  /* ---------- leadership ---------- */
  $("leadIntro").textContent = S.leadIntro || "";
  (S.leadership || []).forEach(function (L) {
    var card = el("div", "lcard" + (L.feature ? " feature" : ""));
    var inner = el("div");
    inner.appendChild(el("p", "when", L.when));
    inner.appendChild(el("h3", null, L.role));
    inner.appendChild(el("p", "org", L.org));
    if (L.ctx) inner.appendChild(el("p", "org", L.ctx));
    if (L.bullets) {
      var ul = el("ul", "did");
      L.bullets.forEach(function (b) { ul.appendChild(el("li", null, b)); });
      inner.appendChild(ul);
    }
    if (L.feature && L.photo) {
      var g = el("div", "feature-grid"); g.appendChild(inner); g.appendChild(photo(L.photo, "tall", true, [L.photo]));   /* caption under the portrait */
      card.appendChild(g);
    } else {
      card.appendChild(inner);
      if (L.photo) { var ph = photo(L.photo, "wide", true, [L.photo]); ph.style.marginTop = "18px"; card.appendChild(ph); }
    }
    $("leadGrid").appendChild(card);
  });

  /* ---------- international certification ---------- */
  var TR = S.training || {};
  $("trainIntro").textContent = S.trainIntro || "";
  (TR.items || []).forEach(function (t) {
    var card = el("article", "ccard");

    var shot = el("button", "cshot"); shot.type = "button";
    shot.setAttribute("aria-label", "Enlarge certificate: " + t.title);
    var im = new Image(); im.alt = t.title + " certificate"; im.loading = "lazy";
    im.onerror = function () { shot.remove(); };
    im.src = t.scan;
    shot.appendChild(im);
    /* open in the same record viewer the gallery uses */
    shot.addEventListener("click", function () {
      openView([{ src: t.scan, cat: "training", type: "doc", date: t.date,
                  rel: t.issuer, title: t.title, desc: t.covers }], null);
    });
    card.appendChild(shot);

    var body = el("div", "cbody");
    body.appendChild(el("h3", null, t.title));
    var iss = el("p", "cissuer"); iss.textContent = t.issuer;
    body.appendChild(iss);
    if (t.issuerNote) body.appendChild(el("p", "cnote", t.issuerNote));
    body.appendChild(el("p", "ccovers", t.covers));
    var foot = el("p", "cmeta");
    foot.appendChild(document.createTextNode(t.date));
    if (t.verify) { foot.appendChild(el("span", "sep", "·")); foot.appendChild(document.createTextNode(t.verify)); }
    body.appendChild(foot);
    /* the original certificate, so a recruiter can open the issuer's own file
       rather than take a photograph of it on trust */
    if (t.pdf) {
      var dl = el("a", "cpdf");
      dl.href = t.pdf;
      dl.target = "_blank";
      dl.rel = "noopener";
      dl.textContent = "Original certificate (PDF)";
      body.appendChild(dl);
    }
    card.appendChild(body);

    $("certGrid").appendChild(card);
  });
  /* six or more certificates read better three across than two */
  if ((TR.items || []).length >= 6) $("certGrid").classList.add("wide");
  $("certNext").textContent = TR.next || "";

  /* ---------- writing ---------- */
  $("writingIntro").textContent = S.writingIntro || "";
  var F = S.featured;
  if (F) {
    var f = el("article", "feat");
    if (F.photo) f.appendChild(photo(F.photo, "wide", true, [F.photo]));
    f.appendChild(el("span", "kicker", F.kicker));
    f.appendChild(el("h3", null, F.title));
    f.appendChild(el("p", "byline", F.byline));
    if (F.quote) f.appendChild(el("blockquote", null, F.quote));
    if (F.body) {
      var d = el("details"); d.appendChild(el("summary", null, "Read the full piece"));
      var full = el("div", "full");
      F.body.forEach(function (x) { full.appendChild(el("p", null, x)); });
      d.appendChild(full); f.appendChild(d);
    }
    $("featWriting").appendChild(f);
  }
  (S.writing || []).forEach(function (w) {
    var c = el("article", "wcard");
    var h = el("h3", null, w.title); if (w.bn) h.classList.add("bn");
    c.appendChild(h);
    c.appendChild(el("p", "byline", w.byline));
    if (w.excerpt) { var ex = el("p", "ex" + (w.bn ? " bn" : "")); ex.textContent = w.excerpt; c.appendChild(ex); }
    if (w.body) {
      var d2 = el("details"); d2.appendChild(el("summary", null, w.verse ? "Read the poem" : "Read in full"));
      var fl = el("div", "full" + (w.verse ? " verse" : "") + (w.bn ? " bn" : ""));
      w.body.forEach(function (x) { fl.appendChild(el("p", null, x)); });
      d2.appendChild(fl); c.appendChild(d2);
    }
    $("stackWriting").appendChild(c);
  });

  /* ---------- evidence ---------- */
  $("evIntro").textContent = S.evIntro || "";
  if (S.honour) {
    var h2 = el("div", "honour");
    var seal = el("div", "seal"); seal.appendChild(icon(I.award)); h2.appendChild(seal);
    var t2 = el("div"); t2.appendChild(el("h3", null, S.honour.title)); t2.appendChild(el("p", null, S.honour.note));
    h2.appendChild(t2); $("honour").appendChild(h2);
  }
  var groups = S.documentGroups || [], all = [];
  groups.forEach(function (g) { all = all.concat(g.items); });
  var c2 = { held: 0, request: 0, pending: 0 };
  all.forEach(function (d) { c2[d.status] = (c2[d.status] || 0) + 1; });
  [[all.length, "documents listed"], [c2.held, "held and ready to send"],
   [c2.request, "shared on request"], [c2.pending, "training, in progress"]]
  .forEach(function (r, i) {
    var d = el("div", "ev-c"), n = el("span", "num", String(r[0]));
    d.appendChild(n); d.appendChild(el("span", null, r[1]));
    $("evCounts").appendChild(d); animate(d, n, String(r[0]), i, 900);
  });

  var LB = { held: "Held", request: "On request", pending: "In progress" };
  groups.forEach(function (g) {
    var wg = el("div", "dgroup"); wg.appendChild(el("h3", null, g.group));
    var grid = el("div", "dgrid");
    g.items.forEach(function (doc) {
      var card = el("div", "dcard");
      if (doc.scan) {
        var rec = { src: doc.scan, title: doc.label, rel: doc.issuer, desc: doc.meta || "", type: "doc" };
        var pv = el("button", "dpreview scan"); pv.type = "button";
        var im = new Image(); im.alt = doc.label; im.loading = "lazy";
        im.onerror = function () { rec.missing = true; pv.replaceWith(filerow(doc)); };
        im.src = doc.scan; pv.appendChild(im);
        pv.addEventListener("click", function () { openView([rec], rec); });
        card.appendChild(pv);
      } else card.appendChild(filerow(doc));
      var bd2 = el("div", "dbody");
      bd2.appendChild(el("span", "nm", doc.label));
      bd2.appendChild(el("span", "is", doc.issuer));
      if (doc.meta) bd2.appendChild(el("span", "is", doc.meta));
      var ft = el("div", "dfoot");
      ft.appendChild(el("span", "st " + doc.status, LB[doc.status] || "Pending"));
      if (doc.file) { var lk = el("a", null, "Open PDF"); lk.href = doc.file; lk.rel = "noopener"; ft.appendChild(lk); }
      bd2.appendChild(ft); card.appendChild(bd2); grid.appendChild(card);
    });
    wg.appendChild(grid); $("documents").appendChild(wg);
  });
  function filerow(doc) {
    var d = el("div", "dpreview");
    var f = el("div", "fic"); f.appendChild(icon(I.doc)); d.appendChild(f);
    d.appendChild(el("span", "ftx", doc.status === "held" ? "Held on file" : "Not published"));
    return d;
  }
  if (S.privacy) {
    $("privacy").appendChild(el("h4", null, S.privacy.title));
    $("privacy").appendChild(el("p", null, S.privacy.text));
  }

  /* ---------- closing ---------- */
  var C = S.close || {};
  /* a bare mailto: opens an empty compose window; prefilling the subject means
     the enquiry arrives already labelled instead of blank */
  function mailSubject() { return (S.close || {}).mailSubject || ""; }
  function mailHref() {
    var to = "mailto:" + P.email, su = mailSubject();
    return su ? to + "?subject=" + encodeURIComponent(su) : to;
  }
  /* visitors reading in a browser often have no desktop mail client registered,
     so a mailto: click does nothing at all; this is the escape hatch */
  /* Gmail's compose URL. /u/0/ picks the first signed-in account rather than
     dropping a multi-account user on an account chooser; tf=1 forces the full
     compose view instead of the corner pop-out, so the form is unmissable.
     Signed-out visitors get Google's sign-in and land on compose afterwards. */
  function gmailHref() {
    var su = mailSubject();
    return "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=" + encodeURIComponent(P.email) +
      (su ? "&su=" + encodeURIComponent(su) : "");
  }
  $("closeHead").textContent = C.head || "Contact";
  $("closeText").textContent = C.text || "";
  function ci(k, v, href) {
    var d = el("div"); d.appendChild(el("dt", null, k));
    var dd = el("dd");
    if (href) { var a2 = el("a", null, v); a2.href = href; dd.appendChild(a2); } else dd.textContent = v;
    d.appendChild(dd); $("cinfo").appendChild(d);
  }
  if (P.email) ci("Email", P.email, mailHref());
  if (P.phone) ci("Phone", P.phone, "tel:" + P.phone.replace(/[^+0-9]/g, ""));
  ci("Based in", "Dhaka · Tangail");
  ci("Languages", "Bangla, English");
  var cc = $("closeCta");
  /* most visitors read this in a browser with no desktop mail client registered,
     where a mailto: click does nothing at all and looks like a broken button;
     Gmail's compose screen is the destination that actually appears */
  if (P.email) {
    var e1 = el("a", "btn btn-1", "Send an email");
    e1.href = gmailHref(); e1.target = "_blank"; e1.rel = "noopener";
    cc.appendChild(e1);
  }
  if (P.cvFile) { var e2 = el("a", "btn btn-2", "Download CV"); e2.href = P.cvFile; e2.setAttribute("download", ""); cc.appendChild(e2); }
  if (P.email) {
    var alt = el("p", "mailalt");
    var g = el("a", null, "use your own mail app"); g.href = mailHref();
    var cpy = el("button", "linkish", "copy the address"); cpy.type = "button";
    cpy.addEventListener("click", function () {
      var done = function () { cpy.textContent = "address copied"; };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(P.email).then(done, function () { cpy.textContent = P.email; });
      } else { cpy.textContent = P.email; }
    });
    alt.appendChild(document.createTextNode("Not a Gmail user? "));
    alt.appendChild(g);
    alt.appendChild(document.createTextNode(" or "));
    alt.appendChild(cpy);
    alt.appendChild(document.createTextNode("."));
    cc.parentNode.insertBefore(alt, cc.nextSibling);
  }
  $("endline").textContent = C.endline || "";

  /* ---------- gallery ---------- */
  var CATS = S.galleryCategories || [], GAL = S.gallery || [];
  var CATLABEL = {}; CATS.forEach(function (c) { CATLABEL[c.key] = c.label; });
  var filter = "all", shown = 0, PAGE = 12, visible = [];

  if ($("galIntro")) $("galIntro").textContent = S.galleryIntro || "";
  if ($("galNote")) $("galNote").textContent = S.galleryNote || "";

  function catCount(k) { return k === "all" ? GAL.length : GAL.filter(function (g) { return g.cat === k; }).length; }

  function buildFilters() {
    var host = $("filters"); if (!host) return;
    var defs = [{ key: "all", label: "All records" }].concat(CATS);
    defs.forEach(function (c) {
      var n = catCount(c.key); if (!n) return;              /* hide empty categories */
      var b = el("button"); b.type = "button"; b.dataset.key = c.key;
      b.setAttribute("aria-pressed", c.key === filter ? "true" : "false");
      b.appendChild(document.createTextNode(c.label));
      b.appendChild(el("span", "n", String(n)));
      b.addEventListener("click", function () { setFilter(c.key); });
      host.appendChild(b);
    });
  }
  function setFilter(key, keepScroll) {
    filter = key; shown = 0;
    [].forEach.call($("filters").children, function (b) {
      b.setAttribute("aria-pressed", b.dataset.key === key ? "true" : "false");
    });
    $("galGrid").innerHTML = ""; renderMore();
    if (!keepScroll) document.getElementById("gallery").scrollIntoView({ behavior: REDUCE ? "auto" : "smooth" });
  }
  /* project spreads call this to jump into a filtered view */
  window.galleryFocus = function (projectId) {
    var items = GAL.filter(function (g) { return g.project === projectId; });
    if (!items.length) return;
    setFilter(items[0].cat, true);
  };

  function tile(item) {
    var card = el("div", "gitem" + (item.type === "doc" ? " doc" : ""));
    var btn = el("button", "gshot"); btn.type = "button";
    btn.setAttribute("aria-label", "Open record: " + item.title);
    var im = new Image(); im.alt = item.title; im.loading = "lazy";
    im.onerror = function () {
      item.missing = true;
      var ph = el("div", "ph");
      var ring = el("div", "ring"); ring.appendChild(icon(item.type === "doc" ? I.doc : I.photo));
      ph.appendChild(ring);
      ph.appendChild(el("code", null, item.src.replace(/^assets\/img\/gallery\//, "")));
      im.replaceWith(ph);
    };
    im.src = item.src;
    btn.appendChild(im);
    btn.appendChild(el("span", "cat", CATLABEL[item.cat] || item.cat));
    btn.addEventListener("click", function () { openView(visible, item); });
    card.appendChild(btn);
    var body = el("div", "gbody");
    body.appendChild(el("span", "t", item.title));
    var m = el("span", "m");
    if (item.date) m.appendChild(document.createTextNode(item.date));
    if (item.rel) {
      if (item.date) m.appendChild(el("span", "sep", "·"));   /* no orphan separator on an undated record */
      m.appendChild(document.createTextNode(item.rel));
    }
    body.appendChild(m);
    card.appendChild(body);
    return card;
  }
  function renderMore() {
    visible = filter === "all" ? GAL.slice() : GAL.filter(function (g) { return g.cat === filter; });
    var next = visible.slice(shown, shown + PAGE);
    next.forEach(function (it) { $("galGrid").appendChild(tile(it)); });
    shown += next.length;
    $("galEmpty").hidden = visible.length > 0;
    $("galMore").parentNode.style.display = shown < visible.length ? "flex" : "none";
    $("galMore").textContent = "Show more records (" + (visible.length - shown) + " remaining)";
    $("galCount").innerHTML = "";
    $("galCount").appendChild(el("b", null, String(visible.length)));
    $("galCount").appendChild(document.createTextNode(
      " record" + (visible.length === 1 ? "" : "s") +
      (filter === "all" ? " across " + CATS.filter(function (c) { return catCount(c.key); }).length + " categories" : " in this category")));
  }
  if ($("galGrid")) {
    buildFilters(); renderMore();
    $("galMore").addEventListener("click", renderMore);
  }

  /* ---------- record viewer ---------- */
  var lb = $("lb"), VIEW = { list: [], i: 0 }, lastFocus = null;
  /* Project-spread photos and Evidence-card previews carry only a caption or a
     one-line meta string. Every one of them is also a full record in the gallery,
     so resolve by image path and open the rich record instead of the thin spec —
     that is what fills the panel beside the image. */
  var BY_SRC = {};
  (S.gallery || []).forEach(function (g) { if (g && g.src) BY_SRC[g.src] = g; });
  function resolve(spec) {
    if (!spec || !spec.src) return spec;
    if (spec.cat && spec.desc) return spec;          /* already a gallery record */
    var full = BY_SRC[spec.src];
    return full || spec;
  }

  function openView(list, spec) {
    var avail = (list || []).filter(Boolean).map(resolve);  /* records open even
                                                   before their image is uploaded —
                                                   the stage shows a placeholder */
    if (!avail.length) return;
    spec = resolve(spec);
    var at = avail.indexOf(spec); if (at < 0) at = 0;
    VIEW.list = avail; VIEW.i = at;
    paint(); lb.hidden = false; document.body.style.overflow = "hidden";
    lastFocus = document.activeElement; $("lbX").focus();
  }
  function closeView() { lb.hidden = true; document.body.style.overflow = ""; if (lastFocus) lastFocus.focus(); }
  function stepView(n) {
    if (VIEW.list.length < 2) return;
    VIEW.i = (VIEW.i + n + VIEW.list.length) % VIEW.list.length; paint();
  }
  function paint() {
    var it = VIEW.list[VIEW.i]; if (!it) return;
    var stage = $("vStage"); stage.innerHTML = "";
    var im = new Image(); im.alt = it.title || it.caption || "";
    im.onerror = function () {
      var ph = el("div", "ph");
      ph.appendChild(icon(it.type === "doc" ? I.doc : I.photo));
      ph.appendChild(el("span", null, "Image not uploaded yet"));
      ph.appendChild(el("code", null, it.src.replace(/^assets\/img\//, "")));
      stage.innerHTML = ""; stage.appendChild(ph);
    };
    im.src = it.src; stage.appendChild(im);

    var cat = $("vCat");
    if (it.cat) { cat.textContent = CATLABEL[it.cat] || it.cat; cat.hidden = false; } else cat.hidden = true;
    $("vTitle").textContent = it.title || it.caption || "";
    var desc = $("vDesc");
    if (it.desc) { desc.textContent = it.desc; desc.hidden = false; } else desc.hidden = true;

    var fields = $("vFields"); fields.innerHTML = "";
    function field(k, v) {
      if (!v) return;
      var w = el("div"); w.appendChild(el("dt", null, k)); w.appendChild(el("dd", null, v)); fields.appendChild(w);
    }
    field("Date", it.date);
    field(it.type === "doc" ? "Issued by" : "Related project or organisation", it.rel);
    field("Record type", it.type === "doc" ? "Document or certificate" : (it.cat ? "Photograph" : ""));
    field("Related CV entry", it.cv);
    fields.hidden = !fields.children.length;
    $("vPos").textContent = VIEW.list.length > 1 ? (VIEW.i + 1) + " of " + VIEW.list.length : "";
    $("lbP").hidden = $("lbF").hidden = VIEW.list.length < 2;
  }
  $("lbX").addEventListener("click", closeView);
  $("lbP").addEventListener("click", function () { stepView(-1); });
  $("lbF").addEventListener("click", function () { stepView(1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) closeView(); });
  document.addEventListener("keydown", function (e) {
    if (lb.hidden) return;
    if (e.key === "Escape") closeView();
    else if (e.key === "ArrowLeft") stepView(-1);
    else if (e.key === "ArrowRight") stepView(1);
  });

  /* ---------- nav ---------- */
  var links = [].slice.call(document.querySelectorAll(".nav a"));
  if (window.IntersectionObserver && links.length) {
    var ob = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (l) { l.classList.toggle("on", l.getAttribute("href") === "#" + en.target.id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    links.forEach(function (l) { var t = document.querySelector(l.getAttribute("href")); if (t) ob.observe(t); });
  }
})();
