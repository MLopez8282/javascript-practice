// Write your function here
const getLastElementOfProperty = (obj, key) => {
 //let last = obj[key].length -1;   this works, what other way is better?   
let array = obj[key];
return array[array.length -1]
}

var obj = {
  key: [1, 2, 5]
};
var output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5