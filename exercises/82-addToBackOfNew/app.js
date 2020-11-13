// Write your function here
const addToBackOfNew = (arr,element) => {
let newArray = [];
    newArray.push(element)
   let total = newArray.concat(arr)
    return total;
};
console.log(addToBackOfNew([3,4,3,6], 7));