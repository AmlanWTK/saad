# Saad Ibn Mansur — portfolio site

A static portfolio published with GitHub Pages.

- **Portfolio:** https://amlanwtk.github.io/saad/
- **Intake form** (private working tool): https://amlanwtk.github.io/saad/intake/

## How it is built

Plain HTML, CSS and vanilla JavaScript — no framework, no build step, no server.
GitHub Pages only serves static files, so this is deliberate: the repository is
exactly what visitors see, and updating the site means editing one file.

```
index.html               page structure (rarely needs editing)
assets/css/style.css     all styling, light and dark themes
assets/js/data.js        >>> ALL CONTENT LIVES HERE <<<
assets/js/app.js         renders the page from data.js
assets/img/              photographs (portrait, project photos)
assets/img/gallery/      the evidence archive images
documents/               public PDFs (CV)
tools/build-gallery.mjs  bulk-import helper for gallery images
intake/                  the career intake questionnaire
```

## Adding content

Everything on the page comes from `assets/js/data.js`. To add a project, a
photograph, a document or a piece of writing, edit that file and commit.
Photographs go in `assets/img/` with the exact filename used in `data.js`;
until the file exists the page shows a dashed placeholder naming the file it
expects, so nothing looks broken while the site is being filled in.

```bash
git add -A
git commit -m "Add flood relief photographs"
git push
```

GitHub Pages republishes within a minute.

## The evidence gallery

The Gallery section is a filterable archive of every photograph, letter and
certificate. Entries live in the `gallery` array in `assets/js/data.js`; each
one carries a title, description, date, category and the project or
organisation it belongs to, and opens in a record viewer showing all of it.
Project sections keep their own photographs; the gallery is the master archive.

To add many images at once, name the files
`assets/img/gallery/<category>-<nn>.jpg` — the category prefixes are `relief`,
`community`, `women`, `child`, `leadership`, `media`, `cultural`, `awards`,
`certificates` and `documents` — then run:

```bash
node tools/build-gallery.mjs
```

It prints ready-made entries for every image not yet listed, which you paste
into the gallery array and complete. Categories with no records are hidden
from the filter bar automatically, and the grid pages twelve at a time, so the
section stays fast with hundreds of images.

## What must NOT be published here

This repository is public. Do not commit:

- NID, birth certificate, passport, or any signature at full resolution
- Certificates showing registration or roll numbers (crop or blur them first)
- Referee phone numbers or email addresses
- Names, faces, addresses or lists of programme beneficiaries

The last one matters most professionally. Publishing identifiable aid
recipients — particularly women and children — without written consent is a
safeguarding failure, and the organisations Saad is applying to (UNICEF, Save
the Children, CARE, BRAC) screen for exactly that. Use wide shots of the
activity rather than close-ups of recipients, and keep sensitive documents in
a private Drive folder shared with employers on request. The site says so
openly in its Verification section, which itself reads as good practice.

## Enabling GitHub Pages (one time)

Repository → **Settings → Pages → Build and deployment → Source: Deploy from a
branch → Branch: `main`, folder `/ (root)` → Save.**

## Local preview

Opening `index.html` directly works, because content is loaded from a plain
script rather than by `fetch`. For a closer match to the live site:

```bash
python -m http.server 8000
```
