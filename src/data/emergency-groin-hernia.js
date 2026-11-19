P.push({
id:'emergency-groin-hernia', name:'Emergency repair of incarcerated or strangulated groin hernia', aka:'strangulated hernia incarcerated hernia obstructed inguinal hernia femoral hernia richter maydl reduction en masse lockwood mcevedy lotheissen hernioscopy bowel resection mesh emergency groin',
system:'Hernia', list:'emergency', approach:'Open; inguinal or preperitoneal',
aim:'Relieve the constriction, look at the bowel before it slips back, resect what is dead, and repair the defect, with mesh unless the field is contaminated.',
status:'Draft 0.1 · 19/11/2026 · sourced, not yet tested by you in theatre',
houseTitle:'Practice and evidence', houseLead:'There is no senior template for this yet. The middle column is common practice: correct it to your consultant’s.', houseHead:['Step','Common practice','Guideline'],

steps:[
{t:'Checks and induction', how:'WHO checklist. Mark the side. Rapid-sequence induction if obstructed, after aspirating the Ryle’s tube. Antibiotic prophylaxis. Consent includes laparotomy and bowel resection.', why:'An obstructed patient aspirates. The incision may need to grow.'},
{t:'Choose the incision', how:'Inguinal hernia: standard groin incision. Femoral hernia: low (Lockwood) if the bowel looks safe; high preperitoneal (McEvedy) or trans-inguinal (Lotheissen) if a resection is likely.', why:'The low approach gives poor access to bowel. The high approach lets you resect through the same wound.'},
{t:'Open the sac before reducing', how:'Dissect the sac, open it at its fundus, and hold the contents with Babcock forceps before releasing anything.', why:'Once the constriction is released the contents slip back, and dead bowel returned unseen perforates in the abdomen.', tip:'Send some sac fluid for culture. Clear fluid is reassuring; blood-stained or foul fluid means strangulation.'},
{t:'Release the constriction', how:'Inguinal: divide the deep ring or neck upwards and laterally. Femoral: divide the lacunar ligament medially.', why:'The inferior epigastric vessels lie medial to the deep ring; the femoral vein lies lateral to the femoral canal. Cut away from both.', tip:'Before dividing the lacunar ligament, feel for an abnormal obturator artery crossing it (the corona mortis).'},
{t:'Judge viability', how:'Draw out a little more bowel to see both constriction rings. Warm packs for 10 minutes. Colour, sheen, peristalsis, mesenteric pulsation.', why:'The constriction rings are where the bowel is most damaged and most often missed.'},
{t:'Resect if dead', how:'Resect with a margin of healthy bowel and anastomose. Do it through the hernia wound if you can deliver enough bowel; otherwise extend preperitoneally or make a separate laparotomy.', why:'Pulling bowel through a small neck tears the mesentery.'},
{t:'If it reduced before you saw it', how:'Hernioscopy: pass a laparoscope through the sac into the abdomen. Or a diagnostic laparoscopy.', why:'WSES 2017 (2B): laparoscopy checks viability after spontaneous reduction, sparing a laparotomy.'},
{t:'Deal with the sac', how:'Reduce the contents. Indirect sac: transfix and excise at the deep ring. Femoral sac: reduce or excise from below or above.', why:'Leaves no peritoneal pocket to recur into.'},
{t:'Repair', how:'No resection, or resection without gross spillage: Lichtenstein mesh for inguinal; mesh plug or preperitoneal mesh for femoral. Gross contamination: tissue repair.', why:'WSES 2017 (1A): synthetic mesh is safe in clean and clean-contaminated fields and lowers recurrence.'},
{t:'Close', how:'Close in layers. Local anaesthetic to the wound. Counts.', why:'Infiltration reduces opioid need after an emergency groin repair.'}
],
house:[
['Timing','As soon as resuscitated','WSES 2017 (1C): repair immediately when strangulation is suspected.'],
['Predicting strangulation','Clinical signs, lactate','WSES 2017 (1C): systemic inflammatory signs and contrast CT findings predict it, as do lactate, CK and D-dimer.'],
['Spontaneous reduction','Admit and observe, or laparoscopy','WSES 2017 (2B): diagnostic laparoscopy to check bowel viability.'],
['Laparoscopic repair','Not usual in emergency','WSES 2017 (2C): an option when there is no strangulation and no resection is expected.'],
['Mesh without resection','Lichtenstein mesh','WSES 2017 (1A): synthetic mesh recommended.'],
['Mesh after resection, no gross spillage','Consultant decides','WSES 2017 (1A): synthetic mesh can be used; lower recurrence without more wound complications at 30 days.'],
['Contaminated or dirty field','Tissue repair','WSES 2017 (2C): primary repair for defects under 3 cm; biological mesh if direct suture is not possible.'],
['Antibiotics','Prophylaxis','WSES 2017 (2C): a single prophylactic course if clean; 48 hours if clean-contaminated or contaminated; a treatment course for peritonitis.']
],

anatomy:{
points:[
'Deep ring: lies lateral to the inferior epigastric vessels. Indirect hernias emerge here; release a tight ring upwards and laterally.',
'Femoral canal: in front, the inguinal ligament; behind, the pectineal (Cooper’s) ligament; medially, the lacunar ligament; laterally, the femoral vein. Its rigid neck is why femoral hernias strangulate.',
'Telling them apart: a femoral hernia emerges below and lateral to the pubic tubercle; an inguinal hernia above and medial to it.',
'Corona mortis: an abnormal obturator artery or vein from the inferior epigastric or external iliac crossing the lacunar ligament. Cut blindly, it bleeds into the pelvis.',
'Richter’s hernia: only the antimesenteric wall is trapped, so it can strangulate without obstruction.',
'Reduction en masse: sac and contents pushed back together, still strangulated. Maydl’s hernia: a W loop whose middle, strangulated segment lies inside the abdomen.'
],
table:{title:'Femoral hernia: approaches', head:['Approach','Incision','When'], rows:[
['Low (Lockwood)','Below and parallel to the inguinal ligament, over the lump','Bowel looks safe; poor access for resection'],
['Trans-inguinal (Lotheissen)','Inguinal incision, through the posterior wall','Unsure whether inguinal or femoral; weakens the inguinal floor'],
['High (McEvedy, preperitoneal)','Above the inguinal ligament at the lateral rectus edge','Strangulation; bowel can be resected through the same wound']
]},
danger:[
'Inferior epigastric vessels: medial to the deep ring.',
'Femoral vein: lateral to the femoral canal; a bite too far laterally narrows or punctures it.',
'Corona mortis: on the lacunar ligament.',
'Bladder: medial, in a sliding direct or femoral hernia.',
'Ilioinguinal and genital branch of the genitofemoral nerves: in the inguinal canal.',
'Dead bowel returned to the abdomen unseen.'
]
},

pitfalls:[
{t:'Contents reduce before you see them', a:'Open the sac and hold the contents before releasing the constriction.', r:'Hernioscopy through the sac or diagnostic laparoscopy. If neither is possible and strangulation was likely, laparotomy.'},
{t:'Dead bowel will not come out', a:'Choose a high approach when a resection is likely.', r:'Extend preperitoneally, or make a separate lower midline incision. Do not pull on the mesentery.'},
{t:'Bleeding from the corona mortis', a:'Feel before cutting the lacunar ligament.', r:'Pressure, then ligate from above through a preperitoneal approach.'},
{t:'Femoral vein narrowed or injured', a:'Keep repair sutures medial; check the vein is not compressed.', r:'Remove the offending suture. A tear needs a fine vascular suture. Call.'},
{t:'Missed Richter’s or reduction en masse', a:'Inspect the whole knuckle, including the antimesenteric border; feel the sac and ring after reduction.', r:'Persistent obstruction or peritonitis after repair: laparotomy.'},
{t:'Bladder injury', a:'Look for a sliding component medially before transfixing the sac.', r:'Two-layer repair and a catheter for 7–10 days.'}
],
call:['Dead bowel needing resection','Bowel lost into the abdomen before inspection','Bleeding from the corona mortis or femoral vein','Faecal contamination','A reduction en masse'],

setup:{
theatre:['Supine, arms out','General anaesthesia; rapid-sequence if obstructed','Surgeon on the side of the hernia, assistant opposite','Urinary catheter if a preperitoneal approach or laparotomy is likely'],
kit:['Hernia set with Babcock forceps','Warm packs','Polypropylene mesh, 2-0 Prolene','Linear staplers or sutures for a small bowel anastomosis','Culture pot for sac fluid'],
standby:['Laparoscope and stack for hernioscopy or diagnostic laparoscopy','Laparotomy set','Fine vascular sutures (5-0 Prolene)']
},

consent:{
note:`Consent for emergency repair of [[right]] [[inguinal / femoral]] hernia, possible bowel resection, possible laparotomy
Diagnosis and indication explained: [[irreducible tender groin hernia with features of obstruction / strangulation]]
Nature of operation explained: operation under general anaesthesia to free the trapped hernia contents, check the bowel, remove any dead bowel and join the ends, and repair the hernia, with mesh if safe; possible keyhole look or larger abdominal incision
Alternatives discussed: non-operative treatment [[not appropriate in view of strangulation]]
Benefits: relief of obstruction, prevention of bowel death and perforation, repair of hernia
General risks: bleeding, wound infection, chest infection, deep vein thrombosis and pulmonary embolism, cardiac events
Anaesthetic risks in brief, including aspiration; anaesthetist to discuss in detail
Specific risks: bowel resection and leak from join, injury to bladder, blood vessels or nerves, groin numbness or chronic pain, haematoma, testicular swelling or atrophy (male), mesh infection, recurrence
Risk of death explained, [[higher if bowel resection needed]]
Risks as charted in consent form acknowledged
Patient showed good understanding, questions answered
Consent signed`,
figures:[
['Femoral hernias operated as emergencies','35.9%','Swedish Hernia Register (inguinal 4.9%)'],
['Bowel resection in emergency femoral repair','22.7%','Swedish Hernia Register (inguinal 5.4%)'],
['Mortality after emergency groin hernia surgery','7 times the population rate','Swedish Hernia Register'],
['Mortality when bowel is resected','20 times the population rate','Swedish Hernia Register'],
['30-day death after emergency groin hernia surgery','3.9%','UK cohort, 2023']
],
versus:'Elective groin hernia repair carries no measurable excess mortality; an emergency one does, and a bowel resection multiplies it. Say so to the patient and to the family of an elderly woman with a femoral hernia.'
},

notes:{
findings:`[[Right]] [[femoral]] hernia, [[irreducible, tender]]
Sac contained [[knuckle of ileum]], [[blood-stained fluid]]
[[Bowel congested at constriction ring, viable after release and warming]]
[[No other abnormality]]`,
procedure:`Supine, general anaesthesia [[with rapid sequence induction]], skin prepped and draped
[[Right]] [[McEvedy preperitoneal / Lockwood infra-inguinal / inguinal]] incision
Hernia sac identified and opened, {{contents held before release of constriction}}
Sac fluid sent for culture
Constriction released by division of [[lacunar ligament medially / deep ring laterally]]
Bowel wrapped in warm packs, {{viability confirmed: colour, peristalsis and mesenteric pulsation present}}
{{Both constriction rings inspected}}
Contents reduced, sac [[excised / transfixed and excised]]
[[Mesh plug / Lichtenstein repair with polypropylene mesh, fixed with 2-0 Prolene]]
{{Femoral vein not compressed}}
Wound closed in layers, LA infiltrated
{{Swab, needle and instrument counts correct}}`,
decisions:[
['Bowel resection',`[[__ cm]] of non-viable [[ileum]] resected through [[preperitoneal]] wound, [[stapled side-to-side]] anastomosis, mesenteric defect closed`],
['Tissue repair, contaminated','Gross contamination: mesh not used, [[femoral canal closed by suturing inguinal ligament to pectineal ligament with 2-0 Prolene]]'],
['Hernioscopy','Contents reduced on induction; [[laparoscope]] passed through sac: [[bowel viable, no free fluid]]']
],
deviations:[
['Contents lost before inspection',`Contents reduced spontaneously before inspection
[[Diagnostic laparoscopy]]: [[segment of ileum congested but viable / non-viable, converted to __]]`],
['Laparotomy needed',`Non-viable bowel could not be delivered through hernia wound
Senior kindly scrubbed in
[[Lower midline laparotomy]], [[__ cm]] of [[ileum]] resected, [[stapled]] anastomosis
Hernia repaired from [[below / preperitoneally]]`],
['Corona mortis bleeding',`Bleeding from abnormal obturator vessel on division of lacunar ligament
Controlled with [[pressure and ligation via preperitoneal approach]]`],
['Senior called',`Senior kindly scrubbed in at [[__:__]]
[[Dr __]] continued as chief surgeon`]
],
postop:`[[DAT if no resection / NPO, Ryle's tube on free drainage if resection]]
IVF
[[IV Abx __ for 48 h if clean-contaminated]]
Analgesics regular and PRN
[[BP/P Q1H x4 then Q4H if stable]]
Strict I/O
Early mobilisation, DVT prophylaxis as assessed
Inform if T > 38, P > 100, vomiting, distension or groin swelling`,
discharge:`Home when DAT, BO, pain controlled, [[D1 to D3; D4 to D7 if resection]]
Avoid heavy lifting [[4 to 6 weeks]]
FU surgical clinic [[2 to 4 weeks]], [[trace histology if resection]], trace culture
SL [[__ days]]
To return if fever, vomiting, wound redness or discharge, or groin swelling`
},

viva:[
['How do you tell a femoral from an inguinal hernia on the table?','A femoral hernia emerges below the inguinal ligament, below and lateral to the pubic tubercle, and passes medial to the femoral vein. An inguinal hernia lies above the ligament, above and medial to the tubercle. From inside, the femoral ring sits below the iliopubic tract, medial to the vein.'],
['Which femoral approach for a strangulated hernia, and why?','High (McEvedy) or preperitoneal: it shows the neck from above, lets you divide the lacunar ligament under vision, and lets you resect bowel through the same wound. The low approach is quick and good for elective or viable cases but cramped for resection.'],
['Can you use mesh after a bowel resection?','WSES 2017: yes, a synthetic mesh can be used after strangulation or resection without gross spillage (1A), with lower recurrence and no more 30-day wound complications. With gross contamination, repair primarily if the defect is small, or use a biological mesh.'],
['What is the corona mortis?','An abnormal obturator artery or vein, usually from the inferior epigastric or external iliac, crossing the superior pubic ramus behind the lacunar ligament. Cut while freeing a femoral hernia, it retracts and bleeds into the pelvis.','prevalence varies widely between cadaveric series'],
['The hernia reduced in the emergency department. Now what?','If strangulation was likely (tenderness, skin change, raised lactate), admit and examine the bowel: diagnostic laparoscopy (WSES 2B). Beware reduction en masse. If the hernia was simply incarcerated and the patient is well, repair it urgently on the same admission.'],
['Why are femoral hernias more dangerous?','The neck is narrow and rigid: inguinal ligament, lacunar ligament, pectineal ligament and femoral vein. In the Swedish register, 35.9% of femoral repairs were emergencies against 4.9% of inguinal, and 22.7% of emergency femoral repairs needed a bowel resection. Repair every femoral hernia soon after diagnosis.']
],

sources:{
steps:[
'<a href="https://doi.org/10.1186/s13017-017-0149-y">Birindelli A et al. 2017 update of the WSES guidelines for emergency repair of complicated abdominal wall hernias. World J Emerg Surg 2017;12:37</a>.',
'Senior notes: Deon’s notes, hernia (femoral approaches).',
'Tips marked with a lamp are craft points. Treat them as unverified until you have tried them.'],
anatomy:['Deon’s notes, hernia: femoral canal and approaches.','Corona mortis and hernia types: general anatomical teaching.'],
pitfalls:['WSES 2017, as above.'],
setup:['Common practice; there is no senior template for this operation yet.'],
consent:[
'Dahlstrand U et al. Emergency femoral hernia repair: a study based on a national register. Ann Surg 2009;249:672–676.',
'<a href="https://pmc.ncbi.nlm.nih.gov/articles/1877035">Nilsson H et al. Mortality after groin hernia surgery. Ann Surg 2007;245:656–660</a>.',
'<a href="https://doi.org/10.1093/bjsopen/zrad091">Emergency groin hernia repair outcomes, UK cohort. BJS Open 2023;7:zrad091</a>.'],
notes:['Wording in HA style, modelled on the senior’s CMS template “Inguinal Hernia”. Orders and discharge use common HA short forms.'],
viva:['WSES 2017 and the Swedish register, as above.']
},

dg:{
setup:`<figure class="dg"><svg viewBox="0 0 340 280" role="img" aria-label="Incisions for emergency groin hernia repair on the right groin">
<g fill="none" stroke="var(--muted-text)" stroke-width="1.5">
<path d="M20 30C80 40 150 60 210 110"/>
<path d="M210 110C230 130 244 150 250 176"/>
<circle cx="252" cy="182" r="5"/>
<circle cx="20" cy="30" r="4"/>
</g>
<path d="M96 70C130 82 162 98 190 122" fill="none" stroke="var(--accent-text)" stroke-width="3" stroke-linecap="round"/>
<path d="M150 150C170 160 186 170 200 184" fill="none" stroke="var(--text)" stroke-width="3" stroke-linecap="round"/>
<path d="M120 40C150 46 180 56 204 70" fill="none" stroke="var(--text)" stroke-width="3" stroke-linecap="round" stroke-dasharray="7 4"/>
<g fill="none" stroke="var(--muted-text)" stroke-width="1"><path d="M190 122L250 120"/><path d="M200 184L232 222"/><path d="M204 70L250 54"/></g>
<text class="b" x="252" y="116">Inguinal</text><text x="252" y="130">above the</text><text x="252" y="144">ligament</text>
<text class="b" x="200" y="238">Low (Lockwood)</text><text x="200" y="252">below the</text><text x="200" y="266">ligament</text>
<text class="b" x="250" y="44">High</text><text x="250" y="58">(McEvedy)</text>
<text x="262" y="186">Pubic</text><text x="262" y="200">tubercle</text>
<text x="12" y="18">Anterior superior iliac spine</text>
</svg><figcaption>Right groin, the patient’s head to the top. The inguinal ligament runs from the iliac spine to the pubic tubercle. Inguinal incision above it; low femoral (Lockwood) below it over the lump; high (McEvedy) above the ligament at the lateral rectus edge when bowel may need resecting.</figcaption></figure>`,
anat:`<figure class="dg"><svg viewBox="0 0 340 280" role="img" aria-label="Right femoral canal and its boundaries, viewed from the front">
<g fill="none" stroke="var(--muted-text)" stroke-width="1.5">
<path d="M10 40C100 50 190 70 270 110"/>
<path d="M272 110C290 124 300 140 304 160"/>
<path d="M160 190C200 186 250 178 300 166"/>
<path d="M272 112C262 140 260 160 266 180"/>
</g>
<ellipse cx="226" cy="128" rx="18" ry="22" fill="var(--surface-high)" stroke="var(--text)" stroke-width="1.5"/>
<ellipse cx="180" cy="122" rx="16" ry="20" fill="none" stroke="var(--muted-text)" stroke-width="1.5"/>
<ellipse cx="140" cy="116" rx="10" ry="14" fill="none" stroke="var(--muted-text)" stroke-width="1.5"/>
<circle cx="250" cy="140" r="10" fill="none" stroke="var(--accent-text)" stroke-width="2" stroke-dasharray="3 2"/>
<path d="M270 136C278 150 280 164 278 176" fill="none" stroke="var(--text)" stroke-width="1.5" stroke-dasharray="2 3"/>
<path d="M262 150L286 150" stroke="var(--accent-text)" stroke-width="2.5" stroke-linecap="round"/>
<path d="M100 40C110 56 118 70 120 84" fill="none" stroke="var(--text)" stroke-width="1.25"/>
<circle cx="92" cy="96" r="12" fill="none" stroke="var(--muted-text)" stroke-width="1.5" stroke-dasharray="3 2"/>
<g fill="none" stroke="var(--muted-text)" stroke-width="1"><path d="M226 150L214 214"/><path d="M180 142L162 214"/><path d="M140 130L110 214"/><path d="M250 128L262 72"/><path d="M286 150L318 200"/><path d="M92 108L60 150"/><path d="M118 70L150 30"/><path d="M164 190L112 206"/></g>
<text x="12" y="34">Inguinal ligament</text>
<text class="b" x="196" y="230">Femoral vein</text><text x="140" y="246">Artery</text><text x="84" y="230">Nerve</text>
<text class="b" x="262" y="66">Femoral canal</text>
<text class="b" x="300" y="214" text-anchor="middle">Divide</text><text x="300" y="228" text-anchor="middle">lacunar</text><text x="300" y="242" text-anchor="middle">ligament</text>
<text x="12" y="164">Deep ring:</text><text x="12" y="178">release</text><text x="12" y="192">laterally</text>
<text x="154" y="24">Inferior epigastric</text>
<text x="12" y="212">Pectineal ligament</text>
</svg><figcaption>Right side, anterior view; medial is to your right. The femoral canal lies medial to the vein, under the inguinal ligament and above the pectineal ligament. Release a femoral neck by dividing the lacunar ligament medially; the dotted line is where a corona mortis would cross. Release a tight deep ring laterally, away from the inferior epigastric vessels.</figcaption></figure>`}
});
