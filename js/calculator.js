"use strict";

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelectorAll('[data-equals]');
const deleteButton = document.querySelectorAll('[data-delete]');
const allClearButton = document.querySelectorAll('[data-all-clear]');
const previousOperandTextElement = document.querySelectorAll('[data-previous-operand]');
const currentOperandTextElement = document.querySelectorAll('[data-current-operand]');
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);


function clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
}

function delete() {

}

function appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.'))
        return this.currentOperand = this.currentOperand.toString() + number.toString()
}

function chooseOperation(operation) {

}

function compute() {

}

function updateDisplay() {
this.currentOperandTextElement.innerText = this.currentOperand
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})



