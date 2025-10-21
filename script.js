function tickerTimer() {
  document.querySelector("#time-display").textContent =
    Date.now() || "Loading time...";
}
document.addEventListener("DOMContentLoaded", () =>
  setInterval(tickerTimer, 100)
);