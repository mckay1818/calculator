//get DOM elements
const currentOperandTextBox = document.getElementById("current-operand");
const previousOperandTextBox = document.getElementById("prev-operand");
const equalsBtn = document.getElementById("equals-btn");
const deleteBtn = document.getElementById("delete-btn");
const clearBtn = document.getElementById("clear-btn");
const numberBtns = document.querySelectorAll(".number-btn");
const operatorBtns = document.querySelectorAll(".operator-btn");


//calculator constructor + functionality
function Calculator(previousOperandTextBox, currentOperandTextBox) {
    this.currentOperandTextBox = currentOperandTextBox;
    this.previousOperandTextBox = previousOperandTextBox;  
    this.allClear();
}

Calculator.prototype.updateDisplay = function() {
    this.currentOperandTextBox.innerText = this.currentOperand;
    if (this.operator != null) {
        this.previousOperandTextBox.innerText = '${this.previousOperand} ${this.operator}';
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


let calculator = new Calculator(previousOperandTextBox, currentOperandTextBox);

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
    calculator.updateDisplay();
})

deleteBtn.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})


equalsBtn.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
});
