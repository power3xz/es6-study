// import

// node --experimental-modules 9.import.mjs

// export default
import putYourHandsUp from './someModule.mjs';
console.log('putYourHandsUp(): ', putYourHandsUp());

// import as
import * as IU from './someModule.mjs';
console.log('IU.sayHi: ', IU.sayHi);
console.log('IU.iSay: ', IU.iSay);
console.log('IU.youSay: ', IU.youSay);

// destructuring
import { sayHi, iSay, youSay } from './someModule.mjs';
console.log('sayHi: ', sayHi);
console.log('iSay: ', iSay);
console.log('youSay: ', youSay);

console.log('소리질러');
