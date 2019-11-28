"use strict";
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const useInput = prompt('Enter your password');

if (useInput===null) {
    message = `'Отменено пользователем!'`;}
else if (useInput===ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';}

else {
    message = 'Доступ запрещен, неверный пароль!';
}
alert(message);