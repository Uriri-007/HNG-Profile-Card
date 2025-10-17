function tickerTimer() {
  const date = new Date()
  document.querySelector("#time-display").textContent = date.getTime() || "Loading time..."
}

document.addEventListener("DOMContentLoaded", () => setInterval(tickerTimer, 100))
