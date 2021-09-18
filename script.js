//get DOM elements
const currentOperandTextBox = document.querySelector(".current-operand");
const previousOperandTextBox = document.querySelector(".prev-operand");
const equalsBtn = document.querySelector(".equals-btn");
const deleteBtn = document.querySelector(".delete-btn");
const clearBtn = document.querySelector(".clear-btn");
const numberBtns = document.querySelectorAll(".number-btn");
const operatorBtns = document.querySelectorAll(".operator-btn");

class Calculator {
    constructor(previousOperandTextBox, currentOperandTextBox) {
        this.previousOperandTextBox = previousOperandTextBox;
        this.currentOperandTextBox = currentOperandTextBox;
        this.clear();
    }

    clear() {
        this.previousOperand = '';
        this.currentOperand = '';
        this.operator = undefined;
    }

    addDigit(digit) {
        if (digit === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand += digit;;
    }

    removeDigit() {
        this.currentOperand = this.currentOperand.slice(0, -1);
    }

    evaluate() {
        let solution;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand); 
        switch(this.operator) {
            case '+':
                solution = prev + current;
                break;
            case '-':
                solution = prev - current;
                break;
            case '÷':
                solution = prev / current;
                break;
            case '*':
                solution = prev * current;
                break;
        }
        this.currentOperand = solution;
        this.operator = undefined;
        this.previousOperand = '';
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

    chooseOperator(operator) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.evaluate();
        }
        this.operator = operator;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    updateDisplay() {
        this.currentOperandTextBox.innerHTML = this.getDisplayNumber(this.currentOperand);
        if (this.operator != null) {
            this.previousOperandTextBox.innerHTML = `${this.getDisplayNumber(this.previousOperand)} ${this.operator}`;
        } else {
        this.previousOperandTextBox.innerHTML = this.previousOperand;
        }
    }
}

numberBtns.forEach(btn => {
    btn.addEventListener('click', () => {
    calculator.addDigit(btn.innerHTML);
    calculator.updateDisplay();
    });
});


clearBtn.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});


deleteBtn.addEventListener('click', () => {
    calculator.removeDigit();
    calculator.updateDisplay();
});

operatorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        calculator.chooseOperator(btn.innerHTML);
        calculator.updateDisplay();
    });
})

equalsBtn.addEventListener('click', () => {
    calculator.evaluate();
    calculator.updateDisplay();
})


let calculator = new Calculator(previousOperandTextBox, currentOperandTextBox);