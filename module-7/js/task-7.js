'use strict';

const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const size = document.addEventListener('input', changeSize);

function changeSize(size) {
  text.style.fontSize = size.target.value + 'px';
}
