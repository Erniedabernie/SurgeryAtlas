# HST Atlas

Operative reference and post-op note templates for general surgery. One self-contained page, built for a phone.

- **Before the case:** steps, anatomy, pitfalls and bail-outs, theatre set-up, consent discussion with figures to quote, and the questions a senior asks.
- **After the case:** a complete operation record in HA style to read and type into CMS, with wording for when the case left the plan, plus post-op orders.

No patient data is stored or entered anywhere in the app.

## Contents

| Path | Purpose |
|---|---|
| `index.html` | The built app. This is what GitHub Pages serves. Do not edit it by hand |
| `src/data/*.js` | One file per procedure: team, steps, anatomy, pitfalls, set-up, consent, post-op note, viva, sources, diagrams |
| `src/app.js`, `src/app.css`, `src/body.html` | The shell: library, team lists, on call, search, contents and section pages |
| `src/organs.js` | Line drawings of the organ on each team tile |
| `src/head.html`, `src/defs.html` | Page head with the base stylesheet; the mark and icon symbols |
| `build.py` | Joins `src/` into `index.html` |
| `manifest.webmanifest`, `icon-*.png`, `apple-touch-icon.png`, `favicon.*` | Home-screen install and icons |

## Editing

Change a file in `src/`, then run:

```bash
python3 build.py
```

To add a procedure, copy a file in `src/data/`, change its `id`, and add the id to `order` in `build.py`.

In note text, `[[...]]` marks a default to amend and `{{...}}` marks a safety claim.

Every page carries a `team`: EGI (upper GI), CRS (colorectal and anorectal), HBP (hepatobiliary), BRS (breast), ECS (endocrine) or GEN (team not known). Team names and order are in `TEAMS` in `src/app.js`; each team's colour is one line in `src/app.css` (`.team-EGI` and so on), drawn from the EDB category colours.

## Layout

The bottom bar has Library, On call, Conditions and Search. The library opens on one tile per team. An operation opens on its contents page; each section (Steps, Anatomy, Pitfalls, Set-up, Consent, Viva, Post-op note) is a page of its own. Links: `#library`, `#team/EGI`, `#oncall`, `#search`, `#p/<id>`, `#p/<id>/<section>`.

A reference entry is a one-screen page for an operation you watch or are examined on but do not write up. Give it `depth:'ref'` and the fields `what`, `when`, `outline`, `points`, `viva`, `sources` and `dg.ref`; see `src/data/total-gastrectomy.js`.

## Corrections

Every section page ends with "Suggest a correction". It opens a new issue in this repository with the page, section and version filled in. Write what is wrong and what it should say; the issue list is the queue of fixes.

## Status

Draft pages:

- 17/11/2026: laparoscopic appendicectomy, laparoscopic cholecystectomy, open inguinal hernia repair, hemithyroidectomy
- 18/11/2026: repair of perforated peptic ulcer, under-running of bleeding duodenal ulcer, OGD and endoscopic haemostasis
- 19/11/2026: laparoscopic wedge resection of gastric GIST, gastrojejunostomy and feeding jejunostomy, laparoscopic distal gastrectomy with D2 lymphadenectomy; reference entry for total and completion gastrectomy
- 19/11/2026: laparotomy for adhesive small bowel obstruction, Hartmann’s procedure, emergency groin hernia repair, drainage of perianal abscess, trauma laparotomy and damage control
- 23/11/2026: percutaneous endoscopic gastrostomy (PEG); redesign with team tiles and contents-first pages

Decision support only — verify against local protocols.

© Ernest Tung 2026 · EDB v2.4.0
