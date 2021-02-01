function doSum(a) {
  return function additionFun(b) {
    return b ? doSum(a + b) : a;
  };
}

const sumVal = doSum(1)(2)(3)();
console.log(sumVal);
