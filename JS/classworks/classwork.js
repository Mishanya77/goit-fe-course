// const arr = [11,6,7,8,11,3,4,5];
// const mySort = (arr)=>{//МЕНЯТЬ ТОЛЬКО ТЕЛО ФУНКЦИИ
//     const rezult = [];
//     const _arr = [...arr];
//   while(_arr.length>0){
//     let maxNumber = Math.max(..._arr);
//     rezult.push(..._arr.splice(_arr.indexOf(maxNumber),1));
//   }
   
//     return rezult;
// };

// console.log('>', mySort(arr), '<');


// const people = [
//  {  name: 'roman', height: 170, colorEye: "brown", weight: 70},
//  {  name: 'sergiy', height: 175, colorEye: 'blue', weight: 86},
//  {  name: 'Petro', height: 186, colorEye: 'black', weight: 92},
//  {  name: 'vasya', height: 172, colorEye: "black", weight: 92},
//  {  name: 'Grisha', height: 182, colorEye: 'grey', weight: 86},
//  {  name: 'Anya', height: 168, colorEye: 'blue', weight: 70}];

//  console.log(people);

//  const getAllPeople = function(arrs, key){
//      const values = [];
//         for (const arr of arrs) {
        
//             if (key == arr['colorEye']){
                
//                 values.push(arr['name'], arr['colorEye']);
//             }
           
//  }
//  return values
// }
//  console.log(getAllPeople(people, 'black'));

//  const getAllPeople = function(arrs, key){
//     const values = [];
//        for (const arr of arrs) {
       
//            if (key == arr['colorEye']){
               
//                values.push(arr['name'], arr['colorEye']);
//            }
           
//         }
//         return values
//     }
    
//     console.log(getAllPeople(people, 'black'));



//__________________________________________________________





// createPeople входит 2 параметра
// в инпут входит стринга \ список имен\ ,в аутпут ложится обьекты с нейм и возраст => целове число не больше 100
// всех людей нужно научить здороваться через метод  Сей хелоу
// метод CanDrink задает параметры может ли челок пить (18+);
//

const names = ['Petro', 'Marina', 'Volodimir'];

function canDrink() {
     return this.age >= 18;}
 


function sayHello() {
    let name = this.name;
    console.log( 'Hello, my name is ${name}, I $ { this.canDrink() ?'can' : 'can't'}drink') 
    
}

function learnGreetings(person) {
    person.sayHello = sayHello;
    // console.log('learnGreetings', person.name);
    
}
function createPerson(name){
    const resultObject = {
        name,
        age: Math.round(Math.random() * (100 - 1) + 1)
    };
    return resultObject 
}
function createPeople(arr,) {
    const peopleArray = [];
    for (const elem of arr) {
        const person = createPerson(elem);
        peopleArray.push(person);  
      }
      return peopleArray;
}
const people = createPeople(names);

console.log(peopleArray);
const petro = peopleArray[0];
petro.sayHallo();