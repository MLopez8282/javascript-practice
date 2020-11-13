// Write your function here
const isOddLength = word => {
    if(word.length % 2 !== 0){
        return true;
    }else{
        return false;
    }
}
console.log(isOddLength('bob'))