import http from "node:http";
import {publicAuditRecord, validateSolveRequest} from "./contract.mjs";

const PORT = Number(process.env.PORT ?? 8787);

export function createServer(options = {}) {
  const allowedOrigins = options.allowedOrigins ?? ["http://qa.localhost"];
  return http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    if (req.method !== "POST" || req.url !== "/solve") {
      res.writeHead(404).end(JSON.stringify({error: "not_found"}));
      return;
    }
    let raw = "";
    req.setEncoding("utf8");
    req.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 2_100_000) req.destroy();
    });
    req.on("end", () => {
      try {
        const request = validateSolveRequest(JSON.parse(raw), {allowedOrigins});
        const audit = publicAuditRecord(request, "fixture_ready");
        res.writeHead(200).end(JSON.stringify({
          mode: "fixture",
          message: "Validated locally; no provider call was made.",
          solution: {text: "FIXTURE_ONLY"},
          audit,
        }));
      } catch (error) {
        res.writeHead(400).end(JSON.stringify({error: "invalid_request", message: error.message}));
      }
    });
  });
}

if (import.meta.url === `file://${process.argv[1]}`) {
  createServer().listen(PORT, "127.0.0.1", () => console.log(`fixture companion listening on http://127.0.0.1:${PORT}`));
}
