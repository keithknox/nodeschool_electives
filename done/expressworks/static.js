// Master Express.js and have fun!
// ─────────────────────────────────
// STATIC
// Exercise 2 of 8
//
// This exercise is about serving static assets like HTML files.
// There are many ways to do it, but we want you to apply static middleware to serve the file index.html.
//
// Please don't use ANY routes like app.get. ONLY static.
//
// Your solution must listen on the port number supplied by process.argv[2].
//
// The index.html file is provided and usable via the path supplied by
// process.argv[3]. However, you can use your own file with this content (beware of whitespace):
//
//    <html>
//      <head>
//       <title>expressworks</title>
//       <link rel="stylesheet" type="text/css" href="/main.css"/>
//      </head>
//      <body>
//       <p>I am red!</p>
//      </body>
//    </html>
//
// -------------------------------------------------------------------------------
//
// ## HINTS
//
// This is how you can call static middleware:
//
//    app.use(express.static(path.join(__dirname, 'public')))
//
// For this exercise expressworks will pass you the path:
//
//    app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))
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

      app.use(express.static(process.argv[3] || path.join(_dirname, 'public')));
      app.listen(process.argv[2]);

      // Your submission results compared to the expected:
      //
      //                  ACTUAL                                 EXPECTED
      // ────────────────────────────────────────────────────────────────────────────────
      //
      //    "<html>"                            ==    "<html>"
      //    "  <head>"                          ==    "  <head>"
      //    "    <title>expressworks</title>"   ==    "    <title>expressworks</title>"
      //    "    <link rel=\"stylesheet\" type=\"text/css\" href=\"/main.css\"/>" ==    "    <link rel=\"stylesheet\" type=\"text/css\" href=\"/main.css\"/>"
      //    "  </head>"                         ==    "  </head>"
      //    "  <body>"                          ==    "  <body>"
      //    "    <p>I am red!</p>"              ==    "    <p>I am red!</p>"
      //    "  </body>"                         ==    "  </body>"
      //    "</html>"                           ==    "</html>"
      //
      // ────────────────────────────────────────────────────────────────────────────────
      //
      // ✓ Submission results match expected
      //
      // # PASS
      //
      // Your solution to STATIC passed!
      //
      // Here's the official solution in case you want to compare notes:
      //
      // ────────────────────────────────────────────────────────────────────────────────
      //     var path = require('path')
      //     var express = require('express')
      //     var app = express()
      //
      //     app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));
      //
      //     app.listen(process.argv[2])
      //
      // ────────────────────────────────────────────────────────────────────────────────
      //
      // You have 2 challenges left.
      // Type 'expressworks' to show the menu.
