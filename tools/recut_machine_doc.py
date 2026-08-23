import io,re
p=r'C:\GREENCORE\AIO\cpg-68000-door\server.js'; s=io.open(p,encoding='utf-8').read()
start=s.index('const html = () => `'); end=s.index('const md = () => `')
new_html = r'''const html = () => `<!doctype html><html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>CPG-68000 — CPG application profile of ACM-68000</title><meta name="description" content="${SPEC.what.replace(/"/g, "&quot;")}">
<link rel="canonical" href="https://${APEX}/"><style>*{margin:0;padding:0;box-sizing:border-box}
body{background:#faf8f3;color:#1a1a1a;font:16px/1.6 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;-webkit-font-smoothing:antialiased}
.container{max-width:900px;margin:0 auto;padding:32px 24px 96px}
.topbar{font-size:12px;color:#6b6b6b;letter-spacing:.04em;margin-bottom:14px}
.eyebrow{text-transform:uppercase;letter-spacing:.14em;color:#6b6b6b;font-size:11px;font-weight:600;margin:0 0 10px}
h1{font:700 28px/1.2 ui-monospace,SFMono-Regular,Menlo,monospace;margin:0 0 4px}
h1 .host{display:block;font-size:14px;color:#c84a1e;font-weight:600;margin-top:6px}
.badge{display:inline-block;font:700 11px/1 ui-monospace,monospace;letter-spacing:.08em;color:#f3eee0;background:#c84a1e;padding:5px 10px;border-radius:3px;margin:10px 0 4px}
.subtitle{font-size:18px;color:#6b6b6b;font-style:italic;margin:8px 0 20px}
h2{font-size:18px;font-weight:700;margin:34px 0 12px;padding-bottom:8px;border-bottom:2px solid #c84a1e}
.meta{font-size:13px;color:#6b6b6b;margin:0 0 6px}
.canon{font-size:14px;color:#1a1a1a;margin:0 0 10px;max-width:78ch}
table{width:100%;border-collapse:collapse;font-size:13px;margin:12px 0 24px}
th,td{text-align:left;padding:10px 14px;border-bottom:1px solid #d4cfc1}
th{background:#f3eee0;font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:.04em}
td.mono{font-family:ui-monospace,monospace;color:#c84a1e;font-weight:600}
.surfaces{font-family:ui-monospace,monospace;font-size:12px;background:#1a1a1a;color:#f3eee0;padding:16px 20px;border-radius:4px;margin:12px 0 24px;white-space:pre;overflow-x:auto;line-height:1.8}
form{display:grid;gap:8px;max-width:460px;margin:12px 0 24px}label{font-size:12px;color:#6b6b6b}input,textarea{font:inherit;font-size:14px;padding:8px 10px;border:1px solid #d4cfc1;border-radius:3px;background:#fff;width:100%}button{font:700 12px/1 ui-monospace,monospace;letter-spacing:.06em;color:#f3eee0;background:#c84a1e;border:0;padding:9px 14px;border-radius:3px;cursor:pointer;justify-self:start}
footer{margin-top:64px;padding-top:28px;border-top:1px solid #d4cfc1;font-size:12px;color:#6b6b6b;line-height:1.7}
footer a{color:#2455a3;text-decoration:none}.footer-brand{font-size:15px;font-weight:700;color:#1a1a1a;margin-bottom:8px}
.cols{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:22px;margin:16px 0}
.cols h4{font-size:11px;text-transform:uppercase;letter-spacing:.1em;margin-bottom:8px;color:#1a1a1a}
.cols a{display:block;margin-bottom:5px}</style></head><body>
<div class="container">
  <div class="topbar">Microsoft Azure · France Central · Paris</div>
  <p class="eyebrow">CPG-68000 · CPG application profile of ACM-68000 · Open · MIT</p>
  <h1>CPG-68000<span class="host">${APEX}</span></h1>
  <div class="badge">STATE: RESOLVED · LIVE</div>
  <p class="subtitle">The CPG application profile of ACM-68000. Same seven signals, same numbers, same locked meanings.</p>
  <p class="meta">GreenCore Solutions Corp. · Microsoft AI Cloud Partner · Open protocol · MIT · Wire emission unchanged: ACM- signals</p>
  <p class="canon">${SPEC.what}</p>
  <p class="meta">Rule: ${SPEC.rule}. Resolution: ${SPEC.resolution}. ${SPEC.scope}</p>
  <h2>The Seven Signals — CPG-68000</h2>
  <table><thead><tr><th>Signal</th><th>State</th><th>Resolves to</th></tr></thead><tbody>
${SIGNALS.map(s => `      <tr><td class="mono">${s.cpg}</td><td>${s.state}</td><td class="mono">${s.code}</td></tr>`).join("\n")}
  </tbody></table>
  <p class="meta">Parent GTIN 990832300716 · each signal carries its GSC-registered GTIN (see /signals.json) · Seven. Append-only. Non-breaking. Non-substitutable.</p>
  <h2>Connection Test</h2>
  <div class="surfaces"><span style="color:#8b8378"># Connection test — resolves the profile register on this door
# No API key. No account. No setup. Same numbers, same meanings, in one round trip.</span>
$ curl "https://${APEX}/signals.json"
{
  "protocol": "ACM-68000",
  "door": "CPG-68000",
  "signal_count": 7,
  "signals": [ { "code": "ACM-451", "cpg": "CPG-451", "state": "ESCALATE", "gtin": "990832300730", ... } ],
  "parent_gtin": "990832300716"
}</div>
  <h2>Machine Surfaces</h2>
  <p class="meta">/protocol.json · /signals.json · /health.json · /llms.txt · /index.md · /auth.md<br>/.well-known/agent-card.json · /.well-known/mcp/server-card.json · /.well-known/ai-catalog.json · /.well-known/agent-skills/index.json · /.well-known/api-catalog</p>
  <h2>Identity Beacons</h2>
  <p class="meta">19 GSC headers (the Nineteen, gen-2 set) on every response, including x-gsc-x402: ready. Per-request x-gsc-timestamp and x-gsc-nonce regenerate as proof-of-liveness. Canon resolves live on ${BEACON} (list_signals, resolve_signal) and on acm-68000.ai / acm-68000.org.</p>
  <h2>Contact</h2>
  <p class="meta">A human answers — the GSC Trading Desk (humans' channel). Agents use Instant Messaging: ${INBOUND}.</p>
  <form action="https://formspree.io/f/xjybzzdz" method="POST"><input type="hidden" name="_next" value="https://cpg-68000.ai/"><label for="f-name">Name</label><input id="f-name" type="text" name="name" required autocomplete="name"><label for="f-email">Work email</label><input id="f-email" type="email" name="email" required autocomplete="email"><label for="f-msg">Your question about the signals</label><textarea id="f-msg" name="message" rows="4" required></textarea><button type="submit">SEND TO THE GSC TRADING DESK</button></form>
  <footer>
  <p class="footer-brand">GreenCore Solutions Corp.</p>
  <p>Microsoft AI Cloud Partner · D-U-N-S ${DUNS}</p>
  <p style="margin-top:6px">Broadcast: <a href="https://x.com/SM_ECO_10060">@SM_ECO_10060 on X</a></p>
  <div class="cols">
    <div><h4>Estate</h4><a href="https://gsc-em.com/">gsc-em.com</a><a href="https://gsc-marketplace.ai/">gsc-marketplace.ai</a><a href="${TRADING_DESK}">gsc-navigator.ai</a><a href="https://dpuone.ai/">dpuone.ai — the ledger</a></div>
    <div><h4>Follow</h4><a href="https://x.com/GSC_Rail_ai">@GSC_Rail_ai</a><a href="https://x.com/ACM68000">@ACM68000</a><a href="https://x.com/SM_AIO_CPG">@SM_AIO_CPG</a><a href="https://x.com/SM_ECO_10060">@SM_ECO_10060</a></div>
  </div>
  <p>Hosting: Microsoft Azure · agents resident in 18 countries worldwide</p>
  <p style="margin-top:8px">Canonical standards: <a href="https://sm-aio-cpg.org/">sm-aio-cpg</a> · <a href="https://sm-esg-cpg.org/">sm-esg-cpg</a> · <a href="https://cpg-68000.ai/">cpg-68000</a> · <a href="https://instantagentmessage.ai/">instantagentmessage</a> · <a href="https://acm-68000.ai/">acm-68000</a></p>
  <p style="margin-top:8px">This site does not use cookies for tracking, advertising, or analytics.</p>
  <p style="margin-top:10px;color:#6b6b6b">© 2026 GreenCore Solutions Corp. (GSC) · Protocol operator: GSC</p>
</footer>
</div><script src="/webmcp.js" defer></script>
</body></html>`;
'''
s = s[:start] + new_html + s[end:]
s = s.replace('const VERSION = "1.1.0";','const VERSION = "1.2.0";',1)
assert s.count('formspree.io/f/xjybzzdz') == 4, s.count('formspree.io/f/xjybzzdz')
assert 'ng-topbar' not in s and 'fonts.googleapis' not in s
io.open(p,'w',encoding='utf-8',newline='\n').write(s); print("door re-cut to machine-doc register; xjybzzdz x4; no nav/logo/fonts")
