const arr = [6, 7, 8, 3, 4, 5];
const my_sort = (arr) => {
    let result = arr;
    return result;
}
const newArray = my_sort(arr);
newArray[0] = "!!!";
console.log(arr); //должен вывести 3 4 5 6 7 8
console.log(newArray); // должен !!!, 4 5 6 7 8