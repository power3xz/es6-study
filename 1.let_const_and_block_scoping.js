// let, const and block scoping

// let
// es5
var lawyerName = '김변호';

// es6
let _lawyerName = '김변호';

// const
// es5
var PI = 3.141593;

// es6
const _PI = 3.141593;
// _PI = '맛있는 파이'; // TypeError: Assignment to constant variable.

// block scoping
// es5
var i = 5;
for (var i = 0, n = 3; i < n; i++) {
  console.log(i);
}
console.log(i);
console.log('end es5 loop');

// es6
let _i = 5;
for (let _i = 0, _n = 3; _i < _n; _i++) {
  console.log(_i);
}
console.log(_i);
console.log('end es6 loop');
