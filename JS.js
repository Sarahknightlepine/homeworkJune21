var emailEl = document.querySelector("#email");
var phoneEl = document.querySelector("#phone");
var submitEl = document.querySelector("#submit");

function generatePassword(email, phone, type, length) {
  // Remove any non-alphanumeric characters from the email and phone
  email = email.replace(/[^a-zA-Z0-9]/g, '');
  phone = phone.replace(/[^a-zA-Z0-9]/g, '');

  // Generate a password using a combination of email and phone
  var password = email.slice(0, 3) + phone.slice(-3);

  var charset = '';
  if (type === 'lower') {
    charset = 'abcdefghijklmnopqrstuvwxyz';
  } else if (type === 'upper') {
    charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  } else if (type === 'special') {
    charset = '!@#$%^&*()';
  } else if (type === 'number') {
    charset = '0123456789';
  }

  while (password.length < length) {
    var randomChar = charset[Math.floor(Math.random() * charset.length)];
    password += randomChar;
  }

  return password;
}

function createPassword(event) {
  event.preventDefault();
  var email = emailEl.value;
  var phone = phoneEl.value;
  var type = document.querySelector("#password-type").value;
  var length = parseInt(document.querySelector("#password-length").value);
  var password = generatePassword(email, phone, type, length);

  document.querySelector("#generated-password").textContent = password;
}

submitEl.addEventListener("click", createPassword);
