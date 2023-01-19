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
let number = "";

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

function calculate(a, b, operator) {
  const result = operator(a, b);
  console.log(result);
  return result;
}

function appendOperand(numberStr) {
  if (numberStr === "." && currentOperand.includes(".")) return;
  currentOperand += numberStr;
}

function updateDisplay(currentOperand) {
  currentOperandDisplay.innerText = currentOperand;
}

numberBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    appendOperand(btn.innerText);
    updateDisplay(currentOperand);
  })
);
