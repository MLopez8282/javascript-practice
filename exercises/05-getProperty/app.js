const getProperty = (obj, key) =>  {
  return obj[key]
  
};
let car = {
      model: 'Toyota'
  };
var output = getProperty(car, 'model');
console.log(output);
