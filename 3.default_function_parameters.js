// default function parameters

// es5
var sum = function(a, b) {
  a = a === 0 ? a : (a || 2);
  b = b === 0 ? b : (b || 3);
  return a + b;
};

console.log('sum');
console.log(sum(0));
console.log(sum());
console.log(sum(5));

// es6
const _sum = (a = 2, b = 3) => a + b;

console.log('_sum');
console.log(_sum(0));
console.log(_sum());
console.log(_sum(5));
