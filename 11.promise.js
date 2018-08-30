// promise

var message = '3초가 걸리는 쿼리는 느린 쿼리입니다.';
var delay = function(ms, cb) {
  setTimeout(function() {
    cb();
  }, ms);
};

delay(3000, function() {
  console.log('message: ', message);
  delay(1000, function() {
    console.log('쿼리1 종료');
  });
});


const _message = '6초가 걸리는 쿼리는 더 느린 쿼리입니다.';
const _delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
};

_delay(6000)
  .then(() => console.log('_message: ', _message))
  .then(() => _delay(3000))
  .then(() => console.log('쿼리2 종료'));
