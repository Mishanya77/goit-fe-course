"use strict";
let credits = 23580;
const pricePerDroid = 3000;
let message;
const userInput = prompt("Please enter quantity of droids");
let totalPrice = pricePerDroid * userInput;
const lastCredit = credits - totalPrice;

if (userInput === null) {
  message = "Отменено пользователем!";
} else if (totalPrice > credits) {
  message = "Недостаточно средств на счету!";
} else {
  message = `Вы купили ${userInput} дроидов, на счету осталось ${lastCredit} кредитов.`;
}

console.log(message);
