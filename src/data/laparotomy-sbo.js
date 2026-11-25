P.push({
id:'laparotomy-sbo', team:'GEN', name:'Laparotomy for adhesive small bowel obstruction', aka:'asbo sbo small bowel obstruction adhesiolysis adhesions band laparotomy bowel resection viability gastrografin water-soluble contrast closed loop strangulation laparoscopic adhesiolysis',
system:'Colorectal and small bowel', list:'emergency', approach:'Open, or laparoscopic in selected patients',
aim:'Find the transition point, release what is causing the obstruction, decide which bowel will live, and get out without making holes. Divide only the adhesions you need to.',
status:'Draft 0.1 · 19/11/2026 · sourced, not yet tested by you in theatre',
houseTitle:'Practice and evidence', houseLead:'There is no senior template for this yet. The middle column is common practice: correct it to your consultant’s.', houseHead:['Step','Common practice','Guideline and trials'],

steps:[
{t:'Checks and induction', how:'WHO checklist. Aspirate the Ryle’s tube, then rapid-sequence induction. Supine, arms out. Urinary catheter. Antibiotic prophylaxis.', why:'Obstructed patients aspirate at induction. The catheter measures the resuscitation.'},
{t:'Incision', how:'Midline laparotomy. Start through virgin abdomen above or below the old scar, then extend under vision.', why:'Bowel is stuck to the underside of old scars. Entering beside them lets you see and free it from inside.'},
{t:'Enter safely', how:'Open the peritoneum under vision. Free bowel from the abdominal wall with scissors and traction, close to the peritoneum, not the bowel.', why:'Most inadvertent enterotomies happen on entry.', tip:'Lift the fascial edge with Kochers and slide a finger in from the virgin area to feel the plane before you cut.'},
{t:'Find the transition point', how:'Start at the caecum and follow the collapsed ileum backwards until it meets dilated bowel.', why:'Collapsed bowel is easy to handle and leads straight to the cause. Distended loops tear.', tip:'Do not eviscerate the dilated loops early. Work from the collapsed side and bring the transition point to you.'},
{t:'Release the cause', how:'Divide the band or adhesion causing the obstruction. Free kinks at the transition point. Leave other adhesions unless they obstruct.', why:'Every extra adhesion divided adds a chance of an enterotomy and adds nothing to this operation.'},
{t:'Look for other causes', how:'Groins and obturator canals from inside, internal hernia defects, a gallstone, a tumour, a Meckel’s band.', why:'Not every obstruction in a scarred abdomen is adhesive. The cause changes the operation.'},
{t:'Judge viability', how:'Wrap the released loop in warm packs and wait 10–15 minutes. Then check colour, sheen, peristalsis and mesenteric pulsation. Inspect the constriction ring where the band lay.', why:'Dusky bowel often recovers once released. A ring that stays thin and grey perforates later.', tip:'A doubtful constriction ring can be buried with interrupted seromuscular Lembert sutures. A ring that is clearly dead is resected.'},
{t:'Resect what is dead', how:'Resect with a margin of healthy bowel. Stapled or hand-sewn anastomosis if the patient is stable; staple the ends and plan a relook if not.', why:'An anastomosis in a shocked, acidotic patient leaks. Discontinuity and a relook in 24–48 hours is safer.'},
{t:'Run the whole bowel', how:'DJ flexure to ileocaecal valve. Repair full-thickness enterotomies across the bowel with 3-0 sutures; bury serosal tears.', why:'A missed enterotomy is the commonest cause of a leak after adhesiolysis.'},
{t:'Decompress if needed', how:'Gently milk the small bowel contents back to the stomach for the anaesthetist to aspirate through the Ryle’s tube.', why:'Makes the abdomen closable and shortens the ileus. Rough milking tears serosa.'},
{t:'Close', how:'Wash out if there was spillage. Mass closure (house: PDS loop). Skin staples. Counts.', why:'A tense closure over distended bowel raises intra-abdominal pressure and bursts.'}
],
house:[
['Non-operative trial','Ryle’s tube, drip, water-soluble contrast','Bologna 2017: water-soluble contrast is diagnostic and therapeutic. Contrast reaching the colon within 24 hours predicts resolution.'],
['How long to wait','Up to 72 hours','Bologna 2017: without strangulation or peritonitis, non-operative management can continue up to 72 hours; after that, operate.'],
['Operate at once','Peritonitis, strangulation, closed loop on CT','Bologna 2017: immediate surgery. CT predicts the need for urgent surgery with about 90% accuracy.'],
['Approach','Open','LASSO: in patients likely to have a single band, laparoscopy shortened stay (4.2 against 5.5 days). Long-term outcomes were similar (LASSO follow-up, 2026).'],
['Extent of adhesiolysis','Only what obstructs','No trial. Extra adhesiolysis raises the enterotomy risk.'],
['Adhesion barrier','Per consultant','Bologna 2017: hyaluronate-based barriers reduce later adhesions and reoperation for obstruction.']
],

anatomy:{
points:[
'Transition point: dilated bowel above, collapsed below. A closed loop is obstructed at both ends (a band, an internal hernia, a volvulus) and strangulates early.',
'Blood supply: jejunal and ileal branches of the superior mesenteric artery form arcades; the vasa recta beyond them are end arteries. A band across the mesentery strangulates the loop it crosses.',
'Common adhesion sites: the underside of the old scar, the pelvis after hysterectomy or rectal surgery, and the right iliac fossa after appendicectomy.',
'Internal hernia sites: Petersen’s space and mesenteric defects after Roux-en-Y, the paraduodenal fossae, and defects after previous resections.',
'Other causes found at laparotomy: groin or obturator hernia, gallstone ileus at the terminal ileum, small bowel tumour, bezoar, Meckel’s band, intussusception.'
],
table:{title:'Viability: what to look for', head:['Sign','Viable','Not viable'], rows:[
['Colour','Pink, recovering after release','Dark purple, black or green'],
['Surface','Shiny serosa','Dull, sheen lost'],
['Peristalsis','Present, or returns with warmth','Absent after 10–15 minutes of warm packs'],
['Mesentery','Pulsation in the arcades','No pulsation, thrombosed veins'],
['Wall','Normal thickness','Thin, friable or crepitant'],
['Cut edge','Bright bleeding','No bleeding, or dark ooze']
]},
danger:[
'Bowel under the old scar: enterotomy on entry.',
'Distended loops: tear with traction; their mesentery tears when they are eviscerated.',
'Ureters and iliac vessels: in dense pelvic adhesions.',
'The mesenteric root: when untwisting a volvulus.',
'A second transition point, or an enterotomy, missed.'
]
},

pitfalls:[
{t:'Enterotomy', a:'Enter through virgin abdomen; sharp dissection under tension, close to the peritoneum.', r:'Repair at once across the bowel, and mark it. Several holes close together: resect the segment instead.'},
{t:'Viability uncertain', a:'Release, warm and wait before deciding.', r:'Still doubtful: resect if the segment is short. If resecting would leave too little bowel, or the patient is unstable, close temporarily and relook in 24–48 hours. Call.'},
{t:'Cannot find the transition point', a:'Start at the caecum and follow collapsed bowel.', r:'Check the groins, obturator canals and internal hernia sites. Think of a non-adhesive cause.'},
{t:'Long segment dead', a:'Early surgery for strangulation.', r:'Measure the bowel that remains. Leave doubtful bowel for a relook rather than resect it now. Call.'},
{t:'Frozen abdomen', a:'Know the history: radiotherapy, peritonitis, many previous operations.', r:'Stop. A bypass or a proximal stoma may be safer than dissecting on. Call.'},
{t:'Abdomen will not close', a:'Decompress before closing.', r:'Do not force it. Temporary abdominal closure with negative pressure and relook. Call.'}
],
call:['Strangulation of a long segment','Viability you cannot judge','A frozen abdomen','More than one enterotomy','An abdomen that will not close','An unexpected tumour'],

setup:{
theatre:['Supine, arms out','Rapid-sequence induction after aspirating the Ryle’s tube','Surgeon on the patient’s right, assistant opposite','Urinary catheter, warming blanket'],
kit:['Laparotomy set with self-retaining retractor','Warm packs and warm saline','Babcock forceps and soft bowel clamps','3-0 sutures for enterotomies and Lembert sutures','Linear staplers for a resection','PDS loop for closure, skin stapler'],
standby:['Negative pressure dressing for temporary closure','Laparoscopic stack if a laparoscopic start is planned','Fluorescence angiography, if your theatre has it']
},

consent:{
note:`Consent for laparotomy and adhesiolysis, possible bowel resection
Diagnosis and indication explained: [[adhesive small bowel obstruction, not resolving with conservative treatment / CT features of strangulation]]
Nature of operation explained: open operation under general anaesthesia to release the cause of obstruction; possible removal of a segment of bowel and joining of the ends; possible temporary stoma; possible temporary closure of abdomen and planned second operation
Alternatives discussed: continued conservative treatment [[not appropriate in view of __]]; keyhole operation [[not suitable in view of __]]
Benefits: relief of obstruction, prevention of bowel death and perforation
General risks: bleeding, wound infection, chest infection, deep vein thrombosis and pulmonary embolism, cardiac events
Anaesthetic risks in brief, including aspiration; anaesthetist to discuss in detail
Specific risks: injury to bowel, leak from join or repair which may need re-operation, intra-abdominal collection, prolonged ileus, wound dehiscence, incisional hernia, recurrent obstruction, short bowel if long segment removed, possible stoma
Risk of death explained
Risks as charted in consent form acknowledged
Patient showed good understanding, questions answered
Consent signed`,
figures:[
['In-hospital death after adhesiolysis alone','2.2%','New York State cohort, 2016–2020'],
['In-hospital death after bowel resection','5.9%','New York State cohort'],
['Resection when operated on the day of admission','29.9%','New York State cohort'],
['Early death after surgery for adhesive obstruction','5.2%','Swedish population cohort'],
['Postoperative stay, laparoscopic against open','4.2 against 5.5 days','LASSO, single-band patients']
],
versus:'Mortality rises with age and ASA grade, and doubles when the bowel needs resecting. That is the argument for operating before strangulation, not after it.'
},

notes:{
findings:`[[CT: small bowel obstruction with transition point at __, no features of strangulation]]
[[Dilated small bowel to __ cm from ileocaecal valve, collapsed distally]]
[[Single adhesive band at __ causing obstruction]]
[[Constriction ring at band site, viable after release]]
[[No hernia, no mass]]`,
procedure:`Supine, general anaesthesia with rapid sequence induction, skin prepped and draped
[[Ryle's tube aspirated before induction]], urinary catheter inserted
Midline laparotomy [[starting through virgin area above previous scar]], peritoneal cavity entered {{under direct vision}}
Findings as above
Transition point identified by tracing collapsed bowel from caecum
[[Adhesive band divided]], obstruction relieved
Bowel wrapped in warm packs, {{viability confirmed: colour, peristalsis and mesenteric pulsation present}}
{{Small bowel run from DJ flexure to ileocaecal valve, no enterotomy, no serosal tear}}
[[Small bowel contents milked back to stomach and aspirated via Ryle's tube]]
Haemostasis secured
Mass closure with [[PDS loop]], skin with staples
{{Swab, needle and instrument counts correct}}`,
decisions:[
['Small bowel resection','[[__ cm]] of non-viable [[ileum]] resected, [[stapled side-to-side]] anastomosis, mesenteric defect closed; [[__ cm]] of small bowel remaining'],
['Laparoscopic adhesiolysis','Open entry at [[umbilicus]], [[two 5 mm]] working ports; single band divided laparoscopically, obstruction relieved, bowel viable'],
['Lembert sutures to constriction ring','Constriction ring at band site buried with interrupted [[3-0 Vicryl]] seromuscular sutures']
],
deviations:[
['Enterotomy',`Inadvertent full-thickness enterotomy at [[__ cm from DJ flexure]] during adhesiolysis
Repaired transversely with [[3-0 PDS]]`],
['Doubtful viability, relook',`Viability of [[__ cm]] of [[ileum]] uncertain after release and warming
Senior kindly scrubbed in
Temporary abdominal closure with [[negative pressure dressing]], for relook in [[24 to 48 h]]`],
['Conversion to open',`Laparoscopic adhesiolysis not feasible in view of [[dense adhesions / distension]]
Converted to midline laparotomy, procedure completed open as above`],
['Senior called',`Senior kindly scrubbed in at [[__:__]]
[[Dr __]] continued as chief surgeon`]
],
postop:`NPO, Ryle's tube on free drainage
IVF
Analgesics regular and PRN
[[BP/P Q1H x4 then Q4H if stable]]
Strict I/O, inform if UO < 0.5 ml/kg/h
Monitor electrolytes daily
[[IV Abx if resection: __]]
[[Sips when Ryle's aspirate < __ ml/day and passing flatus]]
Chest physio, early mobilisation, DVT prophylaxis as assessed
Inform if T > 38, P > 100, increasing pain or distension`,
discharge:`Home when DAT, BO, afebrile, [[D4 to D7]]
FU surgical clinic [[2 to 4 weeks]], [[trace histology if resection]]
SL [[__ days]]
To return if vomiting, distension, abdominal pain or wound discharge`
},

viva:[
['Who can you treat without an operation?','Patients without peritonitis, strangulation or a closed loop on CT. Bologna 2017: decompress, correct fluids and give water-soluble contrast. Contrast in the colon within 24 hours predicts resolution. Without resolution by 72 hours, operate.'],
['What on CT tells you to operate now?','Reduced wall enhancement, mesenteric oedema or fluid, a closed loop (two adjacent transition points, a U- or C-shaped loop), the whirl sign, pneumatosis or portal venous gas, free fluid with peritonitis.'],
['How does gastrografin work?','It is hyperosmolar: it draws fluid into the lumen, reduces wall oedema and may increase motility. Its main value is prognostic. Contrast in the colon on a film at 4–24 hours predicts resolution; contrast that has not reached the colon predicts the need for surgery.'],
['Is laparoscopic adhesiolysis better?','In LASSO, patients likely to have a single band recovered faster with laparoscopy (stay 4.2 against 5.5 days), with similar long-term outcomes. It is for selected patients: a first episode, few previous operations, not grossly distended, and a surgeon who will convert early.'],
['How do you judge viability?','Release, warm and wait 10–15 minutes. Then colour, sheen, peristalsis, mesenteric pulsation and bleeding from the cut edge. Fluorescence angiography helps where available. When unsure in a sick patient, or when resection would leave too little bowel, close temporarily and relook in 24–48 hours.'],
['What is short bowel syndrome, and when do you worry?','Malabsorption from too little functional small bowel. Under about 200 cm risks it; under 100 cm with an end jejunostomy, or under 50–60 cm with the colon in continuity, usually needs parenteral support. Measure what remains and write it in the note.','thresholds vary with the colon and ileocaecal valve']
],

sources:{
steps:[
'<a href="https://doi.org/10.1186/s13017-018-0185-2">ten Broek RPG et al. Bologna guidelines for diagnosis and management of adhesive small bowel obstruction (ASBO): 2017 update. World J Emerg Surg 2018;13:24</a>.',
'Senior notes: Derek’s notes, intestinal obstruction.',
'Tips marked with a lamp are craft points. Treat them as unverified until you have tried them.'],
anatomy:['Bologna 2017, as above.','Viability signs from general surgical practice; no single validated scoring system.'],
pitfalls:['Bologna 2017, as above.','<a href="https://wjes.biomedcentral.com/articles/10.1186/s13017-018-0167-4">Coccolini F et al. The open abdomen in trauma and non-trauma patients: WSES guidelines. World J Emerg Surg 2018;13:7</a>.'],
setup:['Common practice; there is no senior template for this operation yet.'],
consent:[
'Symer MM et al. Contemporary assessment of adhesiolysis and resection for adhesive small bowel obstruction in the State of New York. Surg Innov 2024;31:245–255.',
'<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7137409">Swedish population cohort of surgery for adhesive small bowel obstruction (PMC7137409)</a>.',
'<a href="https://pubmed.ncbi.nlm.nih.gov/30765264/">Sallinen V et al. Laparoscopic versus open adhesiolysis for adhesive small bowel obstruction (LASSO). Lancet Gastroenterol Hepatol 2019;4:278–286</a>.'],
notes:['Wording in HA style, modelled on the senior’s CMS templates for other emergency laparotomies. Orders and discharge use common HA short forms.'],
viva:['Bologna 2017 and LASSO, as above.','<a href="https://doi.org/10.1001/jamasurg.2025.6726">Räty P et al. Long-term outcomes after laparoscopic vs open adhesiolysis: the LASSO trial. JAMA Surg 2026</a>.','Branco BC et al. Systematic review and meta-analysis of the diagnostic and therapeutic role of water-soluble contrast agent in adhesive small bowel obstruction. Br J Surg 2010;97:470–478, as summarised in Derek’s notes.']
},

dg:{
setup:`<figure class="dg"><svg viewBox="0 0 340 300" role="img" aria-label="Theatre layout and incision for laparotomy for small bowel obstruction">
<g fill="none" stroke="var(--muted-text)" stroke-width="1.5"><circle cx="170" cy="24" r="14"/><path d="M122 44H218Q226 44 226 52V188Q226 196 218 196H122Q114 196 114 188V52Q114 44 122 44Z"/><path d="M140 196L136 288M200 196L204 288"/><circle cx="170" cy="130" r="3"/></g>
<path d="M170 96V172" stroke="var(--muted-text)" stroke-width="3" stroke-dasharray="4 4"/>
<path d="M170 58V122" stroke="var(--accent-text)" stroke-width="3" stroke-linecap="round"/>
<g fill="var(--surface-high)" stroke="var(--border)" stroke-width="1"><rect x="12" y="110" width="84" height="30" rx="4"/><rect x="244" y="110" width="84" height="30" rx="4"/><rect x="244" y="230" width="84" height="30" rx="4"/><rect x="244" y="10" width="84" height="30" rx="4"/></g>
<text class="b" x="54" y="129" text-anchor="middle">Surgeon</text><text class="b" x="286" y="129" text-anchor="middle">Assistant</text><text class="b" x="286" y="249" text-anchor="middle">Scrub nurse</text><text class="b" x="286" y="29" text-anchor="middle">Anaesthetist</text>
<g fill="none" stroke="var(--muted-text)" stroke-width="1"><path d="M164 72H120"/><path d="M176 160H230"/></g>
<text x="12" y="64">Enter here:</text><text x="12" y="78">virgin abdomen</text><text x="234" y="176">Old scar:</text><text x="234" y="190">bowel stuck</text><text x="234" y="204">beneath it</text>
</svg><figcaption>Supine, arms out. Start the midline incision through untouched abdomen above or below the old scar, and extend across it once you can see the bowel from inside.</figcaption></figure>`,
anat:`<figure class="dg"><svg viewBox="0 0 340 300" role="img" aria-label="Small bowel obstruction: dilated loops above an adhesive band, collapsed bowel below traced back from the caecum">
<g fill="none" stroke-linecap="round" stroke-linejoin="round">
<path d="M30 40C90 20 150 60 120 100C90 140 30 120 40 170C50 210 130 200 168 176" stroke="var(--muted-text)" stroke-width="30"/>
<path d="M30 40C90 20 150 60 120 100C90 140 30 120 40 170C50 210 130 200 168 176" stroke="var(--surface)" stroke-width="26"/>
<path d="M186 172C220 160 250 190 236 220C222 250 260 268 296 256C318 248 322 226 312 212" stroke="var(--muted-text)" stroke-width="10"/>
<path d="M186 172C220 160 250 190 236 220C222 250 260 268 296 256C318 248 322 226 312 212" stroke="var(--surface)" stroke-width="7"/>
<path d="M168 176C174 174 180 173 186 172" stroke="var(--muted-text)" stroke-width="10"/>
</g>
<path d="M150 210C166 186 190 160 214 118" fill="none" stroke="var(--accent-text)" stroke-width="3" stroke-linecap="round"/>
<path d="M312 212C318 200 326 196 334 196" fill="none" stroke="var(--muted-text)" stroke-width="16" stroke-linecap="round"/>
<g fill="none" stroke="var(--muted-text)" stroke-width="1"><path d="M214 118L236 96"/><path d="M180 170L224 144"/><path d="M296 262L300 284"/></g>
<path d="M272 236C252 248 236 238 238 222" fill="none" stroke="var(--text)" stroke-width="1.25" stroke-dasharray="3 3"/>
<path d="M238 222L234 230M238 222L244 228" fill="none" stroke="var(--text)" stroke-width="1.25"/>
<text class="b" x="12" y="236">Dilated proximal bowel:</text><text x="12" y="250">hold the mesentery,</text><text x="12" y="264">not the wall</text>
<text class="b" x="238" y="92">Band</text>
<text x="226" y="134">Transition</text><text x="226" y="148">point</text>
<text class="b" x="334" y="190" text-anchor="end">Caecum</text>
<text x="334" y="294" text-anchor="end">Follow the collapsed bowel back</text>
</svg><figcaption>The band crosses the bowel at the transition point. Start at the caecum and follow the collapsed ileum back to the band; leave the distended loops alone until the cause is released.</figcaption></figure>`}
});
