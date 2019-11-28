"use strict";
let inputMessage = prompt("В какую страну Вы хотели бы оформить доставку?");
let cost;
if (inputMessage !== null) {
  inputMessage = inputMessage.toLowerCase();

  switch (inputMessage) {
    case "китай":
      cost = 100;
      break;

    case "чили":
      cost = 250;
      break;

    case "австралия":
      cost = 170;
      break;

    case "индия":
      cost = 80;
      break;

    case "ямайка":
      cost = 100;
      break;

    default:
      alert("В вашей стране доставка не доступна.");
  }
} else {
  console.log("Отменено пользователем");
}
if (cost) {
  console.log(`Доставка в ${inputMessage} будет стоить ${cost} кредитов.`);
}
