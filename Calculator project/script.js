// Get all the buttons
const buttons = document.querySelectorAll('#keys, #key');

// Get the input field
const inputField = document.querySelector('.inp');

// Add event listeners to the buttons
buttons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});

// Add event listener for keydown
document.addEventListener('keydown', (event) => {
  if (event.key === 'Backspace') {
    // event.preventDefault(); // Prevent default browser behavior
    deleteNumber();
  }
});

// Add event listener for backspace button click
const backspaceButton = document.querySelector('.backspace');
backspaceButton.addEventListener('click', deleteNumber);

// Function to handle button clicks
function handleButtonClick(event) {
  const buttonText = event.target.textContent;

  switch (buttonText) {
    case 'AC':
      clearInput();
      break;
    case '←':
      deleteNumber();
      break;
    case '=':
      calculateResult();
      break;
    default:
      appendToInput(buttonText);
      break;
  }
}

// Function to clear the input field
function clearInput() {
  inputField.value = '';
}

// Function to delete the last character
function deleteNumber() {
  inputField.value = inputField.value.slice(0,1);
}

// Function to calculate the result
function calculateResult() {
  try {
    inputField.value = eval(inputField.value);
  } catch (error) {
    inputField.value = 'Error';
  }
}

// Function to append a character to the input field
function appendToInput(char) {
  inputField.value += char;
}