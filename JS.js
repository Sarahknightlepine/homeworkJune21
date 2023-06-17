var emailEl = document.querySelector("#email");
var phoneEl = document.querySelector("#phone");
var submitEl = document.querySelector("#submit");

function generatePassword(email, phone) {
  // Remove any non-alphanumeric characters from the email and phone
  email = email.replace(/[^a-zA-Z0-9]/g, '');
  phone = phone.replace(/[^a-zA-Z0-9]/g, '');

  // Generate a password using a combination of email and phone
  var password = email.slice(0, 3) + phone.slice(-3) + Math.floor(Math.random() * 10000);

  return password;
}

function createPassword(event) {
  event.preventDefault();
  var email = emailEl.value;
  var phone = phoneEl.value;
  var password = generatePassword(email, phone);

  document.querySelector("#generated-password").textContent = password;
}

submitEl.addEventListener("click", createPassword);
