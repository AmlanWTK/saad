GALLERY IMAGES
==============
Drop gallery photographs and scans in this folder, named exactly as the
entries in assets/js/data.js reference them (gallery/relief-01.jpg etc.).

Adding many images at once
--------------------------
1. Name each file:  <category-slug>-<number>.jpg
   category slugs:  relief  community  women  child  leadership
                    media   cultural   awards  certificates  documents
   e.g. relief-08.jpg, women-05.jpg, awards-02.jpg
2. Run:  node tools/build-gallery.mjs
   It scans this folder and prints ready-made data.js entries for every
   file that is not already listed. Paste them into the gallery array and
   fill in the title, description and date.

Preparation
-----------
Resize to about 1600px on the long side, save as JPG under ~400KB.
Scans of letters and certificates: photograph or scan straight, crop to the
page, and blur any registration or roll number before saving.

SAFEGUARDING — read before uploading
------------------------------------
Do not publish photographs that identify aid recipients: close-up faces of
women or children receiving assistance, beneficiary lists, or anything
showing a name, address or NID. Wide shots of the activity carry the same
evidential weight without exposing anyone. If in doubt, leave it out — it
can still be shown privately to an employer.
