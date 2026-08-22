import io
p=r'C:\GREENCORE\AIO\cpg-68000-door\server.js'; s=io.open(p,encoding='utf-8').read()
def rep(a,b):
    global s
    assert a in s, a[:70]; s=s.replace(a,b,1)
rep('const SIGNALS = [\n  { code: "ACM-000"',
'''// CPG-68000 FRAMING CANON (CEO-locked 2026-08-22): CPG-68000 is the CPG application profile of
// ACM-68000 (open, MIT, GreenCore Solutions Corp.). Same seven signals, same numbers, same locked
// meanings. The prefix scopes the domain; the number carries the semantics. No new signals, no
// renumbering, no meaning drift; any CPG-XXX resolves to its ACM-XXX definition; anything outside
// the seven falls back to the base protocol. Wire emission unchanged: gen-2 surfaces emit ACM- signals.
const SIGNALS = [
  { code: "ACM-000"''')
for code in ("000","200","300","403","404","451","500"):
    rep('{ code: "ACM-%s", state:'%code, '{ code: "ACM-%s", cpg: "CPG-%s", state:'%(code,code))
rep('title: "CPG-68000 — the seven-signal procurement protocol for AI Agents (gen-2 door)",',
    'title: "CPG-68000 — the CPG application profile of ACM-68000",\n  profile_of: "ACM-68000", license: "MIT", open_protocol: true,')
old_what=s[s.index('  what: "CPG-68000 is the NextGen door'):]; old_what=old_what[:old_what.index('\n')+1]
rep(old_what,'  what: "CPG-68000 is the CPG application profile of ACM-68000 — open, MIT, GreenCore Solutions Corp. Same seven signals, same numbers, same locked meanings: CPG-000 NOT_APPLICABLE · CPG-200 ALLOW · CPG-300 CONDITIONAL · CPG-403 RESTRICT · CPG-404 NOT_FOUND · CPG-451 ESCALATE · CPG-500 SYSTEM_ERROR. The prefix scopes the domain; the number carries the semantics. No new signals, no renumbering, no meaning drift: any CPG-XXX resolves to its ACM-XXX definition, and anything outside the seven falls back to the base protocol. Wire emission is unchanged — GSC surfaces emit ACM- signals (x-gsc-signal); CPG- codes are the domain-scoped register this door teaches.",\n  rule: "prefix scopes the domain; number carries the semantics",\n  resolution: "CPG-XXX → ACM-XXX (same number, same meaning); outside the seven → base protocol ACM-68000",\n')
rep('<div class="eyebrow">CPG-68000 · GEN-2 DOOR · SEVEN SIGNALS</div><h1>One signal. One meaning.</h1><p class="sub">The seven-signal procurement protocol for AI Agents.</p>',
    '<div class="eyebrow">CPG-68000 · THE CPG APPLICATION PROFILE OF ACM-68000 · OPEN · MIT</div><h1>One signal. One meaning.</h1><p class="sub">Same seven signals, same numbers, same locked meanings — the prefix scopes the domain; the number carries the semantics.</p>')
rep('<table><tr><th>Signal</th><th>State</th><th>GSC-registered GTIN</th><th>Buyer-side action</th></tr>${SIGNALS.map(s => `<tr><td>${s.code}</td><td>${s.state}</td>',
    '<table><tr><th>CPG profile</th><th>ACM base</th><th>State</th><th>GSC-registered GTIN</th><th>Buyer-side action</th></tr>${SIGNALS.map(s => `<tr><td>${s.cpg}</td><td class="mono">${s.code}</td><td>${s.state}</td>')
rep('Seven. Append-only. Non-breaking. Non-substitutable.</p>',
    'Seven. Append-only. Non-breaking. Non-substitutable. Any CPG-XXX resolves to its ACM-XXX definition; anything outside the seven falls back to the base protocol. On the wire, GSC surfaces emit ACM- signals.</p>')
rep('# CPG-68000 — the seven-signal procurement protocol for AI Agents\\n\\n> ${APEX} · gen-2 door\\n\\n${SPEC.what}\\n\\n## Signals\\n\\n${SIGNALS.map(s => `- ${s.code} ${s.state}',
    '# CPG-68000 — the CPG application profile of ACM-68000\\n\\n> ${APEX} · open · MIT · GreenCore Solutions Corp.\\n\\n${SPEC.what}\\n\\n## Signals\\n\\n${SIGNALS.map(s => `- ${s.cpg} = ${s.code} ${s.state}')
rep("Intake: the Trading Desk form on gsc-navigator.ai (POST https://formspree.io/f/xljrwwlk with fields name, email, message).",
    "Intake on this surface (POST https://formspree.io/f/xjybzzdz with fields name, email, message) — human-reviewed by the GSC Trading Desk.")
rep('{name:"cpg68000_list_signals",description:"List the seven signals.",inputSchema:{type:"object",properties:{}},execute:async function(){var r=await fetch("https://${APEX}/signals.json");return await r.json();}}',
    '{name:"cpg68000_list_signals",description:"List the seven signals.",inputSchema:{type:"object",properties:{}},execute:async function(){var r=await fetch("https://${APEX}/signals.json");return await r.json();}},\\n{name:"gsc_contact",description:"Send a message to the GSC Trading Desk through this surface\'s live contact endpoint (human-reviewed, HITL).",inputSchema:{type:"object",properties:{name:{type:"string"},email:{type:"string"},message:{type:"string"}},required:["name","email","message"]},execute:async function(i){var r=await fetch("https://formspree.io/f/xjybzzdz",{method:"POST",headers:{"Accept":"application/json","Content-Type":"application/json"},body:JSON.stringify(i)});return {status:r.status,ok:r.ok};}}')
rep('{ id: "escalate-to-human", name: "Escalate to a human", description: "ACM-451 — the two GSC doors.", tags: ["hitl","escalation"] }],',
    '{ id: "escalate-to-human", name: "Escalate to a human", description: "ACM-451 — the two GSC doors.", tags: ["hitl","escalation"] }, { id: "hitl-contact", name: "Human-in-the-Loop Contact", description: `Reach ${OP} through this surface\'s live, human-reviewed contact endpoint (POST https://formspree.io/f/xjybzzdz with fields name, email, message). Every transactional commit is human-signed via the GSC Trading Desk.`, tags: ["contact","hitl","registration"] }],')
rep('<div class="card"><h3>GSC Trading Desk</h3><p>The humans\' channel, informed by Navigator. <a href="${TRADING_DESK}">Reach the Trading Desk →</a></p></div></div></div></section>',
    '<div class="card"><h3>GSC Trading Desk</h3><p>The humans\' channel, informed by Navigator. <a href="${TRADING_DESK}">Reach the Trading Desk →</a></p></div></div></div></section>\n<section id="contact"><div class="wrap"><div class="eyebrow">Contact</div><h2 style="font-family:Archivo,sans-serif;font-size:32px;margin-top:12px">A human answers — that\'s rather the point.</h2><form action="https://formspree.io/f/xjybzzdz" method="POST" style="margin-top:28px;display:grid;gap:12px;max-width:540px"><input type="hidden" name="_next" value="https://cpg-68000.ai/"><div><label for="f-name" style="font-size:13px;font-weight:600;color:var(--grey)">Name</label><input id="f-name" type="text" name="name" required autocomplete="name" style="width:100%;padding:12px 14px;border:1px solid var(--hair);border-radius:8px;font:inherit;font-size:15px"></div><div><label for="f-email" style="font-size:13px;font-weight:600;color:var(--grey)">Work email</label><input id="f-email" type="email" name="email" required autocomplete="email" style="width:100%;padding:12px 14px;border:1px solid var(--hair);border-radius:8px;font:inherit;font-size:15px"></div><div><label for="f-msg" style="font-size:13px;font-weight:600;color:var(--grey)">Your question about the signals</label><textarea id="f-msg" name="message" rows="4" required style="width:100%;padding:12px 14px;border:1px solid var(--hair);border-radius:8px;font:inherit;font-size:15px"></textarea></div><button type="submit" style="justify-self:start;cursor:pointer;border:0;background:var(--orange);color:#fff;font:inherit;font-weight:600;font-size:15px;padding:13px 26px;border-radius:6px">Send to the GSC Trading Desk</button></form></div></section>')
rep('const VERSION = "1.0.1";','const VERSION = "1.1.0";')
assert 'xljrwwlk' not in s
io.open(p,'w',encoding='utf-8',newline='\n').write(s); print("door patched; xjybzzdz count", s.count('xjybzzdz'))
