const MAX_IMAGE_LENGTH = 2_000_000;

export function validateSolveRequest(input, options = {}) {
  const allowedOrigins = new Set(options.allowedOrigins ?? ["http://qa.localhost"]);
  if (!input || typeof input !== "object") throw new TypeError("request body must be an object");
  const authorizationRef = String(input.authorizationRef ?? "").trim();
  if (!authorizationRef || authorizationRef.length > 120) throw new TypeError("authorizationRef is required");
  const targetUrl = new URL(String(input.targetUrl ?? ""));
  if (!allowedOrigins.has(targetUrl.origin)) throw new TypeError("target origin is not allowlisted");
  const imageBase64 = String(input.imageBase64 ?? "").trim();
  if (!imageBase64 || imageBase64.length > MAX_IMAGE_LENGTH || !/^[A-Za-z0-9+/=]+$/.test(imageBase64)) {
    throw new TypeError("imageBase64 must be bounded base64 data");
  }
  return Object.freeze({authorizationRef, targetUrl: targetUrl.href, imageBase64});
}

export function buildCreateTaskPayload(clientKey, request) {
  if (!clientKey || clientKey.length < 16) throw new TypeError("server-side client key is missing");
  return {
    clientKey,
    task: {type: "ImageToTextTask", body: request.imageBase64},
  };
}

export function publicAuditRecord(request, status) {
  return Object.freeze({
    authorizationRef: request.authorizationRef,
    targetOrigin: new URL(request.targetUrl).origin,
    status,
    retainedImage: false,
  });
}
