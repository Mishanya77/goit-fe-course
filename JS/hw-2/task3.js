
const arr = "The quick brown fox jumped over the lazy dog" .split(' ');
let findLongestWord = "";
for (const word of arr){
   if (findLongestWord.length<word.length) {
    findLongestWord = word;
   }
}
console.log(findLongestWord)

// "The quick brown fox jumped over the lazy dog";

// 'Google do a roll'; 

// 'May the force be with you'; 