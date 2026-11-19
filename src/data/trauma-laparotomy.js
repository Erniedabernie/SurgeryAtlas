P.push({
id:'trauma-laparotomy', name:'Trauma laparotomy and damage control', aka:'trauma laparotomy damage control surgery dcs dcl exploratory laparotomy haemorrhage four quadrant packing pringle splenectomy liver packing temporary abdominal closure open abdomen laparostomy lethal triad massive transfusion',
system:'Trauma and emergency', list:'emergency', approach:'Open, long midline',
aim:'Stop the bleeding, stop the contamination, and get the patient to intensive care before hypothermia, acidosis and coagulopathy win. Repair comes later.',
status:'Draft 0.1 · 19/11/2026 · sourced, not yet tested by you in theatre',
houseTitle:'Practice and evidence', houseLead:'There is no senior template for this. The middle column is from Deon’s trauma notes and common practice: correct it to your trauma centre’s protocol.', houseHead:['Step','Practice','Guideline and trials'],

steps:[
{t:'Prepare the room', how:'Massive transfusion protocol running. Tranexamic acid given within 3 hours of injury. Warm theatre, warm fluids, blood warmer and rapid infuser. Two large suckers, cell saver, vascular clamps, plenty of large packs. Antibiotics.', why:'Most of the battle is resuscitation. The operation buys time for it.'},
{t:'Prep before induction', how:'Patient supine, arms out. Prep and drape from the chin to mid-thigh, surgeon scrubbed and ready, before rapid-sequence induction.', why:'Muscle relaxation releases the tamponade of a tense abdomen; the pressure can fall at once. You need to be ready to open.'},
{t:'Open', how:'Long midline incision from xiphoid to pubic symphysis.', why:'Every quadrant must be reachable at once.'},
{t:'Evacuate and eviscerate', how:'Scoop out blood and clot. Eviscerate the small bowel. Close any obvious hole with a soft clamp or a quick stitch.', why:'Clot hides the source; contamination keeps spreading while you look for it.'},
{t:'Pack four quadrants', how:'Large packs above and below the liver, behind and around the spleen, in both paracolic gutters and in the pelvis. Stop and let the anaesthetist catch up.', why:'Packing tamponades most bleeding and turns a frantic search into an orderly one.', tip:'Pack the liver by pushing it back into shape, front to back. Do not stuff packs into the laceration.'},
{t:'Unpack in order', how:'Remove packs one quadrant at a time, starting where bleeding is least likely. Treat in order of lethality: major vessels, solid organs, mesentery and hollow viscus, then contamination.', why:'Taking out all packs at once undoes the tamponade everywhere.'},
{t:'Liver', how:'Perihepatic packing. Pringle manoeuvre: clamp the hepatoduodenal ligament through the foramen of Winslow and record the time. Suture or clip accessible bleeders; leave deep lacerations packed.', why:'Pringle controls inflow. Bleeding that continues despite it comes from the hepatic veins or retrohepatic cava, or from an aberrant left hepatic artery. Pack and call; do not mobilise the liver.'},
{t:'Spleen', how:'In an unstable patient, splenectomy: divide the lienorenal ligament, deliver the spleen, clamp and ligate the hilum away from the pancreatic tail.', why:'WSES: non-operative management is contraindicated in instability. Splenic salvage is for the stable patient.'},
{t:'Bowel', how:'Staple off perforations or resect damaged segments with linear staplers. Leave the bowel in discontinuity. No anastomosis or stoma at this stage.', why:'Contamination control in minutes. Reconstruction waits for a warm, resuscitated patient.'},
{t:'Retroperitoneum', how:'Central (zone 1) haematoma: explore with proximal control. Lateral (zone 2): explore if expanding, pulsatile or penetrating. Pelvic (zone 3) after blunt injury: do not open; pack preperitoneally, embolise and fix the pelvis.', why:'Opening a contained pelvic haematoma releases the tamponade on bleeding you cannot control.'},
{t:'Look for what you missed', how:'Systematically: stomach front and back through the lesser sac, duodenum with a Kocher manoeuvre, small bowel DJ to ileocaecal valve on both borders, colon, rectum, both diaphragms.', why:'Posterior gastric, duodenal and mesenteric-border injuries are the classic misses.'},
{t:'Decide: damage control or definitive', how:'Damage control if the patient is cold, acidotic or coagulopathic, has had a massive transfusion, has injuries that need long repairs, or the abdomen will not close.', why:'Trying to finish everything in a patient sliding into the lethal triad kills them.'},
{t:'Temporary closure', how:'Negative pressure temporary abdominal closure. Count and record every pack left in. To ICU, with a relook planned within 24–48 hours.', why:'WSES (1B): negative pressure with fascial traction gives the best chance of later fascial closure.'}
],
house:[
['Blood products','1:1:1, massive transfusion protocol','PROPPR: no difference in 24-hour or 30-day mortality, but fewer deaths from exsanguination at 24 hours (9.2% against 14.6%) and more patients achieved haemostasis (86.1% against 78.1%).'],
['Tranexamic acid','1 g within 3 hours, then infusion','CRASH-2: all-cause death 14.5% against 16.0%. Benefit only when given within 3 hours of injury.'],
['Damage control triggers','Lethal triad, complex injuries, abdomen will not close','WSES 2021: indications from systematic review and expert consensus; physiology and injury pattern together.'],
['Temporary closure','Negative pressure','WSES open abdomen 2018 (1B): negative pressure with continuous fascial traction; avoid a Bogota bag where negative pressure is available.'],
['Relook','24–48 hours','WSES open abdomen 2018: re-explore no later than 24–48 hours.'],
['Spleen, unstable','Splenectomy','WSES spleen 2017: instability is a contraindication to non-operative management.'],
['Liver, unstable','Packing, Pringle, embolisation for arterial bleeding','WSES liver 2020: damage control with perihepatic packing; angioembolisation as an adjunct.']
],

anatomy:{
points:[
'Packing spaces: right subphrenic and subhepatic (around the liver), left subphrenic (around the spleen), both paracolic gutters, and the pelvis.',
'Pringle manoeuvre: the hepatoduodenal ligament carries the portal vein, hepatic artery and bile duct. A finger through the foramen of Winslow (epiploic foramen) passes behind it for a clamp or sling.',
'Bleeding despite Pringle: from the hepatic veins or the retrohepatic cava, or from an aberrant left hepatic artery arising from the left gastric artery in the lesser omentum.',
'Medial visceral rotation: right (Cattell–Braasch) mobilises the right colon and duodenum to expose the cava and right kidney; left (Mattox) mobilises the left colon, spleen and pancreatic tail to expose the aorta and its branches.',
'Supracoeliac aortic control: through the lesser omentum, compress the aorta against the spine at the hiatus with a hand or an aortic compressor.',
'Spleen: held by the lienorenal and gastrosplenic ligaments; the pancreatic tail lies in the hilum.'
],
table:{title:'Retroperitoneal haematoma: when to explore', head:['Zone','Contents','Blunt','Penetrating'], rows:[
['1 Central','Aorta, cava, coeliac and SMA, pancreas, duodenum','Explore','Explore'],
['2 Lateral','Kidney, adrenal, colon','Explore if expanding or pulsatile','Explore'],
['3 Pelvic','Iliac vessels','Do not open: pack, embolise, fix the pelvis','Explore with proximal control']
]},
danger:[
'Induction: loss of tamponade and cardiovascular collapse.',
'A contained pelvic haematoma in blunt trauma: opening it releases uncontrollable venous bleeding.',
'Retrohepatic cava and hepatic veins: mobilising the liver to chase them turns a packed injury into a fatal one.',
'Pancreatic tail at the splenic hilum.',
'Closing the abdomen under tension: abdominal compartment syndrome.'
]
},

pitfalls:[
{t:'Collapse on induction', a:'Prep and drape first; surgeon scrubbed; blood running.', r:'Open immediately and pack. Supracoeliac aortic compression if the pressure does not recover.'},
{t:'Liver still bleeding after Pringle', a:'Do not mobilise the liver to look.', r:'Repack firmly, keep Pringle while you think, and call. Consider angioembolisation after packing; check for an aberrant left hepatic artery.'},
{t:'Diffuse ooze everywhere', a:'Recognise coagulopathy, not surgical bleeding.', r:'Stop operating. Pack, temporary closure, ICU, correct coagulopathy and temperature, relook.'},
{t:'Hypotension on closing', a:'Expect it in a tight abdomen.', r:'Deon’s order: ventilation first (tension pneumothorax, missed haemothorax), then circulation (ongoing bleeding, volume), then relaxation. Raised pressure on closure: leave it open.'},
{t:'Missed injury', a:'Systematic survey before leaving.', r:'Tertiary survey within 24 hours; any deterioration means a relook rather than more imaging.'},
{t:'Bleeding from a pelvic fracture', a:'Do not open a pelvic haematoma after blunt injury.', r:'Preperitoneal pelvic packing, angioembolisation and external fixation, with orthopaedics and radiology.'}
],
call:['Every trauma laparotomy is consultant-led: call at the decision to operate','Bleeding from the retrohepatic cava or hepatic veins','Zone 1 haematoma or major vascular injury','Pancreaticoduodenal injury','Pelvic haemorrhage needing packing or embolisation'],

setup:{
theatre:['Theatre warmed; forced-air warming; warm fluids','Supine, arms out','Prep chin to mid-thigh before induction','Surgeon on the patient’s right, assistant opposite','Urinary catheter after induction'],
kit:['Major laparotomy set with self-retaining retractor','Two large suckers, cell saver','Many large abdominal packs','Vascular clamps (aortic, Satinsky), atraumatic clamp or sling for Pringle','Linear staplers with many reloads','Negative pressure temporary closure kit','Chest drain set'],
standby:['Interventional radiology','Vascular and HPB surgeons','Thoracotomy set','Orthopaedics for pelvic fixation','Massive transfusion protocol activated']
},

consent:{
note:`Patient [[unable to give consent: GCS __ / in extremis]]
Emergency laparotomy proceeded in patient's best interests as a life-saving procedure
Decision made with [[Dr __, consultant]]
[[Family informed by __ at __:__]]: nature of injuries, need for emergency operation, possibility of further operations including planned second operation, risk of death`,
figures:[
['Death from exsanguination at 24 hours, 1:1:1 against 1:1:2','9.2% against 14.6%','PROPPR, 680 patients'],
['Death at 24 hours, 1:1:1 against 1:1:2','12.7% against 17.0%','PROPPR, not significant'],
['Haemostasis achieved, 1:1:1 against 1:1:2','86.1% against 78.1%','PROPPR'],
['All-cause death, tranexamic acid against placebo','14.5% against 16.0%','CRASH-2, 20,211 patients']
],
versus:'Most trauma laparotomies proceed without written consent. Record why, who agreed, and who in the family was told what. These figures are for the team; for the family, the honest message is that the injuries are life-threatening and more operations are likely.'
},

notes:{
findings:`[[Blunt / penetrating]] abdominal trauma, [[FAST positive, unstable despite __ units blood]]
[[Haemoperitoneum __ L]]
[[Grade __ liver laceration at segments __, active bleeding]]
[[Splenic hilar injury with active bleeding]]
[[Small bowel perforation x__, at __ cm from DJ flexure]]
[[Zone __ retroperitoneal haematoma, non-expanding]]
[[Physiology: T __, pH __, lactate __, INR __]]`,
procedure:`Supine, arms out, skin prepped from chin to mid-thigh {{before induction}}, general anaesthesia with rapid sequence induction
Massive transfusion protocol activated, [[TXA given at __:__]]
Long midline laparotomy from xiphoid to pubic symphysis
Haemoperitoneum [[__ L]] evacuated, small bowel eviscerated
Four-quadrant packing, pause for resuscitation
Packs removed sequentially, findings as above
[[Perihepatic packing with __ abdominal packs, Pringle manoeuvre applied __:__ to __:__]]
[[Splenectomy: lienorenal ligament divided, spleen delivered, hilum clamped and ligated, pancreatic tail safeguarded]]
[[Perforated small bowel segment stapled off with linear stapler, left in discontinuity]]
{{Systematic exploration: stomach and lesser sac, duodenum (Kocher), small bowel DJ flexure to ileocaecal valve, colon, rectum, both diaphragms, retroperitoneum}}
[[Zone 2 haematoma not explored: non-expanding]]
Washout with warm normal saline
Damage control in view of [[hypothermia, acidosis and coagulopathy]]
Temporary abdominal closure with [[negative pressure dressing]]
{{Packs left in situ: __, documented}}
For ICU, relook in [[24 to 48 h]]`,
decisions:[
['Definitive closure','Patient warm and stable, no coagulopathy: definitive repair completed, fascia closed with [[PDS loop]], {{no tension on closure}}'],
['Splenic salvage','Spleen [[grade __ capsular tear]], haemostasis with [[haemostatic agent and pressure]], spleen preserved'],
['Liver suture','Bleeding vessels in laceration at segment [[__]] ligated, [[hepatorrhaphy with 0 chromic]], no packing needed']
],
deviations:[
['Aortic compression',`Profound hypotension on entry
Supracoeliac aortic compression through lesser omentum applied [[__:__ to __:__]] while resuscitation caught up`],
['Hypotension on closure',`Hypotension on attempted fascial closure
Ventilation, circulation and relaxation checked with anaesthetist
[[Raised peak airway pressure on closure]]: abdomen left open with negative pressure dressing`],
['Pelvic packing',`Expanding pelvic haematoma with pelvic fracture
Preperitoneal pelvic packing via [[lower midline extension]], [[external fixator by orthopaedics]], for angioembolisation`],
['Senior called',`Senior kindly scrubbed in at [[__:__]]
[[Dr __]] continued as chief surgeon`]
],
postop:`ICU
Active warming, target normothermia
Correct coagulopathy as per ICU [[ROTEM / TEG-guided]]
ABG, lactate, Hb, coag Q4H
Bladder pressure [[Q6H]], inform if > 20 mmHg
IV Abx [[__]]
NPO, Ryle's tube on free drainage
Chart NPWT output
Tertiary survey within 24 h
For relook laparotomy in [[24 to 48 h]]`,
discharge:`After definitive surgery and recovery
[[Post-splenectomy: pneumococcal, Hib and meningococcal vaccines, given at 2 weeks or before discharge]]
[[Post-splenectomy: antibiotic advice and alert card]]
FU [[trauma / surgical]] clinic [[2 to 4 weeks]]
SL [[__ days]]
To return if fever, abdominal pain or wound problems`
},

viva:[
['What is damage control, and what are its stages?','A strategy of abbreviated surgery for patients whose physiology will not survive a definitive operation. Damage control resuscitation from the start; damage control laparotomy to stop bleeding and contamination; correction of the lethal triad in ICU over 24–48 hours; planned relook for definitive repair; then abdominal closure.'],
['What is the lethal triad?','Hypothermia, acidosis and coagulopathy. Each worsens the others: cold slows the clotting cascade, acidosis impairs it further, and coagulopathy prolongs bleeding and the operation. Recognising it early is the indication to stop.'],
['What is the evidence for 1:1:1?','PROPPR randomised 680 patients: 24-hour and 30-day mortality did not differ significantly, but exsanguination deaths at 24 hours fell from 14.6% to 9.2% and more patients achieved haemostasis (86.1% against 78.1%), with no increase in complications.'],
['When is tranexamic acid given?','Within 3 hours of injury: 1 g over 10 minutes, then 1 g over 8 hours. CRASH-2 reduced all-cause death from 16.0% to 14.5%. Given after 3 hours, it increased bleeding deaths.'],
['The liver still bleeds after packing and Pringle. What now?','Think of the hepatic veins and retrohepatic cava, or an aberrant left hepatic artery. Repack firmly, close temporarily and send for angioembolisation if arterial. Mobilising the liver to find the source releases the tamponade. Total vascular exclusion and atriocaval shunts belong to specialist centres and have poor results.'],
['Define abdominal compartment syndrome.','Sustained intra-abdominal pressure above 20 mmHg with new organ dysfunction (World Society of the Abdominal Compartment Syndrome). Measured through the bladder. Treat by decompression: open the abdomen, or do not close it.'],
['What does a splenectomy patient need before going home?','Vaccination against pneumococcus, Haemophilus influenzae type b and meningococcus, ideally two weeks after an emergency splenectomy or before discharge if follow-up is uncertain; annual influenza vaccine; antibiotic prophylaxis or a standby course; an alert card. Overwhelming post-splenectomy infection is rare but often fatal.']
],

sources:{
steps:[
'Senior notes: Deon’s notes, trauma (damage control, trauma laparotomy sequence, retroperitoneal zones).',
'<a href="https://doi.org/10.1186/s13017-021-00352-5">Roberts DJ et al. Indications for use of damage control surgery in civilian trauma patients. World J Emerg Surg 2021;16:10</a>.',
'<a href="https://wjes.biomedcentral.com/articles/10.1186/s13017-018-0167-4">Coccolini F et al. The open abdomen in trauma and non-trauma patients: WSES guidelines. World J Emerg Surg 2018;13:7</a>.',
'Tips marked with a lamp are craft points. Treat them as unverified until you have tried them.'],
anatomy:['Deon’s notes, trauma: packing spaces and retroperitoneal zones.','Coccolini F et al. Liver trauma: WSES 2020 guidelines. World J Emerg Surg 2020;15:24.'],
pitfalls:['Deon’s notes, trauma: hypotension on closure.','Coccolini F et al. Splenic trauma: WSES classification and guidelines. World J Emerg Surg 2017;12:40.'],
setup:['Deon’s notes, trauma: theatre preparation.'],
consent:[
'<a href="https://pubmed.ncbi.nlm.nih.gov/25647203/">Holcomb JB et al. Transfusion of plasma, platelets, and red blood cells in a 1:1:1 vs a 1:1:2 ratio (PROPPR). JAMA 2015;313:471–482</a>.',
'CRASH-2 trial collaborators. Effects of tranexamic acid on death, vascular occlusive events, and blood transfusion in trauma patients with significant haemorrhage. Lancet 2010;376:23–32.'],
notes:['Wording in HA style. Consent wording for a patient without capacity follows the common law best-interests principle; check your hospital’s form and policy.'],
viva:['PROPPR and CRASH-2, as above.','Kirkpatrick AW et al. Intra-abdominal hypertension and the abdominal compartment syndrome: updated consensus definitions. Intensive Care Med 2013;39:1190–1206.']
},

dg:{
setup:`<figure class="dg"><svg viewBox="0 0 340 300" role="img" aria-label="Theatre set-up for trauma laparotomy: prep from chin to thighs, arms out, long midline incision">
<rect x="104" y="30" width="132" height="230" rx="8" fill="var(--surface-high)" stroke="none"/>
<g fill="none" stroke="var(--muted-text)" stroke-width="1.5"><circle cx="170" cy="20" r="14"/><path d="M122 44H218Q226 44 226 52V188Q226 196 218 196H122Q114 196 114 188V52Q114 44 122 44Z"/><path d="M140 196L136 288M200 196L204 288"/><path d="M114 60H40M226 60H300"/><circle cx="170" cy="130" r="3"/></g>
<path d="M170 52V188" stroke="var(--accent-text)" stroke-width="3" stroke-linecap="round"/>
<g fill="var(--surface)" stroke="var(--border)" stroke-width="1"><rect x="12" y="110" width="84" height="30" rx="4"/><rect x="244" y="110" width="84" height="30" rx="4"/><rect x="244" y="4" width="92" height="30" rx="4"/></g>
<text class="b" x="54" y="129" text-anchor="middle">Surgeon</text><text class="b" x="286" y="129" text-anchor="middle">Assistant</text><text class="b" x="290" y="23" text-anchor="middle">Anaesthetist</text>
<text x="12" y="168">Prep chin to</text><text x="12" y="182">mid-thigh before</text><text x="12" y="196">induction</text>
<text x="246" y="168">Xiphoid to</text><text x="246" y="182">pubis</text>
<text x="246" y="226">Two suckers,</text><text x="246" y="240">cell saver,</text><text x="246" y="254">many packs</text>
</svg><figcaption>Supine, arms out. The shaded area is prepped and draped before induction, so the abdomen can be opened the moment the pressure falls. The midline runs the full length from xiphoid to pubis; the chest is in the field for drains or a thoracotomy.</figcaption></figure>`,
anat:`<figure class="dg"><svg viewBox="0 0 340 400" role="img" aria-label="Four-quadrant packing positions, and the three retroperitoneal zones">
<text class="b" x="8" y="16">Where the packs go</text>
<path d="M80 30H260Q280 30 280 50V170Q280 190 260 190H80Q60 190 60 170V50Q60 30 80 30Z" fill="none" stroke="var(--muted-text)" stroke-width="1.5"/>
<path d="M66 40C100 36 150 44 168 70C150 96 100 92 66 80Z" fill="var(--surface-high)" stroke="var(--muted-text)" stroke-width="1.25"/>
<ellipse cx="248" cy="62" rx="24" ry="16" fill="var(--surface-high)" stroke="var(--muted-text)" stroke-width="1.25"/>
<g fill="none" stroke="var(--accent-text)" stroke-width="2">
<rect x="70" y="34" width="44" height="12" rx="2"/><rect x="74" y="86" width="44" height="12" rx="2"/>
<rect x="236" y="38" width="36" height="12" rx="2"/>
<rect x="66" y="110" width="12" height="54" rx="2"/><rect x="262" y="96" width="12" height="54" rx="2"/>
<rect x="146" y="160" width="48" height="14" rx="2"/>
</g>
<text x="120" y="44">Above liver</text><text x="122" y="96">Below liver</text><text x="196" y="44">Spleen</text>
<text x="84" y="140">Right gutter</text><text x="196" y="124">Left gutter</text><text x="150" y="154">Pelvis</text>
<text class="b" x="8" y="222">Retroperitoneal zones</text>
<path d="M80 236H260Q280 236 280 256V376Q280 396 260 396H80Q60 396 60 376V256Q60 236 80 236Z" fill="none" stroke="var(--muted-text)" stroke-width="1.5"/>
<rect x="136" y="244" width="68" height="94" rx="4" fill="var(--surface-high)" stroke="var(--text)" stroke-width="1.5"/>
<rect x="72" y="262" width="56" height="70" rx="4" fill="none" stroke="var(--muted-text)" stroke-width="1.5" stroke-dasharray="4 3"/>
<rect x="212" y="262" width="56" height="70" rx="4" fill="none" stroke="var(--muted-text)" stroke-width="1.5" stroke-dasharray="4 3"/>
<path d="M110 350H230C230 372 200 388 170 388C140 388 110 372 110 350Z" fill="none" stroke="var(--muted-text)" stroke-width="1.5"/>
<text class="b" x="170" y="284" text-anchor="middle">1</text><text x="170" y="300" text-anchor="middle">Central:</text><text x="170" y="314" text-anchor="middle">explore</text>
<text class="b" x="100" y="292" text-anchor="middle">2</text><text x="100" y="308" text-anchor="middle">Lateral</text>
<text class="b" x="240" y="292" text-anchor="middle">2</text><text x="240" y="308" text-anchor="middle">Lateral</text>
<text class="b" x="170" y="364" text-anchor="middle">3 Pelvic</text><text x="170" y="378" text-anchor="middle">blunt: leave closed</text>
</svg><figcaption>Anterior view; the patient’s right is on your left. Top: packs above and below the liver, around the spleen, in both gutters and in the pelvis. Bottom: zone 1 haematomas are always explored; zone 2 if expanding, pulsatile or penetrating; zone 3 after blunt injury is packed, embolised and fixed, not opened.</figcaption></figure>`}
});
