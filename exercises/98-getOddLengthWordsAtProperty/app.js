// Write your function here
const getOddLengthWordsAtProperty = (obj,key) => {
    let arr= [];
    let arrStr =obj[key];
    for( i = 0; i < arrStr.length; i++){
    if(arrStr[i].length % 2 !== 0) {
        arr.push(arrStr[i]);
    }

    } 
    return arr;
    
}

var obj = {
  key: ['It', 'has', 'some', 'words']
};
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); 