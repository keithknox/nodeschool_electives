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
         return inputWords.reduce(function(a,b){
               if(!a[b]){
                     a[b]=1
               } else {
                     a[b] = a[b]+1;
               }
               return a;
         }, {});
   }

   module.exports = countWords
//
//
// » To print these instructions again, run: functional-javascript print
// » To execute your program in a test environment, run: functional-javascript run program.js
// » To verify your program, run: functional-javascript verify program.js
// » For help run: functional-javascript help

// 
// input:      [ 'veniam', 'ipsum', 'veniam', 'non', 'veniam', 'sunt', 'laborum', 'excepteur', 'anim', 'laborum', 'magna', 'mollit', 'veniam', 'id', 'quis', 'qui', 'amet', 'amet', 'cillum', 'eu', 'consequat', 'do', 'ex', 'ea', 'ullamco', 'velit', 'labore', 'enim', 'ipsum', 'culpa', 'et', 'anim', 'dolore', 'excepteur', 'aliqua', 'deserunt', 'ea', 'voluptate', 'excepteur', 'cillum', 'consequat', 'magna', 'ea', 'veniam', 'magna', 'irure', 'magna', 'ea' ]
// submission: { veniam: 5, ipsum: 2, non: 1, sunt: 1, laborum: 2, excepteur: 3, anim: 2, magna: 4, mollit: 1, id: 1, quis: 1, qui: 1, amet: 2, cillum: 2, eu: 1, consequat: 2, do: 1, ex: 1, ea: 4, ullamco: 1, velit: 1, labore: 1, enim: 1, culpa: 1, et: 1, dolore: 1, aliqua: 1, deserunt: 1, voluptate: 1, irure: 1 }
// solution:   { veniam: 5, ipsum: 2, non: 1, sunt: 1, laborum: 2, excepteur: 3, anim: 2, magna: 4, mollit: 1, id: 1, quis: 1, qui: 1, amet: 2, cillum: 2, eu: 1, consequat: 2, do: 1, ex: 1, ea: 4, ullamco: 1, velit: 1, labore: 1, enim: 1, culpa: 1, et: 1, dolore: 1, aliqua: 1, deserunt: 1, voluptate: 1, irure: 1 }
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
// You have 12 challenges left.
// Type 'functional-javascript' to show the menu.
