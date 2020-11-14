// Write your function here
const findMaxLengthOfThreeWords = (word1, word2, word3) => {
  let words = [ word1, word2, word3];  
    for (let i = 0; i < words.length; i++ ){   
      return Math.max(words[i].length);    
    
  }
 
}
console.log(findMaxLengthOfThreeWords('joe', 'what', 'ok'))
//why parameters are put in brackets when assigned to variable?