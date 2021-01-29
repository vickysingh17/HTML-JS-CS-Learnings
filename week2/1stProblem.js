// function sumMeUp(fn) {
//     return (...args) => fn(...args);
// }
// function sum(a, b, c) {	
//     return a + b + c;
// }

// //You should be able to to invoke the function like below
// var currySum = sumMeUp(sum);
// console.log(currySum(1, 3, 9, 2));


function sumMeUp(fn) {

    return function curry(...args1) {
        if(args1.length===3) {
            return fn(...args1);
        } else {
            return function(...args2) {
                return curry(...args1, ...args2);
            }
        }
    }

}
function sum(a,b,c) {
    return a+b+c;
}
var currySum = sumMeUp(sum);
console.log(currySum(1,3,5));
console.log(currySum(2)(3,5));
console.log(currySum(1)(2)(3));