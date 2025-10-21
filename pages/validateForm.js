const nameInput = document.getElementById("full-name");
const nameErrorSpan = document.getElementById("name-error-messsage");
const emailInput = document.getElementById("email");
const emailErrorSpan = document.getElementById("email-error-messsage");
const subjectInput = document.getElementById("subject");
const subjectErrorSpan = document.getElementById("subject-error-messsage");
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

function displayErrorUI(elem) {
  elem.style.display = "block";
    setTimeout(() => {
      elem.style.display = "none";
    }, 2000);
}


formElement.addEventListener("submit", (event) => {
  event.preventDefault()
  if(!isNameValid(nameInput.value)) {
    displayErrorUI(nameErrorSpan)
    return
  } else if(!isEmailValid(emailInput.value)) {
    displayErrorUI(emailErrorSpan)
    return
  } else if(!isSubjectValid(subjectInput.value)) {
    displayErrorUI(subjectErrorSpan)
    return
  } else if(!isMessageValid(messageInput.value)) {
    displayErrorUI(messageErrorSpan)
    return
  } else {

  }
})