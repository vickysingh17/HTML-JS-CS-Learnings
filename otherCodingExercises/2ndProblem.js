function reorderArr(originalArr, indexArr) {
    for(let i = 0 ; i < originalArr.length ; i++) {
        while(indexArr[i]!=i) {
            doSwap(originalArr, indexArr, i, indexArr[i]);
        }
    }
}

const doSwap = (originalArr, indexArr, i, j) => {
    let temp = originalArr[i];
    originalArr[i] = originalArr[j];
    originalArr[j] = temp;
    temp = indexArr[i];
    indexArr[i] = indexArr[j];
    indexArr[j] = temp;
};

let A = ['A', 'B', 'C', 'D','E']
let B = [2,4,0,1,3];
reorderArr(A, B);
console.log(A);