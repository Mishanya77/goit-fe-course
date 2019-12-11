// Напиши скрипт, который выполнит следующие операции.
const categories = Array.from(document.querySelector("#categories").children);
const work = function() {
    console.log(`В списке ${categories.length} категории`);
};
work();
// Посчитает и выведет в консоль количество категорий в ul#categories, 
// то есть элементов li.item. Получится 'В списке 3 категории.'.
categories.forEach(element => {
    const title = element.querySelector('h2');
    const liList = element.querySelector('ul').children.length;
    console.log(`Категория:${title.innerText}`);
    console.log(`Количество элементов: ${liList}`)
}); 

//  Для каждого элемента li.item в списке ul#categories, найдет 
//  и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в 
// категории (всех вложенных в него элементов li).
// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4







