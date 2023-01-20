"use strict";
const outputDiv = document.querySelector(".output-div");
const numberBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operator]");
const clearBtn = document.querySelector("[data-clear]");
const equalsBtn = document.querySelector("[data-equals]");
const currentOperandDisplay = document.querySelector(".current-input");
const pastOperandDisplay = document.querySelector(".past-input");

let currentOperand = "";
let pastOperand = "";
let operator = "";

console.log({ numberBtns });
console.log({ operatorBtns });
console.log({ clearBtn });
console.log({ equalsBtn });
console.log({ currentOperandDisplay }, { pastOperandDisplay });

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function calculate(a, b, operation) {
  const numberA = +a;
  const numberB = +b;
  const result = operation(numberA, numberB);
  console.log(pastOperand);
  pastOperand = result;
  console.log(pastOperand);
  return result;
}

function appendOperand(btnsText) {
  if (btnsText === "." && currentOperand.includes(".")) return;
  currentOperand += btnsText;
}

function updateDisplay() {
  currentOperandDisplay.innerText = currentOperand;
  pastOperandDisplay.innerText = `${pastOperand} ${operator} `;
}

function getOperator(btnsText) {
  operator = btnsText;
  pastOperand = currentOperand;
  currentOperand = "";
  if (operator === "+") {
    return add;
  } else if (operator === "−") {
    return subtract;
  } else if (operator === "×") {
    return multiply;
  } else if (operator === "÷") {
    return divide;
  }
}

numberBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    appendOperand(btn.innerText);
    updateDisplay();
  })
);

operatorBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    if (pastOperand !== "" && currentOperand !== "") {
      calculate(pastOperand, currentOperand, getOperator(btn.innerText));
      updateDisplay();
      return;
    }
    getOperator(btn.innerText);
    updateDisplay();
  })
);
