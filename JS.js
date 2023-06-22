// Get DOM elements
const passwordDisplay = document.getElementById('password');
const copyBtn = document.getElementById('copy-btn');
const lengthInput = document.getElementById('length');
const lowercaseCheckbox = document.getElementById('lowercase');
const uppercaseCheckbox = document.getElementById('uppercase');
const numericCheckbox = document.getElementById('numeric');
const specialCheckbox = document.getElementById('special');
const generateBtn = document.getElementById('generate-btn');

// Character sets
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numericChars = '0123456789';
const specialChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

// Generate password
function generatePassword() {
  const length = lengthInput.value;
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
  passwordDisplay.value = password;
}

// Event listeners
generateBtn.addEventListener('click', generatePassword);
