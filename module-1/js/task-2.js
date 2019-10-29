'use strict';

let total = 100;
let ordered = 20;

// let message;

const isInRange = ordered > total;

if (isInRange) {
  console.log('На складе недостаточно товаров!');
} else {
  console.log('Заказ оформлен, с вами свяжется менеджер');
}

// console.log(message);

ordered = 80;

if (isInRange) {
  console.log('На складе недостаточно товаров!');
} else {
  console.log('Заказ оформлен, с вами свяжется менеджер');
}

// console.log(message);

ordered = 130;

if (isInRange) {
  console.log('На складе недостаточно товаров!');
} else {
  console.log('Заказ оформлен, с вами свяжется менеджер');
}

// console.log(message);
