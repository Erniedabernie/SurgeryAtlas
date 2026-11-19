P.push({
id:'perforated-peptic-ulcer', name:'Repair of perforated peptic ulcer', aka:'ppu perforated duodenal ulcer perforated gastric ulcer graham patch omental patch omentopexy perforation hollow viscus pneumoperitoneum peritonitis',
system:'Upper GI', list:'emergency', approach:'Laparoscopic, or open',
aim:'Close the hole, clear the soiling, take tissue from any gastric ulcer, and get out. The operation is short; the sepsis is the disease.',
status:'Draft 0.1 · 18/11/2026 · sourced, not yet tested by you in theatre',

steps:[
{t:'Checks and position', how:'WHO checklist. Rapid-sequence general anaesthesia. Ryle’s tube and urinary catheter in. Antibiotics running. Modified Lloyd-Davies position, legs apart.', why:'The surgeon stands between the legs and looks straight up at the pylorus. The Ryle’s tube decompresses the stomach now and inflates it for the leak test later.'},
{t:'Access', how:'Supraumbilical vertical incision, linea alba split, peritoneum opened under vision. Hasson port. Carbon dioxide to 12 mmHg.', why:'Supraumbilical sits closer to the target, and the incision extends straight into an upper midline laparotomy if you convert.'},
{t:'Working ports', how:'10 mm left upper quadrant and 5 mm right upper quadrant ports under laparoscopic vision.', why:'From between the legs these become the right and left hands, triangulating on the pylorus.', tip:'If the liver edge falls over the duodenum, add a 5 mm epigastric port and lift it with a grasper rather than fighting it for the whole case.'},
{t:'Sample and survey', how:'Aspirate fluid and send it for bacterial and fungal culture. Lift the liver edge. Follow the fibrin and bile staining to the anterior pylorus and D1.', why:'Cultures guide the antibiotics (WSES 2020, 1C). Fibrin plaques cluster over the hole.', tip:'Not where you expected? Look along the lesser curve, then open the gastrocolic ligament for a posterior gastric ulcer. Free gas is not always an ulcer.'},
{t:'Decide', how:'Measure the hole, note the side of the pylorus it lies on, and feel the edge with an instrument: soft, indurated, or friable.', why:'Under 2 cm, primary repair. Over 2 cm, or a gastric ulcer that looks malignant, is a different operation. An unstable patient is converted.'},
{t:'Biopsy a gastric ulcer', how:'Gastric ulcer only: take biopsies from the rim before closing, or excise it if the site allows.', why:'10–16% of perforated gastric ulcers are cancers. The rim is lost once it is inside the closure.'},
{t:'Close', how:'Interrupted 3-0 Vicryl, full thickness through the anterior wall, about 5 mm back from the edge, placed along the long axis of the duodenum so the closure lies across it. Tie gently. Leave the tails long.', why:'A transverse closure does not narrow the outlet. Bites well back from the edge hold in oedematous tissue that tears at the margin.', tip:'Place every stitch before tying any. Each bite is easier to see while the hole is still open.'},
{t:'Omental patch', how:'Choose a tongue of omentum that reaches without tension. Lay it over the closure and tie the long tails loosely over it.', why:'It seals small gaps and supports friable edges. Tied tight it necroses.', tip:'If the tongue has to be pulled to reach, it will pull off when the stomach fills. Choose another.'},
{t:'Leak test', how:'Fill the right upper quadrant with saline, inflate the stomach with air through the Ryle’s tube, and watch for bubbles.', why:'A leak found now costs one more stitch. Found on day 4 it costs a relook.', tip:'Pinch D2 gently with a grasper so the air pressurises the repair instead of running down the duodenum.'},
{t:'Lavage', how:'Warm saline until the return is clear, then suck dry: right and left subphrenic spaces, Morison’s pouch, both gutters and the pelvis.', why:'Contamination collects in the dependent spaces. Any residue becomes an abscess.'},
{t:'Drains', how:'House practice: tubal drain via the left upper quadrant port to the pelvis, and via the right upper quadrant port to Morison’s pouch, each anchored with 2-0 Nylon.', why:'See “House and evidence” below. The guideline does not address drains.'},
{t:'Close', how:'Ports out under vision. Fascia with 2-0 Vicryl at the 10 mm sites, skin with 3-0 Ethilon. Local anaesthetic to the wounds. Counts confirmed. Biopsies and cultures labelled.', why:'Watching the ports come out is the only chance to see an abdominal wall bleeder.'}
],
house:[
['Approach','Laparoscopy first, convert if unsure','Laparoscopic if stable and the skills exist (WSES 2020, 2B). Open if unstable (1D).'],
['Omental patch','Graham patch routinely','Primary repair under 2 cm (2C). No recommendation for or against a patch.'],
['Gastric ulcer','Biopsy','Resect a large gastric ulcer when malignancy is suspected, with frozen section if available (2D).'],
['Lavage','6 L warm saline','Not addressed by the guideline.'],
['Drains','Two tubal drains','Not addressed by the guideline.'],
['Antibiotics','Unit regimen','Broad spectrum (1C). Culture for bacteria and fungi (1C). Stop at 3–5 days or when markers settle (2C).'],
['Non-operative','Not house practice','Not routine. Only in highly selected patients whose leak is sealed on water-soluble contrast (2C).']
],

anatomy:{
points:[
'D1: the first 5 cm of the duodenum. The first 2–3 cm, the bulb, is intraperitoneal and mobile. Anterior bulb ulcers perforate into the peritoneal cavity; posterior ones erode the gastroduodenal artery and bleed.',
'Pylorus: a thick ring under the finger, crossed on its front by the pyloric vein of Mayo. Proximal to it the ulcer is gastric and needs tissue; distal to it, duodenal.',
'Posterior gastric wall: a perforation here leaks into the lesser sac and is seen only after opening the gastrocolic ligament.',
'Omentum: pedicled tongues from the right side of the greater omentum, on the right gastroepiploic arcade, reach the pylorus without tension.',
'Spread: gastric contents run down the right paracolic gutter, so the pain can settle in the right iliac fossa and mimic appendicitis (Valentino’s appendix).'
],
table:{title:'Gastric ulcer site: modified Johnson', head:['Type','Site','Acid','Emergency option'], rows:[
['I','Lesser curve at the incisura','Normal or low','Wedge excision usually feasible'],
['II','Body, with a duodenal ulcer','High','Repair and biopsy; look for the duodenal ulcer'],
['III','Prepyloric','High','Behaves as duodenal; excision can narrow the outlet'],
['IV','High lesser curve, near the cardia','Low','Biopsy and patch; excision threatens the cardia'],
['V','Anywhere','Variable','Drug-induced (NSAID, aspirin); repair and biopsy']
]},
danger:[
'Posterior duodenal wall: a bite that crosses the lumen catches it and closes the duodenum.',
'Pylorus: a long closure along the axis narrows the outlet.',
'Gallbladder and bile duct: often stuck to the duodenum over a perforation. Adhesiolysis here is where the duct is injured.',
'Middle colic vessels: in the transverse mesocolon, close by when an omental tongue is freed from the colon.'
]
},

pitfalls:[
{t:'Cannot find the perforation', a:'Systematic survey: anterior pylorus and D1, lesser curve, then the lesser sac.', r:'Not found laparoscopically: convert. Still not found: think of other causes of free gas (colon, small bowel, diverticulum) and call.'},
{t:'Perforation 2 cm or larger', a:'Measure before you stitch. Do not keep suturing into tissue that will not hold.', r:'Omental plug, jejunal serosal patch, resection with the ampulla clear, or pyloric exclusion; duodenostomy only in extreme circumstances (WSES 2D). A senior decision: call.'},
{t:'Looks malignant', a:'Biopsy every gastric perforation. Suspect cancer with a hard rim, a mass, or nodes.', r:'Stable, little soiling, right surgeon present: resection may be done now. Otherwise close, biopsy, stage, and resect later. Call.'},
{t:'Sutures cut through', a:'Bites well back from the edge; tie to approximate, not to strangle.', r:'Lay omentum into the hole and tie the stitches over it without closing the defect first. The omentum is the seal.'},
{t:'Outlet narrowed', a:'Close across the axis; keep bites short.', r:'If the pylorus will not admit a finger at the end, call: a pyloroplasty or gastrojejunostomy may be needed.'},
{t:'Leak test positive', a:'Test every repair before leaving.', r:'Another stitch at the leaking point, re-secure the omentum, and test again.'},
{t:'Unstable on the table', a:'Pneumoperitoneum lowers venous return in a septic patient.', r:'Desufflate and convert (WSES 1D). In septic shock with deranged physiology: damage control — close quickly, lavage, drain, temporary closure, relook (2D).'},
{t:'Bleeding as well as perforation', a:'An anterior perforation can sit opposite a posterior bleeding ulcer.', r:'Fresh blood from the duodenum, or haematemesis after repair: suspect a kissing ulcer. Call.'},
{t:'Adhesions to the gallbladder', a:'Blunt and sharp dissection on the duodenum, not on the gallbladder.', r:'Bile in the field that is not from the ulcer: stop and call.'}
],
call:['Perforation not found','Perforation 2 cm or larger, or edges that will not hold','Suspected malignancy','Unstable, or septic shock developing on the table','Outlet narrowed after repair','Bleeding from the duodenum','You are thinking about converting'],

setup:{
theatre:['Modified Lloyd-Davies, legs apart, arms out','Surgeon between the legs; camera holder on the patient’s left','Monitor at the head, over the right shoulder','Ryle’s tube in and checked; urinary catheter','Head up once the ports are in'],
kit:['Hasson port, 10 mm and 5 mm ports','Laparoscope: check which size and angle your theatre stocks','Two graspers, two laparoscopic needle holders, scissors','3-0 Vicryl on a round-bodied needle','Suction-irrigation with several litres of warm saline','Culture bottles for bacteria and fungi; pots for rim biopsies','Two tube drains and 2-0 Nylon'],
standby:['Open laparotomy set with self-retaining retractor','PDS loop for mass closure','Linear staplers, if resection becomes likely','Extra 5 mm port and grasper for the liver']
},

consent:{
note:`Consent for laparoscopic repair of perforated peptic ulcer, possible open operation
Diagnosis and indication explained: [[perforated hollow viscus on CT, likely perforated peptic ulcer, with peritonitis]]
Nature of operation explained: keyhole operation under general anaesthesia to find and close the perforation with an omental patch, wash out the abdomen and place drains; possible conversion to open operation
Alternative discussed: non-operative management with drip, nasogastric tube and antibiotics; [[not suitable in view of peritonitis]]
Benefits: control of the source of infection; life-saving
General risks: bleeding, wound infection, chest infection, deep vein thrombosis and pulmonary embolism, cardiac events
Anaesthetic risks in brief: aspiration, possible admission to intensive care after operation; anaesthetist to discuss in detail
Specific risks: leak from repair which may need drainage or re-operation, intra-abdominal collection, prolonged ileus, narrowing of stomach outlet, injury to nearby organs, conversion to open, larger operation including partial gastrectomy if ulcer large or suspicious, cancer found on biopsy, recurrence of ulcer
Risk of death explained, [[Boey score __]]
Need for H. pylori treatment, acid suppression and follow-up endoscopy explained
Risks as charted in consent form acknowledged
Patient showed good understanding, questions answered
Consent signed`,
figures:[
['Death, Boey score 0','0%','Boey 1987, Hong Kong, 259 patients'],
['Death, Boey score 1','10%','Boey 1987'],
['Death, Boey score 2','45.5%','Boey 1987'],
['Death, Boey score 3','100%','Boey 1987; recent series lower'],
['Death after surgery for perforated ulcer','5.8%','Review of 56 studies'],
['Laparoscopy converted to open','12.4%','Review of 56 studies'],
['Perforated gastric ulcer that is cancer','10–16%','WSES 2020'],
['Ulcer back within a year without H. pylori eradication','38.1%','Ng 2000, Prince of Wales'],
['Ulcer back within a year after eradication','4.8%','Ng 2000']
],
versus:'Boey scores one point each for major medical illness, shock before operation, and perforation over 24 hours old. It was derived in duodenal perforations; recent cohorts put score 3 nearer 40% than 100%. Quote the score, then the patient in front of you.'
},

notes:{
findings:`[[CT: pneumoperitoneum with mural defect at D1]]
[[Turbid fluid in all four quadrants, fibrin over right upper quadrant]]
[[5 mm perforation at anterior D1 just distal to pylorus, edges soft]]
[[Rest of duodenum and stomach normal]]
[[No mass seen]]`,
procedure:`Modified Lloyd-Davies position, general anaesthesia, skin prepped and draped
[[Ryle's tube in situ]], urinary catheter inserted
Supraumbilical vertical incision, linea alba split, peritoneal cavity entered by {{direct method}}
Hasson trocar introduced, capnoperitoneum created at pressure [[12]] mmHg
Additional [[10 mm and 5 mm working ports inserted over LUQ and RUQ]] respectively {{under laparoscopic guidance}}
Diagnostic laparoscopy done, findings as above
Peritoneal fluid sent for [[bacterial and fungal culture]]
[[Initial decontamination with 2 L warm normal saline]]
Appropriate tension-free omental tongue selected, Graham patch repair performed with [[3-0 Vicryl x4]]
{{Repair confirmed secure, underwater bubble test negative}}
Peritoneal lavage with total [[6 L]] warm normal saline till clear, fluid sucked dry
[[Tubal drain inserted via LUQ port to pelvis and RUQ port to Morison's pouch, anchored with 2-0 Nylon]]
Ports removed {{under vision}}
Fascia closed with [[2-0 Vicryl]], skin with [[3-0 Ethilon]]
Wound infiltrated with local anaesthetic, dressing
{{Swab, needle and instrument counts correct}}`,
decisions:[
['Gastric ulcer biopsied','Edge of [[lesser curve]] gastric ulcer biopsied [[x4]] before closure, sent for histology'],
['Closure without patch','Perforation closed primarily, no omental patch: [[edges healthy, minimal contamination]]'],
['No drain','Minimal contamination, cavity dry, drain not placed']
],
deviations:[
['Conversion to open',`Decided to convert open in view of [[uncertain pathology]]
Upper midline laparotomy, peritoneal cavity entered
Initial decontamination with [[2 L]] warm normal saline
Pathology identified, exploratory laparotomy done with above findings
[[Small bowel and large bowel down to upper rectum, no mass palpable]]
Mass closure with [[PDS 0]], corrugated drain inserted over lower end of wound and anchored with 2-0 Nylon`],
['Perforation not found',`Perforation not identified at laparoscopy
Lesser sac entered via gastrocolic ligament, posterior wall of stomach inspected
Senior kindly scrubbed in`],
['Large or friable perforation',`[[2.5 cm]] perforation at [[D1]], edges friable, unsuitable for primary repair
Senior kindly scrubbed in
[[Omental plug repair / distal gastrectomy]] performed`],
['Suspected malignancy',`[[Indurated ulcer at lesser curve with surrounding mass]]
Rim biopsied [[x6]], sent for histology
Discussed with [[senior]] intraoperatively
[[Perforation closed with omental patch, for staging and definitive surgery]]`],
['Leak test positive',`Underwater bubble test positive at [[superior aspect]] of repair
Additional [[3-0 Vicryl]] suture placed, omental patch re-secured
Repeat bubble test negative`],
['Damage control',`Septic shock with [[rising noradrenaline requirement]] during procedure
Abbreviated surgery: perforation closed, lavage, drains placed
Temporary abdominal closure with [[negative pressure dressing]], for relook in [[24 to 48 h]]`],
['Senior called',`Senior kindly scrubbed in at [[__:__]]
[[Dr __]] continued as chief surgeon`]
],
postop:`NPO, Ryle's tube on free drainage
IVF
IV PPI
IV Abx [[amoxicillin-clavulanate]], review at D3 to D5
Analgesics regular and PRN
[[BP/P Q1H x4 then Q4H if stable]]
Strict I/O, inform if UO < 0.5 ml/kg/h
Chart drain output, inform if bile-stained
Chest physio, early mobilisation, DVT prophylaxis as assessed
Trace peritoneal fluid culture
Check [[H. pylori serology]]
[[Resume sips D__ if no clinical leak]]
Inform if T > 38, P > 100 or increasing pain`,
discharge:`Home when DAT, afebrile, drains off, [[D5 to D7]]
PPI full dose for [[8 weeks]]
H. pylori eradication if positive, test of cure afterwards
Avoid NSAIDs
[[OGD at 6 to 8 weeks]] (gastric ulcer)
FU surgical clinic [[2 to 4 weeks]], trace histology
SL [[__ days]]
To return if fever, abdominal pain or vomiting`
},

viva:[
['Is it a Graham patch?','Strictly, rarely. Cellan-Jones (1929) used a pedicled strand of omentum; Graham (1937) used a free omental graft tied down with three sutures. Neither closed the hole first. Closing the perforation and then tying the tails over pedicled omentum is a modified Graham repair, which is what most of us do and still call a Graham patch.'],
['What is the Boey score?','One point each for major medical illness, shock before operation, and perforation over 24 hours. Boey’s Queen Mary series of 259 duodenal perforations gave mortality of 0%, 10%, 45.5% and 100% for scores 0 to 3. It was derived in duodenal ulcers. PULP, from a Danish national cohort, discriminates better (area under the curve 0.83 against 0.70).'],
['Who can be managed without an operation?','Crofts at the Prince of Wales randomised 83 patients in 1989: mortality was similar, but 28% of the non-operative arm needed surgery at 12 hours, two of them for perforated gastric cancer, and patients over 70 responded less well. WSES 2020 does not recommend it routinely; only in highly selected patients whose perforation is sealed on water-soluble contrast.'],
['Why does a gastric perforation change the operation?','Cancer, size and site. 10–16% are malignant, so the rim is biopsied or excised. Site sets what is possible: an incisural ulcer can be wedged, a prepyloric excision narrows the outlet, and a high lesser-curve ulcer near the cardia is biopsied and patched. Over 2 cm, or suspicious, it is resected with frozen section where feasible.'],
['A 3 cm duodenal perforation: your options?','Not a patch. WSES 2020 tailors it to location: resection or repair, with or without pyloric exclusion and external biliary drainage, duodenostomy only in extremis. In practice: omental plug, jejunal serosal patch, antrectomy with resection of D1 if the ampulla is clear, or pyloric exclusion with gastrojejunostomy. For a stump that will not close: Nissen’s closure to the pancreatic capsule, Bancroft’s antral mucosectomy, or a tube duodenostomy as a controlled fistula.'],
['What is the most important part of the treatment after discharge?','Eradicating H. pylori. In Ng’s Prince of Wales trial of perforated duodenal ulcers, 81% were H. pylori positive, and ulcer relapse at one year fell from 38.1% with omeprazole alone to 4.8% after eradication. Add stopping NSAIDs, eight weeks of PPI, and endoscopy at six to eight weeks for a gastric ulcer.'],
['Day 4: tachycardia, fever, bile in the drain.','A leak until proven otherwise. Resuscitate, image, and grade it. Contained collection: percutaneous drainage, nil by mouth, acid suppression, antibiotics. Controlled through the drain: treat as a fistula. Free leak with peritonitis: relook, knowing that re-suturing inflamed tissue rarely holds, so resection or a tube through the defect may be needed. Too unwell for theatre: endoscopic stent or clip with drainage, from case series only.','expert opinion, no trials']
],

sources:{
steps:[
'House technique: senior’s CMS personal template “PPU” (YO Templates).',
'<a href="https://doi.org/10.1186/s13017-019-0283-9">Tarasconi A et al. Perforated and bleeding peptic ulcer: WSES guidelines. World J Emerg Surg 2020;15:3</a>.',
'Your handbook UGI-04 Perforated peptic ulcer, v0.2; your teaching deck “Perforated gastric ulcer: approach and technique”.',
'Ellison EC, Zollinger RM Jr. Zollinger’s Atlas of Surgical Operations, 10th edition, chapter 19 (closure and omentopexy).',
'Tips marked with a lamp are craft points. Treat them as unverified until you have tried them.'],
anatomy:[
'Johnson HD. Ann Surg 1965;162:996–1004; Csendes A et al. Surgery 1987;101:361–366 (type IV).',
'Your teaching deck “Perforated gastric ulcer”.'],
pitfalls:[
'<a href="https://doi.org/10.1186/s13017-019-0283-9">WSES 2020</a>: large perforations, damage control, open surgery when unstable.',
'Senior notes: Deon’s notes, management of the difficult duodenal stump; Billy notes, upper GI.',
'Leak management tiers: your teaching deck, expert opinion.'],
setup:['House set-up and port positions: senior’s CMS template “PPU”.'],
consent:[
'Boey J et al. Risk stratification in perforated duodenal ulcers. Ann Surg 1987;205:22–26.',
'<a href="https://link.springer.com/article/10.1007/s00464-009-0765-z">Bertleff MJ, Lange JF. Laparoscopic correction of perforated peptic ulcer: first choice? A review of literature. Surg Endosc 2010</a>: conversion 12.4%, mortality 5.8%.',
'<a href="https://doi.org/10.1186/s13017-019-0283-9">WSES 2020</a>: proportion of gastric perforations that are malignant, as quoted in your handbook and teaching deck.',
'Ng EK et al. Eradication of H. pylori prevents recurrence after simple closure of perforated duodenal ulcer. Ann Surg 2000;231:153–158.',
'Siu WT et al. Laparoscopic repair for perforated peptic ulcer: a randomized controlled trial. Ann Surg 2002;235:313–319.'],
notes:['Wording follows the senior’s CMS personal template “PPU”. The operation record is spelt out; the orders use common HA short forms. Antibiotic choice from IMPACT, as in your handbook UGI-04.'],
viva:[
'Your teaching deck (Cellan-Jones, Graham, Boey, Crofts, PULP).',
'Crofts TJ et al. N Engl J Med 1989;320:970–973; Møller MH et al. Acta Anaesthesiol Scand 2012;56:655–662.',
'Senior notes: Deon’s notes, difficult duodenal stump.']
},

dg:{
setup:`<figure class="dg"><svg viewBox="0 0 340 300" role="img" aria-label="Theatre layout and port positions for laparoscopic repair of perforated peptic ulcer">
<g fill="none" stroke="var(--muted-text)" stroke-width="1.5"><circle cx="170" cy="24" r="14"/><path d="M122 44H218Q226 44 226 52V188Q226 196 218 196H122Q114 196 114 188V52Q114 44 122 44Z"/><path d="M136 196L108 288M204 196L232 288"/><circle cx="170" cy="138" r="3"/></g>
<g fill="var(--accent-text)"><circle cx="170" cy="124" r="6"/><circle cx="204" cy="92" r="6"/><circle cx="138" cy="92" r="4.5"/></g>
<text class="b" x="181" y="128">A</text><text class="b" x="196" y="78">B</text><text class="b" x="146" y="78">C</text>
<g fill="var(--surface-high)" stroke="var(--border)" stroke-width="1"><rect x="128" y="250" width="84" height="30" rx="4"/><rect x="244" y="130" width="84" height="30" rx="4"/><rect x="12" y="34" width="84" height="30" rx="4"/></g>
<text class="b" x="170" y="269" text-anchor="middle">Surgeon</text><text class="b" x="286" y="149" text-anchor="middle">Camera</text><text class="b" x="54" y="53" text-anchor="middle">Monitor</text>
<text x="54" y="112" text-anchor="middle">Patient’s right</text><text x="286" y="118" text-anchor="middle">Patient’s left</text>
</svg><figcaption>Modified Lloyd-Davies, head up. <b>A</b> supraumbilical 10 mm Hasson port, camera. <b>B</b> 10 mm left upper quadrant port, the surgeon’s right hand. <b>C</b> 5 mm right upper quadrant port, the left hand. The surgeon stands between the legs facing the monitor at the right shoulder.</figcaption></figure>`,
anat:`<figure class="dg"><svg viewBox="0 0 340 300" role="img" aria-label="Modified Graham repair of an anterior duodenal perforation: closure, then omental patch">
<g fill="none" stroke="var(--muted-text)" stroke-width="1.5">
<path d="M8 40H118M8 112H118"/><path d="M118 40C140 34 160 24 168 12M118 112C140 120 160 132 168 142"/>
<path d="M118 34V118" stroke-width="3"/>
<path d="M178 40H288M178 112H288"/><path d="M288 40C310 34 326 24 334 12M288 112C310 120 326 132 334 142"/>
<path d="M288 34V118" stroke-width="3"/>
</g>
<ellipse cx="88" cy="76" rx="7" ry="9" fill="var(--surface)" stroke="var(--text)" stroke-width="1.5"/>
<g fill="none" stroke="var(--accent-text)" stroke-width="1.75" stroke-linecap="round">
<path d="M72 62H104M72 76H104M72 90H104"/>
<path d="M104 62l10 -6M104 76l10 0M104 90l10 6M72 62l-10 -6M72 76l-10 0M72 90l-10 6" stroke-width="1" stroke-dasharray="2 3"/>
</g>
<path d="M226 150C226 120 236 98 252 82C262 74 272 74 274 86C276 100 266 122 262 150Z" fill="var(--surface-high)" stroke="var(--muted-text)" stroke-width="1.5"/>
<g fill="none" stroke="var(--accent-text)" stroke-width="1.75" stroke-linecap="round">
<path d="M246 62C252 76 262 80 276 72M242 76C252 92 266 92 280 84M246 90C256 104 268 104 278 96"/>
</g>
<text class="b" x="10" y="30">1 Close</text><text class="b" x="180" y="30">2 Patch</text>
<text x="128" y="160" text-anchor="middle">Pylorus,</text><text x="128" y="174" text-anchor="middle">vein of Mayo</text>
<text x="10" y="134">D1</text><text x="150" y="68">Antrum</text>
<text x="10" y="196">Bites along the long axis,</text><text x="10" y="210">5 mm from the edge,</text><text x="10" y="224">anterior wall only.</text><text x="10" y="238">Closure lies across</text><text x="10" y="252">the duodenum.</text>
<text x="180" y="196">Pedicled omental tongue</text><text x="180" y="210">laid over the closure,</text><text x="180" y="224">long tails tied loosely</text><text x="180" y="238">over it.</text>
<text x="226" y="166">Omentum</text>
</svg><figcaption>Anterior view; the patient’s right is on your left. The hole is closed first, then the omentum is tied down over it: a modified Graham repair. With edges too friable to close, the omentum goes into the hole and the same stitches are tied over it without closing first.</figcaption></figure>`}
});
