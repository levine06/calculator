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
        display.innerText = "";
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
