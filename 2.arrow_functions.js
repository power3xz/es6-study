// arrow functions

// es5
var getLawyer = function() {
  return {
    name: '김변호',
    age: 22
  };
};
console.log('getLawyer(): ', getLawyer());

// es6
const _getLawyer = () => {
  return {
    name: '김변호',
    age: 22
  };
};

console.log('_getLawyer(): ', _getLawyer());

const sum = (a, b) => {
  return a + b;
};
console.log('sum(2, 5): ', sum(2, 5));

// block 이 없을 경우 return 생략 가능
const anotherSum = (a, b) => a + b;
console.log('anotherSum(2, 6): ', anotherSum(2, 6));

// 매개변수 인자가 1개일경우 괄호 생략 가능
const addTwo = a => a + 2;
console.log('addTwo(3): ', addTwo(3));
