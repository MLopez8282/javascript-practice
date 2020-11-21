// Write your function here
const getElementsThatEqual10AtProperty = (obj,key) => {
 let newArray = [];
 let equalTen = obj[key]
for(let i=0; i < equalTen.length; i++){
    if(equalTen[i] === 10){
        newArray.push(equalTen[i])
        
    } 
    
}
return newArray
};
var obj = {
  key: [1000, 10, 50, 10]
};
console.log(getElementsThatEqual10AtProperty(obj,'key'));