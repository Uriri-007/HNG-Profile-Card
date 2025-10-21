const nameInput = document.getElementById("full-name");
const nameErrorSpan = document.getElementById("name-error-message");
const emailInput = document.getElementById("email");
const emailErrorSpan = document.getElementById("email-error-message");
const subjectInput = document.getElementById("subject");
const subjectErrorSpan = document.getElementById("subject-error-message");
const messageInput = document.getElementById("message");
const messageErrorSpan = document.getElementById("message-error-response");
const formElement = document.querySelector("form")
const successDiv = document.getElementById("success-pop-up")


function isNameValid(string) {
  const regex = /[!@#%^&*)(-+=_\d]/;
  if (regex.test(string) || string.trim() === "") {
    return false
  }
  return true
}
function isEmailValid(string) {
  const regex = /[@]/;
  if (!regex.test(string) || string.trim() === "") {
    return false
  }
  return true
}
function isSubjectValid(string) {
  if(string.trim() === "") {
    return false
  }
  return true
}
function isMessageValid(string) {
  if(string.split(" ").length < 10) {
    return false
  }
  return true
}

function displayFeedbackUI(elem, isFlex = false) {
  elem.style.display = `${isFlex ? "flex" : "block"}`;
    setTimeout(() => {
      elem.style.display = "none";
    }, 2000);
}


formElement.addEventListener("submit", (event) => {
  event.preventDefault()
  if(!isNameValid(nameInput.value)) {
    displayFeedbackUI(nameErrorSpan)
    return
  } else if(!isEmailValid(emailInput.value)) {
    displayFeedbackUI(emailErrorSpan)
    return
  } else if(!isSubjectValid(subjectInput.value)) {
    displayFeedbackUI(subjectErrorSpan)
    return
  } else if(!isMessageValid(messageInput.value)) {
    displayFeedbackUI(messageErrorSpan)
    return
  } else {
    displayFeedbackUI(successDiv, true)
  }
  event.target.reset()
})