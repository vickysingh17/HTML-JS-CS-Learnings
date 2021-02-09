Array.prototype.newMap = function(fn, context=this) {
    const resultArray = [];
    for(let index=0;index<context.length;index++){
        resultArray.push(fn(context[index],index,context));
    }
    return resultArray;
}

Array.prototype.newForEach = function(fn, context=this) {
    for (let index=0 ; index<context.length ; index++) {
            fn(context[index], index, context);
        }
    }


Object.defineProperty(Array.prototype, "newMap", {
    enumerable: false
});

Object.defineProperty(Array.prototype, "newForEach", {
    enumerable: false
});

const sample = [1, 2, 4];

modifiedArr = sample.newMap( function(value, index, sample) {
    console.log(value);
    return value*2;
});

console.log(modifiedArr);



const arraySparse = [0,3,    ,7, undefined];
arraySparse.test = 'bad';

arraySparse.newForEach( function(value, index, sample) {
    console.log(value);
});



