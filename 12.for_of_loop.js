// for of loop

// es5
var arr = ['s', 't', 'r', 'i', 'n', 'g'];
for(var i in arr) {
  console.log('arr[i]: ', arr[i]);
}

// using forEach
arr.forEach(function(i) {
  console.log('i: ', i);
});

// es6
const _arr = ['s', 't', 'r', 'i', 'n', 'g'];
for(let i of _arr) {
  console.log('i: ', i);
}
