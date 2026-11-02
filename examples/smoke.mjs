import {buildCreateTaskPayload, publicAuditRecord, validateSolveRequest} from "../src/contract.mjs";

const request = validateSolveRequest({
  authorizationRef: "QA-FIXTURE-2026",
  targetUrl: "http://qa.localhost/form",
  imageBase64: "RklYVFVSRQ==",
});
const payload = buildCreateTaskPayload("fixture-key-123456789", request);
console.log(JSON.stringify({
  providerPayload: {...payload, clientKey: "[REDACTED]"},
  audit: publicAuditRecord(request, "fixture_ready"),
}, null, 2));
