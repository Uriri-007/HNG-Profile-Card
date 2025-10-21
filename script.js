const nameInput = document.getElementById("full-name");
const nameErrorSpan = document.getElementById("name-error-messsage");
const emailInput = document.getElementById("email");
const emailErrorSpan = document.getElementById("email-error-message");
const subjectInput = document.getElementById("subject");
const subjectErrorSpan = document.getElementById("subject-error-messsage");
const messageInput = document.getElementById("message");
const messageErrorSpan = document.getElementById("message-error-response");
const formElement = document.querySelector("form")

function tickerTimer() {
  document.querySelector("#time-display").textContent =
    Date.now() || "Loading time...";
}
document.addEventListener("DOMContentLoaded", () =>
  setInterval(tickerTimer, 100)
);

function validateUserName(string) {
  const regex = /[!@#%^&*)(-+=_\d]/;
  if (regex.test(string) || string.trim() === "") {
    nameErrorSpan.style.display = "block";
    setTimeout(() => {
      nameErrorSpan.style.display = "none";
    }, 2000);
  }
}
nameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    validateUserName(event.target.value);
    event.target.focus()
  }
});

function validateUserEmail(string) {
  const regex = /[@]/;
  if (!regex.test(string) || string.trim() === "") {
    emailErrorSpan.style.display = "block";
    setTimeout(() => {
      emailErrorSpan.style.display = "none";
    }, 2000);
  }
}
emailInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    validateUserEmail(event.target.value);
  }
});

function validateUserSubject(string) {
  if(string.trim() === "") {
    subjectErrorSpan.style.display = "block";
    setTimeout(() => {
      subjectErrorSpan.style.display = "none";
    }, 2000);
  }
}
subjectInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    validateUserSubject(event.target.value)
  }
})


formElement.addEventListener("submit", (event) => {
  event.preventDefault()
})
