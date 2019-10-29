'use strict';

let total = 100;
let ordered = 20;

let message;

const isInRange = ordered > total;

if (isInRange) {
  message = 'На складе недостаточно твоаров!';
} else {
  message = 'Заказ оформлен, с вами свяжется менеджер';
}

console.log(message);

ordered = 80;

if (isInRange) {
  message = 'На складе недостаточно твоаров!';
} else {
  message = 'Заказ оформлен, с вами свяжется менеджер';
}

console.log(message);

ordered = 130;

if (isInRange) {
  message = 'На складе недостаточно твоаров!';
} else {
  message = 'Заказ оформлен, с вами свяжется менеджер';
}

console.log(message);
