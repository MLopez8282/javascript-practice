// Write your function here
const addToFrontOfNew = (arr, element) => {
    let newArray = [];
    newArray.push(element)
   let total = newArray.concat(arr)
    return total;
};
console.log(addToFrontOfNew([3,4,3,6], 7));
