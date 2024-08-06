let display = document.getElementById('display');

function clearDisplay() {
    display.textContent = '0';
}

function deleteLast() {
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1);
    } else {
        display.textContent = '0';
    }
}

function appendNumber(number) {
    if (display.textContent === '0') {
        display.textContent = number;
    } else {
        display.textContent += number;
    }
}

function appendOperator(operator) {
    display.textContent += ` ${operator} `;
}

function calculateResult() {
    try {
        display.textContent = eval(display.textContent.replace('x', '*'));
    } catch {
        display.textContent = 'Error';
    }
}
