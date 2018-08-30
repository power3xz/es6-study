// rest and spread

// rest
// es5
var printNumberAndStrings = function(number) {
  var strings = Array.prototype.slice.call(arguments, 1);
  console.log('number', number);
  console.log('strings', strings);
};
printNumberAndStrings(3, '의미', '있는', '스트링');


// es6
const _printNumberAndStrings = (number, ...strings) => {
  console.log('number', number);
  console.log('strings', strings);
};
_printNumberAndStrings(3, '의미', '없는', '스트링');

// spread
// es5
var numbers = [4, 5, 6];
var searchNumbers = [1, 2, 3];
searchNumbers = searchNumbers.concat(numbers);
console.log('max', Math.max.apply(null, searchNumbers)); // Math.max(1,2,3,4,5,6) => 6

// es6
const _numbers = [4, 5, 6];
const _searchNumbers = [1, 2, 3];
console.log('max', Math.max(..._numbers, ..._searchNumbers));
