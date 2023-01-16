"use strict";
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

calculate(7, 2, add);
