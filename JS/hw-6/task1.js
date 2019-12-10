import users from "./users.js";



//   Получить массив имен всех пользователей (поле name).

const getUserNames = users => users.map(user => user.name);
 


console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// /const users = [
//     { name: 'Mango', isActive: true },
//     { name: 'Poly', isActive: false },
//     { name: 'Ajax', isActive: true },
//   ];
  
//   // Для каждого элемента коллекции (user) вернем значение поля name
//   const names = users.map(user => user.name);
  
//   console.log(names); // ["Mango", "Poly", "Ajax"]
//   Copy
  