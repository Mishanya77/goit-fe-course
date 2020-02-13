const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const refs = {
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector("body"),
};
let interval;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.btnStart.addEventListener('click',changeColor);

function changeColor(e){
  interval = setInterval(() => {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)];
    
  }, 1000);
  refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;
};

refs.btnStop.addEventListener('click', stop);

function stop(e){
  clearInterval(interval);
  refs.btnStart.disabled = false;
  refs.btnStop.disabled = true;
};