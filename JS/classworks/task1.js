"use strict"
const pip = [
    {name: 'Mango_1', surname: 'Bananovitch_1', phone: '+380987238801', age: 17},
    {name: 'Mango_2', surname: 'Bananovitch_2', phone: '+380987238802', age: 19},
    {name: 'Mango_3', surname: 'Bananovitch_3', phone: '+380987238803', age: 17},
    {name: 'Mango_4', surname: 'Bananovitch_4', phone: '+380987238804', age: 12},
    {name: 'Mango_5', surname: 'Bananovitch_5', phone: '+380987238805', age: 21},
  ];


// window.onload = function(event) {
//     window.document.title = "Я загрузился";
//     console.log('Документ загружен', event);
//     const btn = document.getElementById('btn-1');
//     const ipt = document.getElementById('ipt-1');
//     this.console.dir(ipt);
//     this.console.dir(btn);
//     btn.innerText = 'Загрузи меня';
//     btn.onclick = (mouseEvent) => {
//         this.console.log(ipt.value);
//         window.document.title = (ipt.value)
//     }
// }
const becomeRed = function(event) {
   
    event.target.style.color =
    (event.target.style.color === 'red') ?
    'black':'red';
    
}

const liAdd = function(arr){
    arr.forEach(element => {
        const ul = document.querySelector("ul");
        const li = document.createElement("li");
        ul.appendChild(li); 
        li.innerHTML = element.name;
        li.addEventListener('click', becomeRed)
    });
    

}
liAdd(pip);



