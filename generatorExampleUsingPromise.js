// 아.. 비동기로 JSON형식의 텍스트 받아온다음에
// 그 텍스트 파싱해서 오브젝트로 만들고 
// 그 오브젝트에 hi프로퍼티를 비동기로 추가하고싶다.
// 아 이거 끝내야 집에가는데... 아...

const getText = () => {
  console.log('start getting text...')
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(JSON.stringify({a: 'b', c: 'd'}));
      console.log('end getting text...');
    }, 1000);
  });
};

const addHi = (obj) => {
  console.log('start adding hi...');
  return new Promise((resolve) => {
    setTimeout(() => {
      obj.hi = 'hello';
      resolve(obj);
      console.log('end adding hi...');
    }, 2000);
  });
};

// using promise
getText()
  .then((text) => {
    return JSON.parse(text);
  }).then((obj) => {
    return addHi(obj);
  }).then((hiAdded) => {
    console.log(hiAdded);
  });


// using generator
const asyncBatchTask = function*() {
  const text = yield getText();
  console.log('text: ', text);
  const obj = yield JSON.parse(text);
  console.log('obj: ', obj);
  const hiAdded = yield addHi(obj);
  console.log('hiAdded: ', hiAdded);
  return hiAdded;
};

const asyncTaskRunner = (genFn) => {
  const itr = genFn();
  function run(arg) {
    const result = itr.next(arg);
    if (result.done) {
      return result.value;
    } else {
      return Promise.resolve(result.value).then(run);
    }
  }
  return run();
}

// asyncTaskRunner(asyncBatchTask).then((result) => console.log(result));
// https://hackernoon.com/async-await-generators-promises-51f1a6ceede2
