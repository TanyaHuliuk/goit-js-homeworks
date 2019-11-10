'use strict';

let credits = 23580;
let pricePerDroir = 3000;
let totalPrice;
let result;

let count = prompt('Какое количество дроидов хотите преобрести?');
if (count === null) {
  result = 'Отменено пользователем!';
} else {
  totalPrice = pricePerDroir * count;
}

if (!result) {
  if (credits - totalPrice <= 0) {
    console.log('Недостаточно средств на счету!');
  } else {
    let balanceCredits = credits - totalPrice;
    console.log(
      `Вы купили ${count} дроида(ов), на счету осталось ${balanceCredits} кредитов.`,
    );
  }
} else {
  console.log(result);
}
