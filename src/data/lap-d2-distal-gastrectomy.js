P.push({
id:'lap-d2-distal-gastrectomy', team:'EGI', name:'Laparoscopic distal gastrectomy with D2 lymphadenectomy', aka:'ladg ldg lap drg radical gastrectomy subtotal gastrectomy d2 gastric cancer adenocarcinoma stomach roux-en-y billroth lymphadenectomy lymph node stations jgca',
system:'Upper GI', list:'elective', approach:'Laparoscopic-assisted',
aim:'Remove the distal two thirds of the stomach with the D2 nodes en bloc and a clear proximal margin. Then build a Roux-en-Y that will not leak, kink or reflux.',
status:'Draft 0.1 · 19/11/2026 · sourced, not yet tested by you in theatre',
houseHead:['Step','House','Guideline and trials'],

steps:[
{t:'Checks and position', how:'WHO checklist. General anaesthesia. Ryle’s tube and urinary catheter. Antibiotic prophylaxis. French position, arms out, strapped for head-up tilt.', why:'Head-up drops the colon and small bowel away from the stomach and the pancreas.'},
{t:'Access and staging', how:'Subumbilical cutdown, Hasson port. Diagnostic laparoscopy: peritoneum, liver, pelvis, ovaries. Peritoneal washings for cytology.', why:'Peritoneal deposits or positive cytology (CY1) make the disease M1. A curative resection then stops being the plan.'},
{t:'Ports', how:'5 mm epigastric port for the liver retractor. Right upper quadrant: 12 mm and 5 mm. Left upper quadrant: 5 mm and 5 mm.', why:'Five working ports let the operator swap sides between the infrapyloric and suprapancreatic phases.'},
{t:'Into the lesser sac', how:'Divide the gastrocolic ligament and enter the lesser sac. Free the anterior surface of the pancreas of its fatty lymphatic layer.', why:'Gives the view of the pancreas and its upper border, where the D2 stations lie.', tip:'Where the mesocolon is fused to the gastrocolic ligament on the right, find the thin avascular plane between them before going deeper. The middle colic vessels lie in the mesocolon.'},
{t:'Left gastroepiploic (4sb)', how:'Follow the omentum to the lower pole of the spleen. Clip and divide the left gastroepiploic vessels at their origin. Preserve the short gastric vessels.', why:'Takes station 4sb. The short gastrics are the remnant’s blood supply once the left gastric is divided.', tip:'Release omental adhesions to the splenic capsule before pulling. Traction tears the capsule.'},
{t:'Infrapyloric (4d, 6)', how:'Dissect along the head of the pancreas to the gastrocolic trunk. Clip and divide the right gastroepiploic vein above its junction with the anterior superior pancreaticoduodenal vein, and the right gastroepiploic artery at its origin from the gastroduodenal.', why:'Takes stations 4d and 6. Dividing the vein above that junction keeps the pancreatic head drainage intact and avoids the trunk of Henle.'},
{t:'Divide the duodenum', how:'Clear the first 2 cm of D1 beyond the pylorus. Transect with the endoscopic linear stapler (house: EndoGIA 45, tan reloads, two firings).', why:'Dividing early opens the view of the suprapyloric and suprapancreatic areas.', tip:'Do not skeletonise more duodenum than the stapler needs. A devascularised stump is the one that blows out.'},
{t:'Suprapyloric and hepatoduodenal (5, 12a)', how:'Clip the right gastric artery flush at its origin. Clear the lymphatics along the proper hepatic artery, medial to the common bile duct.', why:'Takes stations 5 and 12a. The portal vein lies behind and the bile duct lateral.'},
{t:'Suprapancreatic (7, 8a, 9, 11p)', how:'Clear the nodes along the common hepatic artery, around the coeliac trifurcation and along the proximal splenic artery. Clip the left gastric vein and then the left gastric artery flush at their origins.', why:'The core of a D2. The left gastric vein usually crosses in front of or behind the common hepatic artery; find it before it bleeds.', tip:'Lift the left gastric pedicle up and towards the abdominal wall. The plane on the pancreas then opens without heat on the gland.'},
{t:'Lesser curve and cardia (1, 3)', how:'Clear the lesser curve and the right paracardial nodes up to the planned line of transection.', why:'Takes stations 1 and 3, so the specimen leaves with the whole D2 field attached.'},
{t:'Mini-laparotomy', how:'Upper midline mini-laparotomy. Wound protector. Deliver the stomach.', why:'Transection and reconstruction are done extracorporeally in the house laparoscopy-assisted technique.'},
{t:'Proximal transection', how:'Transect with the linear stapler (house: NTLC 75), leaving about one third of the stomach. Check the margin on the specimen before reconstructing.', why:'JGCA: at least 3 cm for an expansive and 5 cm for an infiltrative T2 or deeper tumour, 2 cm for T1. Frozen section if close.', tip:'For an early tumour you cannot feel, have it clipped or tattooed before the operation, or check with on-table OGD.'},
{t:'Reinforce the staple lines', how:'Bury the duodenal stump and the gastric remnant staple lines with 3/0 PDS.', why:'House practice to protect the stump. The stump leak is the most dangerous leak after this operation.'},
{t:'Roux limb', how:'Divide the jejunum with the linear stapler and bury the stump. Bring the distal limb up antecolic. Side-to-side jejunojejunostomy with continuous 3/0 PDS, 40 cm or more down the Roux limb.', why:'A Roux limb of this length keeps bile out of the remnant.', tip:'Mark the proximal end of the Roux limb with a stitch before dividing. Joining the biliopancreatic limb to the stomach by mistake (a Roux-en-O) is a disaster.'},
{t:'Gastrojejunostomy', how:'Stapled side-to-side gastrojejunostomy (house: NTLC 75). Close the common opening with 3/0 PDS.', why:'A wide stapled stoma empties well and is quick to make through a small wound.'},
{t:'Close the windows', how:'Close the jejunojejunostomy mesenteric defect and Petersen’s space.', why:'Open defects allow internal herniation and closed-loop obstruction later.'},
{t:'Check and close', how:'OGD to check the anastomosis for patency and bleeding. NG tube placed in the jejunum. Tube drain beneath the anastomosis, passing through Morison’s pouch to lie by the duodenal stump. Fascia PDS 1, port fascia 2/0 Vicryl, skin staples. Counts.', why:'An early stump or pancreatic leak declares itself in the drain.', tip:'Ask whether your unit sends the nodes separately by station. At least 16 nodes are needed for accurate staging.'}
],
house:[
['Approach','Laparoscopy-assisted, extracorporeal anastomoses','Stage I: KLASS-01 and JCOG0912 showed laparoscopy non-inferior. Locally advanced: KLASS-02 and CLASS-01 showed the same, with qualified surgeons.'],
['Extent of nodes','D2','JGCA 2021: D2 for cN+ or cT2–T4. D1 or D1+ for cT1N0.'],
['Omentum','Per consultant','JGCA: omentectomy is usual for T3 or deeper. For T1 and T2, omentum beyond 3 cm from the gastroepiploic arcade may be kept.'],
['Margin','About one third of the stomach left','At least 3 cm (expansive) or 5 cm (infiltrative) for T2 or deeper; 2 cm for T1. Frozen section when close.'],
['Reconstruction','Antecolic Roux-en-Y','Billroth I, Billroth II and Roux-en-Y are all accepted. Roux-en-Y causes less bile reflux and remnant gastritis but risks Roux stasis.'],
['Mesenteric defects','Closed','Closure prevents internal hernia. The best trial evidence is from gastric bypass for obesity.'],
['Drain','Tube drain by the stump','Cochrane review: no evidence that a routine drain improves outcome after gastrectomy.'],
['Chemotherapy','MDT decision','Perioperative FLOT (FLOT4), or adjuvant S-1 (ACTS-GC) or CAPOX (CLASSIC) for stage II–III.']
],

anatomy:{
points:[
'What is divided: the left gastric artery from the coeliac (station 7), the right gastric from the hepatic (5), the right gastroepiploic from the gastroduodenal (6) and the left gastroepiploic from the splenic (4sb), all at their origins. The remnant then lives on the short gastric and posterior gastric arteries.',
'Infrapyloric veins: the right gastroepiploic vein joins the anterior superior pancreaticoduodenal vein and often the right colic vein to form the gastrocolic trunk of Henle. Divide the gastroepiploic vein above that junction.',
'Upper border of the pancreas: the common hepatic artery runs along it. Station 8a lies in front of and above it; 8p, behind it, is not part of a D2. The left gastric vein drains into the portal or splenic vein, passing in front of or behind the common hepatic artery.',
'Hepatoduodenal ligament: 12a lies along the proper hepatic artery. The bile duct is lateral and the portal vein behind.',
'Aberrant left hepatic artery: arises from the left gastric artery and runs in the lesser omentum. Divide the left gastric at its origin and a replaced artery takes the left lobe’s arterial supply with it.'
],
table:{title:'Stations taken in a distal gastrectomy (JGCA 2021)', head:['No.','Site','Level'], rows:[
['1','Right paracardial','D1'],
['3','Lesser curvature','D1'],
['4sb','Left gastroepiploic vessels','D1'],
['4d','Right gastroepiploic vessels','D1'],
['5','Suprapyloric, along the right gastric artery','D1'],
['6','Infrapyloric','D1'],
['7','Along the left gastric artery','D1'],
['8a','Common hepatic artery, anterosuperior','D1+ and D2'],
['9','Coeliac artery','D1+ and D2'],
['11p','Proximal splenic artery','D2'],
['12a','Hepatoduodenal ligament, along the proper hepatic artery','D2']
]},
danger:[
'Gastrocolic trunk and anterior superior pancreaticoduodenal vein: torn in the infrapyloric dissection, they bleed briskly and retract.',
'Middle colic vessels: in the mesocolon fused to the gastrocolic ligament on the right.',
'Pancreas: heat and traction during the 8a, 9 and 11p dissection cause a pancreatic fistula, the main complication specific to a D2.',
'Portal vein and bile duct: behind and lateral to the 12a dissection.',
'Splenic artery, splenic vein and spleen: the 11p dissection and omental traction.',
'Duodenal stump: a blowout here is the most lethal leak after gastrectomy.'
]
},

pitfalls:[
{t:'Duodenal stump leak', a:'Transect healthy duodenum, keep its blood supply, bury the staple line, keep the remnant decompressed.', r:'Contained, with a drain in place: nil by mouth, nutrition through the jejunum, drain kept. Peritonitis or uncontrolled: relaparotomy with a tube duodenostomy as a controlled fistula and wide drainage. Call.'},
{t:'Pancreatic fistula', a:'Keep the energy device off the gland. Dissect in the plane on the pancreas, not in it.', r:'Drain amylase over three times the serum upper limit from day 3 is a fistula. Keep the drain; image for collections; drain them percutaneously.'},
{t:'Bleeding at the gastrocolic trunk or left gastric vein', a:'Identify the trunk and the vein before dividing anything near them.', r:'Pressure with a small swab through a port, then a second instrument to clip. Not controlled in two minutes: convert. Call.'},
{t:'Proximal margin close or involved', a:'Know the tumour type and margin target before the stapler goes on.', r:'Frozen section. Involved: a further ring of stomach, or completion to total gastrectomy with a Roux-en-Y oesophagojejunostomy. Call.'},
{t:'Wrong limb to the stomach (Roux-en-O)', a:'Stitch-mark the proximal end of the Roux limb. Trace both limbs before stapling.', r:'Recognised on the table: take it down and redo it. Recognised later as bilious vomiting and obstruction: reoperation.'},
{t:'Peritoneal disease found', a:'Stage with laparoscopy and washings first, before any dissection.', r:'Biopsy, stop the resection, close. An obstructing or bleeding tumour may still need palliative resection or bypass. MDT.'},
{t:'Splenic capsule tear', a:'Release omental adhesions before traction.', r:'Pressure and a haemostatic agent. Splenectomy only for uncontrolled bleeding. Call.'},
{t:'Aberrant left hepatic artery', a:'Look in the lesser omentum before dividing it; check the CT.', r:'A small accessory artery may be divided. A replaced artery supplying the left lobe should be preserved, taking the left gastric distal to its origin. Call.'}
],
call:['Peritoneal disease or a T4b tumour','Margin close or involved on frozen section','Bleeding not controlled in two minutes','Replaced left hepatic artery','Doubt about which limb is which','You are thinking about converting'],

setup:{
theatre:['French position, arms out, strapped for head-up tilt','Surgeon between the legs; assistants either side; the operator may move to the patient’s right for the infrapyloric and suprapyloric dissection','Monitors at the head on both sides','Ryle’s tube and urinary catheter'],
kit:['Hasson port, one 12 mm and four 5 mm ports','Liver retractor','Ultrasonic energy device','Clip appliers: locking polymer and titanium','Endoscopic linear stapler 45 mm with reloads (house: tan) for the duodenum','Linear cutter 75 mm (house: NTLC 75) with reloads for the stomach and jejunum','Wound protector for the mini-laparotomy','3/0 PDS, PDS 1, 2/0 Vicryl, skin stapler','Tube drain and 2-0 Nylon'],
standby:['Gastroscope and stack for the anastomotic check','Open gastrectomy set with vascular instruments','Haemostatic agents','Frozen section booked']
},

consent:{
note:`Consent for laparoscopic distal (subtotal) gastrectomy with D2 lymph node dissection and Roux-en-Y reconstruction, possible open operation
Diagnosis and indication explained: [[adenocarcinoma of stomach at __, cT_N_M0, MDT recommendation for surgery]]
Nature of operation explained: keyhole operation with a small upper abdominal incision under general anaesthesia, to remove the lower two thirds of the stomach with its lymph nodes and join the remaining stomach to the small bowel; possible conversion to open; possible removal of whole stomach if margin inadequate; operation may be abandoned if tumour has spread to the lining of the abdomen
Alternatives discussed: open operation; [[chemotherapy before surgery as recommended by MDT]]; non-surgical treatment with chemotherapy alone, not curative
Benefits: chance of cure, accurate staging to guide further treatment
General risks: bleeding, wound infection, chest infection, deep vein thrombosis and pulmonary embolism, cardiac events
Anaesthetic risks in brief; anaesthetist to discuss in detail
Specific risks: leak from joins or duodenal stump which may need drainage or re-operation, pancreatic leak, intra-abdominal collection, injury to spleen, pancreas, colon, bile duct or blood vessels, delayed stomach emptying, conversion to open, internal hernia and bowel obstruction later
Long-term effects: early fullness and small meals, weight loss, dumping, bile reflux, vitamin B12, iron and calcium deficiency
Risk of death explained
Further chemotherapy may be recommended depending on final histology
Risks as charted in consent form acknowledged
Patient showed good understanding, questions answered
Consent signed`,
figures:[
['Complications within 30 days, laparoscopic D2','15.2%','CLASS-01, 1,056 patients, China (open 12.9%)'],
['Death within 30 days, laparoscopic D2','0.4%','CLASS-01 (open 0%)'],
['Early complications, laparoscopic against open','16.4% against 24.3%','KLASS-02, 1,050 patients, Korea'],
['5-year overall survival, locally advanced, laparoscopic','88.9%','KLASS-02, R0 resections (open 88.7%)'],
['5-year relapse-free survival, laparoscopic','79.5%','KLASS-02 (open 81.1%)'],
['Gastric cancer death at 15 years, D2 against D1','37% against 48%','Dutch D1D2 trial'],
['Postoperative death, D2 against D1, early 1990s','10% against 4%','Dutch D1D2 trial, with routine splenectomy and pancreatectomy']
],
versus:'The trial figures are what qualified surgeons in high-volume Asian centres achieve; your unit’s audit figures are better still if you have them. The Dutch postoperative deaths came from splenectomy and distal pancreatectomy, which a modern pancreas-preserving D2 avoids.'
},

notes:{
findings:`[[CA stomach at angularis incisura]]
[[Hard matted LN at station 8]]
[[No peritoneal nodules, no gross liver lesions]]
[[Peritoneal washing sent for cytology]]
D2 LN dissection, curative intent
[[OGD: GJ patent, no anastomotic bleeding]]`,
procedure:`French position, [[head-up]], general anaesthesia, skin prepped and draped
[[Ryle's tube and urinary catheter in situ]]
Subumbilical cutdown with {{Hasson's technique}}, capnoperitoneum created at pressure [[12]] mmHg
Diagnostic laparoscopy done, findings as above
[[One 5 mm port at epigastrium for liver retractor; RUQ 12 mm and 5 mm ports; LUQ 5 mm and 5 mm ports]] inserted {{under laparoscopic guidance}}
Peritoneal washing for cytology
Gastrocolic ligament incised, lesser sac entered
Anterior surface of pancreas stripped clear of lymphatics
[[LGEA and RGE vessels]] clipped flush at origin, [[short gastric vessels preserved]]
D1 transected with [[EndoGIA 45 x2 (tan)]]
Lymphatics medial to CBD stripped clean
RGA clipped flush at origin
Coeliac trifurcation LN stripped clean
LGV and LGA ligated flush at origin
Station 1 LN harvested
[[Upper midline mini-laparotomy]], wound protector applied
Stomach transected with [[NTLC 75]], remnant [[about 1/3]], {{proximal margin checked clear}}
Staple lines reinforced with [[3/0 PDS]] (duodenal stump, gastric remnant)
Antecolic Roux-en-Y reconstruction
Small bowel divided with [[NTLC 75]] [[__ cm]] from DJ flexure, stump buried with [[3/0 PDS]]
Side-to-side JJ anastomosis [[__ cm]] down Roux limb with [[3/0 PDS]] continuous
GJ anastomosis performed with [[NTLC 75]], GJ window closed with [[3/0 PDS]]
{{Mesenteric windows closed}}
{{Anastomosis checked with OGD}}, [[NG tube placed at jejunum]]
Haemostasis secured
[[Tubal drain placed underneath anastomosis, passing through Morison's pouch]], anchored with [[2-0 Nylon]]
Fascia closed with [[PDS 1]], port wounds closed with [[2/0 Vicryl]], skin with staples
{{Swab, needle and instrument counts correct}}
[[LN dissected off specimen by station and sent separately]]`,
decisions:[
['Cholecystectomy','Cholecystectomy done [[in view of gallstones]], gallbladder specimen out via mini-laparotomy'],
['Omentectomy','[[Greater omentum resected en bloc with specimen]]'],
['Nasojejunal tube','OGD-guided NJ tube inserted, tip at [[__ cm]]'],
['Drains behind the GJ','[[Tubal drains placed posterior to GJ, passing through Morison’s pouch]], anchored with [[2-0 Nylon]]']
],
deviations:[
['Peritoneal disease found',`Peritoneal nodules at [[__]], biopsied, frozen section [[positive for carcinoma]]
Senior kindly scrubbed in
Decided not to proceed with resection, [[for MDT discussion]]`],
['Margin involved',`Frozen section of proximal margin [[involved]]
Senior kindly scrubbed in
[[Further ring of stomach resected, frozen section clear / proceeded to total gastrectomy with Roux-en-Y oesophagojejunostomy]]`],
['Conversion to open',`Decided to convert open in view of [[bleeding / adhesions / bulky nodes]]
Upper midline laparotomy, peritoneal cavity entered
Remainder of dissection completed open as above`],
['Bleeding',`Bleeding from [[gastrocolic trunk]] during infrapyloric dissection, controlled with [[pressure and clips]]
Estimated blood loss [[__]] ml`],
['Senior called',`Senior kindly scrubbed in at [[__:__]]
[[Dr __]] continued as chief surgeon`]
],
postop:`NPO, [[NG tube on free drainage]]
IVF
IV PPI
Analgesics regular and PRN [[PCA]]
[[BP/P Q1H x4 then Q4H if stable]]
Strict I/O, inform if UO < 0.5 ml/kg/h
Chart drain output, drain amylase [[POD1 and POD3]]
[[Sips POD1, fluids POD2, soft diet POD3 to POD4 if no clinical leak]]
Dietitian referral
Chest physio, early mobilisation, DVT prophylaxis as assessed
Inform if T > 38, P > 100, bile-stained or turbid drain, increasing pain`,
discharge:`Home when DAT with small frequent meals, afebrile, drain off, [[POD5 to POD7]]
Dietary advice: small frequent meals, avoid sweet loads
FU surgical clinic [[2 weeks]], trace histology: pTNM, nodes retrieved, margins
Refer oncology for [[adjuvant chemotherapy]] as per MDT
[[Vitamin B12, iron and folate check at follow-up]]
SL [[__ days]]
To return if fever, vomiting, abdominal pain or wound discharge`
},

viva:[
['Define D1, D1+ and D2 for a distal gastrectomy.','JGCA 2021. D1: stations 1, 3, 4sb, 4d, 5, 6 and 7. D1+: D1 with 8a and 9. D2: D1 with 8a, 9, 11p and 12a. Station 14v is no longer part of a D2.'],
['What is the evidence for D2?','The Dutch D1D2 trial: no difference in overall survival at 15 years, but gastric cancer death fell from 48% to 37%, at the cost of postoperative mortality of 10% against 4%, driven by splenectomy and pancreatectomy. The MRC trial found the same excess morbidity. JCOG9501 found that going beyond D2 to para-aortic nodes adds nothing. A pancreas- and spleen-preserving D2 in a high-volume unit is now standard.'],
['Is laparoscopic gastrectomy oncologically safe?','For stage I, KLASS-01 and JCOG0912 showed non-inferior survival. For locally advanced disease, KLASS-02 (5-year overall survival 88.9% against 88.7%) and CLASS-01 (3-year disease-free survival) showed non-inferiority, in qualified surgeons’ hands, with fewer complications in KLASS-02.'],
['What margin do you need, and how do you check it?','JGCA: 2 cm for T1; for T2 or deeper, 3 cm for an expansive and 5 cm for an infiltrative tumour. Where the margin is close, frozen section. For an impalpable early tumour, preoperative clips or tattoo, or on-table endoscopy.'],
['Billroth I, Billroth II or Roux-en-Y?','Billroth I is physiological with one anastomosis but needs a large remnant and causes bile reflux. Billroth II reaches easily but brings bile reflux and the risk of afferent loop syndrome. Roux-en-Y prevents reflux and remnant gastritis but adds an anastomosis and the risk of Roux stasis and internal hernia. JGCA accepts all three.'],
['Day 5: tachycardia, pain, bile in the drain.','Duodenal stump leak until proven otherwise. Resuscitate and CT with oral contrast. Controlled through the drain in a stable patient: nil by mouth, jejunal feeding, antibiotics, drain kept, collections drained percutaneously. Peritonitis or sepsis: relaparotomy, washout, tube duodenostomy through the defect as a controlled fistula, wide drainage, feeding jejunostomy.','management from case series and expert opinion'],
['What does positive peritoneal cytology mean?','CY1 is M1, stage IV, even without visible deposits. Staging laparoscopy with washings is recommended before treatment for advanced (cT3–T4) tumours, because it changes the plan in a meaningful minority.'],
['What chemotherapy accompanies the operation?','Perioperative FLOT in FLOT4 improved median overall survival to 50 months from 35 with ECF or ECX. In Asia, adjuvant S-1 (ACTS-GC: 5-year overall survival 71.7% against 61.1% with surgery alone) or capecitabine with oxaliplatin (CLASSIC: 5-year disease-free survival 68% against 53%) for stage II–III after D2.']
],

sources:{
steps:[
'House technique: senior’s CMS personal templates “Lap DRG” and “Lap Gastrectomy” (YO Templates).',
'<a href="https://doi.org/10.1007/s10120-022-01331-8">Japanese Gastric Cancer Association. Japanese Gastric Cancer Treatment Guidelines 2021 (6th edition). Gastric Cancer 2023;26:1–25</a>.',
'Tips marked with a lamp are craft points. Treat them as unverified until you have tried them.'],
anatomy:['JGCA 2021, as above: station definitions and D levels.','Senior notes: Billy notes, upper GI.'],
pitfalls:['JGCA 2021: margins and frozen section.','Bassi C et al. The 2016 update of the International Study Group definition of postoperative pancreatic fistula. Surgery 2017;161:584–591.','Duodenal stump management: Deon’s notes, management of the difficult duodenal stump.'],
setup:['House set-up and port positions: senior’s CMS templates “Lap DRG” and “Lap Gastrectomy”.'],
consent:[
'Hu Y et al. Morbidity and mortality of laparoscopic versus open D2 distal gastrectomy for advanced gastric cancer (CLASS-01). J Clin Oncol 2016;34:1350–1357.',
'<a href="https://doi.org/10.1001/jamasurg.2022.2749">Son SY et al. Laparoscopic vs open distal gastrectomy for locally advanced gastric cancer: 5-year outcomes of the KLASS-02 trial. JAMA Surg 2022;157:879–886</a>.',
'Lee HJ et al. Short-term outcomes of a multicenter randomized controlled trial comparing laparoscopic distal gastrectomy with D2 lymphadenectomy to open distal gastrectomy for locally advanced gastric cancer (KLASS-02-RCT). Ann Surg 2019;270:983–991.',
'<a href="https://doi.org/10.1016/S1470-2045(10)70070-X">Songun I et al. Surgical treatment of gastric cancer: 15-year follow-up results of the randomised nationwide Dutch D1D2 trial. Lancet Oncol 2010;11:439–449</a>.'],
notes:['Wording follows the senior’s CMS personal templates “Lap DRG” and “Lap Gastrectomy”. Orders and discharge use common HA short forms.'],
viva:[
'Yu J et al. Effect of laparoscopic vs open distal gastrectomy on 3-year disease-free survival (CLASS-01). JAMA 2019;321:1983–1992.',
'Katai H et al. Survival outcomes after laparoscopy-assisted distal gastrectomy versus open distal gastrectomy for stage I gastric cancer (JCOG0912). Lancet Gastroenterol Hepatol 2020;5:142–151.',
'Sasako M et al. D2 lymphadenectomy alone or with para-aortic nodal dissection for gastric cancer (JCOG9501). N Engl J Med 2008;359:453–462.',
'Al-Batran SE et al. Perioperative FLOT versus ECF/ECX (FLOT4). Lancet 2019;393:1948–1957.',
'Sasako M et al. Five-year outcomes of adjuvant S-1 (ACTS-GC). J Clin Oncol 2011;29:4387–4393. Noh SH et al. Adjuvant capecitabine plus oxaliplatin (CLASSIC): 5-year follow-up. Lancet Oncol 2014;15:1389–1396.']
},

dg:{
setup:`<figure class="dg"><svg viewBox="0 0 340 300" role="img" aria-label="Theatre layout and port positions for laparoscopic distal gastrectomy">
<g fill="none" stroke="var(--muted-text)" stroke-width="1.5"><circle cx="170" cy="24" r="14"/><path d="M122 44H218Q226 44 226 52V188Q226 196 218 196H122Q114 196 114 188V52Q114 44 122 44Z"/><path d="M136 196L108 288M204 196L232 288"/><circle cx="170" cy="136" r="3"/></g>
<g fill="var(--accent-text)"><circle cx="170" cy="148" r="6"/><circle cx="170" cy="70" r="4.5"/><circle cx="132" cy="118" r="6"/><circle cx="140" cy="84" r="4.5"/><circle cx="208" cy="118" r="4.5"/><circle cx="200" cy="84" r="4.5"/></g>
<text class="b" x="181" y="158">A</text><text class="b" x="178" y="64">D</text><text class="b" x="110" y="124">C</text><text class="b" x="124" y="82">C</text><text class="b" x="216" y="124">B</text><text class="b" x="207" y="80">B</text>
<g fill="var(--surface-high)" stroke="var(--border)" stroke-width="1"><rect x="128" y="250" width="84" height="30" rx="4"/><rect x="12" y="130" width="84" height="30" rx="4"/><rect x="244" y="130" width="84" height="30" rx="4"/><rect x="12" y="34" width="84" height="30" rx="4"/><rect x="244" y="34" width="84" height="30" rx="4"/></g>
<text class="b" x="170" y="269" text-anchor="middle">Surgeon</text><text class="b" x="54" y="149" text-anchor="middle">Camera</text><text class="b" x="286" y="149" text-anchor="middle">Assistant</text><text class="b" x="54" y="53" text-anchor="middle">Monitor</text><text class="b" x="286" y="53" text-anchor="middle">Monitor</text>
<text x="54" y="112" text-anchor="middle">Patient’s right</text><text x="286" y="112" text-anchor="middle">Patient’s left</text>
</svg><figcaption>French position, head up. <b>A</b> subumbilical Hasson port, camera. <b>B</b> left upper quadrant, two 5 mm ports. <b>C</b> right upper quadrant, 12 mm (lower) and 5 mm. <b>D</b> 5 mm epigastric port for the liver retractor. The upper midline mini-laparotomy joins D towards A for the anastomoses.</figcaption></figure>`,
anat:`<figure class="dg"><svg viewBox="0 0 340 282" role="img" aria-label="Lymph node stations of a D2 distal gastrectomy around the stomach, coeliac axis and pancreas">
<g fill="none" stroke="var(--muted-text)" stroke-width="1.5">
<path d="M196 4V30C190 64 186 96 160 108C134 120 100 122 66 124H30C14 124 8 136 8 152V280"/>
<path d="M212 4V28C230 14 270 14 284 42C300 74 290 120 252 140C214 160 150 158 108 150C92 147 78 148 66 150H30C24 150 22 154 22 160V280"/>
<path d="M66 122V152" stroke-width="3"/>
<path transform="translate(0,22)" d="M24 198C40 188 70 188 100 196C150 206 220 196 270 186C292 182 306 188 304 198C302 208 280 214 250 218C200 226 140 222 100 228C76 232 62 252 40 252C28 252 24 238 24 222Z" fill="var(--surface-high)"/>
</g>
<g fill="none" stroke="var(--text)" stroke-width="1.25">
<path d="M176 186C172 160 168 128 162 108"/>
<path d="M176 186C150 190 116 194 94 194"/>
<path d="M94 194C90 166 72 116 62 64"/>
<path d="M80 138C92 132 104 124 116 121"/>
<path d="M94 194V214"/>
<path d="M176 186C210 192 250 196 296 192"/>
</g>
<circle cx="176" cy="186" r="2.5" fill="var(--text)"/>
<path d="M186 60L294 92" stroke="var(--muted-text)" stroke-width="1.25" stroke-dasharray="5 4"/>
<path d="M44 118V156" stroke="var(--muted-text)" stroke-width="1.25" stroke-dasharray="5 4"/>
<g fill="none" stroke="var(--muted-text)" stroke-width="1.5"><circle cx="182" cy="42" r="4"/><circle cx="168" cy="78" r="4"/><circle cx="298" cy="114" r="4"/><circle cx="200" cy="166" r="4"/><circle cx="100" cy="108" r="4"/><circle cx="70" cy="170" r="4"/><circle cx="160" cy="150" r="4"/></g>
<g fill="var(--accent-text)"><circle cx="128" cy="206" r="4.5"/><circle cx="176" cy="202" r="4.5"/><circle cx="226" cy="206" r="4.5"/><circle cx="58" cy="100" r="4.5"/></g>
<g><text x="166" y="46" class="b">1</text><text x="152" y="82" class="b">3</text><text x="304" y="132" class="b">4sb</text><text x="206" y="182" class="b">4d</text><text x="106" y="100" class="b">5</text><text x="52" y="174" class="b">6</text><text x="144" y="154" class="b">7</text><text x="104" y="210" class="b">8a</text><text x="184" y="206" class="b">9</text><text x="234" y="210" class="b">11p</text><text x="28" y="104" class="b">12a</text></g>
<text x="150" y="262">Pancreas</text><text x="108" y="182">CHA</text><text x="252" y="186">Splenic</text>
</svg><figcaption>Anterior view with the stomach lifted to show the coeliac axis on the upper border of the pancreas; the patient’s right is on your left. Open circles: D1 stations. Filled: the stations a D2 adds (8a, 9, 11p, 12a). Dashed: the proximal line of transection and the duodenal division.</figcaption></figure>`}
});
