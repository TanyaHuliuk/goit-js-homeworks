'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const yourPassword = prompt('Введите пароль');
console.log(yourPassword);

if (yourPassword === null) {
  message = 'Отменено пользователем!';
  console.log(message);
} else if (yourPassword === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
  console.log(message);
} else {
  if (yourPassword != ADMIN_PASSWORD || yourPassword == ' ') {
    alert('Доступ запрещен, неверный пароль!');
  }
}
