'use strict';

const categories = document.querySelectorAll('.item');

console.log(categories);

console.log(`В списке ${categories.length} категории.`);

categories.forEach(elem =>
  console.log(`
      Категория: ${elem.firstElementChild.textContent} 
      Количество элементов: ${elem.lastElementChild.children.length} 
    `),
);
