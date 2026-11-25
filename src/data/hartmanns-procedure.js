P.push({
id:'hartmanns-procedure', team:'CRS', name:'Hartmann’s procedure', aka:'hartmann hartmanns sigmoid colectomy end colostomy perforated diverticulitis hinchey faecal peritonitis purulent obstructing left colon cancer large bowel obstruction rectal stump',
system:'Colorectal and small bowel', list:'emergency', approach:'Open, after diagnostic laparoscopy',
aim:'Remove the diseased left colon, close the rectum and bring out an end colostomy. It controls sepsis or obstruction without an anastomosis in a patient who could not survive a leak.',
status:'Draft 0.1 · 19/11/2026 · sourced, not yet tested by you in theatre',
houseHead:['Step','House','Guideline and trials'],

steps:[
{t:'Checks and position', how:'WHO checklist. Rapid-sequence induction. Modified Lloyd-Davies position. Urinary catheter. Antibiotics running. Stoma site marked on the left beforehand if time allows.', why:'Lloyd-Davies gives access to the anus for a rectal washout. A marked site through rectus, away from creases, makes a stoma the patient can manage.'},
{t:'Diagnostic laparoscopy', how:'Subumbilical incision, linea alba split, open entry. Confirm the diagnosis and grade it.', why:'Confirms the source and the Hinchey grade before committing to a laparotomy. House practice is to convert once confirmed.'},
{t:'Laparotomy and decontamination', how:'Midline laparotomy. Findings recorded. Initial decontamination with warm saline.', why:'Removing gross contamination first makes the dissection cleaner and the field visible.'},
{t:'Mobilise the left colon', how:'Lateral approach: incise along the white line of Toldt and lift the colon off Gerota’s fascia. Identify the left ureter and protect it.', why:'The ureter crosses the iliac bifurcation under the sigmoid mesocolon. Seen early, it is safe; assumed, it is cut.', tip:'If the inflamed mesocolon hides the ureter, find it higher on the psoas, above the inflammation, and follow it down.'},
{t:'Divide the mesocolon', how:'House: control the mesocolon between silk ligatures and divide it. For cancer, ligate the inferior mesenteric or the sigmoid and left colic vessels at their origin.', why:'Close to the bowel is enough for diverticular disease. An emergency cancer operation should still be an oncological one where the patient allows.'},
{t:'Down to the upper rectum', how:'Dissect the mesorectum down to the sacral promontory. Find where the taeniae splay out: that is the rectum.', why:'Leaving sigmoid colon in the stump risks recurrent diverticulitis and a harder reversal.', tip:'Keep in the plane in front of the hypogastric nerves at the promontory; they lie on the presacral fascia.'},
{t:'Rectal washout', how:'House: wash out the rectum with Betadine through the anus before dividing it.', why:'Clears faeces and, in cancer, exfoliated cells from the stump.'},
{t:'Divide', how:'Proximal transection at the distal descending colon with a linear cutter (house: TLC 55). Distal transection at the upper rectum with a linear stapler (house: TA 30). Reinforce the rectal stump with continuous 3-0 PDS.', why:'A reinforced stump is less likely to leak into the pelvis.', tip:'A long non-absorbable stitch on each corner of the stump makes it easier to find at reversal.'},
{t:'Wash out and drain', how:'Haemostasis. Irrigate with warm saline until clear (house: 10 L total); suck dry. Two tube drains: left lower quadrant to the left paracolic gutter, right lower quadrant to the pouch of Douglas, anchored with 2-0 Nylon.', why:'The pelvis and gutters collect residual pus.'},
{t:'Bring out the colon', how:'Trephine through rectus on the left at the marked site. Bring the descending colon through without tension and without twisting.', why:'Tension causes retraction; a tight trephine causes ischaemia. Check the colour of the end before closing.'},
{t:'Close and mature', how:'Mass closure (house: PDS loop). Skin staples and dressing. Then open and mature the end colostomy with 3-0 Vicryl and apply the bag.', why:'Maturing the stoma after the wound is sealed keeps the colostomy contents off the incision.'}
],
house:[
['Perforated diverticulitis, stable','Hartmann’s','LADIES: in stable, immunocompetent patients under 85, primary anastomosis (with or without a defunctioning ileostomy) gave better 12-month stoma-free survival, 94.6% against 71.7%.'],
['Critically ill or many comorbidities','Hartmann’s','WSES 2020: Hartmann’s for critically ill patients or those with multiple comorbidities; damage control (resect, staple the ends, relook) if unstable.'],
['Purulent peritonitis, laparoscopic lavage','Not house practice','Selected Hinchey III patients only; more reinterventions than resection. ASCRS does not regard it as a routine alternative.'],
['Obstructing left colon cancer','Hartmann’s','WSES 2018 obstruction guideline: Hartmann’s for high-risk patients; resection with primary anastomosis, with or without a stoma, for low-risk; a stent as a bridge to surgery is an option.'],
['Mesentery','Ligated in silk close to bowel','Diverticular disease: no need for high ligation. Cancer: ligate at the origin for an oncological resection.'],
['Distal margin','Upper rectum','Resect to where the taeniae splay to reduce recurrence after diverticulitis.'],
['Drains','Two tube drains','No evidence for routine drains in this setting.']
],

anatomy:{
points:[
'White line of Toldt: the peritoneal reflection along the lateral colon. Behind it, Toldt’s fascia separates the mesocolon from Gerota’s fascia; stay on the colon side.',
'Left ureter: crosses the bifurcation of the common iliac artery at the pelvic brim, beneath the root of the sigmoid mesocolon. The gonadal vessels lie lateral to it.',
'Inferior mesenteric artery: arises from the aorta at L3, gives the left colic and sigmoid arteries, and continues as the superior rectal. The inferior mesenteric vein runs separately, lateral to the artery, towards the DJ flexure.',
'Rectosigmoid junction: the taeniae coli spread into a continuous longitudinal muscle coat, at about the level of the sacral promontory.',
'Marginal artery: supplies the proximal end once the mesentery is divided. Pulsatile bleeding from the cut edge before it goes through the trephine is reassuring.',
'Stoma site: through the rectus, in the left iliac fossa below the umbilicus, away from scars, creases and the belt line.'
],
table:{title:'Hinchey classification, modified', head:['Grade','Finding','Usual management'], rows:[
['0','Mild clinical diverticulitis','Antibiotics or none'],
['Ia','Pericolic inflammation or phlegmon','Antibiotics'],
['Ib','Pericolic abscess','Antibiotics; drain if large'],
['II','Pelvic, distant or retroperitoneal abscess','Percutaneous drainage'],
['III','Generalised purulent peritonitis','Resection: Hartmann’s or primary anastomosis'],
['IV','Faecal peritonitis','Resection; Hartmann’s if unstable']
]},
danger:[
'Left ureter and gonadal vessels: at the pelvic brim, under the sigmoid mesocolon.',
'Hypogastric nerves: on the presacral fascia at the promontory; injury causes ejaculatory and bladder dysfunction.',
'Presacral veins: if the dissection goes behind the mesorectal fascia.',
'Spleen: if the splenic flexure has to be mobilised to reach the trephine.',
'Rectal stump: left on inflamed sigmoid, or too long, it leaks.'
]
},

pitfalls:[
{t:'Ureteric injury', a:'Find the ureter before dividing anything at the brim.', r:'Recognised on the table: call urology for repair over a stent. Suspected afterwards: CT urogram.'},
{t:'Rectal stump leak or pelvic abscess', a:'Divide on healthy upper rectum; reinforce the stump; drain the pelvis.', r:'Pelvic collection: percutaneous or transanal drainage, antibiotics. Frank stump dehiscence with sepsis: relook.'},
{t:'Stoma ischaemia', a:'Preserve the marginal artery; adequate trephine; no tension.', r:'Dusky end before closing: refashion now. Ischaemia below the fascia after the operation: back to theatre.'},
{t:'Stoma will not reach', a:'Mobilise early in obese patients with short mesenteries.', r:'Mobilise the splenic flexure; divide the inferior mesenteric vein near the DJ flexure; consider an end-loop colostomy.'},
{t:'Cancer found where diverticulitis was expected', a:'Look at the specimen and the mesentery before ligating close to the bowel.', r:'Suspicious mass: resect with an oncological mesenteric division if the patient allows. Call.'},
{t:'Unstable on the table', a:'Recognise acidosis, hypothermia and rising vasopressors early.', r:'Damage control: resect, staple both ends, leave in discontinuity, temporary abdominal closure, relook in 24–48 hours. Call.'},
{t:'Colovesical or colovaginal fistula', a:'Check the pelvis for adherent bladder or vagina.', r:'Pinch the colon off; repair the bladder defect in two layers and leave a catheter for 7–10 days. Call.'}
],
call:['Ureter not identified','Suspected cancer','Unstable or deteriorating physiology','A fistula to bladder or vagina','The stoma will not reach','Uncontrolled bleeding in the pelvis'],

setup:{
theatre:['Modified Lloyd-Davies, arms out','Urinary catheter','Stoma site marked on the left','Surgeon on the patient’s right, assistant opposite'],
kit:['Laparoscope and open-entry port for the diagnostic laparoscopy','Laparotomy set with self-retaining retractor','Linear cutter 55 mm (house: TLC 55) and linear stapler 30 mm (house: TA 30)','2-0 silk ties, 3-0 PDS, 3-0 Vicryl','Rectal catheter and Betadine for the washout','Warm saline, 10 L','Two tube drains, 2-0 Nylon','PDS loop, skin stapler, stoma bag'],
standby:['Ureteric stents, if the pelvis is very inflamed','Negative pressure dressing for temporary closure','Circular stapler, if a primary anastomosis is chosen instead']
},

consent:{
note:`Consent for Hartmann's operation (sigmoid colectomy and end colostomy), possible open operation
Diagnosis and indication explained: [[perforated sigmoid diverticulitis with generalised peritonitis / obstructing tumour at descending-sigmoid junction]]
Nature of operation explained: keyhole look then open operation under general anaesthesia to remove the diseased bowel, close the rectum and bring the bowel out as a colostomy (bag) on the left of the abdomen; drains; possible temporary closure of abdomen and planned second operation if very unwell
Alternatives discussed: [[resection with join of bowel, with or without temporary ileostomy: not suitable in view of __]]; [[stent: not suitable in view of __]]; non-operative treatment, not appropriate with peritonitis
Benefits: control of infection or obstruction; life-saving
General risks: bleeding, wound infection, chest infection, deep vein thrombosis and pulmonary embolism, cardiac events
Anaesthetic risks in brief, including possible admission to intensive care; anaesthetist to discuss in detail
Specific risks: injury to ureter, bladder, spleen, small bowel or blood vessels, leak from rectal stump, intra-abdominal or pelvic collection, prolonged ileus, wound dehiscence, stoma complications including poor blood supply, retraction, prolapse, hernia and skin problems, sexual and bladder dysfunction
Colostomy may be reversed in a later operation, which carries its own risks; it may become permanent
Risk of death explained
Risks as charted in consent form acknowledged
Patient showed good understanding, questions answered
Consent signed`,
figures:[
['12-month stoma-free survival, primary anastomosis against Hartmann’s','94.6% against 71.7%','LADIES trial, Hinchey III–IV, stable patients'],
['Death within 30 days of Hartmann’s','7%','Single-centre audit, 228 patients'],
['Hartmann’s reversed','47%','Same audit; 46% stoma-free at the end of follow-up'],
['Complications after reversal','22.9–68.4%','Range in published series'],
['Death after reversal','0–4.7%','Range in published series']
],
versus:'Be honest about the stoma. Fewer than half are reversed in many series, mostly because patients are too unwell or decline. Quote “may be permanent”, not “temporary”.'
},

notes:{
findings:`[[3 cm obstructing ulcerative tumour at descending-sigmoid junction, causing closed loop obstruction]]
[[Grossly dilated and oedematous proximal colon, remained healthy]]
[[Caecum healthy]]
[[Remaining large bowel no palpable lesion]]
[[No palpable peritoneal or liver lesion]]
[[Shotty LN along IMA]]`,
procedure:`Modified Lloyd-Davies position, general anaesthesia, skin prepped and draped
Subumbilical incision, linea alba split, peritoneal cavity entered by {{open method}}
Diagnostic laparoscopy done, findings as above, decided to convert open
Midline laparotomy, peritoneal cavity entered
Findings as above
Initial decontamination with warm normal saline
Lateral approach, left colon mobilised along white line of Toldt
{{Left ureter identified and safeguarded}}
Mesocolon controlled between [[silk]] ligatures then divided
Dissection of mesorectum down to sacral promontory
Rectal washout with Betadine
Proximal transection at distal descending colon with [[TLC 55]], distal transection at upper rectum with [[TA 30]]
Rectal stump reinforced with [[3-0 PDS]] continuous
Haemostasis ensured
Irrigation with warm normal saline ([[10 L]] total), peritoneal fluid sucked dry
[[Tubal drain x2 inserted, one over LLQ to left paracolic gutter, another over RLQ to pouch of Douglas]], anchored with [[2-0 Nylon]]
Trephine incision over left side abdominal wall, descending colon brought out {{ensuring tension-free and correct orientation}}
Mass closure with [[PDS loop]]
Skin closed with staples, dressing
End colostomy matured with [[3-0 Vicryl]], {{stoma pink and healthy}}, stoma bag applied
{{Swab, needle and instrument counts correct}}`,
decisions:[
['Oncological ligation','[[IMA]] ligated and divided [[1 cm from origin]], [[IMV]] divided at lower border of pancreas, oncological mesocolic resection'],
['Splenic flexure mobilised','Splenic flexure mobilised to achieve tension-free colostomy, {{spleen intact}}'],
['Stump marked','Corners of rectal stump marked with [[2-0 Prolene]] long ends for later identification']
],
deviations:[
['Damage control',`Patient [[haemodynamically unstable with rising noradrenaline requirement]]
Senior kindly scrubbed in
Abbreviated surgery: [[sigmoid]] resected, both ends stapled and left in discontinuity
Temporary abdominal closure with [[negative pressure dressing]], for relook in [[24 to 48 h]]`],
['Primary anastomosis instead',`Patient stable, [[purulent peritonitis, healthy bowel ends]]
Senior kindly scrubbed in
Colorectal anastomosis with [[CDH 29]], {{air leak test negative}}, [[defunctioning loop ileostomy fashioned at RIF]]`],
['Ureteric injury',`[[Left ureter]] injured during [[mobilisation]]
Senior kindly scrubbed in, urology consulted intraoperatively
[[Repaired over JJ stent by urology]]`],
['Senior called',`Senior kindly scrubbed in at [[__:__]]
[[Dr __]] continued as chief surgeon`]
],
postop:`NPO, [[Ryle's tube on free drainage]]
IVF
IV Abx [[__]], review at D3 to D5
Analgesics regular and PRN
[[BP/P Q1H x4 then Q4H if stable]]
Strict I/O, inform if UO < 0.5 ml/kg/h
Chart drain output
Stoma check: colour Q4H for 24 h, inform if dusky or black
Stoma nurse referral
[[Sips POD1, fluids when stoma active]]
Chest physio, early mobilisation, DVT prophylaxis as assessed
Inform if T > 38, P > 100 or increasing pain`,
discharge:`Home when DAT, stoma functioning, managing bag, [[D6 to D10]]
Stoma care taught, stoma nurse FU
FU surgical clinic [[2 to 4 weeks]], trace histology
[[Refer oncology as per MDT]]
[[Colonoscopy of remaining colon at 6 to 8 weeks]]
[[Discuss reversal at 3 to 6 months if fit]]
SL [[__ days]]
To return if fever, abdominal pain, stoma dusky or not working`
},

viva:[
['Hinchey IV in a stable 60-year-old: Hartmann’s or primary anastomosis?','In a stable, immunocompetent patient, primary anastomosis with a defunctioning ileostomy. LADIES found better stoma-free survival at 12 months (94.6% against 71.7%) without more short-term harm, and reversing an ileostomy is a smaller operation. Hartmann’s if unstable, immunosuppressed, or the bowel or patient is poor.'],
['What about laparoscopic lavage?','For purulent (Hinchey III) peritonitis without a visible perforation, lavage avoids a stoma in many patients. The trials (LOLA, DILALA, SCANDIV) found more reinterventions and missed cancers, so it is for selected patients in experienced hands, not routine.'],
['An obstructing sigmoid cancer in a fit patient: options?','Resection with primary anastomosis, with or without a defunctioning stoma; Hartmann’s if high risk; a stent as a bridge to elective resection; or a defunctioning colostomy then neoadjuvant treatment or elective resection. Check the caecum: a closed loop with a competent ileocaecal valve threatens caecal perforation.'],
['Why mature the stoma after closing the wound?','The colostomy opens on to a contaminated field. Sealing the wound first keeps faeces off it and lowers wound infection.'],
['When and how do you reverse a Hartmann’s?','At 3–6 months, when the patient has recovered and the colon has been checked by colonoscopy or CT colonography. Contrast enema of the stump. Laparoscopic or open; mobilise the splenic flexure if needed; circular stapled colorectal anastomosis; consider a defunctioning ileostomy. Complications in 22.9–68.4% and death in 0–4.7% across series.'],
['What causes stomal necrosis, and what do you do?','Excess tension, a tight trephine, a mesentery stripped too far, or a twisted colon. Check depth with a test tube and a light inside the stoma: mucosal necrosis above the fascia can be watched; necrosis below the fascia needs re-fashioning.']
],

sources:{
steps:[
'House technique: senior’s CMS personal template “Hartmann’s Operation” (YO Templates).',
'Sartelli M et al. 2020 update of the WSES guidelines for the management of acute colonic diverticulitis in the emergency setting. World J Emerg Surg 2020;15:32.',
'Senior notes: Deon’s notes, diverticulitis; Derek’s notes, diverticular disease.',
'Tips marked with a lamp are craft points. Treat them as unverified until you have tried them.'],
anatomy:['Hinchey EJ et al. Adv Surg 1978;12:85–109; modified by Wasvary H et al. Am Surg 1999;65:632–635, as in Deon’s notes.'],
pitfalls:['WSES 2020 diverticulitis guideline, as above.','<a href="https://wjes.biomedcentral.com/articles/10.1186/s13017-018-0167-4">WSES open abdomen guideline 2018</a>.'],
setup:['House set-up: senior’s CMS template “Hartmann’s Operation”.'],
consent:[
'Lambrichts DPV et al. Hartmann’s procedure versus sigmoidectomy with primary anastomosis for perforated diverticulitis with purulent or faecal peritonitis (LADIES). Lancet Gastroenterol Hepatol 2019;4:599–610.',
'<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5958852">Hallam S et al. Hartmann’s procedure, reversal and rate of stoma-free survival. Ann R Coll Surg Engl 2018</a>.',
'<a href="https://doi.org/10.1038/s41598-020-73791-w">Analysis of factors affecting reversal of Hartmann’s procedure and post-reversal complications. Sci Rep 2020;10:16820</a>: ranges quoted from its review of series.'],
notes:['Wording follows the senior’s CMS personal template “Hartmann’s Operation”. Orders and discharge use common HA short forms.'],
viva:['LADIES and WSES 2020, as above.','Pisano M et al. 2017 WSES guidelines on colon and rectal cancer emergencies: obstruction and perforation. World J Emerg Surg 2018;13:36.','Derek’s notes, diverticular disease: laparoscopic lavage series.']
},

dg:{
setup:`<figure class="dg"><svg viewBox="0 0 340 300" role="img" aria-label="Theatre layout, incisions, stoma site and drain sites for Hartmann's procedure">
<g fill="none" stroke="var(--muted-text)" stroke-width="1.5"><circle cx="170" cy="24" r="14"/><path d="M122 44H218Q226 44 226 52V188Q226 196 218 196H122Q114 196 114 188V52Q114 44 122 44Z"/><path d="M136 196L108 288M204 196L232 288"/><circle cx="170" cy="118" r="3"/></g>
<path d="M170 70V176" stroke="var(--accent-text)" stroke-width="3" stroke-linecap="round"/>
<circle cx="204" cy="148" r="8" fill="none" stroke="var(--accent-text)" stroke-width="2"/>
<g fill="var(--muted-text)"><circle cx="138" cy="172" r="3.5"/><circle cx="210" cy="176" r="3.5"/></g>
<g fill="var(--surface-high)" stroke="var(--border)" stroke-width="1"><rect x="128" y="250" width="84" height="30" rx="4"/><rect x="12" y="130" width="84" height="30" rx="4"/><rect x="244" y="230" width="84" height="30" rx="4"/></g>
<text class="b" x="170" y="269" text-anchor="middle">Anus access</text><text class="b" x="54" y="149" text-anchor="middle">Surgeon</text><text class="b" x="286" y="249" text-anchor="middle">Assistant</text>
<g fill="none" stroke="var(--muted-text)" stroke-width="1"><path d="M212 148H244"/><path d="M164 100H76"/><path d="M134 176L110 200"/><path d="M214 180L238 206"/></g>
<text class="b" x="248" y="138">Colostomy,</text><text x="248" y="152">marked site</text><text x="248" y="166">through rectus</text>
<text x="12" y="78">Port below</text><text x="12" y="92">umbilicus,</text><text x="12" y="106">then midline</text>
<text x="40" y="214">RLQ drain</text><text x="238" y="220">LLQ drain</text>
</svg><figcaption>Modified Lloyd-Davies. Diagnostic laparoscopy through a subumbilical open port, then midline laparotomy. The colostomy goes through the marked site in the left iliac fossa; drains exit in both lower quadrants.</figcaption></figure>`,
anat:`<figure class="dg"><svg viewBox="0 0 340 300" role="img" aria-label="Hartmann's procedure: left colon resected, rectal stump closed at the upper rectum, end colostomy from the descending colon">
<g fill="none" stroke-linecap="round" stroke-linejoin="round">
<path d="M266 10V120C266 150 250 168 224 176C196 184 196 214 214 226C232 238 214 258 190 262C172 264 168 280 168 296" stroke="var(--muted-text)" stroke-width="26"/>
<path d="M266 10V120C266 150 250 168 224 176C196 184 196 214 214 226C232 238 214 258 190 262C172 264 168 280 168 296" stroke="var(--surface)" stroke-width="22"/>
</g>
<path d="M170 34V150" stroke="var(--muted-text)" stroke-width="6" stroke-linecap="round"/>
<path d="M170 112C190 110 214 112 240 124M196 112C210 130 216 160 222 176M206 120C226 150 238 200 218 228" fill="none" stroke="var(--text)" stroke-width="1.25"/>
<path d="M120 150C150 170 186 190 214 250" fill="none" stroke="var(--muted-text)" stroke-width="1.5" stroke-dasharray="2 3"/>
<path d="M250 132H284" stroke="var(--accent-text)" stroke-width="2.5" stroke-dasharray="5 3"/>
<path d="M156 270H184" stroke="var(--accent-text)" stroke-width="2.5" stroke-dasharray="5 3"/>
<g fill="none" stroke="var(--muted-text)" stroke-width="1"><path d="M152 270H120"/><path d="M164 150H120"/><path d="M164 50H120"/></g>
<text class="b" x="290" y="152">Proximal</text><text x="290" y="166">line,</text><text x="290" y="180">to stoma</text>
<text class="b" x="10" y="266">Distal line:</text><text x="10" y="280">upper rectum,</text><text x="10" y="294">stapled, oversewn</text>
<text x="10" y="146">Left ureter at</text><text x="10" y="160">the pelvic brim</text>
<text x="10" y="46">Aorta, IMA</text><text x="10" y="60">at L3</text>
</svg><figcaption>Anterior view; the patient’s left is on your right. The descending colon is divided proximally and brought out as the colostomy. The rectum is divided where the taeniae splay, washed out, stapled and oversewn. The ureter (dotted) crosses the brim under the sigmoid mesocolon.</figcaption></figure>`}
});
