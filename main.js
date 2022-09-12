'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



// const pigLatin = (word) => {
//   // Make sure word is trimmed and put to lowercase first
//   word = word.trim();
//   word = word.toLowerCase();
//   // Set your vowels array to compare to word
//   let vowels = ['a', 'e', 'i', 'o', 'u']
//   let wordArray = word.split('')
//   let finalArray = []
//   for (let index = 0; index < 2; index++) {
//     console.log(wordArray[index])
//     if(vowels.includes(wordArray[index])) {
//       console.log(index)
//         if(index === 0){
//           let theWord = word + 'yay'
//           finalArray.push(theWord)
//         }
//           // else if (index === 1) {
//           //   basicPigLatin(wordArray)
//           // }
//     } else {
//       let length = wordArray.length;
//       let twoLetters = wordArray.slice(0,2);
//       let restWord = wordArray.slice(length-3, length-1)
//     let complexWord = restWord+ twoLetters
    
//     finalArray = complexWord
//     console.log(finalArray)
//     }
//   }
//   const answer = finalArray.join(' ');
//   console.log(answer)
//   return answer
// }


const pigLatin = (w) => {
  let word = w.trim();
  let wordFormatted = word.toLowerCase();

  let wordArray = wordFormatted.split('');
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  console.log (wordArray)

  for (let i=0; i<2; i++){
    console.log(wordArray[i])
    if(vowels.includes(wordArray[i])){
     
      if (i === 0) {
        let theVowelWord = wordFormatted + 'yay';
        console.log(theVowelWord)
        return theVowelWord


        // now if vowel is at index [1], remove first letter (a consonant) and push it to end of word w/ 'ay'
      } else if (i===1) {
        let firstLetter = wordArray.splice(0,1,"")
        console.log(firstLetter)
        console.log(wordArray)
        console.log(wordFormatted)

       let lengthOfArray = wordArray.push(firstLetter)
        console.log(lengthOfArray)
        console.log(wordArray)

        let joinedWord = wordArray.join("");
        console.log(joinedWord)
        const finalNormalWord = joinedWord + "ay"
        console.log(finalNormalWord)
        return finalNormalWord
      } 
      //end of normal consonant word
    }
  }
}




// basicPigLatin = (wordArray) => {
//   console.log(wordArray)
// }
  // else if (!vowels.includes(wordArray[index]))
  // {
  //   let finalArrayTwo = []
  //   let letterOne = wordArray[0]
  //   let letterTwo = wordArray[1]
  //   let complexWord = wordArray + letterOne + letterTwo
  //   finalArrayTwo.push(complexWord)
  // }


// could we also do an if/else statement?

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 
//2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.

// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
