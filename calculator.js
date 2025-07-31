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
  if (b === 0) {
    return "Error: Cannot divide by 0";
  }
  return a / b;
}

let num1 = parseFloat(prompt("Enter first number:"));
let operator = prompt("Enter operator (+, -, *, /):");
let num2 = parseFloat(prompt("Enter second number:"));

let result;
if (operator === '+') result = add(num1, num2);
else if (operator === '-') result = subtract(num1, num2);
else if (operator === '*') result = multiply(num1, num2);
else if (operator === '/') result = divide(num1, num2);
else result = "Invalid operator";

alert("Result: " + result);
