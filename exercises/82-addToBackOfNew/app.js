// Write your function here
const addToBackOfNew = (arr,element) => {
let newArray = [];
    let total = newArray.concat(arr)
    total.push(element)
    
   
   
    return total;
};
console.log(addToBackOfNew([3,4,3,6], 7));