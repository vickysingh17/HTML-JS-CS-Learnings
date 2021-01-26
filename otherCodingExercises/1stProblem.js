function vowelCount(str){
    let charArr = [...str.toLowerCase()];
    let vowelCounterObj = {};
    
    charArr.forEach((char) => {
        switch (char) {
            case 'a' : 
                vowelCounterObj[char] = vowelCounterObj[char] ? vowelCounterObj[char]+1 : 1;
                break;
            
            case 'e' : 
                vowelCounterObj[char] = vowelCounterObj[char] ? vowelCounterObj[char]+1 : 1;
                break;

            case 'i' : 
                vowelCounterObj[char] = vowelCounterObj[char] ? vowelCounterObj[char]+1 : 1;
                break;

            case 'o' : 
                vowelCounterObj[char] = vowelCounterObj[char] ? vowelCounterObj[char]+1 : 1;
                break;

            case 'u' : 
                vowelCounterObj[char] = vowelCounterObj[char] ? vowelCounterObj[char]+1 : 1;
                break;
        }
    });

    return vowelCounterObj;
    
}

console.log(vowelCount('I Am awesome and so are you'));