// Write your function here
const getElementsLessThan100AtProperty = (obj,key) => {
    var array = [obj.key];
    let newArray = {}
    
        if(array.length < 100){
              var array = [obj.key];
            return array.push(newArray)
        }
    }

var obj = {
  key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); 

