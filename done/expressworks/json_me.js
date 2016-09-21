      // Master Express.js and have fun!
// ─────────────────────────────────
// JSON ME
// Exercise 8 of 8
//
// Most of the times we're building RESTful API servers with JSON.
//
// Write a server that, when it receives a GET, reads a file, parses it to JSON,
// and responds with that content to the user.
//
// The server should respond to any GET that matches the /books resource path.
// As always, the port is passed in process.argv[2]. The file to read is passed
// in process.argv[3].
//
// Respond with:
//
//    res.json(object)
//
// Everything should match the /books resource path.
//
// For reading the file, use the fs module, e.g.,
//
//    fs.readFile(filename, callback)
//
// -------------------------------------------------------------------------------
//
// ## HINTS
//
// While the parsing can be done with JSON.parse:
//
//    object = JSON.parse(string)
//
// No need to install the fs module. It's part of the core and the Node.js platform.
//
// Videos: [http://bit.ly/1jW1sBf](http://bit.ly/1jW1sBf).
//
//
// » To print these instructions again, run: expressworks print
// » To execute your program in a test environment, run: expressworks run program.js
// » To verify your program, run: expressworks verify program.js
// » For help run: expressworks help


      var express = require('express');
      var fs = require('fs');
      var app = express();

      app.get('/books', function(req, res){
            var file = JSON.parse(fs.readFileSync(process.argv[3]));
                  res.json(file)
         });

      app.listen(process.argv[2]);



      // Your submission results compared to the expected:
      //
      //                  ACTUAL                                 EXPECTED
      // ────────────────────────────────────────────────────────────────────────────────
      //
      //    "[{\"title\":\"Express.js Guide\",\"tags\":[\"node.js\",\"express.js\"],\"url\":\"http://expressjsguide.com\"},{\"title\":\"Rapid Prototyping with JS\",\"tags\":[\"backbone.js\",\"node.js\",\"mongodb\"],\"url\":\"http://rpjs.co\"},{\"title\":\"JavaScript: The Good Parts\",\"tags\":[\"javascript\"]}]" ==    "[{\"title\":\"Express.js Guide\",\"tags\":[\"node.js\",\"express.js\"],\"url\":\"http://expressjsguide.com\"},{\"title\":\"Rapid Prototyping with JS\",\"tags\":[\"backbone.js\",\"node.js\",\"mongodb\"],\"url\":\"http://rpjs.co\"},{\"title\":\"JavaScript: The Good Parts\",\"tags\":[\"javascript\"]}]"
      //
      // ────────────────────────────────────────────────────────────────────────────────
      //
      // ✓ Submission results match expected
      //
      // # PASS
      //
      // Your solution to JSON ME passed!
      //
      // Here's the official solution in case you want to compare notes:
      //
      // ────────────────────────────────────────────────────────────────────────────────
      //     var express = require('express')
      //     var app = express()
      //     var fs = require('fs')
      //
      //     app.get('/books', function(req, res){
      //       var filename = process.argv[3]
      //       fs.readFile(filename, function(e, data) {
      //         if (e) return res.sendStatus(500)
      //         try {
      //           books = JSON.parse(data)
      //         } catch (e) {
      //           res.sendStatus(500)
      //         }
      //         res.json(books)
      //       })
      //     })
      //
      //     app.listen(process.argv[2])
      //
      // ────────────────────────────────────────────────────────────────────────────────
      //
      // You've finished all the challenges! Hooray!
