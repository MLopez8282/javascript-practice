// Write your function here
const getAllElementsButNth = (array, index) => {
    
    
    array.splice(index,1)

   return array
};

console.log(getAllElementsButNth(['a','b','c'],1))