function doSum(a){
    let sum = a;
    return function additionFuc(b){
        if (b) {
            sum += b;
            return additionFuc;
        }
        return sum;
    }
}

function doSum2(a){
    return function additionFun(b){
        return b ? doSum2(a+b) : a
    }
}

const sumVal = doSum(1)(2)();
console.log(sumVal)