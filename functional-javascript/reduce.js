// FUNCTIONAL JAVASCRIPT IS GOOD
// ───────────────────────────────
// Basic: Reduce
// Exercise 6 of 18
//
//
// # Task
//
// Given an Array of strings, use Array#reduce to create an object that contains the number of times each string occured in the array. Return the object directly (no need to console.log).
//
// ## Example
//
//    var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
//
//    console.log(countWords(inputWords))
//
//    // =>
//    // {
//    //   Apple: 2,
//    //   Banana: 1,
//    //   Durian: 3
//    // }
//
// ## Arguments
//
//  * inputWords: An array of random Strings.
//
// ## Conditions
//
//  * Do not use any for/while loops or Array#forEach.
//  * Do not create any unnecessary functions e.g. helpers.
//
// ## Resources
//
//  * https://en.wikipedia.org/wiki/Reduce_(higher-order_function)
//  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
//
// ## Boilerplate
//
   function countWords(inputWords) {
      return inputWords.reduce(function(wordCount, inputWord){
        if(inputWord in wordCount){
          wordCount[inputWord]++;
        } else {
          wordCount[inputWord] = 1;
        }
        return wordCount;
      }, {});
   }

   module.exports = countWords
//
//
// » To print these instructions again, run: functional-javascript print
// » To execute your program in a test environment, run: functional-javascript run program.js
// » To verify your program, run: functional-javascript verify program.js
// » For help run: functional-javascript help

// input:      [ 'dolor', 'deserunt', 'ullamco', 'sint', 'dolore', 'ea', 'id', 'minim', 'minim', 'ad', 'ut', 'velit', 'laborum', 'laborum', 'cupidatat', 'amet', 'est', 'nostrud', 'aliqua', 'commodo', 'velit', 'et', 'nisi', 'cillum', 'minim', 'magna', 'laborum', 'incididunt', 'lorem', 'do', 'quis', 'nostrud', 'nisi', 'adipisicing', 'nisi', 'qui', 'est', 'tempor', 'officia', 'in', 'excepteur', 'incididunt', 'id', 'ea', 'aliquip', 'aliqua', 'ipsum' ]
// submission: { dolor: 1, deserunt: 1, ullamco: 1, sint: 1, dolore: 1, ea: 2, id: 2, minim: 3, ad: 1, ut: 1, velit: 2, laborum: 3, cupidatat: 1, amet: 1, est: 2, nostrud: 2, aliqua: 2, commodo: 1, et: 1, nisi: 3, cillum: 1, magna: 1, incididunt: 2, lorem: 1, do: 1, quis: 1, adipisicing: 1, qui: 1, tempor: 1, officia: 1, in: 1, excepteur: 1, aliquip: 1, ipsum: 1 }
// solution:   { dolor: 1, deserunt: 1, ullamco: 1, sint: 1, dolore: 1, ea: 2, id: 2, minim: 3, ad: 1, ut: 1, velit: 2, laborum: 3, cupidatat: 1, amet: 1, est: 2, nostrud: 2, aliqua: 2, commodo: 1, et: 1, nisi: 3, cillum: 1, magna: 1, incididunt: 2, lorem: 1, do: 1, quis: 1, adipisicing: 1, qui: 1, tempor: 1, officia: 1, in: 1, excepteur: 1, aliquip: 1, ipsum: 1 }
//
// # PASS
//
// Your solution to Basic: Reduce passed!
//
// Here's the official solution in case you want to compare notes:
//
// ────────────────────────────────────────────────────────────────────────────────
//     function countWords(arr) {
//       return arr.reduce(function(countMap, word) {
//         countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
//         return countMap
//       }, {}) // second argument to reduce initialises countMap to {}
//     }
//
//     module.exports = countWords
//
// ────────────────────────────────────────────────────────────────────────────────
//
// You have 11 challenges left.
// Type 'functional-javascript' to show the menu.
