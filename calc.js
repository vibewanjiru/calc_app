let displayValue = '0';
let pendingValue;
let evalStringArray = [];

const displayElement = document.getElementById('display');
const deleteElement = document.getElementById('delete');

deleteElement.addEventListener('click', deleteLastCharacter);

function updateDisplay() {
    displayElement.innerText = displayValue;
}

function inputNumber(number) {
    if (displayValue === '0') {
        displayValue = String(number);
    } else {
        displayValue += String(number);
    }
    updateDisplay();
}

function inputDot() {
    if (!displayValue.includes(',')) {
        displayValue += ',';
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    pendingValue = undefined;
    evalStringArray = [];
    updateDisplay();
}

function inputOperator(operator) {
    switch (operator) {
        case '+/-':
            displayValue = String(-parseFloat(displayValue));
            updateDisplay();
            return;
        case '%':
            displayValue = String(parseFloat(displayValue) / 100);
            updateDisplay();
            return;
        default:
            pendingValue = displayValue;
            displayValue = '0';
            evalStringArray.push(pendingValue);
            evalStringArray.push(operator);
            break;
    }
}

function deleteLastCharacter() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === '') {
        displayValue = '0';
    }
    updateDisplay();
}

function calculate() {
    evalStringArray.push(displayValue);
    const evaluation = eval(evalStringArray.join(' '));
    displayValue = String(evaluation);
    evalStringArray = [];
    updateDisplay();
}
