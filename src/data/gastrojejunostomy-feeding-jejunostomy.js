P.push({
id:'gastrojejunostomy-feeding-jejunostomy', name:'Gastrojejunostomy and feeding jejunostomy', aka:'gj gjj gastroenterostomy bypass palliative gastric outlet obstruction goo unresectable gastric cancer pancreatic cancer periampullary feeding j fj witzel jejunostomy stomach partitioning devine double bypass',
system:'Upper GI', list:'both', approach:'Open, upper mini-laparotomy',
aim:'Get a patient with a blocked outlet eating again, and leave a route for feeding while they recover. It is palliation: the shortest safe operation is the right one.',
status:'Draft 0.1 · 19/11/2026 · sourced, not yet tested by you in theatre',

steps:[
{t:'Checks and induction', how:'WHO checklist. Aspirate the Ryle’s tube before induction. Rapid-sequence induction. Supine, arms out. Urinary catheter. Antibiotic prophylaxis.', why:'An obstructed stomach is full of fluid and old food. Aspiration at induction is the first avoidable death.'},
{t:'Access and assessment', how:'Upper midline mini-laparotomy. Confirm the findings: tumour, its fixity, peritoneum, liver. Biopsy if there is no tissue diagnosis.', why:'The operation is a bypass because the tumour cannot be removed. Confirm that, and get tissue for the oncologist.'},
{t:'Choose the gastric site', how:'The dependent greater curve of the body, well upstream of the tumour. Divide a few gastroepiploic branches to clear 7–8 cm, keeping the arcade.', why:'A stoma at the lowest point drains by gravity. A stoma near the tumour is soon overgrown.'},
{t:'Find the DJ flexure', how:'Lift the transverse colon. Follow the jejunum back to where it becomes fixed to the left of the spine.', why:'Measure the loop from a certain DJ flexure, or you may use ileum.', tip:'The inferior mesenteric vein runs just to the left of the flexure. If you can see it, you are in the right place.'},
{t:'Bring the loop up', how:'Take the jejunum about 30 cm from the DJ flexure, in front of the transverse colon (antecolic). Lie it along the greater curve isoperistaltic: afferent limb towards the fundus, efferent towards the antrum.', why:'Antecolic keeps the stoma away from tumour spreading into the mesocolon. A 30 cm loop reaches over the colon without tension but is not so long that it kinks.', tip:'If a bulky omentum puts the loop under tension, divide the omentum in line with the loop to let it lie flat.'},
{t:'Stapled anastomosis', how:'Stay sutures. Small gastrotomy and enterotomy side by side. Fire the 75 mm linear cutter (house: NTLC 75). Look inside the staple line for bleeding.', why:'A 75 mm side-to-side stoma is wide enough to empty and is quick to make.'},
{t:'Close the common opening', how:'Close the gastrotomy and enterotomy with 3-0 PDS (house). Check the stoma admits two fingers and the loop lies without tension or twist.', why:'The closure is the commonest leak point; take full-thickness bites and do not narrow the stoma.'},
{t:'Site the feeding jejunostomy', how:'On the efferent limb, about 20 cm beyond the gastrojejunostomy (house).', why:'Feeds go downstream of the stoma, so feeding continues even if the stomach is slow to empty.'},
{t:'Witzel tube', how:'Purse-string on the antimesenteric border. Small enterotomy. Insert a 16 Fr Foley pointing distally; inflate the balloon with 3 ml water (house). Tie the purse-string. Lay the tube along the bowel and bury it in a 4–5 cm seromuscular tunnel with interrupted sutures.', why:'The tunnel makes an oblique tract that seals when the tube comes out and resists leaks around it.', tip:'Overfill the balloon and it obstructs the jejunum. 3 ml anchors without blocking.'},
{t:'Exit and fix', how:'Bring the tube out through a separate stab on the left side of the abdomen. Stitch the jejunum to the parietal peritoneum around the exit with 3-0 PDS stays, over 3–4 cm of bowel. Anchor the tube to the skin with 2-0 silk.', why:'Fixing a length of bowel, not a point, stops the loop twisting around the tube. The seal to the peritoneum keeps any leak outside the cavity.'},
{t:'Test the tube', how:'Flush with water. It should run freely with no leak at the purse-string.', why:'A tube in the wall, not the lumen, will not flush. Find out now, not when feeding starts.'},
{t:'Close', how:'Mass closure with PDS 1, skin staples. Counts.', why:'These patients are often malnourished: take adequate fascial bites to resist dehiscence.'}
],
house:[
['Palliation choice','Surgical bypass','SUSTENT: a stent gets patients eating sooner (median 5 against 8 days), but a bypass keeps them eating longer, with fewer reinterventions. Bypass when life expectancy exceeds about two months.'],
['Endoscopic alternative','Not used','ESGE 2022: EUS-guided gastroenterostomy, in an expert setting, is an alternative to a stent or surgery.'],
['Route','Antecolic, isoperistaltic','No good trial evidence for antecolic over retrocolic, or for either orientation, in palliative bypass.'],
['Anastomosis','Stapled, 75 mm linear cutter','Stapled and hand-sewn are both accepted.'],
['Stomach partitioning','Not routine','Partial partitioning (modified Devine) reduces delayed gastric emptying in meta-analyses of non-randomised studies.'],
['Feeding jejunostomy','Routine with GJ','ESPEN: consider a jejunostomy or nasojejunal tube in malnourished patients having major upper GI surgery.'],
['Double bypass','By finding','Pancreatic cancer found unresectable at laparotomy: a prophylactic GJ with the biliary bypass prevents later outlet obstruction (Lillemoe 1999).']
],

anatomy:{
points:[
'DJ flexure: the jejunum emerges to the left of L2, held by the suspensory ligament of Treitz. The inferior mesenteric vein lies just to its left in the paraduodenal fold.',
'Jejunum against ileum: jejunum is thicker and wider, with fewer arcades, longer vasa recta and clear windows in its mesentery. Ileum has more fat and several tiers of arcades.',
'Greater curve: the gastroepiploic arcade runs about 1 cm from the curve in the gastrocolic ligament. Divide branches to the wall, not the arcade.',
'Transverse colon and mesocolon: the antecolic loop lies in front of them. A retrocolic loop passes through a window in the mesocolon to the left of the middle colic vessels.',
'Loop length: too short pulls across the colon; too long kinks and causes afferent loop syndrome. Measure from the DJ flexure.'
],
table:{title:'Gastric Outlet Obstruction Scoring System (GOOSS)', head:['Score','Oral intake'], rows:[
['0','None'],
['1','Liquids only'],
['2','Soft solids only'],
['3','Low-residue or full diet']
]},
danger:[
'Middle colic vessels: in the mesocolon, at risk when dividing the omentum close to the colon or making a retrocolic window.',
'The tumour: an anastomosis close to it is soon overgrown.',
'The loop: a twist or a reversed loop obstructs. Check afferent and efferent before stapling.',
'The feeding tube: a tube in the bowel wall, or a balloon overfilled, obstructs the jejunum.'
]
},

pitfalls:[
{t:'Stomach does not empty', a:'Dependent site, a wide stoma, a loop without tension. Consider partitioning in a hugely dilated stomach.', r:'Ryle’s tube drainage, correct electrolytes, feed through the jejunostomy, erythromycin as a prokinetic. OGD to check the stoma is open. Most settle with time.'},
{t:'Afferent loop syndrome', a:'Keep the afferent limb short and free of tension or kink.', r:'Acute: pain, raised amylase and a dilated duodenum on CT: a closed loop needing surgery. Chronic: bilious vomiting after meals; revise or add a side-to-side jejunojejunostomy (Braun).'},
{t:'Bleeding from the staple line', a:'Look inside before closing the common opening.', r:'Oversew from inside. After the operation: haematemesis or blood in the Ryle’s tube means OGD.'},
{t:'Leak', a:'Full-thickness closure of the common opening without tension.', r:'Contained: drain percutaneously, nil by mouth, feed through the jejunostomy. Peritonitis: relaparotomy. Call.'},
{t:'Feeding tube dislodged', a:'Witzel tunnel, peritoneal fixation, secure skin anchor.', r:'Out before the tract matures, around three weeks: do not push it back blind. Contrast study; peritonitis means relaparotomy. Later: replace through the tract and confirm with contrast.'},
{t:'Volvulus around the jejunostomy', a:'Fix 3–4 cm of bowel to the wall, not a single point.', r:'Colicky pain and vomiting with the tube in place: CT, and reoperate early.'},
{t:'Tumour looks resectable', a:'Review the staging before the operation.', r:'Do not improvise a resection in an unprepared patient. Call: a senior decides between bypass now and resection, today or after restaging.'}
],
call:['Tumour looks resectable','No safe site upstream of the tumour','Loop will not reach without tension','Leak or bleeding you cannot control','You are unsure of the DJ flexure'],

setup:{
theatre:['Supine, arms out','Rapid-sequence induction after aspiration of the Ryle’s tube','Surgeon on the patient’s right, assistant opposite','Urinary catheter'],
kit:['Laparotomy set with self-retaining retractor','Babcock forceps and stay sutures','Linear cutter 75 mm (house: NTLC 75) with a spare reload','3-0 PDS','16 Fr Foley catheter, 10 ml syringe of water, 2-0 silk','PDS 1 loop and skin stapler','Biopsy pots'],
standby:['Second stapler reload','Drain','Frozen section if the diagnosis is uncertain']
},

consent:{
note:`Consent for gastrojejunostomy and feeding jejunostomy
Diagnosis and indication explained: [[gastric outlet obstruction from unresectable __ cancer]]
Nature of operation explained: open operation under general anaesthesia through an upper abdominal incision to join the stomach to the small bowel so food bypasses the blockage, and to place a feeding tube into the small bowel; biopsy if needed
Alternatives discussed: endoscopic stent [[quicker recovery but more likely to block again]]; [[EUS-guided gastroenterostomy where available]]; drainage tube and nutritional support only
Benefits: relief of vomiting, ability to eat, route for feeding; does not treat the cancer itself
General risks: bleeding, wound infection, chest infection, deep vein thrombosis and pulmonary embolism, cardiac events
Anaesthetic risks in brief, including aspiration; anaesthetist to discuss in detail
Specific risks: leak from join, bleeding, slow stomach emptying with ongoing vomiting needing prolonged nasogastric drainage, feeding tube blockage, displacement or leakage, skin irritation, bowel obstruction or twisting around the tube, wound breakdown, prolonged hospital stay, may need further procedures
Risk of death explained, [[higher in view of frailty and disease]]
Risks as charted in consent form acknowledged
Patient showed good understanding, questions answered
Consent signed`,
figures:[
['Median days to eating soft solids, stent against GJ','5 against 8','SUSTENT, 39 patients, Netherlands'],
['Days living with GOOSS 2 or more, GJ against stent','72 against 50','SUSTENT'],
['Patients needing reintervention, stent against GJ','7 of 21 against 2 of 18','SUSTENT'],
['Delayed gastric emptying after conventional GJ','up to 30–50%','Older series pooled in a 2019 meta-analysis'],
['Technical complications, longitudinal Witzel jejunostomy','2.1%','Review, Tapia 1999'],
['Technical complications, transverse Witzel jejunostomy','up to 6.6%','Tapia 1999']
],
versus:'SUSTENT was small but its message holds: a stent gets the patient eating sooner, a bypass keeps them eating longer. Offer bypass when life expectancy is more than about two months and the patient can stand it.'
},

notes:{
findings:`[[CT: distal gastric tumour with gastric outlet obstruction]]
[[Antral tumour fixed to pancreas, unresectable]]
[[Peritoneal nodules at __, biopsied]]
[[Stomach grossly dilated, wall oedematous]]
[[No ascites]]`,
procedure:`Supine, general anaesthesia with rapid sequence induction, skin prepped and draped
[[Ryle's tube aspirated before induction]]
Upper midline mini-laparotomy, peritoneal cavity entered, findings as above
[[Peritoneal nodule biopsied, sent for histology]]
DJ flexure identified
GJ created at greater curvature of stomach and jejunum [[30]] cm from DJ flexure, antecolic, isoperistaltic, with [[NTLC 75]]
{{Staple line inspected, haemostasis secured}}
Enterotomy and gastrotomy closed with [[3-0 PDS]]
{{Anastomosis patent and tension-free}}
Feeding J created [[20]] cm distal to GJ in Witzel manner with [[Fr 16 Foley]], balloon inflated with [[3]] ml water
Feeding J fashioned at [[left side of abdomen]] and stayed with [[3-0 PDS]] over peritoneum, anchored with [[2-0 silk]]
{{Feeding J flushed freely, no leak}}
Mass closure with [[PDS 1]], skin with staples
{{Swab, needle and instrument counts correct}}`,
decisions:[
['Retrocolic','GJ created [[retrocolic]] through window in transverse mesocolon to left of middle colic vessels, mesocolic window sutured to stomach around anastomosis'],
['Partitioning','Stomach partially partitioned with [[linear stapler]] proximal to tumour leaving [[2 cm]] channel along lesser curve, GJ made proximal to partition'],
['Hand-sewn','GJ hand-sewn, [[two layers, continuous 3-0 PDS]]'],
['No feeding jejunostomy','Feeding J not placed: [[early oral intake expected, nutrition adequate]]']
],
deviations:[
['Tumour resectable',`Tumour found [[mobile, no distant disease]]
Senior kindly scrubbed in
[[Decision for __]]`],
['Loop will not reach',`Antecolic loop under tension over [[bulky omentum]]
[[Omentum divided in line with loop / GJ made retrocolic]] to achieve tension-free anastomosis`],
['Feeding tube will not flush',`Feeding J did not flush freely
Tube withdrawn and re-sited, [[purse-string re-fashioned]], flushes freely, no leak`],
['Senior called',`Senior kindly scrubbed in at [[__:__]]
[[Dr __]] continued as chief surgeon`]
],
postop:`NPO, Ryle's tube on free drainage
IVF
IV PPI
Analgesics regular and PRN
[[BP/P Q1H x4 then Q4H if stable]]
Strict I/O, inform if UO < 0.5 ml/kg/h
Feeding J: flush [[20 ml water Q6H]], start [[water 20 ml/h POD1]], build up as per dietitian
Dietitian referral
[[Refeeding risk: check K, PO4 and Mg daily x3, thiamine before feeding]]
[[Remove Ryle's tube when aspirate < __ ml/day]], then sips and fluids
Chest physio, early mobilisation, DVT prophylaxis as assessed
Inform if T > 38, P > 100, vomiting, increasing pain or leak around tube`,
discharge:`Home when [[tolerating soft diet / established on J-tube feeding]], [[D7 to D10]]
Feeding J care taught, [[keep tube until oral intake adequate]]
FU surgical clinic [[2 weeks]], trace histology
Refer [[oncology / palliative care]] as per MDT
SL [[__ days]]
To return if vomiting, fever, tube dislodged or leaking`
},

viva:[
['Stent or bypass for malignant outlet obstruction?','SUSTENT randomised 39 patients: a stent got patients eating sooner (median 5 against 8 days), but after a bypass they spent more days eating (72 against 50) and needed fewer reinterventions. Choose by life expectancy, fitness and local skill: stent for weeks, bypass for months. EUS-guided gastroenterostomy now sits between them in expert centres (ESGE 2022).'],
['Why might the stomach not empty after a GJ?','An atonic, dilated stomach; tumour infiltrating the coeliac plexus, especially in pancreatic cancer; a stoma too small, too high or too close to the tumour; a kinked or twisted loop. Partitioning the stomach above the tumour forces food through the stoma and lowers the rate in non-randomised series.'],
['What is afferent loop syndrome?','Obstruction of the afferent limb. Acute: a closed loop with pain, raised amylase and a dilated duodenum, which can perforate. Chronic: postprandial pain relieved by vomiting bile without food. Causes: a long or kinked loop, internal hernia, adhesions, recurrence. Prevent with a short, tension-free loop; treat by revision or a Braun jejunojejunostomy.'],
['Isoperistaltic or antiperistaltic?','Isoperistaltic lays the afferent limb towards the cardia and the efferent towards the pylorus, so jejunal and gastric peristalsis run the same way. Many surgeons prefer it; the evidence that it matters is weak.','conventions vary between texts'],
['Witzel, Stamm or needle catheter?','Witzel buries the tube in a seromuscular tunnel, so the tract is oblique and seals on removal. Stamm uses concentric purse-strings without a tunnel. A needle catheter jejunostomy tunnels a fine catheter in the submucosa. Tapia’s review gives technical complications of 2.1% for a longitudinal Witzel and 1.5% for a needle catheter.'],
['Who is at risk of refeeding syndrome, and how do you prevent it?','NICE CG32. High risk: BMI under 16, weight loss over 15% in 3–6 months, little or no intake for over 10 days, or low potassium, phosphate or magnesium before feeding. Or two of: BMI under 18.5, weight loss over 10%, little intake for over 5 days, alcohol misuse or certain drugs. Start at no more than 10 kcal/kg/day, give thiamine first, and replace electrolytes daily.'],
['Pancreatic head cancer found unresectable at laparotomy, with jaundice but no vomiting. What do you do?','Biopsy, biliary bypass (hepaticojejunostomy) and a prophylactic gastrojejunostomy. In Lillemoe’s randomised trial, late outlet obstruction occurred in 19% without a GJ and none with one. Many units now stent the duct endoscopically instead and reserve surgery for those already at laparotomy.']
],

sources:{
steps:[
'House technique: senior’s CMS personal template “GJ + Feeding J” (YO Templates).',
'Jeurnink SM et al. Surgical gastrojejunostomy or endoscopic stent placement for the palliation of malignant gastric outlet obstruction (SUSTENT study): a multicenter randomized trial. Gastrointest Endosc 2010;71:490–499.',
'Tips marked with a lamp are craft points. Treat them as unverified until you have tried them.'],
anatomy:['Adler DG, Baron TH. Endoscopic palliation of malignant gastric outlet obstruction using self-expanding metal stents (GOOSS). Am J Gastroenterol 2002;97:72–78.'],
pitfalls:['<a href="https://doi.org/10.21037/jgo.2018.10.10">Stomach-partitioning gastrojejunostomy is better than conventional gastrojejunostomy in palliative care of gastric outlet obstruction for gastric or pancreatic cancer: a meta-analysis. J Gastrointest Oncol 2019</a>.','Kumagai K et al. Partial stomach-partitioning gastrojejunostomy versus conventional gastrojejunostomy for malignant gastroduodenal obstruction: systematic review and meta-analysis. Langenbecks Arch Surg 2016.'],
setup:['House set-up: senior’s CMS template “GJ + Feeding J”.'],
consent:[
'SUSTENT, as above.',
'2019 meta-analysis, as above: delayed gastric emptying after conventional GJ.',
'<a href="https://pubmed.ncbi.nlm.nih.gov/10227930/">Tapia J et al. Jejunostomy: techniques, indications, and complications. World J Surg 1999</a>.'],
notes:['Wording follows the senior’s CMS personal template “GJ + Feeding J”. Orders and discharge use common HA short forms. Refeeding checks from NICE CG32.'],
viva:[
'van der Merwe SW et al. Therapeutic endoscopic ultrasound: ESGE Guideline. Endoscopy 2022;54:185–205.',
'Jue TL et al. ASGE guideline on the role of endoscopy in the management of benign and malignant gastroduodenal obstruction. Gastrointest Endosc 2021;93:309–322.',
'National Institute for Health and Care Excellence. Nutrition support for adults (CG32), 2006, updated 2017.',
'Lillemoe KD et al. Is prophylactic gastrojejunostomy indicated for unresectable periampullary cancer? A prospective randomized trial. Ann Surg 1999;230:322–328.',
'Weimann A et al. ESPEN guideline: clinical nutrition in surgery. Clin Nutr 2017;36:623–650.']
},

dg:{
setup:`<figure class="dg"><svg viewBox="0 0 340 300" role="img" aria-label="Theatre layout for open gastrojejunostomy and feeding jejunostomy">
<g fill="none" stroke="var(--muted-text)" stroke-width="1.5"><circle cx="170" cy="24" r="14"/><path d="M122 44H218Q226 44 226 52V188Q226 196 218 196H122Q114 196 114 188V52Q114 44 122 44Z"/><path d="M140 196L136 288M200 196L204 288"/><circle cx="170" cy="136" r="3"/></g>
<path d="M170 62V122" stroke="var(--accent-text)" stroke-width="3" stroke-linecap="round"/>
<circle cx="208" cy="132" r="5" fill="var(--accent-text)"/>
<g fill="var(--surface-high)" stroke="var(--border)" stroke-width="1"><rect x="12" y="110" width="84" height="30" rx="4"/><rect x="244" y="110" width="84" height="30" rx="4"/><rect x="244" y="230" width="84" height="30" rx="4"/><rect x="244" y="10" width="84" height="30" rx="4"/></g>
<text class="b" x="54" y="129" text-anchor="middle">Surgeon</text><text class="b" x="286" y="129" text-anchor="middle">Assistant</text><text class="b" x="286" y="249" text-anchor="middle">Scrub nurse</text><text class="b" x="286" y="29" text-anchor="middle">Anaesthetist</text>
<text x="54" y="96" text-anchor="middle">Patient’s right</text><text x="286" y="96" text-anchor="middle">Patient’s left</text>
<g fill="none" stroke="var(--muted-text)" stroke-width="1"><path d="M164 92H120"/><path d="M214 138L236 172"/></g>
<text x="12" y="176">Upper midline</text><text x="12" y="190">mini-laparotomy</text><text x="214" y="188">Feeding J exit,</text><text x="214" y="202">left side</text>
</svg><figcaption>Supine, arms out. Upper midline mini-laparotomy from the xiphoid towards the umbilicus. The feeding jejunostomy leaves through a separate stab on the left side of the abdomen.</figcaption></figure>`,
anat:`<figure class="dg"><svg viewBox="0 0 340 300" role="img" aria-label="Antecolic isoperistaltic gastrojejunostomy with a Witzel feeding jejunostomy downstream">
<g transform="translate(46,0) scale(0.72)" fill="none" stroke="var(--muted-text)" stroke-width="2">
<path d="M200 8V48C220 30 264 34 270 78C276 130 256 196 200 222C150 244 94 220 72 188H10"/>
<path d="M10 160H70C90 172 126 176 148 160C170 144 180 110 180 60V8"/>
<path d="M72 158V190" stroke-width="4"/>
</g>
<ellipse cx="118" cy="131" rx="14" ry="10" fill="var(--surface-high)" stroke="var(--text)" stroke-width="1.5"/>
<path d="M20 196H330" stroke="var(--muted-text)" stroke-width="14" stroke-linecap="round" opacity="0.35"/>
<g fill="none" stroke-linecap="round" stroke-linejoin="round">
<path d="M262 224C274 200 252 158 222 152C202 156 184 170 156 174C128 178 112 206 120 236C128 262 170 264 220 262C260 260 300 258 350 256" stroke="var(--muted-text)" stroke-width="11"/>
<path d="M262 224C274 200 252 158 222 152C202 156 184 170 156 174C128 178 112 206 120 236C128 262 170 264 220 262C260 260 300 258 350 256" stroke="var(--surface)" stroke-width="7.5"/>
</g>
<path d="M222 150C202 154 184 166 156 170" fill="none" stroke="var(--accent-text)" stroke-width="2.5" stroke-linecap="round"/>
<circle cx="262" cy="224" r="3.5" fill="var(--muted-text)"/>
<g fill="none" stroke="var(--text)" stroke-width="1.25"><path d="M250 253H282"/><path d="M250 265H282"/><path d="M282 259L326 230" stroke-width="2"/></g>
<g fill="none" stroke="var(--muted-text)" stroke-width="1"><path d="M104 126L54 104"/><path d="M196 162L254 122"/><path d="M118 236L62 246"/><path d="M266 266L262 280"/></g>
<text class="b" x="8" y="100">Tumour</text>
<text class="b" x="258" y="100">Stapled GJ,</text><text x="258" y="114">75 mm, on the</text><text x="258" y="128">greater curve</text>
<text x="150" y="216">Transverse colon</text>
<text class="b" x="8" y="244">Efferent</text><text x="8" y="258">limb</text>
<text x="254" y="228" text-anchor="end">DJ</text>
<text class="b" x="336" y="216" text-anchor="end">Tube out left</text>
<text x="160" y="292">Witzel tunnel, 20 cm downstream</text>
</svg><figcaption>Anterior view; the patient’s right is on your left. The jejunal loop rises from the DJ flexure in front of the transverse colon, runs along the greater curve (afferent towards the fundus, efferent towards the antrum) and leaves downstream. The feeding tube enters the efferent limb 20 cm beyond the anastomosis through a Witzel tunnel.</figcaption></figure>`}
});
