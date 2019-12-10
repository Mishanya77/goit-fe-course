import users from "./users.js";

// Массив имен (поле name) людей, отсортированных в зависимости от количества
//  их друзей (поле friends)

const getNamesSortedByFriendsCount = users => users
.sort((prev, next) => prev.friends.length - next.friends.length).map(users => users.name)
;

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]



// Aлгоритм сортировки, встроенный в JavaScript, будет передавать ей для сравнения элементы массива. Она должна возвращать:

// Положительное значение, если a > b
// Отрицательное значение, если a < b
// Если равны – можно 0, но вообще не важно, что возвращать, если их взаимный порядок не имеет значения.
// Отсортируем массив наших пользователей по возрастанию дней онлайн активности.
//.map(({ name }) => name);
