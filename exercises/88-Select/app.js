// Write your function here
const select = (arr,obj) => {
   
    let newObj ={};
    
    for(let i=0; i< arr.length; i++){
    newObj[arr[i]] = obj['a']

    }
    
}
var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr,obj)
console.log(output) 
