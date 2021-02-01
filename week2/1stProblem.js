function sumMeUp(fn) {
  return function curry(...args1) {
    if (args1.length >= 3) {
      return fn(...args1);
    } else {
      return function (...args2) {
        return curry(...args1, ...args2);
      };
    }
  };
}
function sum(a, b, c) {
  return a + b + c;
}
var currySum = sumMeUp(sum);
console.log(currySum(1, 3, 6));
console.log(currySum(2, 3)(3));
console.log(currySum(1)(2)(3));

// check the length of the argument. More or less. More kae case it should return undefined, less 
