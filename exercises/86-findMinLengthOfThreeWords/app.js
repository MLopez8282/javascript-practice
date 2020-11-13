// Write your function here
const findMinLengthOfThreeWords = (word1, word2, word3) => {
  let words = [ word1, word2, word3];  
    for ( i = 0; i < words.length; i++ ){   
    return Math.min(words[i].length);    
   
  }

}
console.log(findMinLengthOfThreeWords('joe', 'what', 'ok'))
//why is let length allowed inside the function?