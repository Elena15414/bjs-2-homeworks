"use strict"

function solveEquation(a, b, c) {
  const arr = [];
  const d = (b * b) - (4 * a * c);
  if (d > 0) {
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1);
    arr.push(x2);

  } else if (d === 0) {
    const x = (- b / (2 * a));
    arr.push(x);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  if (
    typeof percent != "number" ||
    typeof contribution != "number" ||
    typeof amount != "number" ||
    typeof countMonths != "number"
  ) {
    return "Ошибка ввода данных";
  }
  if (percent < 0 || percent > 100) {
    return "Ошибка ввода данных";
  }

  const S = amount - contribution;
  const P = percent / 100 / 12;

  const monthlyPayment = S * (P + (P / (((1 + P) ** countMonths) - 1)));
  const totalAmount = parseFloat((monthlyPayment * countMonths).toFixed(2));
  return totalAmount;
}