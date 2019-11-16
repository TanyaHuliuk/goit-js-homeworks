'use strict';

const findLongestWord = function(string) {
  let words = string.split(' ');
  let longestWord = words[0];

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

console.log(findLongestWord('Google do a roll'));

console.log(findLongestWord('May the force be with you'));

// ===================2 ВАРИАНТ РЕШЕНИЯ=======================
// const findLongestWord = function(string) {
//     let words = string.split(' ');
//       let wordLength = 0;
//       let longestWord;

//       for (let i = 0; i < words.length; i += 1) {
//         wordLength = words[1].length;

//         if (words[i].length > wordLength) {
//           longestWord = words[i];

//           return longestWord;
//         }
//       }
//     };

//   console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

//   console.log(findLongestWord('Google do a roll'));

//   console.log(findLongestWord('May the force be with you'));
