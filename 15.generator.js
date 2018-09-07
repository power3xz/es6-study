// generators
// generator function에서 리턴되는 객체를 generator라고 한다.
// generator는 iterable protocol과 iterator protocol을 만족한다.

const simpleGenerator = function*() {
  yield 1;
  yield 2;
  yield { name: 'javascript' };
  yield { name: 'csharp' };
};

const iter = simpleGenerator();
console.log('iter.next(): ', iter.next());
console.log('iter.next(): ', iter.next());
console.log('iter.next(): ', iter.next());
console.log('iter.next(): ', iter.next());

const iter2 = simpleGenerator();
console.log('[...iter2]: ', [...iter2]);

// generator receiving parameter
{
  const receiving = function*() {
    name = yield 'john';
    name = yield name;
    yield name;
  };

  const iter = receiving();
  console.log('iter.next("myname1"): ', iter.next("myname1"));
  console.log('iter.next("myname2"): ', iter.next("myname2"));
  console.log('iter.next("myname3"): ', iter.next("myname3"));
}

// range
{
  const gen = function*(to) {
    var i = 0;
    while (i <= to)
      yield i++;
  }
  for (let i of gen(10)) {
    console.log('i: ', i);
  }
  console.log('[...gen(3)]: ', [...gen(3)]);
}

// yield*
{
  const gen = function*() {
    yield 1;
    yield* ['one', 'two']; // iterable
    yield 2;
  }
  console.log('[...gen()]: ', [...gen()]);
}
