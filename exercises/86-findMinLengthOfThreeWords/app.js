// Write your function here
const findMinLengthOfThreeWords = (word1, word2, word3) => {
  let words = [ word1, word2, word3];  
    for ( i = 0; i < words.length; i++ ){   
    let length = words[i].length;    
    let min = Math.min(length);    
    return min;  
  }

}
console.log(findMinLengthOfThreeWords('joe', 'what', 'ok'))