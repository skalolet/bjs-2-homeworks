"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;
  if (discriminant < 0) {
    return arr;
  } else if (discriminant === 0) {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
  } else {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
    arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const P = percent / 100 / 12;
  const S = amount - contribution;
  const n = countMonths;

  const monthlyPayment = S * (P + P / ((1 + P) ** n - 1));
  const totalAmount = +(monthlyPayment * n).toFixed(2);

  return totalAmount;
}