const prevDisplay = document.querySelector('[data-prev-operand]');
const currentDisplay = document.querySelector('[data-current-operand]');
const numberButtons = document.querySelectorAll('[data-number');
const operatorButtons = document.querySelectorAll('[data-operation');
const equalsButton = document.querySelector('[data-equals]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');

numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
);

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => setOperation(button.textContent))
);

allClearButton.addEventListener('click', () => {
  prevDisplay.textContent = '';
  currentDisplay.textContent = '';
});

function appendNumber(number) {
  if (currentDisplay.textContent.includes('.')) {
    if (/^\d$/.test(number)) {
      currentDisplay.textContent += number;
    }
  } else if (currentDisplay.textContent === '' && number === '.') {
    currentDisplay.textContent = '0' + number;
  } else {
    currentDisplay.textContent += number;
  }
}

function setOperation(operation) {
  if (currentDisplay.textContent === '') return;
  currentDisplay.textContent += operation;
  prevDisplay.textContent = currentDisplay.textContent;
}

function evaluate() {
  let result;
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '×':
      result = num1 * num2;
      break;
    case '÷':
      result = num1 / num2;
      break;
    default:
      return;
  }
}

function operate() {}
