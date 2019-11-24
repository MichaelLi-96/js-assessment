stringsAnswers = {
  /**
   * Reduces a string by removing letters that repeat more than amount times.
   * 
   * Example: reduceString('aaaabbb', 1) should reduce to 'ab'
   * Example: reduceString('aaaabbb', 2) should reduce to 'aabb'
   * 
   * @param {String} str - String that is to be reduced
   * @param {Number} amount - The maximum number of adjacent repeated letters in the result string.
   * @returns {String} A string with no more than amount number of repeated letters.
   */
  reduceString: function reduceString(str, amount) {
    let reducedStr = "";
    let currentChar = str.charAt(0);
    let currentCharCounter = 0;
    for(let i = 0; i < str.length; i++) {
       if(str.charAt(i) !== currentChar) {
         currentChar = str.charAt(i);
         currentCharCounter = 0;
       }
       if(str.charAt(i) === currentChar) {
         if(currentCharCounter < amount) {
           reducedStr += str.charAt(i);
         }
          currentCharCounter++;
       }
    }
    return reducedStr;
  },

  /**
   * Reverses a string of text
   * 
   * Example: reverseString('abc') should be 'cba'
   * 
   * @param {String} str - a string of text to be reversed
   * @returns {String} The original string of text str reversed.
   */
  reverseString: function reverseString(str) {
    let reversedStr = "";
    for(let i = str.length - 1; i >= 0; i--) {
      reversedStr += str.charAt(i);
    }
    return reversedStr;
  },
};
