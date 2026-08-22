// ============================================================
// cpg-68000.ai — CPG-68000 minimal spec door  v1.0.0  (gen-2, born with THE NINETEEN)
// GreenCore Solutions Corp.
// The door states the standard and serves the seven signals; canon continues to
// resolve on acm-68000.ai / .org and mcp.cpgagentprotocols.ai. Apex family only:
// cpg-68000.ai canonical; .com/.io/.org + www 308 → apex (POST-safe).
// ============================================================
import express from "express";
import crypto from "node:crypto";

const VERSION = "1.0.0";
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

const SIGNALS = [
  { code: "ACM-000", state: "NOT_APPLICABLE", gtin: "990832300785", action: "No action required." },
  { code: "ACM-200", state: "ALLOW", gtin: "990832300778", action: "Execute the transaction." },
  { code: "ACM-300", state: "CONDITIONAL", gtin: "990832300761", action: "Evaluate before proceeding." },
  { code: "ACM-403", state: "RESTRICT", gtin: "990832300754", action: "Halt transaction." },
  { code: "ACM-404", state: "NOT_FOUND", gtin: "990832300747", action: "Abort transaction." },
  { code: "ACM-451", state: "ESCALATE", gtin: "990832300730", action: "Route to a human." },
  { code: "ACM-500", state: "SYSTEM_ERROR", gtin: "990832300723", action: "Retry or escalate." },
];
const SPEC = {
  standard: "CPG-68000",
  title: "CPG-68000 — the seven-signal procurement protocol for AI Agents (gen-2 door)",
  what: "CPG-68000 is the NextGen door for GSC's deterministic procurement signal protocol: seven signals, one meaning each, GS1-anchored (each signal carries a GSC-registered GTIN), append-only, non-substitutable. A buyer-side AI Agent reads one signal and knows what to do — execute, evaluate, halt, abort, escalate to a human. Canon value on the wire stays ACM-68000 (header x-gsc-protocol); the full canon resolves on acm-68000.ai / acm-68000.org and the standards beacon.",
  parent_gtin: "990832300716",
  canon: { ai: "https://acm-68000.ai", org: "https://acm-68000.org", beacon: BEACON, beacon_tools: ["list_signals", "resolve_signal", "get_protocol"] },
  scope: "Apex family only (cpg-68000.ai/.com/.io/.org). The 28 signal-door zones (acm-000 … acm-500 × four TLDs) remain on the ACM-68000 canon until the ACM redo program ships — CEO-sequenced.",
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

const html = () => `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CPG-68000 — the seven-signal procurement protocol for AI Agents | GreenCore Solutions Corp.</title><meta name="description" content="CPG-68000: the NextGen door for GSC's deterministic seven-signal procurement protocol (ACM-68000 canon). Seven signals, one meaning each, GS1-anchored, append-only."><link rel="canonical" href="https://${APEX}/">
<link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400..800&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>:root{--orange:#F38020;--ink:#141414;--grey:#6E6E6E;--hair:#ECE9E3;--panel:#F7F6F3}*{margin:0;padding:0;box-sizing:border-box}body{font-family:Inter,system-ui,sans-serif;color:var(--ink);background:#fff;font-size:17px;line-height:1.65;padding-top:62px}.wrap{max-width:1080px;margin:0 auto;padding:0 24px}h1,h2{font-family:Archivo,sans-serif;line-height:1.12;letter-spacing:-.01em}a{color:var(--orange);text-decoration:none}.mono{font-family:'IBM Plex Mono',monospace}.eyebrow{font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--orange);font-weight:500}section{padding:70px 0;border-top:1px solid var(--hair)}.hero{padding:140px 0 70px;border-top:0}.hero h1{font-size:clamp(38px,6vw,64px);font-weight:700;margin:14px 0 0}.hero .sub{margin:16px 0 0;font-size:21px;font-weight:600;color:var(--orange);max-width:40ch}.hero .mech{margin:24px 0 0;max-width:66ch}.ng-topbar{position:fixed;top:0;left:0;right:0;background:rgba(255,255,255,.96);backdrop-filter:blur(6px);border-bottom:1px solid var(--hair);z-index:100}.ng-bar{max-width:1080px;margin:0 auto;padding:0 24px;height:62px;display:flex;align-items:center;justify-content:space-between;gap:14px}.ng-lockup{display:flex;align-items:center;gap:10px}.ng-lockup .mark{width:34px;height:34px;fill:#141414}.ng-wordmark{font-family:Archivo,sans-serif;font-weight:700;font-size:19px;color:#141414}.ng-tabs{display:flex;gap:22px;flex-wrap:wrap}.ng-tabs a{font-weight:500;font-size:14px;letter-spacing:.06em;color:var(--grey)}table{width:100%;border-collapse:collapse;margin-top:30px}td,th{padding:14px 12px;border-top:1px solid var(--hair);text-align:left;vertical-align:top;font-size:15px}th{font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:var(--grey)}td:first-child{font-family:'IBM Plex Mono',monospace;color:var(--orange);font-weight:500;white-space:nowrap}.duo{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:34px}.card{border:1px solid var(--hair);border-radius:12px;background:var(--panel);padding:26px 24px}.card h3{font-family:Archivo,sans-serif;font-size:19px;margin-bottom:10px}footer{border-top:1px solid var(--hair);padding:54px 0 62px;font-size:13px;color:var(--grey);line-height:1.8}@media(max-width:760px){.duo{grid-template-columns:1fr}.ng-tabs{gap:12px}.ng-tabs a{font-size:12px}}</style></head><body>
<div class="ng-topbar"><div class="ng-bar"><a class="ng-lockup" href="/"><svg class="mark" viewBox="0 0 100 100" aria-hidden="true"><path fill-rule="evenodd" d="M50 5a45 45 0 1 0 0 90 45 45 0 0 0 0-90zm0 24a21 21 0 1 1 0 42 21 21 0 0 1 0-42z"/></svg><span class="ng-wordmark">CPG-68000</span></a><nav class="ng-tabs"><a href="https://gsc-em.com">HOME</a><a href="https://gsc-agency.ai">AGENCY</a><a href="https://brands.gsc-agency.ai">BRANDS</a><a href="https://gsc-foundry.ai">FOUNDRY</a><a href="https://gsc-global.ai">GLOBAL</a><a href="https://gsc-investor.ai">INVESTOR</a></nav></div></div>
<header class="hero"><div class="wrap"><div class="eyebrow">CPG-68000 · GEN-2 DOOR · SEVEN SIGNALS</div><h1>One signal. One meaning.</h1><p class="sub">The seven-signal procurement protocol for AI Agents.</p><p class="mech">${SPEC.what}</p></div></header>
<section><div class="wrap"><div class="eyebrow">The seven signals</div><table><tr><th>Signal</th><th>State</th><th>GSC-registered GTIN</th><th>Buyer-side action</th></tr>${SIGNALS.map(s => `<tr><td>${s.code}</td><td>${s.state}</td><td class="mono">${s.gtin}</td><td>${s.action}</td></tr>`).join("")}</table><p style="margin-top:18px;font-size:14px;color:var(--grey)">Parent GTIN <span class="mono">990832300716</span> · GS1 Canada GEPIR · D-U-N-S ${DUNS}. Seven. Append-only. Non-breaking. Non-substitutable.</p></div></section>
<section><div class="wrap"><div class="eyebrow">Where the canon resolves</div><div class="duo"><div class="card"><h3>ACM-68000 canon</h3><p><a href="https://acm-68000.ai" class="mono">acm-68000.ai</a> · <a href="https://acm-68000.org" class="mono">acm-68000.org</a> · live over MCP on <a href="${BEACON}" class="mono">mcp.cpgagentprotocols.ai</a> (<span class="mono">list_signals</span>, <span class="mono">resolve_signal</span>).</p></div><div class="card"><h3>Scope of this door</h3><p>${SPEC.scope}</p></div></div></div></section>
<section><div class="wrap"><div class="eyebrow">ACM-451 — a human</div><div class="duo"><div class="card"><h3>Instant Messaging for agents</h3><p>Declared by <span class="mono">x-gsc-inbound</span> on every GSC surface: <span class="mono">${INBOUND}</span> → the transaction MCP. Typed, identified, ticketed, human-signed.</p></div><div class="card"><h3>GSC Trading Desk</h3><p>The humans' channel, informed by Navigator. <a href="${TRADING_DESK}">Reach the Trading Desk →</a></p></div></div></div></section>
<footer><div class="wrap">Broadcast: @SM_ECO_10060 on X<br>Hosting: Microsoft Azure · agents resident in 18 countries worldwide<br>Standards spine: <a href="https://sm-aio-cpg.org" class="mono">sm-aio-cpg.org</a> · <a href="https://sm-esg-cpg.org" class="mono">sm-esg-cpg.org</a> · <span class="mono">cpg-68000.ai</span> · <a href="https://instantagentmessage.ai" class="mono">instantagentmessage.ai</a> · machine: <a href="/llms.txt">llms.txt</a> · <a href="/signals.json">signals.json</a> · <a href="/protocol.json">protocol.json</a><br>This site does not use cookies for tracking, advertising, or analytics.<br>© 2026 GreenCore Solutions Corp. (GSC) · Protocol operator: GSC · D-U-N-S ${DUNS} · Microsoft AI Cloud Partner</div></footer>
<script src="/webmcp.js" defer></script></body></html>`;
const md = () => `# CPG-68000 — the seven-signal procurement protocol for AI Agents\n\n> ${APEX} · gen-2 door\n\n${SPEC.what}\n\n## Signals\n\n${SIGNALS.map(s => `- ${s.code} ${s.state} · GTIN ${s.gtin} · ${s.action}`).join("\n")}\n\nParent GTIN 990832300716. Canon: https://acm-68000.ai · https://acm-68000.org · ${BEACON}\n\n${SPEC.scope}\n\nDoors: agents → ${INBOUND}; humans → ${TRADING_DESK}\n\nOperator: ${OP} · D-U-N-S ${DUNS}\n`;

app.get("/", (req, res) => { const acc = req.headers.accept || ""; if (/text\/markdown/i.test(acc)) return send(res, "text/markdown; charset=utf-8", md()); if (/application\/json/i.test(acc.split(",")[0])) return json(res, SPEC); send(res, "text/html; charset=utf-8", html()); });
app.get("/index.md", (req, res) => send(res, "text/markdown; charset=utf-8", md()));
app.get("/protocol.json", (req, res) => json(res, SPEC));
app.get("/signals.json", (req, res) => json(res, { protocol: "ACM-68000", door: "CPG-68000", signal_count: 7, signals: SIGNALS, parent_gtin: "990832300716" }));
app.get(["/health", "/health.json"], (req, res) => json(res, { status: "ok", host: hostOf(req), version: VERSION, standard: "CPG-68000", protocol: "ACM-68000", operator: OP, x402: "ready", mcp: BEACON }));
app.get("/robots.txt", (req, res) => send(res, "text/plain", `# ${hostOf(req)} — CPG-68000 · ${OP}\nUser-agent: *\nContent-Signal: search=yes, ai-input=yes, ai-train=yes\nAllow: /\nUser-agent: GPTBot\nAllow: /\nUser-agent: OAI-SearchBot\nAllow: /\nUser-agent: ClaudeBot\nAllow: /\nUser-agent: Google-Extended\nAllow: /\nUser-agent: PerplexityBot\nAllow: /\nSitemap: https://${hostOf(req)}/sitemap.xml\n`));
app.get("/sitemap.xml", (req, res) => send(res, "application/xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${["/", "/llms.txt", "/index.md", "/signals.json", "/protocol.json", "/auth.md"].map(u => `  <url><loc>https://${hostOf(req)}${u}</loc><lastmod>2026-08-22</lastmod></url>`).join("\n")}\n</urlset>\n`));
app.get("/llms.txt", (req, res) => send(res, "text/plain", `# ${hostOf(req)} — CPG-68000\n\n${SPEC.what}\n\nSignals: ${SIGNALS.map(s => `${s.code}=${s.state} (GTIN ${s.gtin})`).join(" · ")}\nParent GTIN: 990832300716\nCanon: https://acm-68000.ai · https://acm-68000.org · MCP ${BEACON} (list_signals, resolve_signal)\nScope: ${SPEC.scope}\nSpine: ${SPEC.spine.join(" · ")}\nDoors: agents ${INBOUND} → https://mcp.cpghumanintheloop.ai/mcp · humans ${TRADING_DESK}\nSelection surface: https://mcp.gsc-marketplace.ai/mcp (get_acm_68000)\n\nOperator: ${OP} | D-U-N-S ${DUNS} | Microsoft AI Cloud Partner\nHosting: Microsoft Azure · agents resident in 18 countries worldwide\n`));
app.get("/auth.md", (req, res) => send(res, "text/markdown; charset=utf-8", `# auth.md — ${hostOf(req)} (${OP})\n\n## Posture\n\nThis door is **open and free**: no authentication, no payment, no 402 challenge. x402 is declared as a capability (\`x-gsc-x402: ready\`) with no terms.\n\n## Protected resource\n\n- Resource: https://${hostOf(req)}\n- Protected Resource Metadata: [/.well-known/oauth-protected-resource](/.well-known/oauth-protected-resource)\n- Authorization server (Microsoft Entra): ${ISSUER}\n- AS metadata mirror: [/.well-known/oauth-authorization-server](/.well-known/oauth-authorization-server)\n\n## Agent registration (self-contained flow)\n\n- **Agent audience:** buyer-side and sourcing AI Agents reading CPG-68000 / ACM-68000 signals.\n- **Registration endpoint:** ${TRADING_DESK} — the GSC Trading Desk (human-reviewed; no self-serve dynamic client registration).\n- **Agents' channel:** Instant Messaging — ${INBOUND} → https://mcp.cpghumanintheloop.ai/mcp.\n- **Supported method — verified email:** GSC verifies the operator's email, then provisions credentials after review.\n- **Credential use:** Microsoft Entra OAuth 2.0 client credentials; Bearer token in the Authorization header. Revocation on request via the same endpoint.\n\n\`\`\`json\n${JSON.stringify({ agent_auth: { skill: `https://${hostOf(req)}/auth.md`, register_uri: TRADING_DESK, identity_types_supported: ["identity_assertion"], identity_assertion: { assertion_types_supported: ["verified_email"], credential_types_supported: ["oauth2_client_credentials"] }, claim_uri: TRADING_DESK } }, null, 2)}\n\`\`\`\n\nOperator: ${OP} · D-U-N-S ${DUNS}\n`));
app.get("/webmcp.js", (req, res) => send(res, "text/javascript; charset=utf-8", `// CPG-68000 WebMCP tools (real data; no stubs)\n(function(){function build(){return[\n{name:"cpg68000_resolve_signal",description:"Resolve a CPG-68000 / ACM-68000 signal code to its state, GSC GTIN and buyer-side action.",inputSchema:{type:"object",properties:{code:{type:"string",description:"e.g. ACM-451"}},required:["code"]},execute:async function(i){var r=await fetch("https://${APEX}/signals.json");var j=await r.json();var c=String(i.code||"").toUpperCase();var s=j.signals.filter(function(x){return x.code===c;})[0];return s||{signal:"ACM-404",state:"NOT_FOUND"};}},\n{name:"cpg68000_list_signals",description:"List the seven signals.",inputSchema:{type:"object",properties:{}},execute:async function(){var r=await fetch("https://${APEX}/signals.json");return await r.json();}}\n];}try{var mc=navigator.modelContext;if(!mc)return;var t=build();if(typeof mc.registerTool==="function"){t.forEach(function(x){mc.registerTool(x);});}else if(typeof mc.provideContext==="function"){mc.provideContext({tools:t});}}catch(e){}})();\n`));
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
  skills: [{ id: "resolve-signal", name: "Resolve a signal", description: "Any of the seven CPG-68000 / ACM-68000 signals to state, GTIN and buyer-side action.", tags: ["cpg","signals","procurement"] }, { id: "escalate-to-human", name: "Escalate to a human", description: "ACM-451 — the two GSC doors.", tags: ["hitl","escalation"] }],
  protocol: "ACM-68000", registry: REGISTRY, mcp_endpoint: BEACON }));
app.get("/.well-known/ai-catalog.json", (req, res) => json(res, { specVersion: "1.0", host: { displayName: "CPG-68000", identifier: `did:web:${hostOf(req)}` }, entries: [
  { identifier: `urn:air:${hostOf(req)}:standard:cpg-68000`, displayName: "CPG-68000 — seven-signal procurement protocol (spec door)", type: "application/json", url: `https://${hostOf(req)}/protocol.json`, capabilities: ["signal-record","deterministic-signals"], description: SPEC.what, representativeQueries: ["what are the seven CPG-68000 signals", "what must a buyer-side AI agent do on ACM-451", "which GTIN anchors ACM-200"] },
  { identifier: `urn:air:${hostOf(req)}:beacon:standards-mcp`, displayName: "CPG Agent Protocols — standards beacon (MCP)", type: "application/mcp-server+json", url: BEACON, capabilities: ["list_signals","resolve_signal","get_protocol","get_header_canon"], description: "Live resolution of the signals and the GSC protocol family over MCP (streamable-http). Operated by GreenCore Solutions Corp.", representativeQueries: ["resolve ACM-300", "list the GSC agent protocols"] } ] }));
app.get("/.well-known/agent.json", (req, res) => { nineteen(res, "ACM-404", "NOT_FOUND"); res.status(404).json({ error: "not_found", note: "A2A card is at /.well-known/agent-card.json" }); });
app.use((req, res) => { nineteen(res, "ACM-404", "NOT_FOUND"); res.status(404).json({ error: "not_found", signal: "ACM-404", state: "NOT_FOUND", node: hostOf(req), operator: OP, canon: "https://acm-68000.ai", trading_desk: TRADING_DESK }); });
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`CPG-68000 door v${VERSION} listening on :${PORT}`));
