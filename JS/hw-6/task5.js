// Получить пользоваля (не массив) по email (поле email, он уникальный).
import users from "./users.js";
const getUserWithEmail = (arr, email) => arr.find(x => x.email === email);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
