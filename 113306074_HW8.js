const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const operatorSelect = document.getElementById('operator');
const calculateBtn = document.getElementById('calculateBtn');
const resultDiv = document.getElementById('result');

operatorSelect.addEventListener('change', () => {
    const operator = operatorSelect.value;
    let buttonText = '';
    switch (operator) {
        case '+':
            buttonText = 'Add';
            break;
        case '-':
            buttonText = 'Subtract';
            break;
        case '*':
            buttonText = 'Multiply';
            break;
        case '/':
            buttonText = 'Divide';
            break;
        default:
            buttonText = 'Calculate';
    }
    calculateBtn.textContent = buttonText;
} );
        
calculateBtn.addEventListener('click', () => {
    const num1 = parseFloat(number1Input.value);
    const num2 = parseFloat(number2Input.value);
    const operator = operatorSelect.value;

    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.textContent = 'Result: Please enter valid numbers.';
        return;
    }

    let result;
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            resultDiv.textContent = 'Result: Invalid operator.';
            return;
    }
    resultDiv.textContent = `Result: ${result.toFixed(2)}`;
} );

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        alert('Division by zero is not allowed.');
        return 'Error';
    }
    return a / b;
}