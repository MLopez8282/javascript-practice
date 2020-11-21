// Write your function here
const getElementsLessThan100AtProperty = (obj,key) => {
    var array = obj[key];
    let newArray = []
    for(let i =0; i < array.length; i++){
        if(array[i] < 100){
              newArray.push(array[i])
        }
    }
    return newArray
}

var obj = {
  key: [1000, 20, 50, 500]
};
 
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); 

