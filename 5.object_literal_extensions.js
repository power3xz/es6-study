// object literal extensions

// es5
var adName = '프리미엄 광고';
var adPrice = 3000;
var adProduct = {
  adName: adName,
  adPrice: adPrice
};
console.log('adProduct: ', adProduct);

// es6
const _adName = '프리미엄 광고';
const _adPrice = 3000;
const _adProduct = {
  adName,
  adPrice
};
console.log('_adProduct: ', _adProduct);

// computed property names
// es5
var random = Math.random();
const obj = {};
obj[random] = 'random number name';
console.log('obj: ', obj);

// es6
const _random = Math.random();
const _obj = {
  [_random]: 'ramdon number name'
};

console.log('_obj: ', _obj);
