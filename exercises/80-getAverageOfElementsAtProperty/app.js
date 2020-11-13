// Write your function here
const getAverageOfElementsAtProperty = (obj,key) => {
    var average = 0;
    if(obj[key].length < 1){
        return 0
    }else{
    for(let i=0; i < obj[key].length; i++){
        average = average + obj[key][i];
        
    }
        return  average / obj[key].length;
}   
}

var obj = {
  key: [1, 2, 3]
};
console.log(getAverageOfElementsAtProperty(obj, 'key'));