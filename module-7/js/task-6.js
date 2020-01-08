'use strict';

const valInput = document.querySelector('#validation-input');
const input = document.addEventListener('change', validation);

function validation(input) {
  if (
    input.target.value.length ===
    Number(valInput.attributes['data-length'].value)
  ) {
    valInput.classList.add('valid');
    valInput.classList.remove('invalid');
  } else {
    valInput.classList.add('invalid');
    valInput.classList.remove('valid');
  }
}
