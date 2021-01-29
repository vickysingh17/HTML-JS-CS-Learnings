
Array.prototype.newMap = function(fn, context=this) {
    const resultArray = [];
    for (let index of context) {
        if(!isNaN(Number(index))){
            resultArray.push(fn(context[index], index, context));
        }
    }
    return resultArray;
}

Array.prototype.newForEach = function(fn, context=this) {
    for (let index in context) {
        if(!isNaN(Number(index))){
            fn(context[index], index, context);
        }
    }
}


Object.defineProperty(Array.prototype, "newMap", {
    enumerable: false
});

Object.defineProperty(Array.prototype, "newForEach", {
    enumerable: false
});


const arraySparse = [0,3,,7, undefined];
arraySparse.test = 'bad';

modifiedArr = arraySparse.map( function(value, index, sample) {
    console.log(value);
    return value;
});

console.log(modifiedArr);
console.log(typeof modifiedArr[2]);

//Array.prototype.newForEach = function()



// const arraySparse = [0,3,,7]
// arraySparse.test = 'bad';
// let numCallbackRuns = 0;


// arraySparse.newForEach(function(element) {
//     console.log(element)
//     numCallbackRuns++
// });

// console.log(numCallbackRuns);