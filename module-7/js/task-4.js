'use strict';
const minus = document.querySelector('button[data-action="decrement"]');
const plus = document.querySelector('button[data-action="increment"]');
const textArea = document.querySelector('#value');

let counterValue = 0;

const decrement = () => {
  counterValue -= 1;
  textArea.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  textArea.textContent = counterValue;
};

minus.addEventListener('click', decrement);
plus.addEventListener('click', increment);
