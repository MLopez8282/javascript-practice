// Write your function here

const getElementsGreaterThan10AtProperty = (obj,key) => {
    let arr =[];
    let numArr = obj[key]
   for(let i = 0; i < numArr.length; i++){
       if(numArr[i] > 10){
           
       arr.push(numArr[i])
       }
    
   
}
    return arr
}







var obj = {
  key: [1, 20, 30]
};
var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]
