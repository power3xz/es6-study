// generators

const simpleGenerator = function* () {
  yield 1;
  yield { name: 'javascript' };
  yield 2;
  yield { name: 'csharp' };
};

const iter = simpleGenerator();
console.log('iter.next(): ', iter.next().value);
console.log('iter.next(): ', iter.next().value);
console.log('iter.next(): ', iter.next().value);
console.log('iter.next(): ', iter.next().value);

const iter2 = simpleGenerator();
console.log('[...iter2]: ', [...iter2]);

const range = function* (start, end) {
  let i = start;
  while(i <= end) {
    yield i++;
  }
};

for(let i of range(0, 3)) {
  console.log('i: ', i);
}
