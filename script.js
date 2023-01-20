"use strict";
const outputDiv = document.querySelector(".output-div");
const numberBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operator]");
const clearBtn = document.querySelector("[data-clear]");
const equalsBtn = document.querySelector("[data-equals]");
const squareBtn = document.querySelector("[data-square]");
const squareRootbtn = document.querySelector("[data-squareroot]");
const delBtn = document.querySelector("[data-delete]");
const currentOperandDisplay = document.querySelector(".current-input");
const pastOperandDisplay = document.querySelector(".past-input");

let currentOperand = "";
let pastOperand = "";
let operator = "";

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

function square(a) {
  const numberA = +a;
  const squared = numberA ** 2;
  currentOperand = squared;
  if (currentOperand !== "" && pastOperand !== "") return;
  swapOperand();
  return squared;
}

function calculate(a, b) {
  const numberA = +a;
  const numberB = +b;
  let result;
  console.log(pastOperand);
  console.log(pastOperand);
  switch (operator) {
    case "+":
      result = add(numberA, numberB);
      break;
    case "−":
      result = subtract(numberA, numberB);
      break;
    case "×":
      result = multiply(numberA, numberB);
      break;
    case "÷":
      result = divide(numberA, numberB);
      break;
    default:
      return;
  }
  if (result.toString().includes(".")) {
    result = result.toFixed(2);
  }
  currentOperand = result;
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
  swapOperand();
  console.log({ currentOperand }, { pastOperand }, { operator });
}

function swapOperand() {
  if (currentOperand !== "") {
    pastOperand = currentOperand;
    currentOperand = "";
  }
}

function allClear() {
  currentOperand = "";
  pastOperand = "";
  operator = "";
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
      calculate(pastOperand, currentOperand);
      // updateDisplay();
    }
    getOperator(btn.innerText);
    updateDisplay();
  })
);

equalsBtn.addEventListener("click", () => {
  if (pastOperand !== "" && currentOperand !== "") {
    calculate(pastOperand, currentOperand);
    // if (currentOperand !== "") {
    //   pastOperand = currentOperand;
    //   currentOperand = "";
    //   operator = "";
    // }
    swapOperand();
    updateDisplay();
    console.log({ currentOperand }, { pastOperand }, { operator });
  }
});

clearBtn.addEventListener("click", () => {
  allClear();
  updateDisplay();
});

squareBtn.addEventListener("click", () => {
  square(currentOperand);
  updateDisplay();
});
