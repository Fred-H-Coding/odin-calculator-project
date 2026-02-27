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
    return a / b;
}

let a;
let b;
let operator;

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