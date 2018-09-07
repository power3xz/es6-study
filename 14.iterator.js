// iterators

// Syntaxes expecting iterables
// iterable이 필요한 문법 (not iterator)
// for (...of {iterable})
// for (let i of [1,2,3,4]) {
//   console.log(i);
// }
// [...{iterable}]
// const arr = [1,2,3,4];
// [...arr]; // [1,2,3,4]
// function* gen() {
//   yield* {iterable};
// }
// function* gen() {
//   yield* [1,2,3,4];
// }

// iterable protocol
//  - iterable protocol을 만족하기 위해선
//  iterator protocol을 따르는 객체를 리턴하는
//  Symbol.iterator를 함수로 가지고 있어야함
//  몇몇 타입은 built-in으로 iterable한 객체이다.
//  - Array, String, Set...
{
  const arr = [1,2,3,4];
  arr[Symbol.iterator] = null;
  console.log('[...arr]: ', [...arr]);
  const set = new Set([1,2,3]);
  console.log('set: ', set);
  console.log('[...set]: ', [...set]);
  const str = 'string';
  console.log('[...str]: ', [...str]);
}

// iterator protocol
//  - 일련의 값을 만드는 표준 방식을 정의
//  - 어떤 객체가 next메서드를 구현하였고
//  리턴하는 값이 { done: (boolean), value: any }
//  그 객체는 iterator protocol을 만족하는것
{
  const iterator = {
    count: 0,
    next: function() {
      return {
        done: this.count > 3,
        value: this.count++
      };
    }
  };
  console.log('iterator.next(): ', iterator.next());
  console.log('iterator.next(): ', iterator.next());
  console.log('iterator.next(): ', iterator.next());
  console.log('iterator.next(): ', iterator.next());
  console.log('iterator.next(): ', iterator.next());

  const arr = ['hi', 'ru', 1, 2, 3];
  const arrayIterator = arr[Symbol.iterator]();
  console.log('arrayIterator.next(): ', arrayIterator.next());
  console.log('arrayIterator.next(): ', arrayIterator.next());
  console.log('arrayIterator.next(): ', arrayIterator.next());
  console.log('arrayIterator.next(): ', arrayIterator.next());
  console.log('arrayIterator.next(): ', arrayIterator.next());
  console.log('arrayIterator.next(): ', arrayIterator.next());
}

// iterable
{
  const iterable = {
    count: 0,
    next: function() {
      this.count++;
      return {
        value: this.count,
        done: this.count > 2
      }
    },
    [Symbol.iterator]: function() {
      return this;
    }
  };
  console.log('[...iterable]: ', [...iterable]);
}
