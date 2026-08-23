// ============================================================
// cpg-68000.ai — CPG-68000 minimal spec door  v1.0.0  (gen-2, born with THE NINETEEN)
// GreenCore Solutions Corp.
// The door states the standard and serves the seven signals; canon continues to
// resolve on acm-68000.ai / .org and mcp.cpgagentprotocols.ai. Apex family only:
// cpg-68000.ai canonical; .com/.io/.org + www 308 → apex (POST-safe).
// ============================================================
import express from "express";
import crypto from "node:crypto";

const VERSION = "1.3.0";
const OP = "GreenCore Solutions Corp.";
const DUNS = "24-336-6774";
const APEX = "cpg-68000.ai";
const FAMILY = ["cpg-68000.com", "cpg-68000.io", "cpg-68000.org"];
const REGISTRY = "io.github.greencore-solutions/gsc-marketplace";
const MCP_SERVER = "mcp.gsc-marketplace.ai";
const BEACON = "https://mcp.cpgagentprotocols.ai/mcp";
const TRADING_DESK = "https://gsc-navigator.ai/";
const INBOUND = "https://x-gsi.ai/ingest";
const TENANT = "54939635-2f2e-465a-8526-a907cb3c8ebd";
const ISSUER = `https://login.microsoftonline.com/${TENANT}/v2.0`;
const LINK = `</.well-known/api-catalog>; rel="api-catalog", </llms.txt>; rel="describedby", <${BEACON}>; rel="service"`;

// CPG-68000 FRAMING CANON (CEO-locked 2026-08-22): CPG-68000 is the CPG application profile of
// ACM-68000 (open, MIT, GreenCore Solutions Corp.). Same seven signals, same numbers, same locked
// meanings. The prefix scopes the domain; the number carries the semantics. No new signals, no
// renumbering, no meaning drift; any of the seven CPG- codes resolves to its ACM- definition; anything
// outside the seven falls back to the base protocol. Wire emission unchanged: gen-2 surfaces emit ACM- signals.
const SIGNALS = [
  { code: "ACM-000", cpg: "CPG-000", state: "NOT_APPLICABLE", gtin: "990832300785", action: "No action required." },
  { code: "ACM-200", cpg: "CPG-200", state: "ALLOW", gtin: "990832300778", action: "Execute the transaction." },
  { code: "ACM-300", cpg: "CPG-300", state: "CONDITIONAL", gtin: "990832300761", action: "Evaluate before proceeding." },
  { code: "ACM-403", cpg: "CPG-403", state: "RESTRICT", gtin: "990832300754", action: "Halt transaction." },
  { code: "ACM-404", cpg: "CPG-404", state: "NOT_FOUND", gtin: "990832300747", action: "Abort transaction." },
  { code: "ACM-451", cpg: "CPG-451", state: "ESCALATE", gtin: "990832300730", action: "Route to a human." },
  { code: "ACM-500", cpg: "CPG-500", state: "SYSTEM_ERROR", gtin: "990832300723", action: "Retry or escalate." },
];
const SPEC = {
  standard: "CPG-68000",
  title: "CPG-68000 — the CPG application profile of ACM-68000",
  profile_of: "ACM-68000", license: "MIT", open_protocol: true,
  what: "CPG-68000 is the CPG application profile of ACM-68000 — open, MIT, GreenCore Solutions Corp. Same seven signals, same numbers, same locked meanings: CPG-000 NOT_APPLICABLE · CPG-200 ALLOW · CPG-300 CONDITIONAL · CPG-403 RESTRICT · CPG-404 NOT_FOUND · CPG-451 ESCALATE · CPG-500 SYSTEM_ERROR. The prefix scopes the domain; the number carries the semantics. No new signals, no renumbering, no meaning drift: any of the seven CPG- codes resolves to its ACM- definition, and anything outside the seven falls back to the base protocol. Wire emission is unchanged — GSC surfaces emit ACM- signals (x-gsc-signal); CPG- codes are the domain-scoped register this door teaches.",
  rule: "prefix scopes the domain; number carries the semantics",
  resolution: "Resolution: same number, same meaning — cpg-000→acm-000 · cpg-200→acm-200 · cpg-300→acm-300 · cpg-403→acm-403 · cpg-404→acm-404 · cpg-451→acm-451 · cpg-500→acm-500. Outside the seven → base protocol ACM-68000.",
  parent_gtin: "990832300716",
  canon: { ai: "https://acm-68000.ai", org: "https://acm-68000.org", beacon: BEACON, beacon_tools: ["list_signals", "resolve_signal", "get_protocol"] },
  scope: "Apex family: cpg-68000.ai/.com/.io/.org. The signal-door zones resolve on ACM-68000.",
  spine: ["SM-AIO-CPG", "SM-ESG-CPG", "CPG-68000", "IA-MESSAGE"],
  signals: SIGNALS,
  doors: { instant_messaging: { lane: "agents", inbound: INBOUND, mcp: "https://mcp.cpghumanintheloop.ai/mcp" }, trading_desk: { lane: "humans", url: TRADING_DESK, informed_by: "Navigator" } },
  operator: OP, duns: DUNS, posture: "free — x402 declared as capability (x-gsc-x402: ready), no terms",
};

const hostOf = (req) => (req.headers.host || APEX).split(":")[0].toLowerCase();
function nineteen(res, signal = "ACM-200", state = "ALLOW") {
  res.set({
    "x-gsc-protocol": "ACM-68000", "x-gsc-classification": "ACM-SPARKS", "x-gsc-operator": OP,
    "x-gsc-microsoft-partner": "AI-Cloud-Partner-Program-Member", "x-gsc-duns": DUNS,
    "x-gsc-inbound": INBOUND, "x-gsc-trust-anchor": "dpuone.ai", "x-gsc-registry": REGISTRY, "x-gsc-mcp-server": MCP_SERVER,
    "x-gsc-agent-access": "MCP+A2A", "x-gsc-timestamp": new Date().toISOString(), "x-gsc-nonce": crypto.randomUUID(),
    "x-gsc-signal": signal, "x-gsc-state": state, "x-gsc-node": res.req ? hostOf(res.req) : APEX, "x-gsc-jurisdiction": "FR-ECO-10060",
    "x-gsc-product": "AI-Orderability-Agents+CPG-Marketplace",
    "x-gsc-fleet": "https://gsc-cpg.ai,https://gsc-a2a.ai,https://gsc-a2a.io,https://gsc-fleet.ai", "x-gsc-x402": "ready",
    "X-Content-Type-Options": "nosniff", "Strict-Transport-Security": "max-age=31536000; includeSubDomains", "Access-Control-Allow-Origin": "*", "Link": LINK,
  });
}
const ENTRA = { issuer: ISSUER, authorization_endpoint: `https://login.microsoftonline.com/${TENANT}/oauth2/v2.0/authorize`, token_endpoint: `https://login.microsoftonline.com/${TENANT}/oauth2/v2.0/token`,
  device_authorization_endpoint: `https://login.microsoftonline.com/${TENANT}/oauth2/v2.0/devicecode`, jwks_uri: `https://login.microsoftonline.com/${TENANT}/discovery/v2.0/keys`,
  userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", end_session_endpoint: `https://login.microsoftonline.com/${TENANT}/oauth2/v2.0/logout`,
  token_endpoint_auth_methods_supported: ["client_secret_post","private_key_jwt","client_secret_basic"], response_modes_supported: ["query","fragment","form_post"],
  subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code","id_token","code id_token","id_token token"],
  scopes_supported: ["openid","profile","email","offline_access"], request_uri_parameter_supported: false,
  claims_supported: ["sub","iss","aud","exp","iat","auth_time","acr","nonce","preferred_username","name","tid","ver","at_hash","c_hash","email"],
  grant_types_supported: ["authorization_code","refresh_token","client_credentials","urn:ietf:params:oauth:grant-type:device_code"] };
const WBA = { keys: [{ kty:"OKP", crv:"Ed25519", kid:"gsc-wba-2026-08", x: process.env.GSC_WBA_X || "sHpu1sfipgobiFg6uTQfqikkJBSc-6j08VBxEhtFR8A", use:"sig", alg:"EdDSA", nbf:1755043200, exp:1818201600 }] };
const SKILLS = {
  "resolve-signal": ["Resolve any of the seven CPG-68000 / ACM-68000 procurement signals to its state and the action a buyer-side AI Agent must take.", `Signals: ${SIGNALS.map(s => `${s.code}=${s.state}`).join(", ")}.\nLive resolution: ${BEACON} (resolve_signal, list_signals). Each signal carries a GSC-registered GTIN; parent GTIN 990832300716.`],
  "escalate-to-human": ["ACM-451 ESCALATE — route anything that creates obligation to a human through GSC's two doors.", `Agents: Instant Messaging — ${INBOUND} → https://mcp.cpghumanintheloop.ai/mcp. Humans: the GSC Trading Desk — ${TRADING_DESK}. Nothing settles without a human signature.`],
};
const skillMd = (n, d, b) => `---\nname: ${n}\ndescription: ${d}\n---\n\n# ${n.replace(/-/g," ").replace(/\b\w/g, c => c.toUpperCase())}\n\n${b}\n`;
const sha = s => "sha256:" + crypto.createHash("sha256").update(s, "utf8").digest("hex");

const app = express();
app.set("trust proxy", true);
const REDIRECT = new Set([`www.${APEX}`, ...FAMILY.flatMap(h => [h, `www.${h}`])]);
app.use((req, res, next) => { const h = hostOf(req); if (REDIRECT.has(h)) { nineteen(res); return res.redirect(308, `https://${APEX}${req.originalUrl || "/"}`); } next(); });
const send = (res, type, body) => { nineteen(res); res.type(type).send(body); };
const json = (res, obj) => { nineteen(res); res.json(obj); };

const html = () => `<!doctype html><html lang="en"><head>
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
.canon{font-size:14px;color:#1a1a1a;margin:0 0 10px}
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
  <p class="meta">Resolution: same number, same meaning — cpg-000→acm-000 · cpg-200→acm-200 · cpg-300→acm-300 · cpg-403→acm-403 · cpg-404→acm-404 · cpg-451→acm-451 · cpg-500→acm-500. Apex family: cpg-68000.ai/.com/.io/.org.</p>
  <h2>The Seven Signals — CPG-68000</h2>
  <table><thead><tr><th>Signal</th><th>State</th><th>Resolves to</th></tr></thead><tbody>
${SIGNALS.map(s => `      <tr><td class="mono">${s.cpg}</td><td>${s.state}</td><td class="mono">${s.code}</td></tr>`).join("\n")}
  </tbody></table>
  <p class="meta">Parent GTIN 990832300716 · each signal carries its GSC-registered GTIN (see /signals.json) · Seven. Append-only. Non-breaking. Non-substitutable. The signal-door zones resolve on ACM-68000.</p>
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
const md = () => `# CPG-68000 — the CPG application profile of ACM-68000\n\n> ${APEX} · open · MIT · GreenCore Solutions Corp.\n\n${SPEC.what}\n\n## Signals\n\n${SIGNALS.map(s => `- ${s.cpg} = ${s.code} ${s.state} · GTIN ${s.gtin} · ${s.action}`).join("\n")}\n\nParent GTIN 990832300716. Canon: https://acm-68000.ai · https://acm-68000.org · ${BEACON}\n\n${SPEC.scope}\n\nDoors: agents → ${INBOUND}; humans → ${TRADING_DESK}\n\nOperator: ${OP} · D-U-N-S ${DUNS}\n`;

app.get("/", (req, res) => { const acc = req.headers.accept || ""; if (/text\/markdown/i.test(acc)) return send(res, "text/markdown; charset=utf-8", md()); if (/application\/json/i.test(acc.split(",")[0])) return json(res, SPEC); send(res, "text/html; charset=utf-8", html()); });
app.get("/index.md", (req, res) => send(res, "text/markdown; charset=utf-8", md()));
app.get("/protocol.json", (req, res) => json(res, SPEC));
app.get("/signals.json", (req, res) => json(res, { protocol: "ACM-68000", door: "CPG-68000", signal_count: 7, signals: SIGNALS, parent_gtin: "990832300716" }));
app.get(["/health", "/health.json"], (req, res) => json(res, { status: "ok", host: hostOf(req), version: VERSION, standard: "CPG-68000", protocol: "ACM-68000", operator: OP, x402: "ready", mcp: BEACON }));
app.get("/robots.txt", (req, res) => send(res, "text/plain", `# ${hostOf(req)} — CPG-68000 · ${OP}\nUser-agent: *\nContent-Signal: search=yes, ai-input=yes, ai-train=yes\nAllow: /\nUser-agent: GPTBot\nAllow: /\nUser-agent: OAI-SearchBot\nAllow: /\nUser-agent: ClaudeBot\nAllow: /\nUser-agent: Google-Extended\nAllow: /\nUser-agent: PerplexityBot\nAllow: /\nSitemap: https://${hostOf(req)}/sitemap.xml\n`));
app.get("/sitemap.xml", (req, res) => send(res, "application/xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${["/", "/llms.txt", "/index.md", "/signals.json", "/protocol.json", "/auth.md"].map(u => `  <url><loc>https://${hostOf(req)}${u}</loc><lastmod>2026-08-22</lastmod></url>`).join("\n")}\n</urlset>\n`));
app.get("/llms.txt", (req, res) => send(res, "text/plain", `# ${hostOf(req)} — CPG-68000\n\n${SPEC.what}\n\nSignals: ${SIGNALS.map(s => `${s.code}=${s.state} (GTIN ${s.gtin})`).join(" · ")}\nParent GTIN: 990832300716\nCanon: https://acm-68000.ai · https://acm-68000.org · MCP ${BEACON} (list_signals, resolve_signal)\nScope: ${SPEC.scope}\nSpine: ${SPEC.spine.join(" · ")}\nDoors: agents ${INBOUND} → https://mcp.cpghumanintheloop.ai/mcp · humans ${TRADING_DESK}\nSelection surface: https://mcp.gsc-marketplace.ai/mcp (get_acm_68000)\n\nOperator: ${OP} | D-U-N-S ${DUNS} | Microsoft AI Cloud Partner\nHosting: Microsoft Azure · agents resident in 18 countries worldwide\n`));
app.get("/auth.md", (req, res) => send(res, "text/markdown; charset=utf-8", `# auth.md — ${hostOf(req)} (${OP})\n\n## Posture\n\nThis door is **open and free**: no authentication, no payment, no 402 challenge. x402 is declared as a capability (\`x-gsc-x402: ready\`) with no terms.\n\n## Protected resource\n\n- Resource: https://${hostOf(req)}\n- Protected Resource Metadata: [/.well-known/oauth-protected-resource](/.well-known/oauth-protected-resource)\n- Authorization server (Microsoft Entra): ${ISSUER}\n- AS metadata mirror: [/.well-known/oauth-authorization-server](/.well-known/oauth-authorization-server)\n\n## Agent registration (self-contained flow)\n\n- **Agent audience:** buyer-side and sourcing AI Agents reading CPG-68000 / ACM-68000 signals.\n- **Registration endpoint:** ${TRADING_DESK} — the GSC Trading Desk (human-reviewed; no self-serve dynamic client registration). Intake on this surface (POST https://formspree.io/f/xjybzzdz with fields name, email, message) — human-reviewed by the GSC Trading Desk.\n- **Agents' channel:** Instant Messaging — ${INBOUND} → https://mcp.cpghumanintheloop.ai/mcp.\n- **Supported method — verified email:** GSC verifies the operator's email, then provisions credentials after review.\n- **Credential use:** Microsoft Entra OAuth 2.0 client credentials; Bearer token in the Authorization header. Revocation on request via the same endpoint.\n\n\`\`\`json\n${JSON.stringify({ agent_auth: { skill: `https://${hostOf(req)}/auth.md`, register_uri: TRADING_DESK, identity_types_supported: ["identity_assertion"], identity_assertion: { assertion_types_supported: ["verified_email"], credential_types_supported: ["oauth2_client_credentials"] }, claim_uri: TRADING_DESK } }, null, 2)}\n\`\`\`\n\nOperator: ${OP} · D-U-N-S ${DUNS}\n`));
app.get("/webmcp.js", (req, res) => send(res, "text/javascript; charset=utf-8", `// CPG-68000 WebMCP tools (real data; no stubs)\n(function(){function build(){return[\n{name:"cpg68000_resolve_signal",description:"Resolve a CPG-68000 / ACM-68000 signal code to its state, GSC GTIN and buyer-side action.",inputSchema:{type:"object",properties:{code:{type:"string",description:"e.g. ACM-451"}},required:["code"]},execute:async function(i){var r=await fetch("https://${APEX}/signals.json");var j=await r.json();var c=String(i.code||"").toUpperCase();var s=j.signals.filter(function(x){return x.code===c;})[0];return s||{signal:"ACM-404",state:"NOT_FOUND"};}},\n{name:"cpg68000_list_signals",description:"List the seven signals.",inputSchema:{type:"object",properties:{}},execute:async function(){var r=await fetch("https://${APEX}/signals.json");return await r.json();}},\n{name:"gsc_contact",description:"Send a message to the GSC Trading Desk through this surface's live contact endpoint (human-reviewed, HITL).",inputSchema:{type:"object",properties:{name:{type:"string"},email:{type:"string"},message:{type:"string"}},required:["name","email","message"]},execute:async function(i){var r=await fetch("https://formspree.io/f/xjybzzdz",{method:"POST",headers:{"Accept":"application/json","Content-Type":"application/json"},body:JSON.stringify(i)});return {status:r.status,ok:r.ok};}}\n];}try{var mc=navigator.modelContext;if(!mc)return;var t=build();if(typeof mc.registerTool==="function"){t.forEach(function(x){mc.registerTool(x);});}else if(typeof mc.provideContext==="function"){mc.provideContext({tools:t});}}catch(e){}})();\n`));
app.get("/.well-known/api-catalog", (req, res) => { nineteen(res); res.type("application/linkset+json").send(JSON.stringify({ linkset: [{ anchor: `https://${hostOf(req)}`, "service-desc": [{ href: BEACON, type: "application/json" }], "service-doc": [{ href: `https://${hostOf(req)}/llms.txt`, type: "text/plain" }], status: [{ href: `https://${hostOf(req)}/health.json` }] }] })); });
app.get("/.well-known/openid-configuration", (req, res) => json(res, ENTRA));
app.get("/.well-known/oauth-authorization-server", (req, res) => json(res, { ...ENTRA, agent_auth: { skill: `https://${hostOf(req)}/auth.md`, register_uri: TRADING_DESK, identity_types_supported: ["identity_assertion"], identity_assertion: { assertion_types_supported: ["verified_email"], credential_types_supported: ["oauth2_client_credentials"] }, claim_uri: TRADING_DESK } }));
app.get("/.well-known/oauth-protected-resource", (req, res) => json(res, { resource: `https://${hostOf(req)}`, authorization_servers: [ISSUER], scopes_supported: ["openid","profile","email","offline_access"], bearer_methods_supported: ["header"], resource_documentation: `https://${APEX}/` }));
app.get("/.well-known/http-message-signatures-directory", (req, res) => { nineteen(res); res.type("application/http-message-signatures-directory+json").send(JSON.stringify(WBA)); });
app.get("/.well-known/mcp/server-card.json", (req, res) => json(res, { serverInfo: { name: "cpg-agent-protocols", title: "CPG Agent Protocols — standards beacon (resolves CPG-68000 / ACM-68000 signals)", version: "1.0.0" }, transport: { type: "streamable-http", endpoint: BEACON }, capabilities: { tools: {} }, tools: ["list_protocols","get_protocol","list_signals","resolve_signal","list_sparks_dimensions","resolve_sparks_dimension","list_members","resolve_member","get_header_canon"], operator: OP, registry: "io.github.greencore-solutions/cpg-agent-protocols", note: "This door has no MCP of its own; signals resolve live on the standards beacon." }));
app.get("/.well-known/agent-skills/index.json", (req, res) => json(res, { "$schema": "https://schemas.agentskills.io/discovery/0.2.0/schema.json", skills: Object.entries(SKILLS).map(([n, [d, b]]) => ({ name: n, type: "skill-md", description: d, url: `/.well-known/agent-skills/${n}/SKILL.md`, digest: sha(skillMd(n, d, b)) })) }));
app.get("/.well-known/agent-skills/:name/SKILL.md", (req, res) => { const s = SKILLS[req.params.name]; if (!s) { nineteen(res, "ACM-404", "NOT_FOUND"); return res.status(404).json({ error: "not_found" }); } send(res, "text/markdown; charset=utf-8", skillMd(req.params.name, s[0], s[1])); });
app.get("/.well-known/agent-card.json", (req, res) => json(res, { protocolVersion: "0.3.0", name: "CPG-68000", description: SPEC.what, url: `https://${hostOf(req)}/`, version: VERSION, kind: "agent-card",
  provider: { organization: OP, url: "https://gsc-em.com" }, operator: { name: OP, url: "https://gsc-em.com", duns: DUNS, microsoft_partner: "Microsoft AI Cloud Partner" },
  capabilities: { streaming: false, pushNotifications: false }, defaultInputModes: ["application/json","text/plain"], defaultOutputModes: ["application/json","text/markdown"],
  supportedInterfaces: [{ url: BEACON, protocolBinding: "HTTP+JSON", transport: "streamable-http", description: "CPG Agent Protocols beacon (MCP) — resolves the signals" }, { url: `https://${hostOf(req)}/`, protocolBinding: "HTTP+JSON", transport: "HTTP+JSON" }],
  skills: [{ id: "resolve-signal", name: "Resolve a signal", description: "Any of the seven CPG-68000 / ACM-68000 signals to state, GTIN and buyer-side action.", tags: ["cpg","signals","procurement"] }, { id: "escalate-to-human", name: "Escalate to a human", description: "ACM-451 — the two GSC doors.", tags: ["hitl","escalation"] }, { id: "hitl-contact", name: "Human-in-the-Loop Contact", description: `Reach ${OP} through this surface's live, human-reviewed contact endpoint (POST https://formspree.io/f/xjybzzdz with fields name, email, message). Every transactional commit is human-signed via the GSC Trading Desk.`, tags: ["contact","hitl","registration"] }],
  protocol: "ACM-68000", registry: REGISTRY, mcp_endpoint: BEACON }));
app.get("/.well-known/ai-catalog.json", (req, res) => json(res, { specVersion: "1.0", host: { displayName: "CPG-68000", identifier: `did:web:${hostOf(req)}` }, entries: [
  { identifier: `urn:air:${hostOf(req)}:standard:cpg-68000`, displayName: "CPG-68000 — seven-signal procurement protocol (spec door)", type: "application/json", url: `https://${hostOf(req)}/protocol.json`, capabilities: ["signal-record","deterministic-signals"], description: SPEC.what, representativeQueries: ["what are the seven CPG-68000 signals", "what must a buyer-side AI agent do on ACM-451", "which GTIN anchors ACM-200"] },
  { identifier: `urn:air:${hostOf(req)}:beacon:standards-mcp`, displayName: "CPG Agent Protocols — standards beacon (MCP)", type: "application/mcp-server+json", url: BEACON, capabilities: ["list_signals","resolve_signal","get_protocol","get_header_canon"], description: "Live resolution of the signals and the GSC protocol family over MCP (streamable-http). Operated by GreenCore Solutions Corp.", representativeQueries: ["resolve ACM-300", "list the GSC agent protocols"] } ] }));
app.get("/.well-known/agent.json", (req, res) => { nineteen(res, "ACM-404", "NOT_FOUND"); res.status(404).json({ error: "not_found", note: "A2A card is at /.well-known/agent-card.json" }); });
app.use((req, res) => { nineteen(res, "ACM-404", "NOT_FOUND"); res.status(404).json({ error: "not_found", signal: "ACM-404", state: "NOT_FOUND", node: hostOf(req), operator: OP, canon: "https://acm-68000.ai", trading_desk: TRADING_DESK }); });
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`CPG-68000 door v${VERSION} listening on :${PORT}`));
