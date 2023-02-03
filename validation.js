function add(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "please enter a number";
  }
  return num1 + num2;
}

console.log(add(12, 45));

function multiply(num1, num2) {
  return num1 * num2;
}

console.log(multiply(12, 45));
