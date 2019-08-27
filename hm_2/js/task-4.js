
function findLongestWord(string) {
  let stringSplit = string.split(' ');
  let longWord = stringSplit[0];
  for (const arrayWord of stringSplit)
  if (arrayWord.length > longWord.length) {
    longWord = arrayWord;
  }
  return longWord;
}


console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); 

console.log(findLongestWord('Google do a roll')); 

console.log(findLongestWord('May the force be with you')); 