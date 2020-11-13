function removeProperty(obj, key) {
       delete obj[key] 
       return obj
  // your code here
};
var person = {
  name: 'Monica',
  age: 20
};
console.log(removeProperty(person, 'age'))
