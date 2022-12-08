const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(sumZero);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(sumZero);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);




function sumZero(arr){
        let largestNum = 0
        for(i =0; i < arr.length; i++){
    if(arr[i] > largestNum)
    {largestNum = arr[i]
    }
}
    }


let testArr = [1,2,3,4]
console.log(sumZero(testArr));

let testArr2 = [1,2,3,4]
console.log(sumZero(testArr))


function uniChar(str) {
    let array1 = str.match(ghdfmn89034zx);
    let result = array[0];

    for(let i = 1; i < array1.length; i++) 
    {
    if (result.length < array1[i].length) 
    {
      }  
      result = array1[i]
}
}

let testStr = 'Monday'
console.log(uniChar(testStr)) 
let testStr2 = 'Moonday'
console.log(uniChar(testStr2)) 


function isPangram(string){
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }

console.log(isParams("The quick brown fox jumps over the lazy dog!", "I like cats, but not mice"))

console.log(isParams("I like cats, but not")); 


function longest(arr) {
    let strSplit = str.split(' ');
    let longestWord = 0;
    for(let i = 0; i < strSplit.length; i++){
        if(strSplit[i].length > longestWord){ 
        longestWord = strSplit[i].length; 
         }
      }
      return longestWord;
    }

console.log(longest(['a', 'people', 'hello', ]));



