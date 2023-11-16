let num1 = null;
let num2 = null;
let currentOperation = null;

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

deleteButton.addEventListener('click', () => {
  currentDisplay.textContent = currentDisplay.textContent
    .toString()
    .slice(0, -1);
});

equalsButton.addEventListener('click', () => {
  if (num1 !== null && num2 === null) {
    num2 = parseFloat(currentDisplay.textContent);
    operate(currentOperation, num1, num2);
    prevDisplay.textContent = '';
    num1 = parseFloat(prevDisplay.textContent);
    num2 = null;
    currentOperation = null;
  }
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

  if (num1 === null) {
    num1 = currentDisplay.textContent;
    currentOperation = operation;
    prevDisplay.textContent = `${num1} ${operation}`;
    currentDisplay.textContent = '';
  } else if (num1 !== null && num2 === null) {
    num2 = currentDisplay.textContent;
    operate(currentOperation, num1, num2);
    currentOperation = operation;
    prevDisplay.textContent += ` ${num2} ${operation}`;
    currentDisplay.textContent = '';
    num1 = prevDisplay.textContent;
    num2 = null;
  }
}

function operate(operation, num1, num2) {
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
      if (num2 === 0) {
        ('Error: Division by zero');
      }
      result = num1 / num2;
      break;
    default:
      'Error: Invalid operator';
  }
  return (currentDisplay.textContent = result);
}
