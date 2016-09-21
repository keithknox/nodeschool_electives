// FUNCTIONAL JAVASCRIPT IS GOOD
// ───────────────────────────────
// Hello World
// Exercise 1 of 18
//
//
// # Task
//
// Write a function that takes an input string and returns it uppercased.
//
// ## Arguments
//
//  * input: a String of random words (lorem ipsum).
//
// ## Boilerplate
//
//    function upperCaser(input) {
//      // SOLUTION GOES HERE
//    }
//
//    module.exports = upperCaser
//
//
// » To print these instructions again, run: functional-javascript print
// » To execute your program in a test environment, run: functional-javascript run program.js
// » To verify your program, run: functional-javascript verify program.js
// » For help run: functional-javascript help

      function upperCaser(input){
            return input.toUpperCase();
      }
      module.exports = upperCaser

      // Your solution to Hello World didn't pass. Try again!
      //
      // keith@Lewey ~/Documents/code_practice/nodeschool/electives/functional-javascript $  functional-javascript verify hello_world.js
      // input:      'Eiusmod mollit commodo adipisicing esse officia ex veniam id voluptate commodo duis officia cupidatat.'
      // submission: 'EIUSMOD MOLLIT COMMODO ADIPISICING ESSE OFFICIA EX VENIAM ID VOLUPTATE COMMODO DUIS OFFICIA CUPIDATAT.'
      // solution:   'EIUSMOD MOLLIT COMMODO ADIPISICING ESSE OFFICIA EX VENIAM ID VOLUPTATE COMMODO DUIS OFFICIA CUPIDATAT.'
      //
      // # PASS
      //
      // Your solution to Hello World passed!
      //
      // Here's the official solution in case you want to compare notes:
      //
      // ────────────────────────────────────────────────────────────────────────────────
      //     module.exports = function(input) {
      //       return input.toUpperCase()
      //     }
      //
      // ────────────────────────────────────────────────────────────────────────────────
      //
      // You have 13 challenges left.
      // Type 'functional-javascript' to show the menu.
