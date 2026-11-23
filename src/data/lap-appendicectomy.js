P.push({
id:'lap-appendicectomy', team:'GEN', name:'Laparoscopic appendicectomy', aka:'appendix appendectomy lap appen appendicitis rif',
system:'Colorectal and small bowel', list:'emergency', approach:'Laparoscopic',
aim:'Source control. Remove the appendix, clear the contamination, and miss nothing else in the right iliac fossa or pelvis.',
status:'Draft 0.3 · 17/11/2026 · sourced, not yet tested by you in theatre',

steps:[
{t:'Checks and position', how:'WHO checklist. General anaesthesia, supine, left arm tucked. Bladder emptied. Antibiotic given within 60 minutes before incision. Pregnancy test result seen.', why:'The tucked left arm lets surgeon and camera stand together on the left. An empty bladder is out of the way of the low port.', tip:'Ask for the left arm to be tucked before the drapes go on. It is the request most often forgotten and the hardest to fix later.'},
{t:'Access', how:'Subumbilical incision, linea alba split, peritoneum opened under vision. Hasson port. Carbon dioxide to 12 mmHg.', why:'Open entry puts the first port in under direct vision; nothing is passed blind.', tip:'Lift the umbilical stalk with a clip and cut down onto its base: the linea alba is thinnest and most reliably midline there.'},
{t:'Working ports', how:'10 mm left lower quadrant and 5 mm suprapubic ports under laparoscopic vision.', why:'Two instruments from the left and from below meet over the right iliac fossa at a working angle, with the camera between them. The left port is 10 mm so the camera can move there later while the specimen leaves through the umbilicus.', tip:'Left port: transilluminate and stay lateral to the rectus edge, clear of the inferior epigastric vessels. Suprapubic port: midline, and watch the tip come through above the bladder.'},
{t:'Tilt and survey', how:'Head down, left side down. Sweep omentum and small bowel out of the pelvis. Look at all four quadrants and the pelvis before touching the appendix.', why:'Gravity does the retraction, which matters with only two working hands. The survey is what makes laparoscopy better than a gridiron: other pathology is found now or not at all.'},
{t:'Find the appendix', how:'Follow the anterior taenia of the caecum down to its base. Free omentum with blunt and sharp dissection.', why:'The three taeniae meet at the base in every patient, wherever the tip has gone.', tip:'Do not grasp the inflamed tip; it tears and spills. Hold the mesoappendix, or lasso the appendix with a loop and use the tail as a handle.'},
{t:'Mesoappendix', how:'Open a window at the base. Divide the mesoappendix with diathermy, staying on the appendix, until the base is skeletonised all the way round.', why:'Staying close to the appendix keeps heat away from caecum and ileum. No device has been shown to be better than simple diathermy.', tip:'If the tip is buried, start at the base and work towards the tip (retrograde). The base is the only part you must see.'},
{t:'Base', how:'Three PDS Endoloops: two on the stump, one on the specimen side. Divide between them. Leave a short stump and inspect it.', why:'Two on the stump for security; one on the specimen so the cut end does not spill. A long stump can inflame again years later.', tip:'Pass the grasper through the open loop first, then grasp the appendix and slide the loop down over it. Cut the tail at about 5 mm, not flush.'},
{t:'Retrieve', how:'Appendix into an Endopouch and out through the subumbilical port. Cut it open on the back table and look at the lumen and mucosa.', why:'A bagged specimen never touches the wound. Opening it tells you today, not in two weeks, whether there is a faecolith, a mucocele or a tumour at the base.', tip:'Move the camera to the left 10 mm port and bring the bag out through the umbilicus under vision.'},
{t:'Wash and drain', how:'House practice: irrigate with warm saline until clear, suck dry, drain through the suprapubic port site to the pelvis, anchored with 2-0 Nylon.', why:'See “House and evidence” below. The guideline position differs on both points.'},
{t:'Close', how:'Ports out under vision. Fascia with 2-0 Vicryl at the 10 mm sites, skin with 3-0 Ethilon. Local anaesthetic to the wounds, dressing. Counts confirmed. Appendix to histology.', why:'Watching the ports come out is the only chance to see an abdominal wall bleeder. Every appendix goes to histology because the eye misses tumours.'}
],
house:[
['Irrigation','Warm saline until clear','Suction alone. Irrigation adds no benefit and does not prevent abscess (WSES 4.8, strong).'],
['Drain','Routine, to the pelvis','Recommended against in adults, even when perforated: no fewer abscesses, longer stay (WSES 4.12, strong).'],
['Base','PDS Endoloops ×3','Agrees. Endoloops or polymeric clips; stapler only at discretion in complicated cases (WSES 4.10, strong).'],
['Mesoappendix','Diathermy','Agrees. Monopolar or bipolar is the most cost-effective (WSES 4.9, weak).'],
['Third port','Right lower quadrant','No guideline. Suprapubic is the usual description and triangulates better; this page uses it.']
],

anatomy:{
points:[
'Base: posteromedial wall of the caecum, about 2 cm below the ileocaecal valve, where the three taeniae converge. The base is constant; only the tip moves.',
'Artery: the appendicular artery is a branch of the ileocolic. It passes behind the terminal ileum and runs in the free edge of the mesoappendix. It is an end artery, so thrombosis in appendicitis leads quickly to gangrene.',
'Bloodless fold of Treves: the ileocaecal fold, from the antimesenteric border of the terminal ileum to the base. It carries no named vessel and tells you that you are at the ileocaecal junction.',
'Pain: visceral afferents with the midgut (T10), hence periumbilical first; parietal irritation localises it later.'
],
table:{title:'Where the tip lies', head:['Position','Share','Presentation'], num:1, rows:[['Retrocaecal','65.3%','Loin or flank tenderness, psoas sign, soft anterior abdomen'],['Pelvic','31.0%','Diarrhoea, urinary symptoms, obturator sign, tender on rectal examination'],['Subcaecal','2.3%',''],['Pre-ileal','1.0%',''],['Post-ileal','0.4%','Vomiting and diarrhoea, few peritoneal signs']]},
danger:[
'Right ureter, gonadal vessels and iliac vessels: directly behind a retrocaecal or pelvic appendix. In a stuck retrocaecal dissection stay on the appendix, not on the retroperitoneum.',
'Terminal ileum and caecal wall: thermal injury from diathermy on the mesoappendix. It declares itself days later as a leak.',
'Inferior epigastric vessels: at the lateral edge of the rectus, at risk from the left lower quadrant port.',
'Bladder: at risk from the suprapubic port if not emptied.'
]
},

pitfalls:[
{t:'Cannot find the appendix', a:'Follow the taenia. Divide the lateral peritoneal attachment of the caecum and roll it medially: a retrocaecal appendix lies behind it.', r:'Still not found after mobilising the caecum: stop and call.'},
{t:'Friable or necrotic base', a:'An Endoloop on dead tissue cuts through.', r:'Caecum healthy: staple across a cuff of caecum, clear of the ileocaecal valve, or wedge it. Caecum unhealthy: this is an ileocaecal resection. Call.'},
{t:'Long stump', a:'Skeletonise to the caecal wall before looping, so the loop sits at the true base.', r:'If the stump looks long, place another loop closer. Aim for under about 5 mm.', u:'weak evidence: case series'},
{t:'Heat on the caecum or ileum', a:'Short bursts, on the appendix side, tissue lifted away from bowel.', r:'A blanched patch on bowel wall is oversewn now, not watched.'},
{t:'Bleeding from the appendicular artery', a:'Divide the mesoappendix in small bites so the artery is sealed before it is cut.', r:'Grasp the bleeding point, then bipolar or clip. No blind diathermy towards the ileum. Not controlled promptly: call.'},
{t:'Appendix looks normal', a:'Look for another cause: run the last metre of ileum for a Meckel’s and for terminal ileitis, mesenteric nodes, caecum and sigmoid, gallbladder and duodenum, and the pelvic organs.', r:'Nothing else found in a symptomatic patient: remove it (WSES 5.3, weak). The eye is unreliable for early inflammation.'},
{t:'Crohn’s terminal ileitis', a:'Recognise it: fat wrapping, thickened mesentery, inflamed ileum with a normal appendix.', r:'Base and caecum healthy: appendicectomy is reasonable and prevents a later diagnostic dilemma. Base involved: leave it, fistula risk. Call before deciding.'},
{t:'Mucocele or mass at the base', a:'A distended, pale, non-inflamed appendix is a mucocele until proven otherwise. Do not grasp it.', r:'It must come out intact and bagged; rupture seeds the peritoneum. A hard mass at the base or caecum is an oncological resection. Call.'},
{t:'Dropped faecolith', a:'Loop before dividing, bag before moving.', r:'Find it and remove it. A retained faecolith becomes an abscess.'},
{t:'Appendix mass or abscess found', a:'Suspect it before surgery with a long history and a palpable mass; scan first.', r:'Dense phlegmon with unsafe anatomy: drain, stop, antibiotics. Forcing it risks an ileocaecal resection. Call.'}
],
call:['Appendix not identified after mobilising the caecum','Base cannot be secured, or the caecal wall is involved','Mucocele, or any mass at the base or caecum','Bowel injury, or bleeding not controlled promptly','Unexpected pathology that needs a resection','You are thinking about converting','Pregnant patient, or any patient unstable on the table'],

setup:{
theatre:['Supine, left arm tucked, right arm out','Table able to tilt head down and left side down; patient secured for the tilt','Monitor at the patient’s right hip','Surgeon and camera holder on the left; scrub nurse beside or opposite'],
kit:['Hasson port, one 10 mm and one 5 mm port','Laparoscope: check which size and angle your theatre stocks','Two atraumatic graspers, Maryland dissector, scissors, hook diathermy','Suction-irrigation','PDS Endoloops ×3 and an Endopouch','Tube drain and 2-0 Nylon if the consultant drains','2-0 Vicryl, 3-0 Ethilon, local anaesthetic'],
standby:['Endoscopic linear stapler, for a base that will not take a loop','Clip applicator and bipolar forceps','Open set, in the room']
},

consent:{
note:`Consent for laparoscopic appendicectomy, possible open
Diagnosis and indication explained: [[acute appendicitis on clinical assessment and CT]]
Nature of operation explained: keyhole removal of the appendix under general anaesthesia, possible conversion to open operation
Alternative discussed: antibiotics alone, with about 4 in 10 needing appendicectomy within 5 years; [[patient opts for operation]]
Benefits: removes the source of infection, prevents perforation and recurrence
General risks: bleeding, wound infection, chest infection, deep vein thrombosis and pulmonary embolism, cardiac events
Anaesthetic risks in brief: sore throat, nausea and vomiting, dental injury, allergic reaction, aspiration; anaesthetist to discuss in detail
Specific risks: intra-abdominal collection or abscess, injury to bowel, bladder or blood vessels, conversion to open, leak from the stump, ileus, port-site hernia, adhesive bowel obstruction
Appendix may be found normal, or other pathology found and treated
Small chance of bowel resection or stoma in severe disease
Histology may show a tumour needing further surgery
Risks as charted in consent form acknowledged
Patient showed good understanding, questions answered
Consent signed`,
figures:[
['Conversion to open','1.4–2.0%','Tampere cohort'],
['Organ-space infection','1.4–3.5%','Tampere cohort'],
['Any complication','3.0–6.1%','Tampere cohort'],
['Any complication, complicated appendicitis','5.6–18%','Tampere cohort'],
['Infective complication or death by 90 days, complex appendicitis','8–10%','APPIC'],
['Appendicectomy within 5 years after antibiotics alone','39.1%','APPAC'],
['Appendicectomy within 90 days after antibiotics alone','29%','CODA']
],
versus:'Against open surgery, laparoscopy roughly halves wound infection (odds ratio 0.42) but carries more intra-abdominal abscess (odds ratio 1.65), with about a day less in hospital (Cochrane 2018).'
},

notes:{
findings:`[[Acutely inflamed appendix, pelvic in position, not perforated]]
[[Base and caecum healthy]]
[[Small volume of reactive free fluid in pelvis, no pus]]
[[Terminal ileum normal, no Meckel's diverticulum]]
[[Uterus, tubes and ovaries normal]]
[[Specimen cut open: faecolith within, no mucosal lesion]]`,
procedure:`Supine, general anaesthesia, skin prepped and draped
Subumbilical incision, linea alba split, peritoneal cavity entered by {{open method}}
Hasson trocar introduced, capnoperitoneum created at pressure [[12]] mmHg
[[10 mm left lower quadrant and 5 mm suprapubic]] working ports inserted {{under laparoscopic guidance}}
Diagnostic laparoscopy performed, findings as above
Blunt and sharp dissection, appendix identified
Mesoappendix dissected with [[diathermy]], appendix skeletonised
Base of appendix controlled with [[PDS Endoloops x3]] then divided
{{Stump secure, haemostasis ensured}}
Appendix retrieved via subumbilical port within Endopouch
Specimen cut open, findings as above
[[Irrigation with warm normal saline till clear, peritoneal fluid sucked dry]]
[[Drain inserted via suprapubic port to pelvis, anchored with 2-0 Nylon]]
Ports removed {{under vision}}
Fascia closed with [[2-0 Vicryl]], skin with [[3-0 Ethilon]]
Local anaesthetic infiltration, dressing
{{Swab, needle and instrument counts correct}}
Appendix sent for histology`,
decisions:[
['No drain','No residual cavity or ongoing contamination, drain not placed'],
['Drain','Drain placed to pelvis in view of [[purulent contamination]]'],
['Suction only','Purulent fluid aspirated from pelvis and right paracolic gutter, no irrigation']
],
deviations:[
['Conversion to open',`Dense adhesions around caecum, appendix unable to be dissected safely laparoscopically
Decided to convert to open
[[Lanz incision]], muscle split, peritoneal cavity entered
Appendicectomy completed, base [[ligated with 2-0 Vicryl]]`],
['Bleeding',`Bleeding from appendicular artery in mesoappendix
Controlled with [[bipolar diathermy / clips]]
Haemostasis rechecked at end of procedure, estimated blood loss [[__]] ml`],
['Bowel or serosal injury',`[[Serosal tear over caecum, __ cm]], recognised intraoperatively
Repaired with [[3-0 PDS interrupted]]
Repair inspected, no leak`],
['Appendix not identified',`Dissection at base of caecum
Appendix unable to be identified
Caecum mobilised along lateral peritoneal reflection
Senior kindly scrubbed in`],
['Base unsuitable for Endoloop',`Base of appendix friable, unsuitable for Endoloop
Base taken with [[endoscopic linear stapler]] across cuff of healthy caecum
Ileocaecal valve clear, staple line intact and haemostatic`],
['Unexpected finding',`Appendix macroscopically normal
[[Meckel's diverticulum / terminal ileitis / tubo-ovarian pathology]] found
Discussed with [[senior]] intraoperatively
[[Appendicectomy performed]]`],
['Procedure not completed',`Appendix mass with dense phlegmon, anatomy unable to be defined safely
Decided for drainage only
Drain placed to [[right iliac fossa]]
For antibiotics and interval imaging`],
['Senior called',`Senior kindly scrubbed in at [[__:__]]
[[Dr __]] continued as chief surgeon`]
],
postop:`DAT when fully conscious
IVF until DAT well
Analgesics regular and PRN
[[No post-op Abx (uncomplicated appendicitis)]]
[[BP/P Q1H x4 then Q4H if stable]]
Early mobilisation, DVT prophylaxis as assessed
[[Chart drain output, off drain when minimal and serous]]
Inform if T > 38, P > 100 or increasing pain`,
discharge:`Home when afebrile, DAT and pain controlled, [[D1]]
Wound care advice given, [[STO D7 to D10]]
SL [[__ days]]
FU surgical clinic [[4 to 6 weeks]], trace histology
To return if fever, increasing pain, vomiting or wound discharge`
},

viva:[
['What is the blood supply of the appendix, and why does it matter?','The appendicular artery, from the ileocolic branch of the superior mesenteric, passing behind the terminal ileum into the free edge of the mesoappendix. It is an end artery: once it thromboses there is no collateral, so gangrene and perforation follow early. The gallbladder, by contrast, has collateral supply from the liver bed.'],
['Where can the tip lie, and how does that change the presentation?','Wakeley’s series of 10,000: retrocaecal 65%, pelvic 31%, subcaecal 2%, pre-ileal 1%, post-ileal 0.4%. Retrocaecal gives loin tenderness and a psoas sign with a soft abdomen; pelvic gives diarrhoea, urinary symptoms and an obturator sign; post-ileal gives vomiting with few signs. Other series quote different proportions; the principle is that the base is fixed and the tip is not.'],
['You find a normal-looking appendix at laparoscopy. What do you do?','Complete the survey first: terminal ileum for Meckel’s and Crohn’s, mesenteric nodes, caecum and sigmoid, gallbladder and duodenum, pelvic organs. If nothing else explains the symptoms, remove it: visual assessment of early appendicitis is unreliable (WSES 5.3, weak recommendation, low-quality evidence). Be ready to give the argument against as well: every operation carries risk.'],
['What is the evidence for antibiotics instead of surgery?','APPAC: in CT-proven uncomplicated appendicitis, 39.1% of the antibiotic group had appendicectomy by 5 years. CODA: antibiotics were non-inferior at 30 days on quality of life, but 29% had appendicectomy by 90 days, and 41% of those with an appendicolith. So it is a reasonable option for uncomplicated disease without an appendicolith in an informed patient; appendicectomy remains definitive.'],
['How do you manage an appendix mass or abscess?','Stable with a contained process: antibiotics, with percutaneous drainage of an abscess. Laparoscopic surgery is an alternative where expertise exists, with a low threshold to convert (WSES 6.1 and 6.2). Routine interval appendicectomy is not recommended under 40; offer it for recurrent symptoms. At 40 or over, colonoscopy and interval CT, because 3–17% of complicated cases in that age group hide a neoplasm (WSES 6.3 and 6.4).'],
['Your consultant drains and irrigates. What does the evidence say?','In adults with complicated appendicitis, drains do not reduce abscess and lengthen stay, and irrigation offers nothing over suction alone (WSES 4.12 and 4.8, both strong). Post-operative antibiotics for complicated disease need not exceed 3 to 5 days, and APPIC found 2 days non-inferior to 5, at the cost of more readmissions (12% against 6%). Say what the evidence shows, then do it the way the consultant does it.'],
['Histology shows a 1.5 cm neuroendocrine tumour. What next?','Under 1 cm with clear margins: appendicectomy is enough. Over 2 cm: right hemicolectomy is conventionally offered. Between 1 and 2 cm the decision turns on risk features (mesoappendiceal invasion, involved base or margin, lymphovascular invasion, higher grade) and is made at the multidisciplinary meeting; recent cohort data question whether hemicolectomy improves survival in this group.','guidance shifting: check current ENETS']
],

sources:{
steps:[
'House technique: senior’s CMS personal template “Lap Appen” (YO Templates, transcribed 17/11/2026).',
'<a href="https://doi.org/10.1186/s13017-020-00306-3">Di Saverio et al. WSES Jerusalem guidelines, 2020 update. World J Emerg Surg 15:27</a>: statements 3.1, 3.2, 4.8–4.12, 5.1, 7.1.',
'Zollinger’s Atlas of Surgical Operations, 10th edition, chapter 49, pages 166–169 (handling the tip, loop as a handle).',
'Farquharson’s Textbook of Operative General Surgery, 9th edition, chapter 21, pages 379–383.',
'Tips marked with a lamp are craft points from standard teaching and the texts above. Treat them as unverified until you have tried them.'],
anatomy:[
'Wakeley CPG. The position of the vermiform appendix as ascertained by an analysis of 10,000 cases. J Anat 1933;67:277–283.',
'Senior notes: Billy notes, Anatomy (colorectal); Derek notes, Appendicitis.',
'Farquharson’s, 9th edition, chapter 21.'],
pitfalls:[
'<a href="https://doi.org/10.1186/s13017-020-00306-3">WSES Jerusalem guidelines 2020</a>: statements 5.3, 6.1, 6.2.',
'Senior notes: Billy notes, colorectal (friable base, wedge of caecum; Crohn’s found at operation); Derek notes, Appendicitis.',
'Stump length: case-series evidence only; no trial defines a safe length.'],
setup:[
'Theatre layout and the umbilical, left lower quadrant and suprapubic ports: <a href="https://doi.org/10.1007/978-3-319-91164-9_31">operative chapter on laparoscopic appendectomy, Springer</a>.',
'The senior’s CMS template “Lap Appen” puts the third port in the right lower quadrant. No trial result found that favours either position.'],
consent:[
'<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10449719">Tampere University Hospital cohort, 1,560 appendicectomies, 2014–2017</a>. Ranges are the two surgeon groups reported.',
'de Wijkerslooth et al. APPIC: 2 days versus 5 days of post-operative antibiotics for complex appendicitis. Lancet 2023;401:366–376.',
'<a href="https://doi.org/10.1002/14651858.CD001546.pub4">Jaschinski et al. Laparoscopic versus open surgery for suspected appendicitis. Cochrane 2018</a>.',
'Salminen et al. APPAC five-year follow-up. JAMA 2018;320:1259–1265.',
'CODA Collaborative. N Engl J Med 2020;383:1907–1919.',
'Figures are European and American. Replace with your unit’s own when you have them.'],
notes:[
'Wording follows the senior’s CMS personal templates. The operation record is spelt out; the orders use common HA short forms.',
'<a href="https://doi.org/10.1186/s13017-020-00306-3">WSES Jerusalem guidelines 2020</a>: statement 7.1 (no post-operative antibiotics after uncomplicated appendicitis).'],
viva:[
'<a href="https://doi.org/10.1186/s13017-020-00306-3">WSES Jerusalem guidelines 2020</a>.',
'Wakeley 1933; APPAC (JAMA 2018); CODA (N Engl J Med 2020); APPIC (Lancet 2023).',
'Neuroendocrine tumour thresholds: ENETS guidance; senior notes (Billy notes, colorectal).']
},
dg:{setup:`<figure class="dg"><svg viewBox="0 0 340 280" role="img" aria-label="Theatre layout and port positions for laparoscopic appendicectomy">
<g fill="none" stroke="var(--muted-text)" stroke-width="1.5">
<circle cx="170" cy="26" r="14"/><rect x="118" y="46" width="104" height="196" rx="30"/>
<circle cx="170" cy="130" r="3"/>
</g>
<g fill="var(--accent-text)"><circle cx="170" cy="146" r="6"/><circle cx="203" cy="184" r="6"/><circle cx="170" cy="222" r="4.5"/></g>
<g><text class="b" x="181" y="150">A</text><text class="b" x="213" y="188">B</text><text class="b" x="181" y="226">C</text></g>
<g fill="var(--surface-high)" stroke="var(--border)" stroke-width="1"><rect x="244" y="64" width="84" height="30" rx="4"/><rect x="244" y="118" width="84" height="30" rx="4"/><rect x="12" y="170" width="84" height="30" rx="4"/></g>
<text class="b" x="286" y="83" text-anchor="middle">Camera</text><text class="b" x="286" y="137" text-anchor="middle">Surgeon</text><text class="b" x="54" y="189" text-anchor="middle">Monitor</text>
<text x="54" y="60" text-anchor="middle">Patient’s right</text><text x="286" y="48" text-anchor="middle">Patient’s left</text>
<text x="170" y="266" text-anchor="middle">Head down, left side down. Left arm tucked.</text>
</svg><figcaption><b>A</b> subumbilical 10 mm Hasson port, camera. <b>B</b> 10 mm left lower quadrant working port. <b>C</b> 5 mm suprapubic working port, in the midline above an empty bladder. Both operators stand on the patient’s left, facing a monitor at the right hip.</figcaption></figure>`,
anat:`<figure class="dg"><svg viewBox="0 0 340 296" role="img" aria-label="Ileocaecal anatomy, anterior view, with positions of the appendix">
<g fill="none" stroke="var(--muted-text)" stroke-width="1.5">
<path d="M110 8V170a40 40 0 0 0 80 0V8"/>
<path d="M190 108C230 104 280 118 334 110"/><path d="M190 140C230 138 280 152 334 144"/>
<path d="M150 8V160Q152 190 178 196" stroke-dasharray="1 4" stroke-linecap="round"/>
</g>
<path d="M181 196C205 208 218 236 210 268" fill="none" stroke="var(--text)" stroke-width="9" stroke-linecap="round"/>
<path d="M181 196C205 208 218 236 210 268" fill="none" stroke="var(--surface)" stroke-width="6" stroke-linecap="round"/>
<g fill="none" stroke="var(--muted-text)" stroke-width="1.5" stroke-dasharray="4 4" stroke-linecap="round">
<path d="M178 193C166 170 162 120 162 70"/><path d="M185 193C215 182 245 170 272 166"/>
</g>
<g fill="none" stroke="var(--accent-text)" stroke-width="1.75" stroke-linecap="round">
<path d="M334 26C290 40 244 58 206 84"/>
<path d="M236 66C234 82 232 96 230 107"/><path d="M229 112C226 122 224 132 222 141" stroke-dasharray="2 4"/><path d="M221 146C214 180 228 226 222 262"/>
</g>
<g fill="none" stroke="var(--muted-text)" stroke-width="1"><path d="M104 72H160"/><path d="M104 118H148"/></g>
<text class="b" x="100" y="34" text-anchor="end">Ascending colon</text>
<text x="100" y="76" text-anchor="end">Retrocaecal</text>
<text x="100" y="122" text-anchor="end">Taenia, to the base</text>
<text class="b" x="100" y="184" text-anchor="end">Caecum</text>
<text class="b" x="250" y="134">Terminal ileum</text>
<text x="196" y="26">Ileocolic artery</text>
<text x="236" y="212">Appendicular artery,</text><text x="236" y="226">behind the ileum</text>
<text x="252" y="186">Pre- or post-ileal</text>
<text x="196" y="288" text-anchor="end">Pelvic</text>
</svg><figcaption>Anterior view; the patient’s right is on your left. The three taeniae converge on the base, which is why following a taenia always finds the appendix. The artery reaches the mesoappendix from behind the terminal ileum. Dashed outlines show other positions of the tip.</figcaption></figure>`}
});
