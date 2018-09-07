// Symbol
// https://developer.mozilla.org/en-US/docs/Glossary/Symbol
// ES6에 새롭게 추가된 primitive type
// * primitive type이란 뭘까?
//  - 오브젝트도 아니고 method도 없는 데이터 타입
//  - String, Number, Boolean, null, undefiend, Symbol
//  - 모든 primitive들은 immutable하다.
// non enumerable이기(열거형이 아님) 때문에 for (... in ...) 참조 되지 않음
// new Symbol() 형태로 new 키워드를 사용한 호출이 불가능

// syntax
// const symbol = Symbol(symbolkey);
{
  const symbol = Symbol('newSymbol');
  console.log('symbol: ', symbol);
}

// methods
// Symbol.for(key)
// 글로벌 심볼 레지스트리에서 해당 키값의 심볼이 존재하면 해당 심볼리턴,
// 그렇지 않으면 새로운 심볼이 생성되고 그 심볼이 리턴
{
  const s1 = Symbol.for('sym');
  const s2 = Symbol.for('sym');
  console.log('s1 === s2: ', s1 === s2);
}
{
  // Symbol(key)로 생성된 심볼은 유일하다.
  const s1 = Symbol('sym1');
  const s2 = Symbol('sym1');
  console.log('s1 === s2: ', s1 === s2);
  const s3 = Symbol.for('sym1');
  console.log('s1 === s3: ', s1 === s3);
  console.log('s2 === s3: ', s2 === s3);
}

// Symbol.keyFor(symbol)
// 해당 심볼의 글로벌 심볼 레지스트리의 키값을 가져옴 (Symbol.for() 메서드로 생성된 심볼)
const s6 = Symbol('notregistered');
console.log('Symbol.keyFor(s6): ', Symbol.keyFor(s6)); // undefined
const s7 = Symbol.for('registered');
console.log('Symbol.keyFor(s7): ', Symbol.keyFor(s7)); // registered

const foo = Symbol()
const bar = Symbol()
let obj = {
  key1: 'value1',
  key2: 'value2'
}
obj[foo] = 'foo'
obj[bar] = 'bar'
console.log('JSON.stringify(obj): ', JSON.stringify(obj));
console.log('Object.keys(obj): ', Object.keys(obj));
console.log('Object.getOwnPropertyNames(obj): ', Object.getOwnPropertyNames(obj));
console.log('Object.getOwnPropertySymbols(obj): ', Object.getOwnPropertySymbols(obj));

// 그래서 왜 필요한거지?
// 프로퍼티 이름 충돌 해결
String.toString = () => 'hi';
console.log('String.toString("goodman"): ', String.toString("goodman"));
const toString = Symbol();
String[toString] = () => 'good';
console.log('String[toString]("goodman"): ', String[toString]("goodman"));
// 인터페이스
// well known symbols
// Symbol.iterator // iteration을 위한 symbol
// Symbol.match
// Symbol.split
// Symbol.replace




// generat
