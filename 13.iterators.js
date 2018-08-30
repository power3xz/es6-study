// interator protocol

const oneToTenRangeIterator = {
  [Symbol.iterator]: () => {
    let i = 0;
    const until = 10;
    return {
      next: () => {
        return {
          value: ++i,
          done: (i === 11)
        }
      }
    };
  }
}

for (const i of oneToTenRangeIterator) {
  console.log('i: ', i);
}

class MyCollection {
  constructor(arr) {
    this.arr = arr;
  }

  [Symbol.iterator]() {
    let i = 0;
    let arr = this.arr;
    return {
      next: () => {
        return { value: arr[i], done: i++ >= arr.length };
      }
    };
  }
}

const mc = new MyCollection(['1', '2', '3', '4']);
console.log('[...mc]: ', [...mc]);
for (let str of mc) {
  console.log('str: ', str);
}
