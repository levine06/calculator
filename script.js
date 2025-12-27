const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", calculator);
});

const display = document.querySelector("#display");
let firstOperand = null;
let operator = null;
let shouldReset = false; // The next number click should reset display

function calculator(e) {
    // If a number is clicked
    if (e.target.classList.contains("number")) {
        if (shouldReset) {
            display.innerText = "";
            shouldReset = false;
        }
        const numberClicked = e.target.innerText;
        display.innerText += numberClicked;
    }

    // If an operator (% . + - * / =) is clicked
    else if (e.target.classList.contains("operator")) {
        operatorClicked = e.target.datset.op;
        performOperation(operatorClicked);
    }

    // If C or AC is clicked
    else {
        if (e.target.id === "all-clear") {
            display.innerText = "";
        }
        else if (e.target.id === "clear") {
            if (display.innerText !== "") {
                display.innerText = display.innerText.slice(0, -1);
            }
        }
    }
}

function performOperation(operator) {

}