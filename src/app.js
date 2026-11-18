/* ── helpers ── */
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const ic=(n,c='')=>`<svg class="icon ${c}" aria-hidden="true"><use href="#ph-${n}"/></svg>`;
const ul=a=>`<ul>${a.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`;
const num=s=>esc(s).replace(/(\d[\d.,–]*%?)/g,'<span class="mono">$1</span>');
const noteHTML=t=>t.split('\n').map(l=>l.trim()===''?'<span class="gap"></span>':`<span class="l">${esc(l).replace(/\[\[(.+?)\]\]/g,'<span class="hl">$1</span>').replace(/\{\{(.+?)\}\}/g,'<span class="sf">$1</span>')}</span>`).join('');
const noteText=t=>t.replace(/\[\[|\]\]|\{\{|\}\}/g,'');
const srcs=a=>a&&a.length?`<details class="acc src"><summary><span>Sources (<span class="mono">${a.length}</span>)</span>${ic('caret-down','sm')}</summary><div class="acc-body"><ul>${a.map(x=>`<li>${x}</li>`).join('')}</ul></div></details>`:'';
const NOTES={};
function noteBlock(title,text,bare){const k='n'+Object.keys(NOTES).length;NOTES[k]=noteText(text);return `<div class="notehd"${bare?' style="margin-top:0"':''}>${bare?'<span class="caption">Replacement lines</span>':`<h4>${esc(title)}</h4>`}<button class="btn btn-ghost sm" data-copy="${k}">${ic('copy','sm')}Copy</button></div><div class="notebox">${noteHTML(text)}</div>`;}
const store={get(k){try{return JSON.parse(localStorage.getItem(k)||'null')}catch(e){return null}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};

/* ── state ── */
let filter='all', query='', tab='steps';
const LIST={emergency:'Emergency',elective:'Elective',both:'Elective and emergency'};
const TABS=[['steps','Steps'],['anatomy','Anatomy'],['pitfalls','Pitfalls'],['setup','Set-up'],['consent','Consent'],['notes','Post-op note'],['viva','Viva']];

/* ── home ── */
function home(){
  $('#back').hidden=true; document.title='HST Atlas — EDB';
  $('#app').innerHTML=`<div class="hero"><span class="tag">General surgery · Hong Kong</span><h1>Operative atlas</h1><p>Read it before the case. Write the note from it afterwards.</p></div>
  <div class="searchrow">${ic('magnifying-glass')}<input class="input" id="q" type="search" placeholder="Search a procedure" aria-label="Search a procedure" value="${esc(query)}"></div>
  <div class="segmented flush" role="group" aria-label="List">${[['all','All'],['emergency','Emergency'],['elective','Elective']].map(([k,l])=>`<button data-list="${k}" class="${filter===k?'active':''}" aria-pressed="${filter===k}">${l}</button>`).join('')}</div>
  <div id="list"></div>`;
  $('#q').addEventListener('input',e=>{query=e.target.value;list();});
  $$('[data-list]').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.list;$$('[data-list]').forEach(x=>{const on=x===b;x.classList.toggle('active',on);x.setAttribute('aria-pressed',on)});list();}));
  list();
}
function list(){
  const q=query.trim().toLowerCase();
  const hit=(name,aka,l)=>(filter==='all'||l===filter||l==='both')&&(!q||(name+' '+(aka||'')).toLowerCase().includes(q));
  const ready=P.filter(p=>hit(p.name,p.aka,p.list)), soon=[];
  let h='';
  const bySys={}; ready.forEach(p=>(bySys[p.system]=bySys[p.system]||[]).push(p));
  Object.keys(bySys).forEach(s=>{h+=`<div class="sys"><span class="tag">${esc(s)}</span>${bySys[s].map(p=>`<a class="prow" href="#${p.id}"><span><span class="nm">${esc(p.name)}</span><span class="mt">${LIST[p.list]} · ${esc(p.approach)}</span></span>${ic('caret-right')}</a>`).join('')}</div>`;});
  if(soon.length) h+=`<div class="sys"><span class="tag">Batch one · in preparation</span>${soon.map(s=>`<div class="prow soon"><span><span class="nm">${esc(s[0])}</span><span class="mt">${esc(s[1])} · ${s[2]==='emergency'?'Emergency':'Elective'}</span></span></div>`).join('')}</div>`;
  if(!ready.length&&!soon.length) h=`<div class="empty"><span class="tag">Nothing here yet</span>No procedure matches. Clear the search or switch list.</div>`;
  $('#list').innerHTML=h;
}

/* ── procedure ── */
function panes(p){
  const s=p.sources||{};
  const steps=`<p class="lead">Tap a step for the reason and the time-saver.</p>
  ${p.steps.map((x,i)=>`<details class="stp"><summary><span class="no mono">${String(i+1).padStart(2,'0')}</span><span class="sb"><span class="st">${esc(x.t)}</span><span class="how">${esc(x.how)}</span></span>${ic('caret-down','sm')}</summary><div class="more"><p class="why"><b>Why.</b> ${esc(x.why)}</p>${x.tip?`<div class="tip">${ic('lightbulb')}<span>${esc(x.tip)}</span></div>`:''}</div></details>`).join('')}
  <details class="acc" style="margin-top:var(--space-6)"><summary>${esc(p.houseTitle||'House and evidence')}${ic('caret-down','sm')}</summary><div class="acc-body"><p style="margin:0 0 var(--space-2)">${esc(p.houseLead||'Do it the consultant’s way. Know what the guideline says when asked.')}</p><div class="table-wrap"><table class="t"><thead><tr>${(p.houseHead||['Step','House','Guideline']).map(h=>`<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${p.house.map(r=>`<tr><td>${esc(r[0])}</td><td>${esc(r[1])}</td><td>${num(r[2])}</td></tr>`).join('')}</tbody></table></div></div></details>${srcs(s.steps)}`;
  const a=p.anatomy;
  const T=a.table;
  const anatomy=`${p.dg&&p.dg.anat||''}<h3>What matters</h3>${ul(a.points)}
  ${T?`<h3>${esc(T.title)}</h3><div class="table-wrap"><table class="t"><thead><tr>${T.head.map((h,i)=>`<th${T.num!=null&&i===T.num?' class="n"':''}>${esc(h)}</th>`).join('')}</tr></thead><tbody>${T.rows.map(r=>`<tr>${r.map((c,i)=>`<td${T.num!=null&&i===T.num?' class="n"':''}>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`:''}
  <h3>Danger zones</h3>${ul(a.danger)}${srcs(s.anatomy)}`;
  const pitfalls=`<p class="lead">Each one: how to avoid it, then what to do when it has already happened.</p>
  ${p.pitfalls.map(x=>`<div class="pit"><h4>${esc(x.t)}${x.u?` <span class="unc">· ${esc(x.u)}</span>`:''}</h4><p class="kv"><b>Avoid.</b> ${esc(x.a)}</p><p class="kv"><b>Rescue.</b> ${num(x.r)}</p></div>`).join('')}
  <h3>Stop and call</h3><p class="lead">In the note this reads “senior kindly scrubbed in”. In theatre it reads as judgement.</p>${ul(p.call)}${srcs(s.pitfalls)}`;
  const u=p.setup;
  const setup=`${p.dg&&p.dg.setup||''}<h3>Theatre</h3>${ul(u.theatre)}<h3>Ask for</h3>${ul(u.kit)}<h3>Have in the room</h3>${ul(u.standby)}${srcs(s.setup)}`;
  const c=p.consent;
  const consent=`<p class="legend"><span class="hl">Shaded</span> text changes with the patient. Type it into CMS as the record of what you discussed.</p>${noteBlock('Consent discussion',c.note)}
  <h3>Figures to quote</h3><div class="table-wrap"><table class="t"><thead><tr><th>Risk</th><th class="n">Rate</th><th>Source</th></tr></thead><tbody>${c.figures.map(r=>`<tr><td>${esc(r[0])}</td><td class="n">${esc(r[1])}</td><td>${esc(r[2])}</td></tr>`).join('')}</tbody></table></div>${c.versus?`<p class="kv">${num(c.versus)}</p>`:''}${srcs(s.consent)}`;
  const n=p.notes;
  const notes=`<p class="legend"><span class="hl">Shaded</span>: amend to the case. <span class="sf">Dotted underline</span>: a safety claim, true only if you did it.</p>
  ${noteBlock('Findings',n.findings)}${noteBlock('Procedure record',n.procedure)}
  <h3>Decision lines</h3><p class="lead">Swap one in where you made the choice.</p>${n.decisions.map(d=>noteBlock(d[0],d[1])).join('')}
  <h3>When it did not go to plan</h3><p class="lead">Replace the matching lines of the record. What happened, what you did, who came.</p>${n.deviations.map(d=>`<details class="acc"><summary>${esc(d[0])}${ic('caret-down','sm')}</summary><div class="acc-body" style="color:var(--text)">${noteBlock(d[0],d[1],true)}</div></details>`).join('')}
  <h3>Orders</h3>${noteBlock('Post-op orders',n.postop)}${noteBlock('Discharge and follow-up',n.discharge)}${srcs(s.notes)}`;
  const viva=`<p class="lead">What a senior asks across the table, and an examiner asks across a desk. Answer aloud before you open one.</p>${p.viva.map(v=>`<details class="acc qa"><summary>${esc(v[0])}${ic('caret-down','sm')}</summary><div class="acc-body">${num(v[1])}${v[2]?` <span class="unc">· ${esc(v[2])}</span>`:''}</div></details>`).join('')}${srcs(s.viva)}`;
  return {steps,anatomy,pitfalls,setup,consent,notes,viva};
}
let cur=null;
function proc(p){
  cur=p; $('#back').hidden=false; document.title=p.name+' — HST Atlas';
  for(const k in NOTES) delete NOTES[k];
  const pn=panes(p);
  $('#app').innerHTML=`<div class="phead"><div class="meta"><span class="pill ${p.list==='emergency'?'pill-warning':'pill-ocean'}">${LIST[p.list]}</span><span class="pill pill-ocean">${esc(p.approach)}</span></div><h1>${esc(p.name)}</h1><p class="aim">${esc(p.aim)}</p><p class="status">${num(p.status)}</p></div>
  <div class="tabs sticky" role="tablist" aria-label="Sections">${TABS.map(([k,l])=>`<button class="tab" role="tab" id="t-${k}" data-tab="${k}" aria-controls="p-${k}">${l}</button>`).join('')}</div>
  ${TABS.map(([k])=>`<div class="pane" role="tabpanel" id="p-${k}" aria-labelledby="t-${k}" hidden>${pn[k]}</div>`).join('')}
  <p class="disclaimer">Decision support only — verify against local protocols. No patient-identifiable data.</p>`;
  setTab(tab,false);
  $$('.tab').forEach(b=>b.addEventListener('click',()=>setTab(b.dataset.tab,true)));
}
function setTab(k,scroll){
  tab=k;
  $$('.tab').forEach(b=>{const on=b.dataset.tab===k;b.classList.toggle('active',on);b.setAttribute('aria-selected',on);if(on&&b.scrollIntoView)b.scrollIntoView({inline:'center',block:'nearest'});});
  $$('.pane').forEach(x=>x.hidden=x.id!=='p-'+k);
  if(scroll){const t=$('.tabs.sticky'),top=t.getBoundingClientRect().top+window.scrollY-$('#topbar').offsetHeight;if(window.scrollY>top)window.scrollTo(0,top);}
}

/* ── copy, toast ── */
let tt;
function toast(msg,kind){$$('.toast').forEach(x=>x.remove());const el=document.createElement('div');el.className='toast '+(kind||'');el.setAttribute('role','status');el.textContent=msg;document.body.appendChild(el);clearTimeout(tt);tt=setTimeout(()=>el.remove(),3500);}
document.addEventListener('click',e=>{
  const b=e.target.closest('[data-copy]'); if(!b) return;
  const text=NOTES[b.dataset.copy]||'', fail=()=>toast('Copy was blocked here. Press and hold the text to select it.','warn');
  try{ if(navigator.clipboard&&navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(()=>toast('Copied without the markers.','ok'),fail); else fail(); }catch(err){ fail(); }
});

/* ── router ── */
function route(){
  const id=(location.hash||'').replace('#','');
  const p=P.find(x=>x.id===id);
  if(p){ proc(p); } else { home(); }
  window.scrollTo(0,0);
}
window.addEventListener('hashchange',()=>{tab='steps';route();});
function fit(){document.documentElement.style.setProperty('--tabtop',$('#topbar').offsetHeight+'px');}
window.addEventListener('resize',fit);

/* ── settings menu and theme ── */
const gear=$('#gear'), menu=$('#menu');
function setMenu(o){menu.hidden=!o;gear.setAttribute('aria-expanded',String(o));}
gear.addEventListener('click',e=>{e.stopPropagation();setMenu(menu.hidden);});
document.addEventListener('click',e=>{if(!menu.hidden&&!menu.contains(e.target))setMenu(false);});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!menu.hidden){setMenu(false);gear.focus();}});
function mode(){const t=document.documentElement.getAttribute('data-theme');return t==='light'||t==='dark'?t:'system';}
function paintMode(){const m=mode();$$('.menu .segmented button').forEach(b=>{const on=b.dataset.mode===m;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));});}
$$('.menu .segmented button').forEach(b=>b.addEventListener('click',()=>{const m=b.dataset.mode;if(m==='system')document.documentElement.removeAttribute('data-theme');else document.documentElement.setAttribute('data-theme',m);try{localStorage.setItem('edb-theme',m)}catch(e){}paintMode();}));
paintMode(); fit(); route();
