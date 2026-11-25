/* ── helpers ── */
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const ic=(n,c='')=>`<svg class="icon ${c}" aria-hidden="true"><use href="#ph-${n}"/></svg>`;
const ul=a=>`<ul>${a.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`;
const lines=a=>`<ul class="lines">${a.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`;
const num=s=>esc(s).replace(/(\d[\d.,–]*%?)/g,'<span class="mono">$1</span>');
const mono=n=>`<span class="mono">${n}</span>`;
const plural=(n,w,ws)=>`${mono(n)} ${n===1?w:(ws||w+'s')}`;
const noteHTML=t=>t.split('\n').map(l=>l.trim()===''?'<span class="gap"></span>':`<span class="l">${esc(l).replace(/\[\[(.+?)\]\]/g,'<span class="hl">$1</span>').replace(/\{\{(.+?)\}\}/g,'<span class="sf">$1</span>')}</span>`).join('');
const noteText=t=>t.replace(/\[\[|\]\]|\{\{|\}\}/g,'');
const srcs=a=>a&&a.length?`<details class="acc src"><summary><span>Sources (${mono(a.length)})</span>${ic('caret-down','sm')}</summary><div class="acc-body"><ul>${a.map(x=>`<li>${x}</li>`).join('')}</ul></div></details>`:'';
const NOTES={};
function noteBlock(title,text,bare){const k='n'+Object.keys(NOTES).length;NOTES[k]=noteText(text);return `<div class="notehd"${bare?' style="margin-top:0"':''}>${bare?'<span class="caption">Replacement lines</span>':`<h4>${esc(title)}</h4>`}<button class="btn btn-ghost sm" data-copy="${k}">${ic('copy','sm')}Copy</button></div><div class="notebox">${noteHTML(text)}</div>`;}
const store={get(k){try{return JSON.parse(localStorage.getItem(k)||'null')}catch(e){return null}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const DISC='<p class="disclaimer">Decision support only — verify against local protocols. No patient-identifiable data.</p>';

/* ── teams: codes, names and order; colours live in app.css (.team-XXX) ── */
const TEAMS=[['EGI','Upper GI'],['CRS','Colorectal and anorectal'],['HBP','Hepatobiliary'],['BRS','Breast'],['ECS','Endocrine'],['GEN','General']];
const TEAM=Object.fromEntries(TEAMS);
const code=(t,c='')=>`<span class="code team-${t} ${c}" aria-label="${esc(TEAM[t]||t)}">${t}</span>`;

/* ── state ── */
let filter=store.get('atlas-list')||'all', query='';
let origin={href:'#library',label:'Library',nav:'library'};
const LIST={emergency:'Emergency',elective:'Elective',both:'Elective and emergency'};
const SECTIONS=[['steps','Steps'],['anatomy','Anatomy'],['pitfalls','Pitfalls'],['setup','Set-up'],['consent','Consent'],['viva','Viva'],['notes','Post-op note']];
const inList=p=>filter==='all'||p.list===filter||p.list==='both';
const byTeam=(a,b)=>TEAMS.findIndex(t=>t[0]===a.team)-TEAMS.findIndex(t=>t[0]===b.team);

/* ── shell ── */
function chrome(nav,back,title){
  const b=$('#back');
  if(back){b.hidden=false;b.href=back.href;$('#backl').textContent=back.label;$('#brand').hidden=true;}
  else{b.hidden=true;$('#brand').hidden=false;}
  $$('[data-nav]').forEach(a=>{const on=a.dataset.nav===nav;a.classList.toggle('active',on);on?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current');});
  document.title=title?title+' — HST Atlas':'HST Atlas — EDB';
}
function seg(){
  return `<div class="segmented full" role="group" aria-label="List">${[['all','All'],['emergency','Emergency'],['elective','Elective']].map(([k,l])=>`<button data-list="${k}" class="${filter===k?'active':''}" aria-pressed="${filter===k}">${l}</button>`).join('')}</div>`;
}
function wireSeg(redraw){
  $$('[data-list]').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.list;store.set('atlas-list',filter);$$('[data-list]').forEach(x=>{const on=x===b;x.classList.toggle('active',on);x.setAttribute('aria-pressed',on)});redraw();}));
}
const orow=(p,team)=>`<a class="orow" href="#p/${p.id}">${team?code(p.team,'sm'):''}<span class="tx"><span class="nm">${esc(p.name)}</span>${p.depth==='ref'?'<span class="mt">Reference entry</span>':''}</span>${ic('caret-right','sm')}</a>`;
const matches=(p,q)=>(p.name+' '+(p.aka||'')+' '+p.team+' '+(TEAM[p.team]||'')).toLowerCase().includes(q);

/* ── library ── */
function library(){
  origin={href:'#library',label:'Library',nav:'library'};
  chrome('library',null);
  $('#app').innerHTML=`<div class="ttl"><h1>Atlas</h1><p class="sub">${plural(P.length,'operation')} in ${mono(TEAMS.length)} teams</p></div>
  <div class="searchrow">${ic('magnifying-glass')}<input class="input" id="q" type="search" placeholder="Search ${P.length} operations" aria-label="Search operations" value="${esc(query)}"></div>
  ${seg()}<div id="lib"></div>`;
  $('#q').addEventListener('input',e=>{query=e.target.value;libBody();});
  wireSeg(libBody); libBody();
}
function libBody(){
  const q=query.trim().toLowerCase();
  if(q){
    const hits=P.filter(p=>inList(p)&&matches(p,q)).sort(byTeam);
    $('#lib').innerHTML=hits.length?`<div class="rows">${hits.map(p=>orow(p,true)).join('')}</div>`:`<div class="empty"><p>No operation matches “${esc(query.trim())}”. Try another name, or switch the list to All.</p></div>`;
    return;
  }
  $('#lib').innerHTML=`<div class="tiles">${TEAMS.map(([t,name])=>{
    const all=P.filter(p=>p.team===t), n=all.filter(inList).length;
    const ct=!all.length?'No pages yet':n?plural(n,'page'):'None on this list';
    return `<a class="tile team-${t}" href="#team/${t}" aria-label="${esc(name)}, ${n} ${n===1?'page':'pages'}"><span class="top"><span class="code">${t}</span>${ORG[t]||''}</span><span class="bot"><span class="nm">${esc(name)}</span><span class="ct">${ct}</span></span></a>`;}).join('')}</div>`;
}

/* ── one team ── */
function team(t){
  origin={href:'#team/'+t,label:TEAM[t],nav:'library'};
  chrome('library',{href:'#library',label:'Library'},TEAM[t]);
  const all=P.filter(p=>p.team===t);
  $('#app').innerHTML=`<div class="ttl"><div class="ctx">${code(t,'sm')}<span>${all.length?plural(all.length,'page'):'No pages yet'}</span></div><h1>${esc(TEAM[t])}</h1></div>${all.length?seg():''}<div id="tl"></div>`;
  const draw=()=>{const ps=all.filter(inList);
    $('#tl').innerHTML=ps.length?`<div class="rows">${ps.map(p=>orow(p)).join('')}</div>`:`<div class="empty"><p>${all.length?'Nothing on this list for this team. Switch the list to All.':'This team has no pages yet. They come in a later batch.'}</p>${all.length?'':'<a class="btn btn-ghost" href="#library">Back to the library</a>'}</div>`;};
  wireSeg(draw); draw();
}

/* ── on call ── */
function oncall(){
  origin={href:'#oncall',label:'On call',nav:'oncall'};
  chrome('oncall',null,'On call');
  const ps=P.filter(p=>p.list==='emergency'||p.list==='both').sort(byTeam);
  $('#app').innerHTML=`<div class="ttl"><h1>On call</h1><p class="sub">${plural(ps.length,'emergency operation')}</p></div>
  <div class="otiles">${ps.map(p=>`<a class="otile" href="#p/${p.id}">${code(p.team,'sm')}<span class="nm">${esc(p.name)}</span></a>`).join('')}</div>`;
}

/* ── conditions (not built yet) ── */
function conditions(){
  origin={href:'#conditions',label:'Conditions',nav:'conditions'};
  chrome('conditions',null,'Conditions');
  $('#app').innerHTML=`<div class="ttl"><h1>Conditions</h1></div><div class="empty"><p>Browsing by condition is not built yet. It will start from the diagnosis and lead to the operation.</p><a class="btn btn-ghost" href="#library">Open the library</a></div>`;
}

/* ── search ── */
function search(){
  origin={href:'#search',label:'Search',nav:'search'};
  chrome('search',null,'Search');
  $('#app').innerHTML=`<div class="ttl"><h1>Search</h1></div>
  <div class="searchrow">${ic('magnifying-glass')}<input class="input" id="sq" type="search" placeholder="Name, eponym or short form" aria-label="Search operations" value="${esc(query)}"></div><div id="sr"></div>`;
  const draw=()=>{const q=query.trim().toLowerCase();
    if(!q){const az=[...P].sort((a,b)=>a.name.localeCompare(b.name));let h='',L='';
      az.forEach(p=>{const l=p.name[0].toUpperCase();if(l!==L){if(L)h+='</div>';h+=`<p class="az">${l}</p><div class="rows">`;L=l;}h+=orow(p,true);});
      $('#sr').innerHTML=h+'</div>';return;}
    const hits=P.filter(p=>matches(p,q)).sort(byTeam);
    $('#sr').innerHTML=hits.length?`<div class="rows">${hits.map(p=>orow(p,true)).join('')}</div>`:`<div class="empty"><p>No operation matches “${esc(query.trim())}”. Try another name or a short form.</p></div>`;};
  $('#sq').addEventListener('input',e=>{query=e.target.value;draw();});
  draw();
  if(!matchMedia('(pointer:coarse)').matches) $('#sq').focus();
}

/* ── suggest a correction ── */
const REPO='https://github.com/Erniedabernie/SurgeryAtlas';
function fix(p,part){
  const title=`${p.name} · ${part}: `;
  const body=`**Page:** ${p.name}\n**Part:** ${part}\n**Version:** ${p.status}\n\n**What is wrong:**\n\n\n**What it should say:**\n\n\n**Source, if any:**\n`;
  return `<a class="fix" href="${REPO}/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}" target="_blank" rel="noopener">${ic('pencil-simple','sm')}Suggest a correction to ${esc(part.toLowerCase())}</a>`;
}

/* ── procedure sections ── */
function section(p,k){
  const s=p.sources||{};
  if(k==='steps') return `${p.steps.map((x,i)=>`<details class="stp"><summary><span class="no mono">${i+1}</span><span class="st">${esc(x.t)}</span>${ic('caret-down','sm')}</summary><div class="more"><p>${esc(x.how)}</p><p class="why"><b>Why</b> · ${esc(x.why)}</p>${x.tip?`<p class="why"><b>Tip</b> · ${esc(x.tip)}</p>`:''}</div></details>`).join('')}
  <details class="acc" style="margin-top:var(--space-6)"><summary>${esc(p.houseTitle||'House and evidence')}${ic('caret-down','sm')}</summary><div class="acc-body"><p style="margin:0 0 var(--space-2)">${esc(p.houseLead||'Do it the consultant’s way. Know what the guideline says when asked.')}</p><div class="table-wrap"><table class="t"><thead><tr>${(p.houseHead||['Step','House','Guideline']).map(h=>`<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${p.house.map(r=>`<tr><td>${esc(r[0])}</td><td>${esc(r[1])}</td><td>${num(r[2])}</td></tr>`).join('')}</tbody></table></div></div></details>${srcs(s.steps)}`;
  if(k==='anatomy'){const a=p.anatomy,T=a.table;
    return `${p.dg&&p.dg.anat||''}${lines(a.points)}
    ${T?`<h3>${esc(T.title)}</h3><div class="table-wrap"><table class="t"><thead><tr>${T.head.map((h,i)=>`<th${T.num!=null&&i===T.num?' class="n"':''}>${esc(h)}</th>`).join('')}</tr></thead><tbody>${T.rows.map(r=>`<tr>${r.map((c,i)=>`<td${T.num!=null&&i===T.num?' class="n"':''}>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`:''}
    <h3>Danger zones</h3>${ul(a.danger)}${srcs(s.anatomy)}`;}
  if(k==='pitfalls') return `${p.pitfalls.map(x=>`<details class="stp"><summary><span class="st">${esc(x.t)}${x.u?`<span class="unc uncw">${esc(x.u)}</span>`:''}</span>${ic('caret-down','sm')}</summary><div class="more" style="padding-left:0"><p class="why"><b>Avoid</b> · ${esc(x.a)}</p><p class="why"><b>Rescue</b> · ${num(x.r)}</p></div></details>`).join('')}
    <h3>Stop and call</h3>${ul(p.call)}${srcs(s.pitfalls)}`;
  if(k==='setup'){const u=p.setup;
    return `${p.dg&&p.dg.setup||''}<h3>Theatre</h3>${ul(u.theatre)}<h3>Ask for</h3>${ul(u.kit)}<h3>Have in the room</h3>${ul(u.standby)}${srcs(s.setup)}`;}
  if(k==='consent'){const c=p.consent;
    return `<p class="legend"><span class="hl">Shaded</span> text changes with the patient. Type it into CMS as the record of what you discussed.</p>${noteBlock('Consent discussion',c.note)}
    <h3>Figures to quote</h3><div class="table-wrap"><table class="t"><thead><tr><th>Risk</th><th class="n">Rate</th><th>Source</th></tr></thead><tbody>${c.figures.map(r=>`<tr><td>${esc(r[0])}</td><td class="n">${esc(r[1])}</td><td>${esc(r[2])}</td></tr>`).join('')}</tbody></table></div>${c.versus?`<p class="kv">${num(c.versus)}</p>`:''}${srcs(s.consent)}`;}
  if(k==='viva') return `${p.viva.map(v=>`<details class="acc qa"><summary>${esc(v[0])}${ic('caret-down','sm')}</summary><div class="acc-body">${num(v[1])}${v[2]?` <span class="unc">· ${esc(v[2])}</span>`:''}</div></details>`).join('')}${srcs(s.viva)}`;
  if(k==='notes'){const n=p.notes;
    return `<p class="legend"><span class="hl">Shaded</span>: amend to the case. <span class="sf">Dotted underline</span>: a safety claim, true only if you did it.</p>
    ${noteBlock('Findings',n.findings)}${noteBlock('Procedure record',n.procedure)}
    <h3>Decision lines</h3>${n.decisions.map(d=>noteBlock(d[0],d[1])).join('')}
    <h3>When it did not go to plan</h3><p class="legend">Replace the matching lines of the record: what happened, what you did, who came.</p>${n.deviations.map(d=>`<details class="acc"><summary>${esc(d[0])}${ic('caret-down','sm')}</summary><div class="acc-body" style="color:var(--text)">${noteBlock(d[0],d[1],true)}</div></details>`).join('')}
    <h3>Orders</h3>${noteBlock('Post-op orders',n.postop)}${noteBlock('Discharge and follow-up',n.discharge)}${srcs(s.notes)}`;}
  return '';
}
function meta(p,k){
  if(k==='steps') return plural(p.steps.length,'step');
  if(k==='anatomy') return p.anatomy.table?esc(p.anatomy.table.title):plural(p.anatomy.points.length,'point');
  if(k==='pitfalls') return `${plural(p.pitfalls.length,'problem')} and when to call`;
  if(k==='setup') return 'Position, kit and standby';
  if(k==='consent') return `${plural(p.consent.figures.length,'figure')} to quote`;
  if(k==='viva') return plural(p.viva.length,'question');
  return 'After the case: amend, then type into CMS';
}

/* ── procedure: contents first, then a page per section ── */
function contents(p){
  chrome(origin.nav,{href:origin.href,label:origin.label},p.name);
  $('#app').innerHTML=`<div class="ttl"><div class="ctx">${code(p.team,'sm')}<span>${LIST[p.list]} · ${esc(p.approach)}</span></div><h1>${esc(p.name)}</h1></div>
  <nav class="rows" aria-label="Sections">${SECTIONS.map(([k,l])=>`<a class="crow" href="#p/${p.id}/${k}"><span class="tx"><span class="nm">${l}</span><span class="mt">${meta(p,k)}</span></span>${ic('caret-right','sm')}</a>`).join('')}</nav>
  <p class="status">${num(p.status)}</p>${DISC}`;
}
function sectionPage(p,k){
  const l=(SECTIONS.find(x=>x[0]===k)||[])[1]; if(!l){location.replace('#p/'+p.id);return;}
  for(const x in NOTES) delete NOTES[x];
  chrome(origin.nav,{href:'#p/'+p.id,label:'Contents'},l+' · '+p.name);
  $('#app').innerHTML=`<div class="ttl"><div class="ctx">${code(p.team,'sm')}<span>${esc(p.name)}</span></div><h1>${l}</h1></div>
  <div class="pane">${section(p,k)}${fix(p,l)}</div>${DISC}`;
}
/* reference entry: one page, no consent or note */
function refPage(p){
  chrome(origin.nav,{href:origin.href,label:origin.label},p.name);
  $('#app').innerHTML=`<div class="ttl"><div class="ctx">${code(p.team,'sm')}<span>Reference · ${esc(p.approach)}</span></div><h1>${esc(p.name)}</h1></div>
  <div class="pane"><p class="what">${esc(p.what)}</p>
  <h3>When it is used</h3>${ul(p.when)}
  <h3>Outline</h3><ol class="outline">${p.outline.map(x=>`<li>${esc(x)}</li>`).join('')}</ol>
  ${p.dg&&p.dg.ref?`<h3>Diagram</h3>${p.dg.ref}`:''}
  <h3>What matters</h3>${ul(p.points)}
  <h3>Viva</h3>${p.viva.map(v=>`<details class="acc qa"><summary>${esc(v[0])}${ic('caret-down','sm')}</summary><div class="acc-body">${num(v[1])}${v[2]?` <span class="unc">· ${esc(v[2])}</span>`:''}</div></details>`).join('')}
  ${srcs(p.sources)}${fix(p,'Reference entry')}<p class="status">${num(p.status)}</p></div>${DISC}`;
}

/* ── copy, toast ── */
let tt;
function toast(msg,kind){$$('.toast').forEach(x=>x.remove());const el=document.createElement('div');el.className='toast '+(kind||'');el.setAttribute('role','status');el.textContent=msg;document.body.appendChild(el);clearTimeout(tt);tt=setTimeout(()=>el.remove(),3500);}
document.addEventListener('click',e=>{
  const b=e.target.closest('[data-copy]'); if(!b) return;
  const text=NOTES[b.dataset.copy]||'', fail=()=>toast('Copy was blocked here. Press and hold the text to select it.','warn');
  try{ if(navigator.clipboard&&navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(()=>toast('Copied without the markers.','ok'),fail); else fail(); }catch(err){ fail(); }
});

/* ── router: #library · #team/EGI · #oncall · #conditions · #search · #p/<id> · #p/<id>/<section> ── */
function route(){
  const h=decodeURIComponent((location.hash||'').replace(/^#/,'')), parts=h.split('/');
  const old=P.find(x=>x.id===h); if(old){location.replace('#p/'+old.id);return;}
  if(parts[0]==='p'){const p=P.find(x=>x.id===parts[1]);
    if(p){ if(p.depth==='ref') refPage(p); else if(parts[2]) sectionPage(p,parts[2]); else contents(p); }
    else { library(); }
  }
  else if(parts[0]==='team'&&TEAM[parts[1]]) team(parts[1]);
  else if(h==='oncall') oncall();
  else if(h==='conditions') conditions();
  else if(h==='search') search();
  else library();
  window.scrollTo(0,0);
}
window.addEventListener('hashchange',route);

/* ── settings menu and theme ── */
const gear=$('#gear'), menu=$('#menu');
function setMenu(o){menu.hidden=!o;gear.setAttribute('aria-expanded',String(o));}
gear.addEventListener('click',e=>{e.stopPropagation();setMenu(menu.hidden);});
document.addEventListener('click',e=>{if(!menu.hidden&&!menu.contains(e.target))setMenu(false);});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!menu.hidden){setMenu(false);gear.focus();}});
function mode(){const t=document.documentElement.getAttribute('data-theme');return t==='light'||t==='dark'?t:'system';}
function paintMode(){const m=mode();$$('.menu .segmented button').forEach(b=>{const on=b.dataset.mode===m;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));});}
$$('.menu .segmented button').forEach(b=>b.addEventListener('click',()=>{const m=b.dataset.mode;if(m==='system')document.documentElement.removeAttribute('data-theme');else document.documentElement.setAttribute('data-theme',m);try{localStorage.setItem('edb-theme',m)}catch(e){}paintMode();}));
paintMode(); route();
