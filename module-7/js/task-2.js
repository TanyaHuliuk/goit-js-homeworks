'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientItem = document.querySelector('#ingredients');

ingredients.map(item => {
  const list = document.createElement('li');
  list.textContent = item;
  return ingredientItem.appendChild(list);
});
