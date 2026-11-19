P.push({
id:'perianal-abscess', name:'Examination under anaesthesia and drainage of perianal abscess', aka:'perianal abscess ischiorectal abscess perirectal anorectal abscess anorectal sepsis eua incision and drainage i&d fistula in ano seton intersphincteric supralevator horseshoe goodsall packing',
system:'Anorectal', list:'emergency', approach:'Open, perineal',
aim:'Drain all the pus through an incision close to the anal verge, find a fistula without making one, and keep the sphincters intact.',
status:'Draft 0.1 · 19/11/2026 · sourced, not yet tested by you in theatre',
houseTitle:'Practice and evidence', houseLead:'There is no senior template for this yet. The middle column is common practice: correct it to your consultant’s.', houseHead:['Step','Common practice','Guideline and trials'],

steps:[
{t:'Checks and position', how:'WHO checklist. General or spinal anaesthesia. Lithotomy, buttocks just over the end of the table. Note the clock face: 12 o’clock is anterior.', why:'Lithotomy gives a view of the whole perineum and a hand free for the rectum. Recording positions by the clock with the patient’s position stated avoids confusion in the note.'},
{t:'Examine first', how:'Inspect and palpate the perineum and both ischiorectal fossae. Digital rectal examination, then proctoscopy and rigid sigmoidoscopy.', why:'Finds the fluctuant point, a second collection, a horseshoe extension, and mucosal disease (Crohn’s, tumour) that changes management.'},
{t:'Choose the incision', how:'A radial or circumanal incision over the fluctuant point, as close to the anal verge as the abscess allows.', why:'If a fistula forms, a short track near the verge makes a simpler fistulotomy later.'},
{t:'Drain', how:'Incise, send pus for culture. Break down loculi gently with a finger. Excise a disc or ellipse of skin so the wound cannot close over the cavity.', why:'An undrained loculus or a wound that seals early is the commonest reason for recurrence.'},
{t:'Look for the internal opening', how:'Inspect the dentate line with a bivalve speculum for pus at a crypt. Gentle pressure on the cavity may show it.', why:'Knowing where the fistula is guides later treatment.', tip:'Do not probe hard. In acute inflammation a probe makes a false track and a new internal opening.'},
{t:'Treat a fistula found', how:'Low, simple fistula involving little sphincter: fistulotomy may be done now. Anything higher or uncertain: a loose draining seton, or leave and reassess.', why:'ASCRS 2022 (2B): fistulotomy at drainage in selected simple fistulas lowers recurrence. Dividing sphincter you cannot assess risks incontinence.'},
{t:'Deeper collections', how:'Intersphincteric: drain into the anal canal by dividing the internal sphincter over it. Supralevator: drain by the route it came from; intersphincteric origin into the rectum, ischiorectal origin through the perineum.', why:'Draining a supralevator abscess the wrong way creates an extrasphincteric fistula.'},
{t:'Dress', how:'Haemostasis. A light dressing over the wound; no packing inside the cavity unless needed for haemostasis.', why:'PPAC2: not packing is less painful, without a significant rise in recurrence or fistula.'}
],
house:[
['Timing','Same day or next list','ASCRS 2022 (1C): prompt incision and drainage.'],
['Imaging','Not routine','ASCRS 2022 (1B): not routinely needed; consider for occult, recurrent or complex disease, immunosuppression or Crohn’s.'],
['Fistulotomy at drainage','Low simple fistulas only','ASCRS 2022 (2B): may be done in selected simple fistulas. A Cochrane review found it lowers recurrence.'],
['Antibiotics','Unit practice','ASCRS 2022 (2B): reserve for cellulitis, systemic sepsis or immunosuppression.'],
['Packing','Unit practice','PPAC2: not packing the cavity is less painful; recurrence 6% without packing against 3% with, not significantly different.'],
['Diabetes and immunosuppression','Check glucose, consider sepsis','Higher risk of necrotising infection; examine for crepitus and spreading necrosis.']
],

anatomy:{
points:[
'Origin: most abscesses start in an anal gland opening at a crypt on the dentate line; the gland lies in the intersphincteric space. Pus spreads down, out or up from there.',
'Spaces: perianal (subcutaneous, at the verge), ischiorectal (lateral to the external sphincter, below levator), intersphincteric (between the sphincters), supralevator (above levator ani).',
'Horseshoe: pus crosses posteriorly through the deep postanal space between the ischiorectal fossae.',
'Sphincters: the internal sphincter is the thickened circular smooth muscle of the rectum; the external sphincter is striated and continuous with puborectalis above. The anorectal ring is palpable on rectal examination.',
'Goodsall’s rule: with a line across the anus from 3 to 9 o’clock, an external opening in front usually tracks radially to the nearest crypt; one behind usually curves to the posterior midline. Openings more than 3 cm from the verge break the rule.'
],
table:{title:'Parks classification of fistula-in-ano', head:['Type','Track','Typical management'], rows:[
['Intersphincteric','Through the internal sphincter only','Fistulotomy'],
['Transsphincteric','Through both sphincters into the ischiorectal fossa','Fistulotomy if low; seton or sphincter-sparing if high'],
['Suprasphincteric','Up the intersphincteric plane, over puborectalis, down through levator','Seton; specialist surgery'],
['Extrasphincteric','From rectum above levator, outside the sphincters','Specialist surgery; often from a wrongly drained abscess or Crohn’s']
]},
danger:[
'External sphincter: a deep incision or aggressive curettage divides it.',
'Anterior perineum in women: the sphincter is short anteriorly; anterior fistulotomy risks incontinence.',
'The rectal wall: hard probing makes a false internal opening.',
'Pudendal vessels and nerves: in Alcock’s canal on the lateral wall of the ischiorectal fossa.',
'Necrotising infection: crepitus, dusky skin or pain beyond the signs. It is a different operation.'
]
},

pitfalls:[
{t:'Missed second collection or horseshoe', a:'Examine both sides and the postanal space before incising.', r:'Drain each collection; a horseshoe needs drainage of the deep postanal space with counter-incisions laterally.'},
{t:'False track from probing', a:'Gentle inspection only; no forced probing.', r:'If you are unsure whether an opening is real, leave it. Reassess after the sepsis settles.'},
{t:'Fistulotomy that takes too much muscle', a:'Only lay open what is clearly low and simple.', r:'If in doubt once opened, place a loose seton instead of dividing further. Call.'},
{t:'Supralevator abscess drained the wrong way', a:'Find its origin on examination and imaging first.', r:'Call. An extrasphincteric fistula created now is very hard to fix later.'},
{t:'Necrotising infection', a:'Check for crepitus, skin necrosis, systemic toxicity, diabetes.', r:'Radical debridement, broad-spectrum antibiotics, relook in 24 hours. Call.'},
{t:'Recurrence', a:'Adequate skin excision; break down loculi.', r:'Examine again under anaesthesia; look for an undrained space or fistula; MRI if complex or recurrent.'}
],
call:['Supralevator or horseshoe abscess','Necrotising infection','Fistula you cannot classify','Crohn’s disease or suspected malignancy','Immunosuppressed patient'],

setup:{
theatre:['Lithotomy, buttocks just over the end of the table','General or spinal anaesthesia','Surgeon seated at the end of the table, light over the shoulder','Note the clock face: 12 o’clock anterior in lithotomy'],
kit:['Proctoscope and rigid sigmoidoscope','Bivalve anal speculum (Eisenhammer or Parks)','Scalpel, artery forceps, curette','Culture swab or pot','Lacrimal or fistula probes','Silastic sling or loop for a seton','Dressings'],
standby:['Diathermy','Haemostatic packing if bleeding','Formal debridement set if necrotising infection is found']
},

consent:{
note:`Consent for examination under anaesthesia and incision and drainage of perianal abscess, possible seton insertion
Diagnosis and indication explained: [[perianal abscess at __ o’clock]]
Nature of operation explained: examination of the back passage under anaesthesia, cutting to drain the pus, removing a small piece of skin so it drains; possible insertion of a loose drainage thread (seton) or laying open of a superficial track if found
Alternatives discussed: antibiotics alone [[not appropriate: pus needs draining]]
Benefits: relief of pain and infection
General risks: bleeding, infection, anaesthetic complications
Specific risks: recurrence of abscess, development of anal fistula needing further surgery, slow wound healing needing dressings, injury to anal sphincter with change in control of wind or stool, need for further examination under anaesthesia
Risks as charted in consent form acknowledged
Patient showed good understanding, questions answered
Consent signed`,
figures:[
['Fistula after drainage of an anorectal abscess','30–70%','ASCRS 2022 summary of series'],
['Abscess recurrence, no packing against packing','6% against 3%','PPAC2, 433 patients, not significant'],
['Fistula or recurrent abscess after drainage','about 40%','Derek’s notes']
],
versus:'The fistula figure varies with the abscess type and follow-up. Tell the patient that a fistula is common afterwards and is a second, planned operation, not a failure of this one.'
},

notes:{
findings:`[[EUA: fluctuant abscess at __ o’clock, __ cm from anal verge]]
[[Pus __ ml, sent for culture]]
[[No internal opening identified / internal opening at __ o’clock at dentate line]]
[[PR and proctosigmoidoscopy: no mucosal abnormality]]`,
procedure:`[[Lithotomy]] position, [[general / spinal]] anaesthesia, skin prepped and draped
EUA, PR and proctosigmoidoscopy done, findings as above
[[Radial / circumanal]] incision over point of maximal fluctuance [[close to anal verge]]
Pus drained and sent for culture
Loculi broken down digitally
Skin edge excised to allow drainage
{{No forced probing}}
Haemostasis secured
[[Wound dressed, cavity not packed]]`,
decisions:[
['Primary fistulotomy','Low [[intersphincteric / low transsphincteric]] fistula identified, internal opening at [[__ o’clock]]; track laid open, {{less than __ of external sphincter involved}}, edges marsupialised'],
['Loose seton','[[Transsphincteric]] track identified, internal opening at [[__ o’clock]]; loose draining seton inserted with [[silastic sling]], tied loosely'],
['Intersphincteric abscess','Intersphincteric abscess at [[__ o’clock]] drained into anal canal by dividing internal sphincter over it']
],
deviations:[
['Horseshoe abscess',`Horseshoe extension through deep postanal space
Senior kindly scrubbed in
Deep postanal space drained via [[posterior midline]] incision, counter-incisions over both ischiorectal fossae`],
['Necrotising infection',`[[Crepitus and necrotic subcutaneous tissue]] extending to [[__]]
Senior kindly scrubbed in
Radical debridement to healthy bleeding tissue, tissue sent for culture, for relook in [[24 h]]`],
['Senior called',`Senior kindly scrubbed in at [[__:__]]
[[Dr __]] continued as chief surgeon`]
],
postop:`DAT
Analgesics regular and PRN
Laxatives [[__]]
[[Abx only if cellulitis, systemic sepsis or immunosuppressed]]
[[Check glucose if diabetic]]
Wound: sitz bath and dressing change after BO
Trace pus culture`,
discharge:`Home when pain controlled, [[D0 to D1]]
Wound care: shower or sitz bath after BO, light dressing
Laxatives to avoid straining
FU surgical clinic [[4 to 6 weeks]] to check for fistula
SL [[__ days]]
To return if fever, increasing pain, swelling or persistent discharge`
},

viva:[
['Classify anorectal abscesses.','By the space: perianal, ischiorectal, intersphincteric and supralevator, with horseshoe extension through the deep postanal space. Most start in an anal gland in the intersphincteric plane.'],
['Do you lay open a fistula at the first operation?','Only a clearly low, simple fistula in a patient with normal continuity, ideally by an experienced surgeon. ASCRS 2022 (2B) allows it; a Cochrane review found lower recurrence. If the track is high, unclear or anterior in a woman, place a loose seton or leave it.'],
['Should the cavity be packed?','PPAC2 randomised 433 patients: no packing was less painful, with recurrence 6% against 3%, not significantly different, and no significant rise in fistula. Many units have stopped routine packing.'],
['When are antibiotics indicated?','ASCRS 2022 (2B): cellulitis, systemic signs of infection, or immunosuppression. Not as a substitute for drainage.'],
['State Goodsall’s rule and its limits.','With a line from 3 to 9 o’clock, an anterior external opening tracks radially to the nearest crypt; a posterior one curves to the posterior midline. It is less reliable for anterior openings more than 3 cm from the verge, in women, and in Crohn’s.'],
['How do you drain a supralevator abscess?','By its origin. From an intersphincteric abscess: into the rectum. From an ischiorectal abscess: through the perineum. Draining it the other way creates an extrasphincteric fistula. If the origin is a pelvic source (diverticular, Crohn’s, appendiceal), treat that.']
],

sources:{
steps:[
'<a href="https://doi.org/10.1097/DCR.0000000000002473">Gaertner WB et al. The American Society of Colon and Rectal Surgeons clinical practice guidelines for the management of anorectal abscess, fistula-in-ano, and rectovaginal fistula. Dis Colon Rectum 2022;65:964–985</a>.',
'<a href="https://doi.org/10.1093/bjs/znac225">Newton K et al. Postoperative packing of perianal abscess cavities (PPAC2): randomized clinical trial. Br J Surg 2022;109:951–957</a>.',
'Senior notes: Deon’s notes, fistula-in-ano; Derek’s notes, benign anal disease.',
'Tips marked with a lamp are craft points. Treat them as unverified until you have tried them.'],
anatomy:['Parks AG, Gordon PH, Hardcastle JD. A classification of fistula-in-ano. Br J Surg 1976;63:1–12.','Deon’s notes, fistula-in-ano: Goodsall’s rule.'],
pitfalls:['ASCRS 2022, as above.'],
setup:['Common practice; there is no senior template for this operation yet.'],
consent:['ASCRS 2022 and PPAC2, as above.','Derek’s notes, benign anal disease.'],
notes:['Wording in HA style. Orders and discharge use common HA short forms.'],
viva:['ASCRS 2022 and PPAC2, as above.','Malik AI, Nelson RL, Tou S. Incision and drainage of perianal abscess with or without treatment of anal fistula. Cochrane Database Syst Rev 2010;(7):CD006827.']
},

dg:{
setup:`<figure class="dg"><svg viewBox="0 0 340 280" role="img" aria-label="Anal clock face in lithotomy with Goodsall's rule">
<circle cx="170" cy="140" r="96" fill="none" stroke="var(--muted-text)" stroke-width="1" stroke-dasharray="3 4"/>
<circle cx="170" cy="140" r="34" fill="var(--surface-high)" stroke="var(--muted-text)" stroke-width="1.5"/>
<circle cx="170" cy="140" r="10" fill="none" stroke="var(--text)" stroke-width="1.5"/>
<path d="M50 140H290" stroke="var(--text)" stroke-width="1.25" stroke-dasharray="6 4"/>
<g fill="none" stroke="var(--accent-text)" stroke-width="2" stroke-linecap="round">
<path d="M228 70L184 124"/><path d="M110 74L156 124"/>
<path d="M236 212C220 186 196 176 172 152"/><path d="M104 212C120 186 144 176 168 152"/>
</g>
<g fill="var(--accent-text)"><circle cx="228" cy="70" r="4"/><circle cx="110" cy="74" r="4"/><circle cx="236" cy="212" r="4"/><circle cx="104" cy="212" r="4"/></g>
<text class="b" x="170" y="34" text-anchor="middle">12 Anterior</text><text class="b" x="170" y="256" text-anchor="middle">6 Posterior</text>
<text class="b" x="300" y="144">3</text><text class="b" x="30" y="144">9</text>
<text x="246" y="60">Anterior: radial</text><text x="246" y="74">to nearest crypt</text>
<text x="246" y="226">Posterior: curves</text><text x="246" y="240">to the midline</text>
</svg><figcaption>Lithotomy, viewed from the end of the table: 12 o’clock anterior, 6 o’clock posterior; the patient’s left is 3 o’clock. Goodsall’s rule: anterior external openings track radially; posterior ones curve to the posterior midline. Incise close to the verge.</figcaption></figure>`,
anat:`<figure class="dg"><svg viewBox="0 0 340 300" role="img" aria-label="Coronal section of the anal canal showing the spaces where abscesses form">
<g fill="none" stroke="var(--muted-text)" stroke-width="1.5">
<path d="M150 10V190C150 214 146 236 140 262"/><path d="M190 10V190C190 214 194 236 200 262"/>
<path d="M150 70C120 100 80 130 30 150"/><path d="M190 70C220 100 260 130 310 150"/>
</g>
<g fill="var(--surface-high)" stroke="var(--muted-text)" stroke-width="1.25">
<path d="M142 150H150V250H142Z"/><path d="M190 150H198V250H190Z"/>
<path d="M118 170C126 166 134 166 138 170V256C130 262 122 262 118 256Z"/><path d="M222 170C214 166 206 166 202 170V256C210 262 218 262 222 256Z"/>
</g>
<path d="M150 214H190" stroke="var(--text)" stroke-width="1" stroke-dasharray="3 3"/>
<g fill="none" stroke="var(--accent-text)" stroke-width="1.75">
<circle cx="100" cy="112" r="10"/><circle cx="140" cy="194" r="7"/><circle cx="84" cy="206" r="14"/><circle cx="120" cy="276" r="9"/>
</g>
<g fill="none" stroke="var(--muted-text)" stroke-width="1"><path d="M90 104L60 76"/><path d="M134 190L100 160"/><path d="M70 206H40"/><path d="M110 278H80"/><path d="M226 110L250 86"/><path d="M190 214L240 190"/><path d="M220 214L228 228"/><path d="M196 236L226 262"/></g>
<text class="b" x="8" y="70">Supralevator</text>
<text class="b" x="8" y="152">Intersphincteric</text>
<text class="b" x="8" y="202">Ischio-</text><text class="b" x="8" y="216">rectal</text>
<text class="b" x="8" y="282">Perianal</text>
<text x="252" y="82">Levator ani</text>
<text x="244" y="184">Dentate line</text>
<text x="232" y="240">External</text><text x="232" y="254">sphincter</text>
<text x="228" y="276">Internal</text><text x="228" y="290">sphincter</text>
</svg><figcaption>Coronal section; the abscess sites are drawn on one side only. Infection starts in an anal gland at the dentate line and spreads into the intersphincteric space, then down to the perianal space, out through the external sphincter to the ischiorectal fossa, or up above levator.</figcaption></figure>`}
});
