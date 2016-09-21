// Master Express.js and have fun!
// ─────────────────────────────────
// HELLO WORLD!
// Exercise 1 of 8
//
// Create an Express.js app that outputs "Hello World!" when somebody goes to /home.
//
// The port number will be provided to you by expressworks as the first argument of
// the application, i.e., process.argv[2].
//
// Run $ killall node  before verifying exercises (in your terminal on Mac OS X) to end any previous processes.
//
// For Windows, use "taskkill /IM node.exe" in Command Prompt.
//
// Don't forget to install the Express module if you haven't already.
//
//    $ npm install express --save
//
// -------------------------------------------------------------------------------
//
// ## HINTS
//
// This is how we can create an Express.js app on port 3000, that responds with
// a string on '/':
//
//    var express = require('express')
//    var app = express()
//    app.get('/', function(req, res) {
//      res.end('Hello World!')
//    })
//    app.listen(3000)
//
// In your solution, please use process.argv[2] instead of a fixed port number:
//
//    app.listen(process.argv[2])
//
// Videos: [http://bit.ly/1jW1sBf](http://bit.ly/1jW1sBf).
//
//
// » To print these instructions again, run: expressworks print
// » To execute your program in a test environment, run: expressworks run program.js
// » To verify your program, run: expressworks verify program.js
// » For help run: expressworks help


      var express = require('express');
      var app = express();
      app.get('/home', function(req, res){
            res.end('Hello World!');
      });
      app.listen(process.argv[2]);


      // Your submission results compared to the expected:
      //
      //                  ACTUAL                                 EXPECTED
      // ────────────────────────────────────────────────────────────────────────────────
      //
      //    "Hello World!"                      ==    "Hello World!"
      //
      // ────────────────────────────────────────────────────────────────────────────────
      //
      // ✓ Submission results match expected
      //
      // # PASS
      //
      // Your solution to HELLO WORLD! passed!
      //
      // Here's the official solution in case you want to compare notes:
      //
      // ────────────────────────────────────────────────────────────────────────────────
      //     var express = require('express')
      //     var app = express()
      //     app.get('/home', function(req, res) {
      //       res.end('Hello World!')
      //     })
      //     app.listen(process.argv[2])
      //
      // ────────────────────────────────────────────────────────────────────────────────
      //
      // You have 2 challenges left.
      // Type 'expressworks' to show the menu.
