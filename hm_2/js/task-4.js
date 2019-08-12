
// function findLongestWord(string) {
//  let stringSplit = string.split(' ');
//  let longWord = 0;
//   for (let i = 0; i < stringSplit.length; i++) {  
//   if (stringSplit[i].length > longWord) {
//     longWord = stringSplit[i].length;
//   }
// }
//   return longWord;
// }

function findLongestWord(string) {
  let stringSplit = string.split(' ');
  let longWord = stringSplit[0];
  for (const arrayWord of stringSplit)
  if (arrayWord.length > longWord.length) {
    longWord = arrayWord;
  }
  return longWord;
}


console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'