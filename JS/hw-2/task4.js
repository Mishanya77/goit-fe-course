"use strict"

const formatString = string => {
    const stringLength = string.length;
  if (stringLength <= 40) {
      return string;
  } else {
      let newFormatString = string.split("");
      newFormatString.splice(39, newFormatString.length, "...");
      return newFormatString.join("");
  }

};


console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка