// Write your function here
const computeAverageOfNumbers = input => {
    var total = 0;
for(var i = 0; i < input.length; i++) {
    total += input[i] / input.length ;
}
return total
}
var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output);