"use strict"

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };
  user.mood = 'happy';
  console.log(user);

  user.hobby = 'skydiving';
  console.log(user);
  user.premium = 'false';
  console.log(user);

  for( const key in user) {
      console.log( key, user[key]);
  }

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
