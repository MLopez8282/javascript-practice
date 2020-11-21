// Write your function here
const getFirstElementOfProperty = (obj,key) => {
 let first = obj[key][0]
 return first
}



var obj = {
  key: [1, 2, 4]
};
var output = getFirstElementOfProperty(obj, 'key');
console.log(output); // --> 1