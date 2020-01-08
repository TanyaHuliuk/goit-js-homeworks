'use strict';
const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', updateValue);

function updateValue(e) {
  if (e.currentTarget.value === '') {
    output.textContent = 'незнакомец';
  } else {
    output.textContent = e.currentTarget.value;
  }
}
