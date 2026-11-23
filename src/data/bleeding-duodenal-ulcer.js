P.push({
id:'bleeding-duodenal-ulcer', team:'EGI', name:'Under-running of bleeding duodenal ulcer', aka:'bleeding peptic ulcer gda gastroduodenal artery underrun under-run duodenotomy pyloroduodenotomy heineke mikulicz pyloroplasty ugib upper gi bleed rebleed laparotomy',
system:'Upper GI', list:'emergency', approach:'Open',
aim:'Stop the gastroduodenal artery with three stitches, without catching the bile duct, and close the duodenum without narrowing it.',
status:'Draft 0.1 · 18/11/2026 · sourced, not yet tested by you in theatre',

steps:[
{t:'Before the knife', how:'Read the endoscopy report: ulcer site, size and Forrest grade. Blood and products in the room, massive transfusion protocol ready. Arterial line, two large-bore cannulae, Ryle’s tube, urinary catheter. Rapid-sequence general anaesthesia, supine.', why:'The report tells you where to open. Most patients reaching theatre have bled twice and are old; the anaesthetist needs to be ahead of the next bleed.', tip:'Ask for the endoscope to be in theatre. If the ulcer is not where the report says, on-table endoscopy finds it faster than you will.'},
{t:'Incision', how:'Upper midline laparotomy. Self-retaining retractor, liver lifted.', why:'Fast access to stomach and duodenum, extendable downwards.'},
{t:'Kocherise', how:'Divide the peritoneum lateral to D2 and lift the duodenum and head of pancreas forwards and medially.', why:'A hand behind D1 and D2 compresses the ulcer against your fingers while you set up, and it takes tension off the closure later.', tip:'Once Kocherised, a hand behind the duodenum is a tourniquet. Use it while the anaesthetist catches up.'},
{t:'Mark the pylorus', how:'Find the pylorus by feel and by the pyloric vein of Mayo. Place stay sutures on either side of the line you will open.', why:'The incision has to cross the pylorus to reach posterior D1 and to close as a pyloroplasty.'},
{t:'Pyloroduodenotomy', how:'Longitudinal incision across the pylorus onto anterior D1, about 4–5 cm. Suck out the clot. Finger on the bleeding point.', why:'Posterior D1, where the gastroduodenal artery ulcers sit, is directly behind this incision.', tip:'No bleeding point in D1? Extend onto the antrum and look at the stomach, or scope on the table.'},
{t:'Under-run the artery', how:'Heavy non-absorbable suture on a stout round-bodied needle: one stitch cranial and one caudal to the vessel in the ulcer base, then a U-stitch on the medial side.', why:'The gastroduodenal artery fills from above and, through the pancreaticoduodenal arcades, from below. The medial U-stitch takes the transverse pancreatic branch. One stitch stops one inflow.', tip:'Keep the bites in the ulcer base and away from its lateral side. The bile duct runs just to the right of the artery.'},
{t:'Check', how:'Release the finger and the hand behind. Ask the anaesthetist to let the pressure come up. Look for bleeding and for bile in the ulcer base.', why:'A stitch tested at a systolic of 80 has not been tested. Bile in the base means the duct has been caught or opened.', tip:'Take an antral biopsy for H. pylori through the opening. Testing after a bleed is often falsely negative; tissue in a pot now is worth having.'},
{t:'Close as a pyloroplasty', how:'Pull the stay sutures apart so the longitudinal incision becomes a transverse line. Close it transversely, Heineke–Mikulicz, with interrupted 3-0 PDS.', why:'A transverse closure widens the outlet instead of narrowing it.'},
{t:'Wash and drain', how:'Irrigate with warm saline and suck dry. House drain to the subhepatic space.', why:'Blood in the peritoneum is a culture medium, and a drain there will show bile or blood early.'},
{t:'Close', how:'Mass closure with a PDS loop, skin with staples. Counts confirmed. Record blood loss and units transfused.', why:'These patients are old, anaemic and on steroids or antithrombotics more often than not: the abdominal wall has to hold through a long ileus.'}
],
house:[
['When to operate','After endoscopy fails','After repeated endoscopic failure (WSES 2020, 1D). WSES also operates without a second endoscopy if hypotensive or the ulcer is over 2 cm (1D); ESGE and ACG repeat endoscopy, then embolise.'],
['Embolisation','Depends on availability','An alternative where available (2D). Prince of Wales: rebleeding 34% after embolisation against 13% after surgery; death 25% against 30%, not significant.'],
['Locating the bleed','Duodenotomy guided by the report','Intra-operative endoscopy to locate the source (2D).'],
['Operation','Under-run and pyloroplasty','Choose by location, size and vessel (2C). Triple ligation of the gastroduodenal artery.'],
['Acid surgery','Not added','Under-running plus PPI and H. pylori eradication is the norm. WSES cites one database analysis in which vagotomy and drainage had lower mortality.'],
['After surgery','High-dose PPI','High-dose PPI infusion for 72 hours (2B), then 6–8 weeks of PPI (1B).']
],

anatomy:{
points:[
'Gastroduodenal artery: from the common hepatic artery, it descends behind D1 between the duodenum and the neck of the pancreas, then divides into the right gastroepiploic and superior pancreaticoduodenal arteries.',
'Two-way inflow: from above through the common hepatic, and from below through the pancreaticoduodenal arcades from the superior mesenteric. Hence a stitch above and a stitch below.',
'Transverse pancreatic branch: enters the ulcer base from the medial side. Hence the U-stitch.',
'Common bile duct: runs behind D1 to the right of the gastroduodenal artery, then through the head of the pancreas to the ampulla on the medial wall of D2.',
'Left gastric artery: supplies the lesser curve. High lesser-curve ulcers and Dieulafoy lesions bleed from its branches.'
],
table:{title:'Where it bleeds from', head:['Ulcer','Vessel','Operation'], rows:[
['Posterior D1','Gastroduodenal artery','Pyloroduodenotomy, three-point under-running, Heineke–Mikulicz closure'],
['Lesser curve, incisura','Left or right gastric branches','Wedge excision, or biopsy and under-running'],
['Distal lesser curve, antrum','Right gastric branches','Distal gastrectomy if excision is not possible'],
['High lesser curve, near the cardia','Left gastric','Gastrotomy, biopsy, oversew from inside'],
['Body or greater curve','Gastroepiploic or short gastric','Wedge excision']
]},
danger:[
'Common bile duct: deep or lateral bites in the ulcer base. Bile in the base or jaundice afterwards gives it away.',
'Pancreas and pancreatic duct: the base of a penetrating posterior ulcer is pancreas. Do not excise it; under-run it.',
'Ampulla: on the medial wall of D2. Matters if the incision extends down or D1 is resected.',
'Inferior vena cava: directly behind the duodenum during Kocherisation. Stay on the front of it.'
]
},

pitfalls:[
{t:'No bleeding point in D1', a:'Read the report; open where it says.', r:'Look at the stomach through an extended incision, or scope on the table. Consider a Dieulafoy lesion high on the lesser curve, a Mallory–Weiss tear, or varices.'},
{t:'Field full of blood', a:'Kocherise first so a hand can compress from behind.', r:'Finger in the ulcer, two suckers, wait for the anaesthetist. Then place the stitches one at a time under vision.'},
{t:'One stitch, then rebleeding', a:'Three points every time: cranial, caudal, medial U-stitch.', r:'Rebleeding after surgery: embolisation, or relook. Call.'},
{t:'Bile in the ulcer base', a:'Bites in the ulcer base, not lateral to it.', r:'Stop and call. The duct may need a cholangiogram and a T-tube, done by a senior.'},
{t:'Giant penetrating ulcer', a:'Expect it when the endoscopy shows an ulcer over 2 cm on the posterior wall.', r:'Under-run the base and leave it on the pancreas. If the duodenum cannot be closed, a distal gastrectomy with a difficult-stump closure (Nissen’s, Bancroft’s, or a tube duodenostomy). A senior decision.'},
{t:'Outlet narrowed or closure under tension', a:'Kocherise fully; close transversely.', r:'If it will not close without tension, call: a gastrojejunostomy or resection may be safer.'},
{t:'Coagulopathic and cold', a:'Massive transfusion protocol with plasma, platelets, calcium and warming from the start.', r:'Damage control in haemorrhagic shock with deranged physiology (WSES 2D): stitches, pack, temporary closure, ICU, relook.'},
{t:'Gastric ulcer, not duodenal', a:'Every bleeding gastric ulcer is a possible cancer.', r:'Excise it, or biopsy it and under-run (WSES 2C).'}
],
call:['Every case: this operation is done with a senior','No bleeding source found in D1','Bile in the ulcer base','Ulcer too large or duodenum unsafe to close','Bleeding not controlled by three-point under-running','Coagulopathy or haemodynamic collapse'],

setup:{
theatre:['Supine, arms out','Arterial line and two large-bore cannulae; warming on','Cross-matched blood in the room; massive transfusion protocol activated','Ryle’s tube and urinary catheter','Endoscopy stack in theatre for on-table OGD; interventional radiology aware'],
kit:['Laparotomy set with self-retaining retractor','Long instruments, two suckers, Babcocks','Stay sutures','Heavy non-absorbable suture on a stout round-bodied needle for the ulcer base: check what your unit uses','3-0 PDS for the pyloroplasty','Tube drain and 2-0 Nylon','PDS loop and skin stapler'],
standby:['Gastroscope in theatre','Linear staplers for resection','Cholangiogram catheter and T-tube','Packs for damage control']
},

consent:{
note:`Consent for laparotomy, pyloroduodenotomy and under-running of bleeding duodenal ulcer, possible partial gastrectomy
Diagnosis and indication explained: [[bleeding posterior D1 ulcer, rebleeding after endoscopic treatment x2]]
Nature of operation explained: open operation under general anaesthesia to stitch the bleeding vessel through an opening in the duodenum and close it so as to widen the stomach outlet
Alternatives discussed: repeat endoscopy, embolisation by radiologist; [[not available / failed / unstable]]
Benefits: control of life-threatening bleeding
General risks: bleeding, wound infection and wound breakdown, chest infection, deep vein thrombosis and pulmonary embolism, cardiac events
Anaesthetic risks in brief: aspiration, admission to intensive care, blood transfusion; anaesthetist to discuss in detail
Specific risks: rebleeding needing further procedure, leak from the duodenal closure, injury to bile duct or pancreas, pancreatitis, intra-abdominal collection, prolonged ileus, larger operation including partial gastrectomy, death
Blood transfusion consent obtained
[[Next of kin informed]]
Risks as charted in consent form acknowledged
Patient showed good understanding, questions answered
Consent signed`,
figures:[
['Rebleeding after endoscopic haemostasis','8.2%','Prince of Wales, 1,144 ulcers'],
['Lasting control with a second endoscopy after rebleeding','73%','Lau 1999, 35 of 48'],
['Complications, surgery for rebleeding','36%','Lau 1999, 16 of 44'],
['Complications, endoscopic retreatment','15%','Lau 1999, 7 of 48'],
['Death within 30 days, surgery for rebleeding','18%','Lau 1999, 8 of 44'],
['Rebleeding after surgery','13%','Wong 2011, Prince of Wales'],
['Rebleeding after embolisation','34%','Wong 2011'],
['Death, surgery against embolisation','30% and 25%','Wong 2011, not significant']
],
versus:'Most deaths in ulcer bleeding are not from blood loss: in 10,428 bleeds at the Prince of Wales, 6.2% died and 80% of those deaths were from other illness. Say it to the family; it is the honest framing of the risk.'
},

notes:{
findings:`[[OGD: Forrest Ia ulcer 2 cm at posterior D1, rebleeding after endoscopic treatment x2]]
[[Fresh blood and clot in stomach and duodenum]]
[[2 cm posterior D1 ulcer with spurting vessel in base]]
[[Stomach and rest of duodenum normal, no other source]]
[[No perforation]]`,
procedure:`Supine, general anaesthesia, skin prepped and draped
Upper midline laparotomy, peritoneal cavity entered
Findings as above
Duodenum Kocherised
Stay sutures placed, longitudinal pyloroduodenotomy performed
Clot evacuated, bleeding controlled with digital pressure
Ulcer base under-run with [[heavy non-absorbable suture]]: stitches cranial and caudal to gastroduodenal artery, U-stitch medially for transverse pancreatic branch
{{Haemostasis confirmed with blood pressure restored, no bile in ulcer base}}
[[Antral biopsy taken for H. pylori]]
Pyloroduodenotomy closed transversely in Heineke-Mikulicz manner with [[3-0 PDS interrupted]]
Abdomen irrigated with warm normal saline, sucked dry
[[Tubal drain inserted to subhepatic space, anchored with 2-0 Nylon]]
Mass closure with [[PDS 1 loop]], skin with [[staples]]
{{Swab, needle and instrument counts correct}}
Estimated blood loss [[__]] ml, [[__]] units packed cells transfused intraoperatively`,
decisions:[
['On-table OGD','On-table OGD performed to localise bleeding source: [[posterior D1 ulcer]] confirmed'],
['Gastric ulcer excised','Bleeding ulcer at [[incisura]], wedge excision performed, sent for histology'],
['Gastric ulcer biopsied and under-run','Bleeding ulcer at [[high lesser curve]], gastrotomy, edge biopsied x[[4]], ulcer under-run, gastrotomy closed'],
['No drain','Field dry, drain not placed']
],
deviations:[
['Source not in D1',`No bleeding source seen in D1
[[On-table OGD performed]], bleeding source [[Dieulafoy lesion at high lesser curve]] identified
[[Gastrotomy, lesion under-run]]`],
['Giant ulcer, resection',`Giant posterior D1 ulcer [[3 cm]] penetrating pancreas, duodenum unsuitable for closure
Senior kindly scrubbed in
Ulcer base under-run and left on pancreas
[[Distal gastrectomy with Billroth II reconstruction]], duodenal stump closed by [[__]] technique`],
['Bile in ulcer base',`Bile noted at ulcer base after under-running
Senior kindly scrubbed in
[[Cholangiogram via cystic duct / choledochotomy]] performed`],
['Damage control',`Ongoing coagulopathy and hypothermia, [[__]] units transfused
Bleeding controlled with under-running, abdomen packed
Temporary abdominal closure with [[negative pressure dressing]], for ICU and relook in [[24 to 48 h]]`],
['Senior called',`Senior kindly scrubbed in at [[__:__]]
[[Dr __]] continued as chief surgeon`]
],
postop:`[[ICU / HDU]] care
NPO, Ryle's tube on free drainage
IVF
[[IV PPI 80 mg bolus then 8 mg/h for 72h]]
Transfuse to Hb [[70 to 90 g/L]]
CBC [[Q12H x 48h]], clotting
[[BP/P Q1H]], strict I/O
Chart drain output, inform if blood or bile
Inform STAT if haematemesis, fresh melaena, P > 100, SBP < 100 or Hb drop
Hold [[antithrombotics]], plan restart with [[cardiology]]
Mechanical DVT prophylaxis until bleeding settled
Trace H. pylori result`,
discharge:`Home when DAT, Hb stable, [[D7 to D10]]
Oral PPI BD [[to D14]], then daily for [[6 to 8 weeks]]
H. pylori eradication if positive, test of cure afterwards
Avoid NSAIDs
Restart [[aspirin]] as planned, with PPI
FU surgical clinic [[2 to 4 weeks]]
To return if black stools, vomiting blood or dizziness`
},

viva:[
['Why three stitches?','The gastroduodenal artery is fed from both ends: from above through the common hepatic, and from below through the pancreaticoduodenal arcades. A stitch cranial and a stitch caudal to the vessel stop both. The medial U-stitch takes the transverse pancreatic branch entering the base. One stitch controls one inflow and the ulcer rebleeds.'],
['Who goes to theatre, who to radiology, and who back to endoscopy?','Lau at the Prince of Wales (1999) randomised rebleeding ulcers after endoscopic control: a second endoscopy gave lasting control in 73%, with fewer complications than surgery (15% against 36%); deaths were not significantly different. Shock and ulcers over 2 cm predicted failure. So: re-scope most; embolise where available; operate on the unstable, the large posterior ulcer, and failed embolisation. WSES operates sooner than ESGE and ACG on the hypotensive or the large ulcer.'],
['Name the pyloroplasties.','Heineke–Mikulicz: longitudinal incision across the pylorus closed transversely, the common one. Finney: a side-to-side gastroduodenostomy with the incision through the pylorus, for a scarred outlet. Jaboulay: a side-to-side gastroduodenostomy that leaves the pylorus intact.'],
['Is there still a place for vagotomy?','Rarely. PPI and H. pylori eradication do the job of acid reduction for most patients, and minimal surgery in old, unstable patients carries less morbidity. Keep it for the patient with refractory or recurrent ulceration despite good compliance, with vagotomy and drainage or antrectomy. WSES notes one database analysis in which vagotomy and drainage had lower mortality, so expect to be asked.'],
['After the bleed, do you restart aspirin?','For secondary prevention, yes, with a PPI, within three to five days. Sung’s trial at the Prince of Wales: continuing aspirin after endoscopic haemostasis doubled 30-day rebleeding (10.3% against 5.4%) but cut 8-week mortality from 12.9% to 1.3%. Stopping aspirin for a stent or a stroke costs lives.'],
['What is a Dieulafoy lesion?','A large-calibre submucosal artery that erodes through a small mucosal defect, usually high on the lesser curve within 6 cm of the cardia. It bleeds briskly and is easy to miss once it stops, because there is no ulcer to see. Treated endoscopically with clips or band ligation; surgically by wedge excision or under-running through a gastrotomy.'],
['The duodenum will not close. What now?','Antrectomy and a Billroth II, with the stump closed by Nissen’s technique (the anterior wall sewn to the pancreatic capsule over the ulcer base), Bancroft’s (antral mucosectomy so the stump is closed above the scar), or a tube duodenostomy as a controlled fistula. A Roux limb anastomosed to the defect is the other option.']
],

sources:{
steps:[
'Senior notes: Billy notes, upper GI (Kocherisation, longitudinal pyloroduodenotomy, three-point under-running, Heineke–Mikulicz closure); Deon’s notes, non-variceal upper GI bleed.',
'Your handbook UGI-03 Peptic ulcer bleed, v0.2.',
'<a href="https://doi.org/10.1186/s13017-019-0283-9">Tarasconi A et al. Perforated and bleeding peptic ulcer: WSES guidelines. World J Emerg Surg 2020;15:3</a>.',
'Lee CW, Sarosi GA. Emergency ulcer surgery. Surg Clin North Am 2011;91:1001–1013.',
'No senior CMS template for this operation was among the photos. The wording follows the house style of the others.',
'Tips marked with a lamp are craft points. Treat them as unverified until you have tried them.'],
anatomy:['Your handbook UGI-03 (operation by ulcer site); senior notes, Billy notes, upper GI.'],
pitfalls:[
'<a href="https://doi.org/10.1186/s13017-019-0283-9">WSES 2020</a>: damage control, gastric ulcer biopsy or excision.',
'Senior notes: Deon’s notes, management of the difficult duodenal stump.'],
setup:['Your handbook UGI-02 and UGI-03 (transfusion, endoscopy and radiology pathway).'],
consent:[
'<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC1773129">Wong SK et al. Prediction of therapeutic failure after adrenaline injection plus heater probe treatment in patients with bleeding peptic ulcer. Gut 2002;50:322–325</a>.',
'<a href="https://www.qxmd.com/r/10072409">Lau JY et al. Endoscopic retreatment compared with surgery in patients with recurrent bleeding after initial endoscopic control of bleeding ulcers. N Engl J Med 1999;340:751–756</a>.',
'Wong TC et al. A comparison of angiographic embolization with surgery after failed endoscopic hemostasis. Gastrointest Endosc 2011;73:900–908. Figures as quoted in your handbook UGI-03.',
'Sung JJ et al. Causes of mortality in patients with peptic ulcer bleeding. Am J Gastroenterol 2010;105:84–89.'],
notes:['House style from the senior templates. The operation record is spelt out; the orders use common HA short forms. PPI regimen from Lau 2000 and WSES 2020; transfusion target from your handbook UGI-02.'],
viva:[
'Lau 1999; Sung JJ et al. Continuation of low-dose aspirin therapy in peptic ulcer bleeding. Ann Intern Med 2010;152:1–9.',
'Senior notes: Billy notes, upper GI (pyloroplasties, acid-reduction operations); Deon’s notes, difficult duodenal stump.']
},

dg:{
anat:`<figure class="dg"><svg viewBox="0 0 340 330" role="img" aria-label="Opened pyloroduodenotomy with three-point under-running of the gastroduodenal artery, and the Heineke-Mikulicz closure">
<g fill="none" stroke="var(--muted-text)" stroke-width="1.5">
<path d="M20 30C70 22 150 22 200 30V186C150 194 70 194 20 186Z"/>
<path d="M160 24V192" stroke-width="3"/>
</g>
<path d="M58 28C66 70 70 140 64 188" stroke="var(--muted-text)" stroke-width="2.5" stroke-dasharray="6 4" fill="none" stroke-linecap="round"/>
<path d="M120 26V190" stroke="var(--accent-text)" stroke-width="2.5" stroke-dasharray="6 4" stroke-linecap="round"/>
<path d="M146 108H158" stroke="var(--accent-text)" stroke-width="1.5" stroke-dasharray="3 3"/>
<ellipse cx="118" cy="108" rx="30" ry="24" fill="var(--surface)" stroke="var(--text)" stroke-width="1.5"/>
<g fill="none" stroke="var(--text)" stroke-width="2" stroke-linecap="round">
<path d="M102 90Q120 78 138 90"/><path d="M102 126Q120 138 138 126"/>
<path d="M138 98Q152 108 138 118M138 98V118"/>
</g>
<g font-weight="600" fill="var(--text)"><text x="104" y="80">1</text><text x="104" y="148">2</text><text x="154" y="94">3</text></g>
<g stroke="var(--muted-text)" stroke-width="1"><path d="M124 46L206 58M158 108H206M62 192V202M162 146H206"/></g>
<text class="b" x="10" y="16">Pyloroduodenotomy, opened</text>
<text x="28" y="46">D1</text><text x="166" y="46">Antrum</text>
<text x="210" y="56">Gastroduodenal</text><text x="210" y="70">artery</text>
<text x="210" y="104">Transverse</text><text x="210" y="118">pancreatic branch</text>
<text x="210" y="150">Pylorus</text>
<text x="10" y="216">Common bile duct: behind,</text><text x="10" y="230">to the right of the artery</text>
<text class="b" x="10" y="258">Three points</text>
<text x="10" y="274">1 Cranial to the vessel</text><text x="10" y="288">2 Caudal to the vessel</text><text x="10" y="302">3 Medial U-stitch</text>
<text class="b" x="206" y="216">Heineke–Mikulicz</text><text x="206" y="230">closed across</text>
<g fill="none" stroke="var(--muted-text)" stroke-width="1.5"><path d="M206 254C240 250 262 246 266 244C270 246 292 250 326 254M206 318C240 322 262 326 266 328C270 326 292 322 326 318"/></g>
<path d="M266 250V322" stroke="var(--accent-text)" stroke-width="2"/>
<g stroke="var(--accent-text)" stroke-width="1.5"><path d="M260 260H272M260 272H272M260 284H272M260 296H272M260 308H272"/></g>
</svg><figcaption>Anterior view of the opened pylorus and D1; the patient’s right is on your left and the head is at the top. The artery runs behind the ulcer from above to below; the bile duct lies to its right, so lateral bites are the dangerous ones. The longitudinal opening is then closed across the duodenum, which widens the outlet.</figcaption></figure>`}
});
