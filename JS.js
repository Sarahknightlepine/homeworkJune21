// Generate password
function generatePassword() {
  const lengthInput = document.getElementById('length');
  const lowercaseCheckbox = document.getElementById('lowercase');
  const uppercaseCheckbox = document.getElementById('uppercase');
  const numericCheckbox = document.getElementById('numeric');
  const specialCheckbox = document.getElementById('special');

  const length = lengthInput.value;

  // Check if the length is within the valid range
  if (length < 8 || length > 128) {
    alert('Please choose a password length between 8 and 128 characters.');
    return; // Stop generating the password
  }

  const includeLowercase = lowercaseCheckbox.checked;
  const includeUppercase = uppercaseCheckbox.checked;
  const includeNumeric = numericCheckbox.checked;
  const includeSpecial = specialCheckbox.checked;

  let charSet = '';

  if (includeLowercase) {
    charSet += lowercaseLetters;
    console.log('Lowercase characters included');
  }

  if (includeUppercase) {
    charSet += uppercaseLetters;
    console.log('Uppercase characters included');
  }

  if (includeNumeric) {
    charSet += numericChars;
    console.log('Numeric characters included');
  }

  if (includeSpecial) {
    charSet += specialChars;
    console.log('Special characters included');
  }

  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }

  console.log('Generated Password:', password);
  alert('Your password is: ' + password);
}

// Button click event listener
const generateButton = document.getElementById('generate-btn');
generateButton.addEventListener('click', generatePassword);
