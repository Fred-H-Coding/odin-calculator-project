let a = "";
let b = "";
let operator = "";
let solution;

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
    if (b == 0 || b == "0") {
        return numberDisplay.textContent = "You can't divide by zero!";
    }
    
    else {
        let quotient = a/b;
        let roundedQuotient = Number(quotient.toFixed(7));
        return roundedQuotient;
    }
}



//Creates nodeLists and then arrays of number buttons and operation buttons //

const numberButtons = document.querySelectorAll('button.numberButton');
const numberButtonArray = Array.from(numberButtons);

const operationButtons = document.querySelectorAll('button.operationButton');
const operationButtonArray = Array.from(operationButtons);

const equalsignButton = document.querySelector('.equalsignButton');
const clearButton = document.querySelector('.clearButton');

//Event Listeners for Number Buttons. Pressing a number button concatenates string a.

for (let i = 0; i<numberButtonArray.length; i++) {
    numberButtonArray[i].addEventListener("click", () => {
        if (operator === "") {
            a += numberButtonArray[i].textContent;
            numberDisplay.textContent = a;
            return a; 
        }
        else {
            b += numberButtonArray[i].textContent;
            numberDisplay.textContent = b;
            return b;
        }
    })
}

//Operator Button event Listeners added through mapping.

operationButtonArray.map((opButton) => opButton.addEventListener("click", () => {
    operator = opButton.textContent;
    return operator;
} ));

equalsignButton.addEventListener("click", () => {
    operate(a,operator,b);
    numberDisplay.textContent = solution;
} );

clearButton.addEventListener("click", () => {
    a = "";
    b = "";
    operator = "";
    solution = 0;
    numberDisplay.textContent = solution;
});

const numberDisplay = document.querySelector('.numberDisplay');

// numberButtonArray.forEach((numberButton) => numberButton.addEventListener("click", () => a = this.textContent));

function operate(a,operator,b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case "+":
            solution = add(a,b);
            break;
        case "-":
            solution = subtract(a,b);
            break;
        case "×":
            solution = multiply(a,b);
            break;
        case "÷":
            solution = divide(a,b);
            break;
    }
    return solution;
}