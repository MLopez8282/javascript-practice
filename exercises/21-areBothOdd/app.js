// Write your function here
const areBothOdd = (num1, num2) => {
    if(num1 % 3 === 0 && num2 % 3 === 0){
        return true;
    }else{
        return false;
    }
}
console.log(areBothOdd(4,2))
