'use strict';

// let total = 100;
// let ordered = 20;

const min = 10;
const max = 30;
const value = 125;
let message;

const isInRange = value > 10 && value < 30;

if (isInRange) {
  message = 'Number is in range!!!! Awesome!';
} else {
  message = 'Number is not in range!!!! Booooo!';
}

console.log(message);
