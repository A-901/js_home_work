const credits = 23580;
let pricePerDroid = 3000;
let totalPrice;

const dronQuantity = prompt(`How many drones you want` );
if (dronQuantity === null) {
  alert('Отменено пользователем!');
} 
totalPrice = dronQuantity*pricePerDroid;
if (totalPrice > credits) {
  console.log(`Недостаточно средств на счету!`);  
} else {  
  console.log(`Вы купили ${dronQuantity} дроидов, на счету осталось ${credits-totalPrice} кредитов.`);
}









