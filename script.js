let firstOperand = null;
let operator = null;
let shouldReset = false; // Should the next number clicked reset display

const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", onClick);
});

function onClick(e) {
    const btn = e.currentTarget;

    if (btn.classList.contains("number")) {
        if (shouldReset) {
            display.textContent = "";
            shouldReset = false;
        }
        display.textContent += btn.textContent;
        return;
    }

    if (btn.id === "all-clear") {
        display.textContent = "";
        firstOperand = null;
        operator = null
        shouldReset = false;
        return;
    }
    
    if (btn.id === "clear") {
        display.textContent = display.textContent.slice(0, -1);
        return;
    }

    if (btn.classList.contains("operator")) {
        handleOperator(btn.dataset.op);
    }
}

function handleOperator(op) {
    const currentNumber = Number(display.textContent);

    // = pressed
    if (op === "=") {
        if (firstOperand === null || operator === null) return;
        const result = operate(firstOperand, operator, currentNumber);
        display.textContent = String(result);
        firstOperand = null;
        operator = null
        shouldReset = true;
        return;
    }

    // normal operator pressed but theres only 1 number
    if (firstOperand === null) {
        firstOperand = currentNumber;
        operator = op;
        shouldReset = true;
        return;
    }

    // if consecutive operators pressed, replace the prev one
    if (shouldReset) {
        operator = op;
        return;
    }

    result = operate(firstOperand, operator, currentNumber);
    operator = op;
    firstOperand = result;
    display.textContent = String(result);
    shouldReset = true;
}

function operate(num1, op, num2) {
    if (op === '+') return num1 + num2;
    if (op === '-') return num1 - num2;
    if (op === '*') return num1 * num2;
    if (op === '/') return num2 === 0 ? 'Error': num1 / num2;
    if (op === '%') return num1 % num2;
    return num2;
}