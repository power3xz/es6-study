// template literals

// es5
var who = '당신은';
var where = '학교에';
var what = '지각하였습니다.'
var message = who + ' ' + where + ' ' + what;
console.log('message: ', message);

var poet = '이 몸이 죽고 죽어\n' +
  '일백 번 고쳐죽어\n' +
  '백골이 진토 되어\n' +
  '넋이라도 있고 없고\n' +
  '임 향한 일편단심이야\n' +
  '가실 줄이 있으랴\n';
console.log('poet: ', poet);

// es6
const _who = '당신은';
const _where = '학교에';
const _what = '지각하였습니다.'
const _message = `${_who} ${_where} ${_what}`;
console.log('_message: ', _message);

const _poet = `이 몸이 죽고 죽어
일백 번 고쳐죽어
백골이 진토 되어
넋이라도 있고 없고
임 향한 일편단심이야
가실 줄이 있으랴`;
console.log('_poet: ', _poet);
