P.push({
id:'lap-cholecystectomy', name:'Laparoscopic cholecystectomy', aka:'chole lap chole gallbladder gallstones cholecystitis calot',
system:'Hepatobiliary', list:'both', approach:'Laparoscopic',
aim:'Remove the gallbladder without touching the bile duct. Every step exists to prove which two structures you are about to divide.',
status:'Draft 0.1 · 17/11/2026 · sourced, not yet tested by you in theatre',

steps:[
{t:'Checks and position', how:'WHO checklist. General anaesthesia, supine, left arm tucked. Liver function and duct diameter on imaging reviewed.', why:'A dilated duct or deranged liver function means stones may be in the duct, and the plan changes before you start. The tucked arm leaves room for an image intensifier if a cholangiogram is needed.'},
{t:'Access', how:'Subumbilical incision, linea alba split, peritoneum opened under vision. Hasson port. Carbon dioxide to 12 mmHg.', why:'Open entry puts the first port in under direct vision.'},
{t:'Working ports', how:'10 mm epigastric port and two 5 mm right subcostal ports under laparoscopic vision.', why:'The epigastric port is the operating hand; the subcostal ports hold the fundus and Hartmann’s pouch.', tip:'Bring the epigastric port in to the right of the falciform ligament, aimed at the gallbladder neck, so the instrument does not fight the ligament for the whole case.'},
{t:'Exposure', how:'Head up, left side down. Fundus pushed up over the liver towards the right shoulder. Hartmann’s pouch pulled out to the right and down.', why:'Pulling the pouch laterally opens the triangle and swings the cystic duct away from the common duct. Pulling it upwards alone lines the two ducts up, which is how the common duct gets mistaken for the cystic duct.'},
{t:'Landmarks before dissection', how:'Find Rouvière’s sulcus and the base of segment IV. All dissection stays above that level, on the gallbladder.', why:'The sulcus marks the plane of the bile duct. Looking for it first fixes the safe zone before inflammation distorts your sense of where you are.', tip:'Say it aloud to the assistant: “sulcus is there, we stay above it”. It costs five seconds and anchors everyone.'},
{t:'Open the peritoneum', how:'Anterior and posterior peritoneal coverings of the gallbladder opened, high on the gallbladder, on both sides of the neck.', why:'The posterior leaf is the one that hides the anatomy. Opening both lets the neck unfold.', tip:'With dense adhesions at the triangle, join the front and the back at the gallbladder bed early, then follow that line down towards the neck.'},
{t:'Critical view of safety', how:'Triangle cleared of fat and fibrous tissue. Lower third of the gallbladder lifted off the liver bed. Two structures, and only two, entering the gallbladder. Seen from the front and from behind.', why:'It is identification by exclusion: when nothing else is left, the two that remain can only be the cystic duct and artery.', tip:'Stop and say “critical view” before the clip applicator comes in. A deliberate pause is recommended practice, and it is the last moment an error is free.'},
{t:'Clip and divide', how:'Cystic artery skeletonised, metal clips ×3, divided. Cystic duct skeletonised, Hem-o-lok clips ×3, divided.', why:'Artery first lets the duct lengthen and straighten. A locking clip on the duct cannot slip.', tip:'A duct too wide for a clip takes an Endoloop. Milk any stone in the cystic duct back into the gallbladder before clipping.'},
{t:'Off the liver bed', how:'Gallbladder dissected from the liver bed with hook diathermy in the areolar plane, keeping traction.', why:'Too deep enters liver and the small ducts of the bed; too shallow opens the gallbladder.', tip:'Before the last attachment is divided, use the gallbladder as a handle to lift the liver and check the bed and the clips.'},
{t:'Wash and check', how:'Irrigation with warm saline, sucked dry. Haemostasis, clips and liver bed inspected. No bile.', why:'Bile on a clean swab at this point has a source, and it has to be found before leaving.'},
{t:'Retrieve and open', how:'Gallbladder into an Endopouch and out through the subumbilical port. Cut it open on the back table: stones, mucosa, any thickening.', why:'An unsuspected polyp or tumour is seen today, and the findings are complete.'},
{t:'Close', how:'Ports out under vision. Fascia with 2-0 Vicryl at the 10 mm sites, skin with 3-0 Ethilon. Local anaesthetic, dressing. Counts confirmed. Gallbladder to histology.', why:'Watching the ports come out is the only chance to see an abdominal wall bleeder.'}
],
house:[
['Critical view','Achieved before clipping','Agrees. Use it to identify duct and artery (multi-society 2020, expert opinion).'],
['Pause before clipping','Not in the template','A momentary pause to confirm the view is suggested as best practice (expert opinion).'],
['Cholangiogram','Not routine','Liberal use in acute cholecystitis (conditional). Use biliary imaging whenever anatomy is uncertain or injury suspected (strong).'],
['View not achievable','Not in the template','Subtotal cholecystectomy is preferred over a fundus-first total cholecystectomy (expert opinion).'],
['Timing in acute cholecystitis','Unit dependent','Within 72 hours of symptom onset for mild disease (conditional).']
],

anatomy:{
points:[
'Hepatocystic triangle: cystic duct below, common hepatic duct medially, liver above. It holds the cystic artery, the cystic node, and sometimes the right hepatic artery or an aberrant duct.',
'Cystic artery: from the right hepatic artery, usually inside the triangle. It often splits into anterior and posterior branches; clip only the anterior one and the posterior one bleeds from behind.',
'Cystic node (Lund’s node): lies on the artery. Dissect on the gallbladder side of it.',
'Rouvière’s sulcus: a cleft on the liver to the right of the hilum carrying the right posterior pedicle. It is present in most patients and marks the level of the common duct.',
'Liver bed: the cystic plate. Small subvesical ducts (ducts of Luschka) run in it and leak if the plane is too deep.',
'Variants that cause injury: a short or absent cystic duct, a cystic duct joining the right hepatic duct, an aberrant right posterior duct entering low, and a right hepatic artery looping up into the triangle.'
],
table:{title:'Bile duct injury: Strasberg', head:['Type','What it is'], rows:[
['A','Leak from the cystic duct stump or a small duct in the liver bed'],
['B','Aberrant right sectoral duct occluded'],
['C','Aberrant right sectoral duct divided and leaking'],
['D','Lateral injury to the main duct'],
['E1','Main duct divided more than 2 cm below the confluence'],
['E2','Divided less than 2 cm below the confluence'],
['E3','At the confluence, right and left ducts still communicate'],
['E4','Confluence destroyed, right and left ducts separated'],
['E5','Main duct injury together with an aberrant right sectoral duct']
]},
danger:[
'Common bile duct and common hepatic duct: mistaken for the cystic duct when traction lines them up. The classic injury clips the common duct, divides the hepatic duct and takes the right hepatic artery with it.',
'Right hepatic artery: can bulge into the triangle and be taken for the cystic artery. A “cystic artery” that looks too large probably is not.',
'Duodenum and colon: adherent to an inflamed gallbladder, at risk from diathermy.',
'Middle hepatic vein tributaries: just under the liver bed; a plane that is too deep bleeds from them.'
]
},

pitfalls:[
{t:'Common duct mistaken for the cystic duct', a:'Lateral traction on Hartmann’s pouch. Critical view from front and back. Nothing clipped until only two structures remain.', r:'If you suspect it: stop. Do not explore and do not repair. Cholangiogram if available, drain, call. Confirmed or suspected injury goes to a hepatobiliary team (strong recommendation).'},
{t:'Critical view cannot be achieved', a:'Recognise the frozen triangle early: dense fibrosis and no progress.', r:'Stop dissecting in the triangle. Options, in order: cholangiogram to define anatomy, subtotal cholecystectomy, conversion, or drainage alone. Call before choosing.'},
{t:'Bleeding in the triangle', a:'Skeletonise the artery before clipping and look for a posterior branch.', r:'Press with the gallbladder neck or a swab and wait. Then one precise clip under vision. No blind clips or diathermy here: the bile duct and right hepatic artery are behind the blood.'},
{t:'Bile in the field', a:'Gentle traction; stay in the areolar plane on the liver bed.', r:'Find the source: a hole in the gallbladder, the cystic stump, a duct in the bed, or the main duct. Unexplained bile is a duct injury until proven otherwise: cholangiogram, drain, call.'},
{t:'Perforated gallbladder and spilled stones', a:'Grasp the fundus firmly once, not repeatedly. Bag before extraction.', r:'Close the hole with a grasper or loop. Retrieve every stone you can see, irrigate, and record it. Retained stones present late as abscesses.'},
{t:'Cystic duct too wide or too short for a clip', a:'Clear enough length before applying anything.', r:'Endoloop or stapler. If there is no safe length at all, treat it as a subtotal.'},
{t:'Bleeding from the liver bed', a:'Stay in the plane; keep traction so the plane shows itself.', r:'Pressure with a swab, then spray diathermy or a haemostatic agent. Brisk venous bleeding is a hepatic vein tributary: pack and call.'},
{t:'Heat near duodenum or colon', a:'Cold or blunt dissection where bowel is adherent to the gallbladder.', r:'A blanched patch on bowel is oversewn now.'},
{t:'Looks like cancer', a:'Suspect it with a hard mass, an irregular thick wall, or a polyp over 1 cm on imaging.', r:'Do not breach the gallbladder. Stop and call: the operation changes.'},
{t:'Unexpected duct stones', a:'Read the liver function and duct diameter before you start.', r:'Wide cystic duct or small stones milked from it: cholangiogram if available, and plan clearance with the senior.'}
],
call:['Critical view not achieved after a fair attempt','Bile seen and the source not found','Bleeding in the triangle not controlled by pressure','A structure divided that you cannot name','Suspected cancer','You are thinking about converting, or about a subtotal','Bowel injury'],

setup:{
theatre:['Supine, left arm tucked, on a table that will take an image intensifier','Head up, left side down once the ports are in','Monitor at the patient’s right shoulder','Surgeon and camera holder on the left; assistant on the right holding the fundus'],
kit:['Hasson port, 10 mm epigastric port, two 5 mm ports','Laparoscope: check which size and angle your theatre stocks','Two graspers (one locking, for the fundus), Maryland dissector, scissors, hook diathermy','Clip applicator with metal clips; Hem-o-lok applicator and clips','Suction-irrigation, Endopouch','2-0 Vicryl, 3-0 Ethilon, local anaesthetic'],
standby:['Cholangiogram catheter, contrast and image intensifier','Endoloops','Tube drain','Open set, in the room']
},

consent:{
note:`Consent for laparoscopic cholecystectomy, possible open
Diagnosis and indication explained: [[symptomatic gallstones with biliary colic]]
Nature of operation explained: keyhole removal of the gallbladder under general anaesthesia, possible conversion to open operation
Alternative discussed: conservative management, with risk of recurrent pain, cholecystitis, jaundice or pancreatitis; [[patient opts for operation]]
Benefits: relief of biliary symptoms, prevention of gallstone complications
General risks: bleeding, wound infection, chest infection, deep vein thrombosis and pulmonary embolism, cardiac events
Anaesthetic risks in brief: sore throat, nausea and vomiting, dental injury, allergic reaction, aspiration; anaesthetist to discuss in detail
Specific risks: bile duct injury which may need major reconstructive surgery, bile leak, injury to bowel or blood vessels, conversion to open, retained stone in bile duct needing ERCP, port-site hernia
Possible subtotal cholecystectomy or drain if anatomy unsafe
Persistent symptoms or loose stools in a minority after operation
Histology may show unexpected tumour needing further treatment
Risks as charted in consent form acknowledged
Patient showed good understanding, questions answered
Consent signed`,
figures:[
['Conversion to open','3.4%','CholeS, 8,820 patients'],
['Any complication within 30 days','10.8%','CholeS'],
['Readmission within 30 days','7.1%','CholeS'],
['Complications, easiest to hardest operative grade','7.6% to 24.4%','CholeS, Nassar scale'],
['Bile duct injury','0.1–0.5%','Senior notes, unverified today']
],
versus:'Risk of conversion rises with age, male sex, cholecystitis or duct stones as the indication, higher ASA grade, a thick-walled gallbladder and a dilated duct. Quote the higher end to those patients.'
},

notes:{
findings:`[[Gallbladder distended, not acutely inflamed, multiple stones]]
[[No adhesions at Calot's triangle]]
[[Cystic duct and common bile duct not dilated]]
[[Liver normal in appearance]]
[[Specimen cut open: multiple stones, no mucosal lesion]]`,
procedure:`Supine, general anaesthesia, skin prepped and draped
Subumbilical incision, linea alba split, peritoneal cavity entered by {{open method}}
Hasson trocar introduced, capnoperitoneum created at pressure [[12]] mmHg
Findings as above
[[10 mm epigastric working port and 5 mm right subcostal working ports x2]] inserted {{under laparoscopic guidance}}
Anterior and posterior peritoneal coverings of gallbladder opened
Calot's triangle dissected, {{critical view of safety achieved}}
Cystic artery skeletonised, controlled with [[metal clips x3]] then divided
Cystic duct skeletonised, controlled with [[Hem-o-lok clips x3]] then divided
Gallbladder dissected out from liver bed
[[Irrigation with warm normal saline, peritoneal fluid sucked dry]]
{{Haemostasis ensured, no bile leak}}
Specimen retrieved via subumbilical port within Endopouch
Specimen cut open, findings as above
Ports removed {{under vision}}
Fascia closed with [[2-0 Vicryl]], skin with [[3-0 Ethilon]]
Local anaesthetic infiltration, dressing
{{Swab, needle and instrument counts correct}}
Gallbladder sent for histology`,
decisions:[
['No drain','Liver bed dry, no bile, drain not placed'],
['Drain','Drain placed to subhepatic space in view of [[oozing from gallbladder bed]]'],
['No cholangiogram','Intraoperative cholangiogram not performed: anatomy clear, ducts not dilated, liver function normal'],
['Cholangiogram','Intraoperative cholangiogram performed via cystic duct: [[normal biliary anatomy, no filling defect, free flow into duodenum]]']
],
deviations:[
['Conversion to open',`Dense adhesions at Calot's triangle, anatomy unable to be defined safely laparoscopically
Decided to convert to open
[[Right subcostal incision]], peritoneal cavity entered
Cholecystectomy completed, cystic duct and artery ligated with [[2-0 Vicryl]]`],
['Critical view not achieved, subtotal',`Dense fibrosis at Calot's triangle, critical view of safety unable to be achieved
Decided for subtotal cholecystectomy
Gallbladder opened, stones removed
Anterior wall excised, posterior wall left on liver bed, mucosa cauterised
Cystic duct orifice [[closed from within with 3-0 PDS]]
Drain placed to subhepatic space`],
['Bleeding',`Bleeding from [[posterior branch of cystic artery]]
Controlled with pressure then [[metal clip under vision]]
Haemostasis rechecked at end of procedure, estimated blood loss [[__]] ml`],
['Gallbladder perforated',`Gallbladder perforated during dissection, bile and [[__]] stones spilled
All visible stones retrieved
Copious irrigation with warm normal saline`],
['Bile seen',`Bile seen at [[liver bed]]
Senior kindly scrubbed in
[[Intraoperative cholangiogram performed]]
Drain placed to subhepatic space`],
['Bowel or serosal injury',`[[Serosal tear over duodenum, __ cm]], recognised intraoperatively
Repaired with [[3-0 PDS interrupted]]
Repair inspected, no leak`],
['Unexpected finding',`[[Thickened gallbladder wall with firm mass at fundus]]
Discussed with [[senior]] intraoperatively
[[Procedure stopped, gallbladder not breached]]`],
['Senior called',`Senior kindly scrubbed in at [[__:__]]
[[Dr __]] continued as chief surgeon`]
],
postop:`DAT when fully conscious
IVF until DAT well
Analgesics regular and PRN
[[BP/P Q1H x4 then Q4H if stable]]
Early mobilisation, DVT prophylaxis as assessed
[[Chart drain output, inform if bile-stained]]
Inform if T > 38, P > 100, increasing pain or jaundice`,
discharge:`Home when DAT and pain controlled, [[D0 to D1]]
Wound care advice given, [[STO D7 to D10]]
SL [[__ days]]
FU surgical clinic [[4 to 6 weeks]], trace histology
To return if fever, increasing pain, jaundice or vomiting`
},

viva:[
['Define the critical view of safety.','Three criteria, all required. The hepatocystic triangle is cleared of fat and fibrous tissue. The lower third of the gallbladder is separated from the cystic plate. Two structures, and only two, are seen entering the gallbladder. It is a method of identification, not of dissection, and it should be confirmed from the front and the back before anything is clipped.'],
['You cannot achieve it. What are your options?','Stop dissecting in the triangle. Define the anatomy another way with a cholangiogram; perform a subtotal cholecystectomy, which the multi-society guideline prefers over a fundus-first total; convert to open, accepting that conversion alone has not been shown to prevent injury; or drain and come back. Call for a second surgeon early: the guideline suggests a low threshold.'],
['What is Rouvière’s sulcus and why do you look for it?','A cleft on the under-surface of the right liver, to the right of the hilum, containing the right posterior pedicle. It lies at the level of the common duct, so a line from it to the base of segment IV marks the floor of the safe zone. Dissection stays above it.'],
['Classify bile duct injury.','Strasberg A to E. A: leak from the cystic stump or a duct in the bed. B and C: an aberrant right sectoral duct, occluded or leaking. D: lateral injury to the main duct. E1 to E5: division of the main duct by level, following Bismuth, from more than 2 cm below the confluence to involvement of the confluence itself.'],
['When should acute cholecystitis be operated on?','For mild disease, within 72 hours of symptom onset (conditional recommendation, very low certainty). Early surgery gives a shorter stay and avoids readmission with recurrent attacks, with similar conversion and complication rates to interval surgery. Late presenters are cooled down and done at about six weeks; the unfit get antibiotics, with cholecystostomy if they fail.'],
['You recognise a bile duct injury during the operation. What now?','Stop. Do not attempt a repair unless a hepatobiliary surgeon is doing it. Define the injury with a cholangiogram if that is possible without more dissection, place a subhepatic drain, and refer promptly to a hepatobiliary unit: that is a strong recommendation. Tell the patient and document exactly what was seen.'],
['Day three: pain, fever, bile in the drain.','A bile leak until proven otherwise. Resuscitate, antibiotics, liver function tests, ultrasound or CT for a collection and drain it. Then define the leak: most are from the cystic stump or a duct in the bed (Strasberg A) and settle with ERCP, sphincterotomy and a stent. A main duct injury goes to a hepatobiliary unit.']
],

sources:{
steps:[
'House technique: senior’s CMS personal template “Lap Chole” (YO Templates).',
'<a href="https://sages.org/publications/guidelines/safe-cholecystectomy-multi-society-practice-guideline">Brunt et al. Safe cholecystectomy multi-society practice guideline. Ann Surg 2020</a>.',
'Senior notes: Billy notes, hepatobiliary (Rouvière’s sulcus; joining front and back at the gallbladder bed).',
'Tips marked with a lamp are craft points. Treat them as unverified until you have tried them.'],
anatomy:[
'Strasberg SM, Hertl M, Soper NJ. An analysis of the problem of biliary injury during laparoscopic cholecystectomy. J Am Coll Surg 1995;180:101–125.',
'Senior notes: Billy notes, hepatobiliary and anatomy.'],
pitfalls:[
'<a href="https://sages.org/publications/guidelines/safe-cholecystectomy-multi-society-practice-guideline">Multi-society guideline 2020</a>: subtotal cholecystectomy, biliary imaging, second surgeon, referral of injuries.',
'Senior notes: Billy notes, hepatobiliary (the six SAGES safe cholecystectomy strategies).'],
setup:[
'Port positions: senior’s CMS template “Lap Chole”.',
'Left arm tucked for cholangiography: Majumder, Altieri, Brunt. How do I do it: laparoscopic cholecystectomy. Ann Laparosc Endosc Surg 2020.'],
consent:[
'<a href="https://pure.ul.ie/en/publications/population-based-cohort-study-of-outcomes-following-cholecystecto/">CholeS Study Group. Population-based cohort study of outcomes following cholecystectomy. Br J Surg 2016;103:1704–1715</a>.',
'<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5094477">Sutcliffe et al. Preoperative risk factors for conversion. HPB 2016;18:922–928</a>.',
'Griffiths et al. Utilisation of an operative difficulty grading scale. Surg Endosc 2019.',
'Bile duct injury range: Billy notes, hepatobiliary. Not re-verified against a primary source today.'],
notes:[
'Wording follows the senior’s CMS personal template “Lap Chole”. The operation record is spelt out; the orders use common HA short forms.'],
viva:[
'<a href="https://sages.org/publications/guidelines/safe-cholecystectomy-multi-society-practice-guideline">Multi-society guideline 2020</a>.',
'Strasberg 1995; senior notes (Billy notes, hepatobiliary) for timing and management of acute cholecystitis.']
},

dg:{
setup:`<figure class="dg"><svg viewBox="0 0 340 280" role="img" aria-label="Theatre layout and port positions for laparoscopic cholecystectomy">
<g fill="none" stroke="var(--muted-text)" stroke-width="1.5"><circle cx="170" cy="26" r="14"/><rect x="118" y="46" width="104" height="196" rx="30"/><circle cx="170" cy="150" r="3"/></g>
<g fill="var(--accent-text)"><circle cx="170" cy="166" r="6"/><circle cx="164" cy="92" r="6"/><circle cx="144" cy="108" r="4.5"/><circle cx="130" cy="130" r="4.5"/></g>
<text class="b" x="181" y="170">A</text><text class="b" x="175" y="96">B</text><text class="b" x="151" y="122">C</text><text class="b" x="137" y="144">D</text>
<g fill="var(--surface-high)" stroke="var(--border)" stroke-width="1"><rect x="244" y="96" width="84" height="30" rx="4"/><rect x="244" y="150" width="84" height="30" rx="4"/><rect x="12" y="56" width="84" height="30" rx="4"/><rect x="12" y="150" width="84" height="30" rx="4"/></g>
<text class="b" x="286" y="115" text-anchor="middle">Surgeon</text><text class="b" x="286" y="169" text-anchor="middle">Camera</text><text class="b" x="54" y="75" text-anchor="middle">Monitor</text><text class="b" x="54" y="169" text-anchor="middle">Assistant</text>
<text x="54" y="44" text-anchor="middle">Patient’s right</text><text x="286" y="84" text-anchor="middle">Patient’s left</text>
<text x="170" y="266" text-anchor="middle">Head up, left side down. Left arm tucked.</text>
</svg><figcaption><b>A</b> subumbilical 10 mm Hasson port, camera. <b>B</b> 10 mm epigastric working port, to the right of the falciform ligament. <b>C</b> 5 mm right subcostal port for Hartmann’s pouch. <b>D</b> 5 mm right subcostal port for the fundus.</figcaption></figure>`,
anat:`<figure class="dg"><svg viewBox="0 0 340 290" role="img" aria-label="Critical view of safety: two structures entering the gallbladder">
<g fill="none" stroke="var(--muted-text)" stroke-width="1.5">
<path d="M0 62C80 22 230 20 340 66"/>
<path d="M74 42C40 60 58 132 116 166C132 174 148 162 142 146C124 104 116 52 74 42Z"/>
<path d="M30 236L96 222" stroke-width="3" stroke-linecap="round"/>
<path d="M100 221H234" stroke-dasharray="4 4" stroke-width="1"/>
</g>
<g fill="none" stroke-linecap="round">
<path d="M244 112V282" stroke="var(--text)" stroke-width="11"/><path d="M244 112V282" stroke="var(--surface)" stroke-width="8"/>
<path d="M134 162C172 172 208 198 240 222" stroke="var(--text)" stroke-width="8"/><path d="M134 162C172 172 208 198 240 222" stroke="var(--surface)" stroke-width="5"/>
</g>
<g fill="none" stroke="var(--accent-text)" stroke-width="1.75" stroke-linecap="round">
<path d="M336 122C306 118 276 120 252 126"/><path d="M236 128C200 124 166 130 140 146"/>
</g>
<text class="b" x="170" y="50" text-anchor="middle">Liver</text>
<text class="b" x="18" y="188">Gallbladder</text>
<text x="158" y="118">Cystic artery</text>
<text x="160" y="158">Liver seen</text><text x="160" y="172">through here</text>
<text x="128" y="208">Cystic duct</text>
<text x="262" y="96">Right hepatic</text><text x="262" y="110">artery</text>
<text x="256" y="160">Common</text><text x="256" y="174">hepatic duct</text>
<text x="256" y="252">Common</text><text x="256" y="266">bile duct</text>
<text x="18" y="256">Rouvière’s sulcus</text>
<text x="18" y="274">Stay above this level</text>
</svg><figcaption>The view you must have before a clip goes on, with the patient’s right on your left. The triangle is empty, the lower gallbladder is off the liver, and two structures remain. The dashed line runs from Rouvière’s sulcus at the level of the bile duct.</figcaption></figure>`}
});
