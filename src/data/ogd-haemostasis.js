P.push({
id:'ogd-haemostasis', team:'EGI', name:'OGD and endoscopic haemostasis', aka:'ogd egd gastroscopy upper endoscopy ugib upper gi bleed haematemesis melaena forrest clip adrenaline heater probe hemospray tc-325 otsc',
system:'Endoscopy', list:'both', approach:'Endoscopic',
aim:'See everything from cricopharyngeus to D2, find the lesion, grade it, and leave nothing that will rebleed.',
status:'Draft 0.1 · 18/11/2026 · sourced, not yet tested by you in the endoscopy room',
houseTitle:'Practice and evidence', houseLead:'What the guidelines and the Hong Kong trials say, for the questions that come up on every bleed.', houseHead:['Question','Practice','Evidence'],

steps:[
{t:'Checks', how:'Indication, consent, fasting, antithrombotics noted. In a bleed: resuscitated first, Glasgow-Blatchford score recorded, PPI started, erythromycin 250 mg IV 30–120 minutes before if bleeding is active or severe. Time-out.', why:'Erythromycin empties the stomach of blood, so you can see. An unstable patient is scoped in theatre with an anaesthetist, not in the endoscopy room.', tip:'Check the QTc before erythromycin.'},
{t:'Position and sedation', how:'Left lateral, neck slightly flexed, mouth guard in. Sedation as planned, with oxygen and continuous saturation monitoring. Suction working before the scope goes in.', why:'Left lateral lets secretions drain out of the mouth instead of into the airway. A patient vomiting blood who cannot protect the airway is intubated first.'},
{t:'Intubate', how:'Pass the scope over the tongue in the midline under direct vision, to the upper oesophageal sphincter. Advance gently as the patient swallows.', why:'Blind pushing finds the piriform fossa, the commonest site of perforation in diagnostic endoscopy.', tip:'Ask the patient to swallow as the tip reaches the sphincter. It opens for a second; that is when you advance.'},
{t:'Oesophagus', how:'Insufflate and examine on the way down. Note the Z-line and the diaphragmatic pinch as distances from the incisors. Look for varices.', why:'Varices change the whole pathway: vasoactive drug, antibiotics, banding. Know before you treat anything else.'},
{t:'Stomach and duodenum', how:'Suck the pool, look at the antrum and pylorus, enter D1 and inspect its anterior and posterior walls, then turn right and advance into D2.', why:'Posterior D1 is where the gastroduodenal artery ulcers are; the ampulla on the medial wall of D2 marks the end of the examination.', tip:'In a bleed, clot lies in the fundus with the patient on the left side. Examine the lesser curve, antrum and duodenum first, then tilt the patient to move the clot.'},
{t:'Retroflex', how:'Back in the antrum, retroflex and look at the angulus, lesser curve, cardia and fundus. Straighten and withdraw.', why:'The cardia, the fundus and the high lesser curve are blind spots in the forward view, and that is where Dieulafoy lesions and Cameron erosions hide.'},
{t:'Grade the lesion', how:'Size, site and Forrest class. Treat Ia, Ib and IIa. For IIb, lift the clot and treat what is beneath. No endotherapy for IIc or III.', why:'Treatment is decided by the risk of rebleeding, which the Forrest class predicts.'},
{t:'Haemostasis', how:'Adrenaline 1:10,000 injected around the vessel to slow it, then a second definitive method: clips on the vessel, or a contact thermal probe with firm pressure. Never adrenaline alone.', why:'Dual therapy rebleeds less than injection alone (WSES 2020, 2B). Adrenaline works by tamponade and vasoconstriction, and both wear off.', tip:'Before pushing a device out, advance the catheter once to see where in the image it emerges, and bring the lesion to that spot.'},
{t:'Escalate if needed', how:'Over-the-scope clip for a large ulcer, a large vessel or rebleeding. Haemostatic powder (TC-325) for diffuse or refractory bleeding, as a bridge.', why:'Ulcers over 2 cm, vessels over 2 mm and posterior D1 ulcers fail standard therapy more often. Powder buys time; it does not treat the vessel.'},
{t:'Biopsy', how:'Antral and body biopsies for H. pylori. Biopsy the edge of any gastric ulcer once bleeding has stopped, or plan a repeat endoscopy.', why:'A negative test during a bleed is often false. Every gastric ulcer is a possible cancer until histology says otherwise.'},
{t:'Withdraw', how:'Suck out the air from the stomach and re-inspect the oesophagus on the way out. Photograph the landmarks and the treated lesion.', why:'A distended stomach is uncomfortable and makes vomiting and aspiration more likely in recovery.'}
],
house:[
['How soon?','Within 24 hours of presentation, after resuscitation','High-risk patients within 12 hours (WSES 2020, 1C). Prince of Wales trial in Glasgow-Blatchford 12 or more: endoscopy within 6 hours was not better (30-day death 8.9% against 6.6%).'],
['PPI before endoscopy?','Start it, but do not let it delay the scope','Start as soon as possible (WSES 2B). Prince of Wales trial: reduced the need for endotherapy from 28% to 19%, without changing rebleeding, surgery or death.'],
['Erythromycin?','Before endoscopy in active or severe bleeding','Recommended (WSES 2B).'],
['Which method?','Two methods for active bleeding or a visible vessel','Dual-modality haemostasis (WSES 2B). Adrenaline is never enough alone (ESGE 2021).'],
['Haemostatic powder?','Refractory bleeding, as a bridge','ESGE limits it to refractory bleeding; ACG allows it for active bleeding. Hong Kong-led trial: 30-day control 90% against 81% with standard therapy.'],
['After haemostasis?','High-dose PPI for 72 hours','Recommended (WSES 2B). Prince of Wales trial: 30-day rebleeding 6.7% against 22.5% without it.'],
['Second look?','Only if it rebleeds','Not routine (ESGE 2021).']
],

anatomy:{
points:[
'Distances from the incisors: cricopharyngeus at about 15 cm, the aortic arch and left main bronchus at about 25 cm, the diaphragm and oesophagogastric junction at about 40 cm.',
'Oesophagogastric junction: the top of the gastric folds. The Z-line is the squamocolumnar junction; the diaphragmatic pinch is the hiatus. A gap between pinch and junction is a hiatus hernia.',
'Stomach: the fundus and cardia are seen properly only in retroflexion. The angulus is best seen in retroflexion or on the way out.',
'D1: the bulb, with anterior and posterior walls. At the superior duodenal angle the scope turns right and down into D2, where the ampulla sits on the medial wall.',
'Bleeding sources by site: posterior D1, gastroduodenal artery; lesser curve, left gastric branches; high lesser curve, Dieulafoy lesion; oesophagogastric junction, Mallory–Weiss tear; hiatus hernia, Cameron erosions.'
],
table:{title:'Forrest classification', head:['Class','Appearance','Rebleed risk','Action'], num:2, rows:[
['Ia','Spurting','Over 50%','Treat'],
['Ib','Oozing','Over 50%','Treat'],
['IIa','Non-bleeding visible vessel','Over 40%','Treat'],
['IIb','Adherent clot','Over 20%','Lift and treat beneath'],
['IIc','Flat pigmented spot','Low','No endotherapy'],
['III','Clean base','Low','No endotherapy']
]},
danger:[
'Piriform fossa: perforation from blind intubation.',
'Thin-walled D1 and a deep ulcer base: perforation from repeated thermal treatment. Two of 48 patients retreated endoscopically in the Prince of Wales trial perforated.',
'Airway: aspiration of blood in the sedated patient.',
'Over-sedation: the elderly, the hypovolaemic, and anyone with liver disease.'
]
},

pitfalls:[
{t:'Cannot see for blood', a:'Erythromycin beforehand; a large-channel scope; a water pump.', r:'Reposition the patient, irrigate and suction. No view and still bleeding: CT angiography, radiology or surgery. Call.'},
{t:'Adherent clot', a:'Pre-inject adrenaline around the clot base.', r:'Lift it with irrigation or a cold snare and treat the vessel beneath. If it cannot be lifted, high-dose PPI.'},
{t:'Bleeding gets worse after treatment', a:'Clip or probe placed squarely on the vessel, not beside it.', r:'More adrenaline to slow it, then clips or an over-the-scope clip; powder as a bridge. Call the surgeon and radiology while you work.'},
{t:'Large posterior D1 ulcer', a:'Over 2 cm, or a vessel over 2 mm, predicts failure.', r:'Consider an over-the-scope clip first. Warn the surgeon and radiology early, before it rebleeds.'},
{t:'Lesion missed', a:'Retroflex every time; enter D2 every time.', r:'Negative endoscopy with ongoing bleeding: repeat it, or CT angiography.'},
{t:'Varices', a:'Look at the oesophagus and cardia first; look for liver stigmata before you start.', r:'Band ligation; vasoactive drug and antibiotics if not already given. A different pathway: call.'},
{t:'Perforation', a:'Gentle intubation; restraint with thermal treatment in a thin wall.', r:'Sudden loss of view, distension or surgical emphysema. Close a small defect with clips, minimise insufflation, call the surgeon, CT, nil by mouth.'},
{t:'Over-sedation', a:'Titrate slowly; lower doses in the elderly.', r:'Stop, support the airway and oxygenate. Flumazenil or naloxone. Abandon the procedure if needed.'},
{t:'Negative H. pylori test in a bleed', a:'Biopsy as well as rapid urease testing.', r:'Treat a negative result as provisional; retest later.'}
],
call:['Active bleeding not controlled after two methods','Large posterior D1 ulcer, or a vessel over 2 mm','Unstable during the procedure','Suspected perforation','Varices when not set up for them','No view, and still bleeding'],

setup:{
theatre:['Left lateral on a trolley that tilts; mouth guard','Oxygen, suction ready, continuous saturation and blood pressure monitoring','Anaesthetist for the unstable patient, active haematemesis or a threatened airway','Reversal agents drawn up'],
kit:['Gastroscope; a large-channel therapeutic scope for a bleed','Water pump and two suction lines','Injection needle with adrenaline 1:10,000','Through-the-scope clips','Heater probe or bipolar probe','Biopsy forceps, rapid urease test, specimen pots','Transparent cap'],
standby:['Over-the-scope clip','Haemostatic powder (TC-325)','Band ligator','Balloon tamponade tube','Flumazenil and naloxone']
},

consent:{
note:`Consent for OGD, possible biopsy and endoscopic treatment of bleeding, under [[sedation]]
Indication explained: [[haematemesis and melaena, Glasgow-Blatchford score __]]
Nature of procedure explained: flexible camera passed through the mouth to examine the gullet, stomach and duodenum; biopsies; treatment of a bleeding point with injection, clips or heat
Alternatives discussed: [[none appropriate for active bleeding / CT for diagnosis]]
Benefits: diagnosis and treatment of bleeding, may avoid an operation
Sedation risks: drowsiness, slowed breathing, low oxygen, aspiration; no driving or signing documents for 24 hours
Specific risks: sore throat, bloating, injury to teeth or lips, bleeding particularly after biopsy or treatment, perforation which may need an operation, failure to stop bleeding needing repeat endoscopy, embolisation or surgery, a lesion may be missed, heart or lung complications
Risks as charted in consent form acknowledged
Patient showed good understanding, questions answered
Consent signed`,
figures:[
['Heart and lung complications, mostly from sedation','1 in 170 to 1 in 10,000','ASGE 2012'],
['Death after upper endoscopy','1 in 10,000','ASGE 2012, 140,000 procedures'],
['Bleeding after diagnostic OGD','About 0.1%','ASGE'],
['Perforation','0.01–0.7%','ASGE, diagnostic to therapeutic'],
['Initial haemostasis achieved','98.6%','Prince of Wales, 1,144 ulcers'],
['Rebleeding after endoscopic haemostasis','8.2%','Prince of Wales'],
['Rebleeding at 30 days with high-dose PPI after treatment','6.7%','Lau 2000, against 22.5% without']
],
versus:'For a diagnostic OGD under sedation, the sedation carries most of the risk. For a bleed, the risk of not scoping is far larger than the risk of scoping.'
},

notes:{
findings:`[[Oesophagus: normal, no varices]]
[[OGJ at 40 cm, Z-line regular, no hiatus hernia]]
[[Stomach: altered blood in fundus, no lesion on retroflexion]]
[[D1: 1.5 cm ulcer on posterior wall with non-bleeding visible vessel (Forrest IIa)]]
[[D2: normal]]`,
procedure:`[[Left lateral position, IV midazolam __ mg and pethidine __ mg]], SpO2 monitored, O2 via nasal cannula
Mouth guard inserted, scope passed under direct vision
Oesophagus, stomach and duodenum examined [[to D2]], retroflexion performed
Findings as above
[[Adrenaline 1:10,000 injected around vessel, total __ ml]]
[[Haemoclips x__ applied to visible vessel]]
{{Haemostasis achieved, no bleeding on observation}}
[[Antral and body biopsies taken for rapid urease test and histology]]
Stomach decompressed on withdrawal
{{Patient tolerated procedure, vital signs stable}}`,
decisions:[
['Adherent clot lifted','Adherent clot pre-injected with adrenaline and removed with [[cold snare]], [[visible vessel]] beneath treated with [[haemoclips x2]]'],
['No treatment needed','[[Clean-based ulcer (Forrest III)]], low risk of rebleeding, no endoscopic treatment required'],
['Gastric ulcer biopsied','Edge of [[incisural]] gastric ulcer biopsied x[[4]] to exclude malignancy'],
['Biopsy deferred','Biopsy deferred in view of [[active bleeding]], for repeat OGD in 6 to 8 weeks']
],
deviations:[
['Haemostasis not achieved',`Persistent [[spurting]] despite adrenaline injection and haemoclips x[[__]]
[[TC-325 haemostatic powder applied as bridge]]
Surgeon and interventional radiologist informed
Senior kindly attended`],
['View obscured',`Large amount of fresh blood and clot in stomach, view obscured
[[Patient repositioned, irrigation and suction performed]]
Bleeding source not identified
For [[CT angiography]]`],
['Perforation',`Perforation [[__ mm]] at [[D1]] recognised during [[thermal treatment]]
Closed with [[through-the-scope clips x__]], insufflation minimised
Surgeon informed, for CT and NPO`],
['Varices found',`[[Grade __]] varices at distal oesophagus with [[stigmata of recent bleeding]]
Band ligation x[[__]] applied
[[Terlipressin and IV ceftriaxone started]]`],
['Suspicious lesion',`[[Ulcerated mass at __]]
Biopsies x[[6]] taken
[[Tattoo placed]]`],
['Procedure abandoned',`Procedure abandoned in view of [[desaturation / agitation]], scope withdrawn
Anaesthetist informed`]
],
postop:`[[NPO 4 hours, then DAT]]
[[BP/P Q1H x4 then Q4H]]
[[IV PPI 80 mg bolus then 8 mg/h for 72h]]
CBC [[Q12H x 48h]]
Transfuse to Hb [[70 to 90 g/L]]
Inform if haematemesis, fresh melaena, P > 100, SBP < 100 or Hb drop > 20 g/L
Hold [[antithrombotics]], plan restart D[[__]]
No second-look OGD unless rebleeding
Trace rapid urease test and histology`,
discharge:`Oral PPI BD [[to D14]], then daily for [[__ weeks]]
H. pylori eradication if positive, test of cure afterwards
[[Repeat OGD at 6 to 8 weeks for gastric ulcer]]
Restart [[aspirin]] at D[[3 to 5]], with PPI
Avoid NSAIDs
FU [[surgical clinic]] [[4 to 6 weeks]]
To return if black stools, vomiting blood or dizziness`
},

viva:[
['Give the Forrest classification and what you do with each.','Ia spurting and Ib oozing: treat. IIa non-bleeding visible vessel: treat. IIb adherent clot: lift it and treat beneath, or give high-dose PPI if it will not lift. IIc flat pigmented spot and III clean base: no endotherapy. Untreated rebleeding runs over 50% for class I, over 40% for IIa and over 20% for IIb.'],
['Glasgow-Blatchford or Rockall?','Glasgow-Blatchford before endoscopy, to decide who needs intervention: urea, haemoglobin, systolic pressure, pulse, melaena, syncope, liver disease and heart failure. A score of 0 or 1 can go home for outpatient endoscopy. The full Rockall needs the endoscopic findings and predicts rebleeding and death; AIMS65 predicts death.'],
['How quickly should a bleed be scoped?','Within 24 hours of presentation, once resuscitated. Lau’s Prince of Wales trial (NEJM 2020) randomised high-risk patients, Glasgow-Blatchford 12 or more, to endoscopy within 6 hours or at 6–24 hours: 30-day mortality was 8.9% against 6.6%, not significantly different. Earlier is not better if it means scoping an unresuscitated patient.'],
['Why not adrenaline alone?','It works by volume tamponade and vasoconstriction, and both wear off. Adding a second method, clips or contact thermal, reduces rebleeding, surgery and death compared with injection alone. A single method that treats the vessel itself is comparable to dual therapy.'],
['It rebleeds the next day. What now?','Repeat the endoscopy: in Lau’s 1999 trial it gave lasting control in 73%, with fewer complications than surgery. Shock at rebleeding and ulcers over 2 cm predicted failure; involve the surgeon and radiology early in those. If the second endoscopy fails: embolisation where available, otherwise surgery.'],
['The varices are bleeding. What changes?','Vasoactive drug (terlipressin, somatostatin or octreotide) for 2–5 days and ceftriaxone before endoscopy, band ligation within 12 hours, a restrictive transfusion target of 70–80 g/L, no tranexamic acid, and consideration of TIPS for high-risk or refractory bleeding (Baveno VII).'],
['A patient on aspirin for a coronary stent has a treated ulcer. Do you stop it?','Continue it, or restart within three to five days, with a PPI. Sung’s Prince of Wales trial: continuing aspirin doubled 30-day rebleeding (10.3% against 5.4%) but cut 8-week mortality from 12.9% to 1.3%. Dual antiplatelets: keep the aspirin, restart the second agent within five days.']
],

sources:{
steps:[
'Your handbook UGI-02 Upper GI bleed and UGI-03 Peptic ulcer bleed, v0.2.',
'Gralnek IM et al. Endoscopic diagnosis and management of nonvariceal upper gastrointestinal hemorrhage: ESGE guideline update 2021. Endoscopy 2021;53:300–332.',
'<a href="https://doi.org/10.1186/s13017-019-0283-9">Tarasconi A et al. WSES guidelines 2020</a>: timing, erythromycin, PPI, dual-modality haemostasis.',
'Senior notes: Deon’s notes, non-variceal upper GI bleed (positioning and clot); Billy notes, endoscopy.',
'Tips marked with a lamp are craft points. Treat them as unverified until you have tried them.'],
anatomy:[
'Senior notes: Billy notes, upper GI (distances from the incisors); Deon’s notes, non-variceal upper GI bleed (Forrest rebleeding rates).',
'Your handbook UGI-03.'],
pitfalls:[
'Your handbook UGI-02 and UGI-03 (over-the-scope clip criteria, varices pathway, false-negative H. pylori tests).',
'<a href="https://www.qxmd.com/r/10072409">Lau JY et al. N Engl J Med 1999;340:751–756</a>: perforation with thermal retreatment.'],
setup:['Your handbook UGI-02 and UGI-03; senior notes, Deon’s notes, non-variceal upper GI bleed.'],
consent:[
'<a href="https://www.asge.org/home/resources/publications/guidelines/practice-guidelines/adverse-events-of-upper-gi-endoscopy">ASGE Standards of Practice Committee. Adverse events of upper GI endoscopy. Gastrointest Endosc 2012;76:707–718</a>.',
'<a href="https://learn.asge.org/AssetListing/Improving-Quality-and-Safety-in-the-Endoscopy-Unit-On-Demand-3790/ASGE-Adverse-Events-EGD-30421">ASGE course summary of adverse events of EGD</a>: bleeding and perforation ranges.',
'<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC1773129">Wong SK et al. Gut 2002;50:322–325</a>: initial haemostasis and rebleeding.',
'Lau JY et al. Effect of intravenous omeprazole on recurrent bleeding after endoscopic treatment of bleeding peptic ulcers. N Engl J Med 2000;343:310–316.'],
notes:['Endoscopy report in house style. The orders use common HA short forms. PPI and transfusion targets from your handbook UGI-02 and UGI-03.'],
viva:[
'Lau JYW et al. Timing of endoscopy for acute upper gastrointestinal bleeding. N Engl J Med 2020;382:1299–1308.',
'Lau JY et al. N Engl J Med 1999; Sung JJ et al. Ann Intern Med 2010;152:1–9.',
'de Franchis R et al. Baveno VII. J Hepatol 2022;76:959–974. Blatchford O et al. Lancet 2000;356:1318–1321.']
},

dg:{
anat:`<figure class="dg"><svg viewBox="0 0 340 330" role="img" aria-label="Upper GI landmarks for endoscopy, with distances from the incisors and common bleeding sites">
<g fill="none" stroke="var(--muted-text)" stroke-width="1.5">
<path d="M150 10V172M166 10V170"/>
<path d="M166 170C176 150 210 136 240 146C290 160 312 214 300 256C290 292 250 306 210 300C176 296 150 290 128 282L112 278"/>
<path d="M150 172C150 214 162 236 190 240C168 244 140 252 120 262L112 262"/>
<path d="M112 262H80C62 262 56 272 56 290V324M112 278H84C74 278 70 284 70 292V324"/>
</g>
<path d="M112 258V282" stroke="var(--text)" stroke-width="3"/>
<g stroke="var(--muted-text)" stroke-width="1"><path d="M144 40H172M144 96H172M144 166H172"/></g>
<g fill="var(--accent-text)"><circle cx="158" cy="172" r="4.5"/><circle cx="154" cy="200" r="4.5"/><circle cx="186" cy="238" r="4.5"/><circle cx="96" cy="270" r="4.5"/></g>
<g font-weight="600" fill="var(--text)"><text x="170" y="186">1</text><text x="164" y="204">2</text><text x="194" y="230">3</text><text x="78" y="275">4</text></g>
<circle cx="70" cy="306" r="2.5" fill="var(--text)"/>
<text class="b" x="138" y="44" text-anchor="end">15 cm</text><text x="138" y="58" text-anchor="end">Cricopharyngeus</text>
<text class="b" x="138" y="100" text-anchor="end">25 cm</text><text x="138" y="114" text-anchor="end">Aortic arch</text>
<text class="b" x="138" y="164" text-anchor="end">40 cm</text><text x="138" y="178" text-anchor="end">OGJ</text>
<text x="176" y="26">Oesophagus</text>
<text class="b" x="226" y="176">Fundus</text>
<text class="b" x="246" y="240">Body</text>
<text x="156" y="278">Antrum</text>
<text x="118" y="304" text-anchor="middle">Pylorus</text>
<text class="b" x="96" y="254" text-anchor="middle">D1</text>
<text class="b" x="50" y="300" text-anchor="end">D2</text>
<text x="76" y="320">Ampulla</text>
</svg><figcaption>Schematic, not to scale; distances from the incisors. Where the common lesions bleed: <b>1</b> Mallory–Weiss tear at the oesophagogastric junction. <b>2</b> Dieulafoy lesion, high on the lesser curve. <b>3</b> Lesser-curve ulcer at the angulus, from left gastric branches. <b>4</b> Posterior D1 ulcer, from the gastroduodenal artery. The fundus and cardia are seen properly only in retroflexion.</figcaption></figure>`}
});
