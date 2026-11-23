P.push({
id:'lap-gastric-wedge', team:'EGI', name:'Laparoscopic wedge resection of gastric GIST', aka:'gist gastrointestinal stromal tumour submucosal tumour smt subepithelial wedge resection partial gastrectomy local resection leiomyoma schwannoma imatinib',
system:'Upper GI', list:'elective', approach:'Laparoscopic',
aim:'Take the tumour out whole, inside its pseudocapsule, with a rim of normal wall, without narrowing the stomach. Rupture turns a patient who would be cured into a high-risk one.',
status:'Draft 0.1 · 19/11/2026 · sourced, not yet tested by you in theatre',

steps:[
{t:'Checks and position', how:'WHO checklist. General anaesthesia. Ryle’s tube in. Split-leg (French) position, arms out, strapped for steep head-up tilt.', why:'From between the legs the surgeon looks straight up at the stomach. Head-up drops the colon and omentum out of the way.'},
{t:'Access', how:'Subumbilical incision, Hasson port by open technique. Carbon dioxide to 12 mmHg. Look at the liver and peritoneum before anything else.', why:'Open entry is house practice. Peritoneal or liver deposits change the operation into a biopsy.'},
{t:'Working ports', how:'5 mm port on the left side of the abdomen. Adhesiolysis if needed. Then a 5 mm epigastric port and a 12 mm port on the right side.', why:'Left and right ports are the two hands. The 12 mm port takes the stapler.', tip:'Before placing the 12 mm port, hold a grasper against the wall at that point and check it lines up with the staple line you plan. A stapler that comes in at the wrong angle takes too much stomach.'},
{t:'Liver retractor', how:'Insert the liver retractor and lift the left lobe towards the diaphragm.', why:'Exposes the lesser curve, the cardia and the angle of His.'},
{t:'Find the tumour', how:'Anterior wall, greater and lesser curves first. For a posterior wall tumour, open the gastrocolic ligament and enter the lesser sac.', why:'Most gastric GISTs are exophytic and seen at once. Endophytic ones are felt with an instrument or found by endoscopy.', tip:'Not visible from outside: on-table OGD. The endoscopist pushes on the lesion and the light shows you where it is.'},
{t:'Do not grasp the tumour', how:'Hold the stomach wall around it, never the tumour. Lift with stay sutures or a sling if you need traction.', why:'The pseudocapsule is thin and the tumour is friable. A tear is tumour rupture, which counts as high risk whatever the size.'},
{t:'Free the site', how:'Divide the gastroepiploic or short gastric branches at the tumour only, with the energy device close to the stomach wall.', why:'No lymphadenectomy is needed for GIST. Keeping the dissection tight to the wall spares the arcade and the spleen.'},
{t:'Wedge it out', how:'Lift the wall below the tumour and fire the linear stapler across normal stomach, about 1 cm clear of the tumour. Fire along the long axis of the stomach.', why:'A rim of normal wall gives a clear margin; wide margins add nothing. A staple line along the axis keeps the lumen open.', tip:'Near the cardia or the pylorus, ask for OGD before you fire and look at the lumen with the stapler closed.'},
{t:'Oversew', how:'House practice: oversew the staple line with continuous 3-0 V-Loc.', why:'Reinforces the line and controls bleeding points. No trial shows that it changes leak or bleeding rates.'},
{t:'Test', how:'Fill the area with saline, inflate the stomach through the Ryle’s tube, and look for bubbles and blood.', why:'A staple line leak is rare, but cheap to find now.'},
{t:'Retrieve', how:'Tumour into a retrieval bag, out through the umbilical port. Enlarge the fascia if it does not slide out easily.', why:'Pulling a tumour through a tight wound ruptures it and seeds the port site.'},
{t:'Close and send', how:'Fascia of the umbilical and 12 mm ports with 2-0 Vicryl, skin with 3-0 Ethilon. Local anaesthetic. Counts. Send the specimen intact and unopened, with the request for mitotic count and mutation analysis.', why:'Unlike an appendix or gallbladder, a GIST is not opened. The pathologist needs the capsule and margins intact to count mitoses and assess rupture.'}
],
house:[
['Approach','Laparoscopic wedge','ESMO 2022: laparoscopic resection is acceptable in favourable sites if oncological principles are kept. Avoid it for large tumours because of the rupture risk.'],
['Margin','Stapled wedge with a rim of normal wall','Aim for R0. Wide margins are not needed. After an R1 excision, re-excision is an option if the site can be found and the cost in function is small.'],
['Lymph nodes','Not taken','Lymphadenectomy is not indicated; nodal spread is rare. The exception is the SDH-deficient GIST of young patients.'],
['Staple line','Oversewn with 3-0 V-Loc','No trial evidence either way.'],
['Under 2 cm','Not usually operated','Gastric nodules under 2 cm: endoscopic ultrasound and then surveillance is standard. Excise if it grows or the patient prefers.'],
['After surgery','Oncology referral by risk','Imatinib for 3 years if the risk of recurrence is significant (SSG XVIII). Mutation analysis first: PDGFRA D842V and SDH-deficient tumours do not respond.'],
['Large or awkward tumour','Discuss at MDT','Imatinib before surgery to shrink a tumour whose resection would otherwise be extensive or mutilating.']
],

anatomy:{
points:[
'Origin: GISTs arise from the interstitial cells of Cajal in the muscularis propria. They grow outwards (exophytic), inwards under the mucosa (endophytic) or both (dumbbell). The mucosa over them may ulcerate and bleed.',
'Blood supply: left and right gastric, left and right gastroepiploic, short gastric and posterior gastric arteries. With this many inflows, a wedge almost anywhere leaves the remaining stomach well perfused.',
'Lesser sac: the posterior wall faces the pancreas, the splenic artery, the left adrenal and kidney across the lesser sac. The way in is through the gastrocolic ligament below the gastroepiploic arcade.',
'Lesser curve: carries the left gastric arcade and the anterior and posterior nerves of Latarjet. A wedge here deforms the incisura; dividing both nerves leaves the antrum unable to empty.',
'Site decides the operation: the anterior wall and greater curve take a simple wedge. The posterior wall needs the lesser sac or a transgastric approach. Near the cardia or the pylorus, a wedge narrows the lumen, so intragastric resection or a formal gastrectomy may be needed.'
],
table:{title:'Gastric GIST: risk of progression (Miettinen–Lasota)', head:['Size','≤5 mitoses per 5 mm²','>5 mitoses per 5 mm²'], rows:[
['≤2 cm','0%','Too few cases'],
['>2–5 cm','1.9%','16%'],
['>5–10 cm','3.6%','55%'],
['>10 cm','12%','86%']
]},
danger:[
'Cardia and angle of His: a staple line close to the oesophagogastric junction narrows it and causes dysphagia.',
'Pylorus: a wedge in the antrum close to the pylorus causes outlet obstruction.',
'Spleen and short gastric vessels: high greater-curve tumours lie against the gastrosplenic ligament, where the vessels are short.',
'Pancreas and splenic artery: directly behind a posterior wall tumour in the lesser sac.',
'Nerves of Latarjet: on the lesser curve. Injuring both causes delayed gastric emptying.'
]
},

pitfalls:[
{t:'Tumour ruptures', a:'Handle the stomach, not the tumour. Bag it before it leaves the abdomen. Enlarge the wound rather than squeeze it out.', r:'Retrieve the spilled tissue, wash out, and record it plainly in the note. Rupture is a high-risk feature on its own and changes the adjuvant decision. Tell the MDT.'},
{t:'Cannot find an endophytic tumour', a:'Know the site from the EUS or CT before you start. Book the endoscope.', r:'On-table OGD with transillumination. Still not found: hand-assisted or mini-laparotomy and palpate.'},
{t:'Lumen narrowed', a:'Fire along the long axis. Near the cardia or pylorus, check with the endoscope before firing.', r:'Narrowing seen on endoscopy: refashion the closure across the axis, or convert to a transgastric excision. Call.'},
{t:'Bleeding from the staple line', a:'Choose a cartridge that suits the wall thickness. Oversew.', r:'Oversew the bleeding point. Blood in the Ryle’s tube after the operation: endoscopy first.'},
{t:'Air leak on testing', a:'Test every staple line.', r:'Oversew the leaking point and test again.'},
{t:'Does not look like a GIST', a:'Review the imaging and any biopsy beforehand. A GIST is smooth and submucosal, not ulcerating with nodes.', r:'An ulcerated, indurated lesion with nodes is carcinoma until proven otherwise. A wedge is the wrong operation: take a biopsy or frozen section and call.'},
{t:'Short gastric bleeding or a splenic tear', a:'Divide the short gastrics close to the stomach with good traction.', r:'Pressure with a swab first. Then clips or energy on the vessel. A splenic capsular tear usually stops with a haemostatic agent and pressure.'}
],
call:['Tumour near the cardia or pylorus needing more than a wedge','Rupture','Tumour cannot be found','Lumen narrowed on endoscopy','Looks like carcinoma','Bleeding you cannot see the source of','You are thinking about converting'],

setup:{
theatre:['Split-leg (French) position, arms out, padded and strapped for steep head-up tilt','Surgeon between the legs; camera holder on the patient’s right','Monitor at the head','Ryle’s tube in and checked'],
kit:['Hasson port, one 12 mm and two 5 mm ports','Liver retractor','Energy device','Laparoscopic linear stapler, with gastric cartridges matched to the wall thickness','3-0 V-Loc and laparoscopic needle holders','Retrieval bag','Laparoscope: check which size and angle your theatre stocks'],
standby:['Gastroscope and stack for on-table OGD','Spare stapler cartridges','Open laparotomy set','Haemostatic agent for the spleen']
},

consent:{
note:`Consent for laparoscopic wedge resection of gastric tumour, possible open operation
Diagnosis and indication explained: [[gastric submucosal tumour, likely GIST, __ cm at __ on EUS and CT]]
Nature of operation explained: keyhole operation under general anaesthesia to remove the tumour with a rim of normal stomach using a stapler; possible endoscopy during operation; possible conversion to open operation; possible larger resection of stomach if tumour close to the inlet or outlet
Alternatives discussed: [[surveillance with endoscopic ultrasound]]; tablet treatment (imatinib) first to shrink a large tumour [[not needed in view of size and site]]
Benefits: removal of tumour, confirmation of diagnosis, prevention of bleeding and growth
General risks: bleeding, wound infection, chest infection, deep vein thrombosis and pulmonary embolism, cardiac events
Anaesthetic risks in brief; anaesthetist to discuss in detail
Specific risks: bleeding or leak from staple line which may need endoscopy, drainage or re-operation, narrowing of stomach causing vomiting or swallowing difficulty, injury to spleen, pancreas or nearby organs, conversion to open, tumour rupture which increases risk of recurrence, final histology may differ from expected, possible need for further treatment with imatinib depending on risk, recurrence
Risk of recurrence depends on size and mitotic count, to be discussed when histology available
Risks as charted in consent form acknowledged
Patient showed good understanding, questions answered
Consent signed`,
figures:[
['Progression, gastric GIST >2–5 cm, low mitoses','1.9%','Miettinen–Lasota 2006, 1,765 gastric GISTs'],
['Progression, >5–10 cm, low mitoses','3.6%','Miettinen–Lasota 2006'],
['Progression, >5–10 cm, high mitoses','55%','Miettinen–Lasota 2006'],
['Progression, >10 cm, high mitoses','86%','Miettinen–Lasota 2006'],
['5-year recurrence-free survival, high risk, 3 years of imatinib','65.6%','SSG XVIII, Joensuu 2012'],
['5-year recurrence-free survival, high risk, 1 year of imatinib','47.9%','SSG XVIII'],
['5-year overall survival, 3 years against 1 year','92.0% against 81.7%','SSG XVIII']
],
versus:'Recurrence is set by size, mitotic count, site and rupture. Size is known before the operation; mitoses only from the specimen. Quote the size-based range now and the true risk at clinic. Laparoscopic and open resection have similar complication and recurrence rates in pooled series; laparoscopy costs less blood and a shorter stay.'
},

notes:{
findings:`[[EUS and CT: 3 cm exophytic submucosal tumour at greater curvature of body]]
[[3 cm exophytic tumour at greater curvature of gastric body, pseudocapsule intact]]
[[No peritoneal nodules, no gross liver lesions]]
[[No other gastric lesion]]`,
procedure:`Split-leg French position, general anaesthesia, skin prepped and draped
[[Ryle's tube in situ]]
Subumbilical incision, umbilical port inserted with {{Hasson technique}}, capnoperitoneum created at pressure [[12]] mmHg
[[5 mm working port inserted over left side of abdomen]] {{under laparoscopic guidance}}
[[Adhesiolysis done]]
[[5 mm and 12 mm working ports inserted over epigastrium and right side of abdomen]]
Liver retractor inserted and liver retracted cranially
Diagnostic laparoscopy done, findings as above
[[Lesser sac entered]], GIST identified
[[Gastroepiploic branches at tumour site divided with energy device]]
GIST resected with [[EndoGIA 60 mm x2]] {{without rupture}}, {{macroscopically clear margin}}
Staple line oversewn with [[3-0 V-Loc]]
{{Leak test negative, staple line haemostatic}}
GIST retrieved {{intact}} into endobag via umbilical port
Umbilical and 12 mm port fascia closed with [[2-0 Vicryl]], skin with [[3-0 Ethilon]]
Wound infiltrated with local anaesthetic, dressing
{{Swab, needle and instrument counts correct}}
Specimen sent {{intact and unopened}} for histology, mitotic count and mutation analysis`,
decisions:[
['On-table OGD','On-table OGD performed: [[tumour localised by transillumination]], [[lumen patent after resection, no staple line bleeding]]'],
['Transgastric approach','[[Posterior wall]] tumour: anterior gastrotomy made, tumour everted through gastrotomy and resected with [[EndoGIA]]; gastrotomy closed with [[3-0 V-Loc]]'],
['Staple line not oversewn','Staple line inspected, haemostatic and intact, not oversewn']
],
deviations:[
['Conversion to open',`Decided to convert open in view of [[tumour size and site]]
[[Upper midline mini-laparotomy]], peritoneal cavity entered
Tumour delivered with wound protector, wedge resection performed with [[stapler]]
Mass closure with [[PDS 1]]`],
['Tumour rupture',`Pseudocapsule breached during [[mobilisation]], [[small amount]] of tumour spillage
Spilled tissue retrieved, peritoneal lavage with [[2 L]] warm normal saline
Rupture documented for risk assessment`],
['Lumen narrowed',`On-table OGD: [[narrowing at cardia]] after stapling
Senior kindly scrubbed in
[[Staple line refashioned / converted to __]], repeat OGD: lumen patent`],
['Suspected carcinoma',`[[Ulcerated lesion with surrounding induration and enlarged perigastric nodes]], not typical of GIST
Senior kindly scrubbed in
[[Biopsy taken, frozen section sent]], [[procedure abandoned for staging and MDT discussion]]`],
['Senior called',`Senior kindly scrubbed in at [[__:__]]
[[Dr __]] continued as chief surgeon`]
],
postop:`NPO, [[Ryle's tube removed at end of operation]]
[[Sips POD1, fluids then DAT POD2 if tolerated]]
IVF
IV PPI
Analgesics regular and PRN
[[BP/P Q1H x4 then Q4H if stable]]
Check Hb [[POD1]]
Strict I/O
Early mobilisation, DVT prophylaxis as assessed
Inform if T > 38, P > 100, haematemesis, melaena or increasing pain`,
discharge:`Home when DAT, pain controlled, [[POD2 to POD4]]
FU surgical clinic [[2 weeks]], trace histology: size, mitotic count per 5 mm2, margin, rupture, mutation
Refer oncology if [[intermediate or high risk]] for adjuvant imatinib
SL [[__ days]]
To return if fever, vomiting, abdominal pain or black stools`
},

viva:[
['What is a GIST, and how is it confirmed?','A mesenchymal tumour of the interstitial cells of Cajal. Half to 60% arise in the stomach. Immunohistochemistry: KIT (CD117) and DOG1 positive. Most carry a KIT mutation, usually exon 11; most of the rest PDGFRA, which is commoner in gastric tumours. A minority are KIT and PDGFRA wild type, including the SDH-deficient tumours of the young, which can spread to nodes.'],
['Should it be biopsied before resection?','Not always. A resectable lesion that looks typical can go straight to surgery. Biopsy, by endoscopic ultrasound, when it would change management: before imatinib to shrink it, when lymphoma, a neuroendocrine tumour or a metastasis is possible, or for a small lesion under surveillance. Avoid percutaneous biopsy: it risks seeding.'],
['A 1.5 cm submucosal nodule is found at OGD. What now?','Endoscopic ultrasound. Under 2 cm in the stomach, ESMO accepts surveillance with endoscopic ultrasound. Excise if it grows, if it has high-risk features on ultrasound (irregular border, cystic spaces, ulceration, echogenic foci, heterogeneity), or if the patient prefers.'],
['What makes a GIST high risk?','Size, mitotic count per 5 mm², site and rupture. Gastric tumours behave better than small-bowel ones of the same size and count. Miettinen–Lasota tabulates these; the modified NIH (Joensuu) scheme adds rupture as high risk on its own.'],
['Who gets adjuvant imatinib, and for how long?','Patients with a significant risk of recurrence, for three years. In SSG XVIII, three years against one year improved 5-year recurrence-free survival from 47.9% to 65.6% and overall survival from 81.7% to 92.0%. Mutation analysis first: PDGFRA D842V and SDH-deficient or NF1-related GISTs gain nothing.'],
['A 12 cm gastric GIST abuts the spleen and pancreas. Your plan?','Biopsy and mutation analysis, then imatinib before surgery if the mutation is sensitive, usually for six to twelve months until the response plateaus, reassessing with CT. Then resection, aiming to avoid a multivisceral or mutilating operation.'],
['Why not enucleate it?','Enucleation goes through the pseudocapsule. It risks rupture and a positive margin. A wedge of normal wall around the tumour costs little more and keeps the capsule intact.'],
['A posterior wall GIST close to the cardia: options?','A wedge from outside would narrow the cardia. Options are transgastric (intragastric) resection through an anterior gastrotomy, combined laparoscopic and endoscopic resection (LECS), or a proximal gastrectomy for larger tumours.','LECS from case series, no trials']
],

sources:{
steps:[
'House technique: senior’s CMS personal template “Gastric Wedge Resection” (YO Templates).',
'Casali PG et al. Gastrointestinal stromal tumours: ESMO–EURACAN–GENTURIS clinical practice guidelines. Ann Oncol 2022;33:20–33.',
'Tips marked with a lamp are craft points. Treat them as unverified until you have tried them.'],
anatomy:[
'Miettinen M, Lasota J. Gastrointestinal stromal tumors: review on morphology, molecular pathology, prognosis, and differential diagnosis. Arch Pathol Lab Med 2006;130:1466–1478.',
'Gastric site and approach: ESMO 2022, as above.'],
pitfalls:['ESMO 2022: rupture, biopsy and margins.','Pitfalls and rescues otherwise from general upper GI practice; no trial evidence.'],
setup:['House set-up and port positions: senior’s CMS template “Gastric Wedge Resection”.'],
consent:[
'Miettinen and Lasota 2006, as above.',
'Joensuu H et al. One vs three years of adjuvant imatinib for operable gastrointestinal stromal tumor: a randomized trial. JAMA 2012;307:1265–1272.',
'<a href="https://doi.org/10.1371/journal.pone.0177193">Ye L et al. Meta-analysis of laparoscopic vs. open resection of gastric GISTs. PLoS One 2017;12:e0177193</a>.'],
notes:['Wording follows the senior’s CMS personal template “Gastric Wedge Resection”. Orders and discharge use common HA short forms.'],
viva:['ESMO 2022; Joensuu 2012 (SSG XVIII); Miettinen and Lasota 2006, as above.']
},

dg:{
setup:`<figure class="dg"><svg viewBox="0 0 340 300" role="img" aria-label="Theatre layout and port positions for laparoscopic gastric wedge resection">
<g fill="none" stroke="var(--muted-text)" stroke-width="1.5"><circle cx="170" cy="24" r="14"/><path d="M122 44H218Q226 44 226 52V188Q226 196 218 196H122Q114 196 114 188V52Q114 44 122 44Z"/><path d="M136 196L108 288M204 196L232 288"/><circle cx="170" cy="136" r="3"/></g>
<g fill="var(--accent-text)"><circle cx="170" cy="148" r="6"/><circle cx="132" cy="108" r="6"/><circle cx="208" cy="112" r="4.5"/><circle cx="170" cy="72" r="4.5"/></g>
<text class="b" x="181" y="158">A</text><text class="b" x="118" y="98">C</text><text class="b" x="214" y="102">B</text><text class="b" x="178" y="66">D</text>
<g fill="var(--surface-high)" stroke="var(--border)" stroke-width="1"><rect x="128" y="250" width="84" height="30" rx="4"/><rect x="12" y="130" width="84" height="30" rx="4"/><rect x="244" y="34" width="84" height="30" rx="4"/></g>
<text class="b" x="170" y="269" text-anchor="middle">Surgeon</text><text class="b" x="54" y="149" text-anchor="middle">Camera</text><text class="b" x="286" y="53" text-anchor="middle">Monitor</text>
<text x="54" y="112" text-anchor="middle">Patient’s right</text><text x="286" y="150" text-anchor="middle">Patient’s left</text>
</svg><figcaption>Split-leg position, head up. <b>A</b> subumbilical Hasson port, camera. <b>B</b> 5 mm port on the left, the surgeon’s right hand. <b>C</b> 12 mm port on the right, the left hand and the stapler. <b>D</b> 5 mm epigastric port. The liver retractor lifts the left lobe. Move C to suit the staple line you plan.</figcaption></figure>`,
anat:`<figure class="dg"><svg viewBox="0 0 340 300" role="img" aria-label="Gastric GIST sites and the line of a stapled wedge resection">
<g fill="none" stroke="var(--muted-text)" stroke-width="1.5">
<path d="M200 8V48C220 30 264 34 270 78C276 130 256 196 200 222C150 244 94 220 72 188H10"/>
<path d="M10 160H70C90 172 126 176 148 160C170 144 180 110 180 60V8"/>
<path d="M72 158V190" stroke-width="3"/>
</g>
<g fill="none" stroke="var(--muted-text)" stroke-width="1" stroke-dasharray="3 3">
<ellipse cx="190" cy="54" rx="24" ry="14"/><ellipse cx="84" cy="174" rx="20" ry="22"/>
<circle cx="212" cy="140" r="12"/>
</g>
<circle cx="266" cy="160" r="13" fill="var(--surface-high)" stroke="var(--text)" stroke-width="1.5"/>
<path d="M268 127C248 142 240 168 241 189" fill="none" stroke="var(--accent-text)" stroke-width="2" stroke-dasharray="6 3"/>
<g fill="none" stroke="var(--muted-text)" stroke-width="1"><path d="M278 168L300 198"/><path d="M241 192L232 250"/><path d="M166 54H140"/><path d="M200 138L106 116"/><path d="M76 196L62 228"/></g>
<text class="b" x="334" y="212" text-anchor="end">Exophytic GIST,</text><text x="334" y="226" text-anchor="end">greater curve</text>
<text class="b" x="232" y="262" text-anchor="end">Staple line</text><text x="232" y="276" text-anchor="end">along the axis,</text><text x="232" y="290" text-anchor="end">1 cm clear</text>
<text x="136" y="50" text-anchor="end">Cardia: a wedge</text><text x="136" y="64" text-anchor="end">narrows the inlet</text>
<text x="8" y="104">Posterior wall:</text><text x="8" y="118">lesser sac or</text><text x="8" y="132">transgastric</text>
<text x="8" y="242">Pylorus: a wedge</text><text x="8" y="256">narrows the outlet</text>
</svg><figcaption>Anterior view: the patient’s right is on your left, with the duodenum leaving to the left. A tumour on the anterior wall or greater curve takes a stapled wedge along the long axis of the stomach. Dashed outlines mark sites where a wedge from outside is the wrong operation.</figcaption></figure>`}
});
