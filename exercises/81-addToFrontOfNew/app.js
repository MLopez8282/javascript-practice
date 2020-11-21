// Write your function here
const addToFrontOfNew = (arr, element) => {
    let newArray = [];
   let total = newArray.concat(arr)
    total.unshift(element)
     
   
    return total;
};
console.log(addToFrontOfNew([3,4,3,6], 7));
