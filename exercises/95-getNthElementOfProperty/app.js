// Write your function here
const getNthElementOfProperty = (obj,key, index) => {
    let nthElement = obj[key][index];
    return nthElement


}


var obj = {
  key: [1, 2, 6]
};
var output = getNthElementOfProperty(obj, 'key', 1); //? third parameter?
console.log(output);