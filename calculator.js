let a;
let b;
let operator;

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    let quotient = a/b;
    let roundedQuotient = Number(quotient.toFixed(7));
    return roundedQuotient;
}

const numberButtons = document.querySelectorAll('div.numberButton');
const numberButtonArray = Array.from(numberButtons);


numberButtonArray.forEach((numberButton) => numberButton.addEventListener("click", () => a = this.textContent));

function operate(a,operator,b) {
    let solution;
    switch (operator) {
        case "+":
            solution = add(a,b);
            break;
        case "-":
            solution = subtract(a,b);
            break;
        case "*":
            solution = multiply(a,b);
            break;
        case "/":
            solution = divide(a,b);
            break;
    }
    return solution;
}