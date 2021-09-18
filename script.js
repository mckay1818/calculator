//get DOM elements
const currentOperandTextBox = document.querySelector(".current-operand");
const previousOperandTextBox = document.querySelector(".prev-operand");
const equalsBtn = document.querySelectorAll(".equals-btn");
const deleteBtn = document.querySelectorAll(".delete-btn");
const clearBtn = document.querySelectorAll(".clear-btn");
const numberBtns = document.querySelectorAll(".number-btn");
const operatorBtns = document.querySelectorAll(".operator-btn");

class Calculator {
    constructor(previousOperandTextBox, currentOperandTextBox) {
        this.previousOperandTextBox = previousOperandTextBox;
        this.currentOperandTextBox = currentOperandTextBox;
        this.previousOperand = '';
        this.currentOperand = '';
        this.operator = undefined;
    }

    addDigit(digit) {
        if (digit === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand += digit;;
    }

    evaluate(previousOperand, currentOperand) {
        let solution; 
        switch(operator) {
            case '+':
                solution = previousOperand + currentOperand;
            case '-':
                solution = previousOperand - currentOperand;
            case '÷':
                solution = previousOperand / currentOperand;
            case '*':
                solution = previousOperand * currentOperand;
        }
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.') [0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0});
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay;
        }
    }

    updateDisplay() {
        this.currentOperandTextBox.innerHTML = this.getDisplayNumber(this.currentOperand);
        this.previousOperandTextBox.innerHTML = this.previousOperand;
    }
}

numberBtns.forEach(btn => {
    btn.addEventListener('click', () => {
    calculator.addDigit(btn.innerHTML);
    calculator.updateDisplay();
    });
});

let calculator = new Calculator(previousOperandTextBox, currentOperandTextBox);