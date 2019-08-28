let input;
const numbers = [];
let total = 0;
while (input !== null) {
  input = prompt('Введите число');
  if (Number.isNaN(Number(input))) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  } 
  else {
    numbers.push(Number(input));
  }
  
}
for (let number of numbers) {
  total += number;
}
console.log(`Общая сумма чисел равна ${total}`);

