// if문
// function evenOrOdd(num) {
//   var result = '';
//   if (num % 2 === 0) {
//     result += 'Even';
//   } else {
//     result += 'Odd';
//   }
//   return result;
// }

// console.log(evenOrOdd(2));
// console.log(evenOrOdd(3));
// console.log(evenOrOdd(1000));

function evenOrOdd(num) {
  var result = '';
  result = num % 2 === 0 ? 'Even' : 'Odd';
  return result;
}

console.log(evenOrOdd(2));
console.log(evenOrOdd(3));
console.log(evenOrOdd(1000));