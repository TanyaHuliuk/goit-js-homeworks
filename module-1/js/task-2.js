'use strict';

let total = 100;
let ordered = 50;

let isInRange = ordered < total;

if (isInRange) {
  console.log('Заказ оформлен, с вами свяжется менеджер');
} else {
  console.log('На складе недостаточно твоаров!');
}

ordered = 20;
isInRange = ordered < total;

if (isInRange) {
  console.log('Заказ оформлен, с вами свяжется менеджер');
} else {
  console.log('На складе недостаточно твоаров!');
}

ordered = 80;
isInRange = ordered < total;

if (isInRange) {
  console.log('Заказ оформлен, с вами свяжется менеджер');
} else {
  console.log('На складе недостаточно твоаров!');
}

ordered = 130;
isInRange = ordered < total;

if (isInRange) {
  console.log('Заказ оформлен, с вами свяжется менеджер');
} else {
  console.log('На складе недостаточно твоаров!');
}
