let display = document.getElementById('display');
let themeToggleBtn = document.getElementById('theme-toggle-btn');
let isDarkMode = false;

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

function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    themeToggleBtn.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
}

themeToggleBtn.addEventListener('click', toggleTheme);
