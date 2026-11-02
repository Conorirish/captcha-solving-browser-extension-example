const fixture = document.querySelector("[data-captcha-fixture]");
if (fixture) {
  const button = document.createElement("button");
  button.textContent = "Run authorized QA fixture";
  button.addEventListener("click", async () => {
    const response = await chrome.runtime.sendMessage({
      type: "SOLVE_AUTHORIZED_FIXTURE",
      authorizationRef: fixture.dataset.authorizationRef,
      targetUrl: location.href,
      imageBase64: fixture.dataset.imageBase64,
    });
    fixture.dataset.result = response.ok ? "fixture-ready" : "stopped";
  });
  fixture.after(button);
}
