//get DOM elements
const resultDisplay = document.getElementById("result-display");
const currentOperand = document.getElementById("current-operand");
const previousOperand = document.getElementById("prev-operand");
const equalsBtn = document.getElementById("equals-btn");
const deleteBtn = document.getElementById("delete-btn");
const clearBtn = document.getElementById("clear-btn");
const numberBtns = document.querySelectorAll("number-btn");
const operatorBtns = document.querySelectorAll("operator-btn");


//calculator constructor + functionality
function Calculator(previousOperand, currentOperand) {
    this.currentOperand = currentOperand;
    this.previousOperand = previousOperand;  
    this.allClear();
}

Calculator.prototype.updateDisplay = function() {
    this.currentOperand.innerText = this.currentOperand;
    if (this.operator != null) {
        this.previousOperand.innerText = '${this.previousOperand} ${this.operator}';
    }
    
}


Calculator.prototype.allClear = function() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operator = undefined;
}

Calculator.prototype.delete = function() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
}

Calculator.prototype.appendNumber = function(number) {
    if (number === '.' && this.currentOperand.include('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
}

Calculator.prototype.chooseOperation = function(operator) {
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') {
        this.compute;
    }
    this.operator = this.operator;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
}

Calculator.prototype.compute = function() {
    let computation;
    const previousOperand = parseFloat(this.previousOperand);
    const currentOperand = parseFloat(this.currentOperand);
    if (isNaN(previousOperand) || isNaN(currentOperand)) return;
    switch (operator) {
        case '+':
            computation = previousOperand + currentOperand;
            break;
        case '-':
            computation = previousOperand - currentOperand;
            break;
        case '*':
            computation = previousOperand * currentOperand;
            break;
        case '÷':
            computation = previousOperand / currentOperand;
            break;
        default:
            return;
            //break unnecessary after last case
    }
    this.currentOperand = computation;
    this.operator = undefined;
    this.previousOperand = '';
}


const calculator = new Calculator (previousOperand, currentOperand);

//add event listeners
numberBtns.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operatorBtns.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

clearBtn.addEventListener('click', button => {
    calculator.allClear();
})

deleteBtn.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})


equalsBtn.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
});
