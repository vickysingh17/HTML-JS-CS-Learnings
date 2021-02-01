const factorial = num => {
  fact = 1;
  for (let i = 2; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
};

const memoize = func => {
  let cache = new Map();

  return function (num) {
    if (cache.has(num)) {
      return cache.get(num);
    }

    let result = func(num);

    cache.set(num, result);
    return result;
  };
};
const memoizedFactorial = memoize(factorial);
const memoizedFactorial2 = memoize(factorial);
console.log(memoizedFactorial(17)); // slow
console.log(memoizedFactorial(17)); // faster
