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
  let password = '';

  // Define character sets based on selected checkboxes
  if (includeLowercase) {
    charSet += 'abcdefghijklmnopqrstuvwxyz';
  }

  if (includeUppercase) {
    charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  if (includeNumeric) {
    charSet += '0123456789';
  }

  if (includeSpecial) {
    charSet += '!@#$%^&*()_+~`|}{[]\\\:;?><,./-=';
  }

  // Check if at least one character set is selected
  if (charSet.length === 0) {
    alert('Please select at least one character set.');
    return; // Stop generating the password
  }

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

// Checkbox change event listeners
const lowercaseCheckbox = document.getElementById('lowercase');
const uppercaseCheckbox = document.getElementById('uppercase');
const numericCheckbox = document.getElementById('numeric');
const specialCheckbox = document.getElementById('special');

lowercaseCheckbox.addEventListener('change', function() {
  console.log('Lowercase checkbox:', this.checked);
});

uppercaseCheckbox.addEventListener('change', function() {
  console.log('Uppercase checkbox:', this.checked);
});

numericCheckbox.addEventListener('change', function() {
  console.log('Numeric checkbox:', this.checked);
});

specialCheckbox.addEventListener('change', function() {
  console.log('Special checkbox:', this.checked);
});