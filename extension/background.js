chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message?.type !== "SOLVE_AUTHORIZED_FIXTURE") return false;
  fetch("http://127.0.0.1:8787/solve", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      authorizationRef: message.authorizationRef,
      targetUrl: message.targetUrl,
      imageBase64: message.imageBase64,
    }),
  }).then(async (response) => sendResponse({ok: response.ok, body: await response.json()}))
    .catch((error) => sendResponse({ok: false, body: {error: "companion_unavailable", message: error.message}}));
  return true;
});
