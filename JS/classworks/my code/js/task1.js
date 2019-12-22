// const selectedById = document.querySelector('#menu');
// selectedById.style.textTransform = 'uppercase';
// selectedById.style.fontSize = '2rem';
// console.log(selectedById); // ...

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName); // ...

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass); // ...

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = '#BF4E30';
// console.log(firstMenuItem); // ...

// //===================================================
// const text = document.getElementById("message");
// text.hidden = true; // текст стал невидимым

// //===================================================
// const message = document.querySelector(".text1");
// console.log(message); // Default textarea message

// //===================================================
// const link = document.querySelector(".active");
// console.log(link.href); // https://s.codepen.io/about

// //===================================================
// const image = document.querySelector(".image");
// console.log(image.src); // https://placeimg.com/640/480/animals
// image.src = 'https://placeimg.com/640/480/tech';


// const categoryQvantity = document.querySelector("#categories");
// console.log(`В списке ${categoryQvantity.children.length} элемента.`);
// const items = document.querySelectorAll("#categories .item");

// items.forEach(item => {
//   const title = item.querySelector("h2");
//   const elements = item.querySelectorAll("li");
//   console.log(`Категория: ${title.textContent}`);
//   console.log("Количество элементов: ", elements.length);
// });
"use strict";

// В HTML есть пустой список ul#ingredients.
// В JS есть массив строк.
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM-узлов используй document.createElement().

// const ingredient = [
//   "Картошка",
//   "Грибы",
//   "Чеснок",
//   "Помидоры",
//   "Зелень",
//   "Приправы"
// ];

// const elements = ingredient.map(ingredient => {
//   const el = document.createElement("li");
//   el.innerText = ingredient;
//   return el;
// });

// const list = document.querySelector("#ingredient");
// list.append(...elements);
// console.log(list)



// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// // Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
// const images = [
//   {
//     url:
//       'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];





// const ul = document.querySelector("#gallery");

//   const liAdd = function(arr){
//     arr.forEach(element => {
//         const li = document.createElement("li");
       
//         ul.appendChild(li); 
//         console.log(li);
//         li.insertAdjacentHTML('afterbegin', `<img src=${element.url}, height= 100px alt=${element.alt} >`)
//     })}

// liAdd(images);

// const nav1 = document.querySelector('nav');
// console.log(nav1)
// nav1.insertAdjacentHTML('afterbegin', `<a href="/shop" class="btn">shop</a>`)


// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
let counterValue = 0;
const inc = document.querySelector('button[data-action="increment"]');
document.addEventListener('click', increment);
const dec = document.querySelector('button[data-action="decrement"]');
document.addEventListener('click', decrement);

const counterEl = document.querySelector('#value');

function increment() {
    counterValue +=1;
    counterEl.textContent = counterValue;
};

function decrement() {
    counterValue -=1;
    counterEl.textContent = counterValue;
}