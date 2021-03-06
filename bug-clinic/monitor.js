// #####################################################################
// ##                         ~~  MONITOR  ~~                         ##
// #####################################################################
//
// Quite often, by the time you need to know what your program was doing
// when it stopped doing what you wanted, it's too late. Also, if you
// just add console.log statements everywhere something interesting
// might be happening, pretty soon it's going to be a real chore to sort
// through your program's output looking for the output that's relevant.
// This is the job logs are intended to solve.
//
//  (As a side note, if you've never read The Twelve-Factor App
//   Manifesto, now is a good time. It has a very different take on
//   how logs should work, although the underlying principles are
//   similar: http://12factor.net/logs)
//
// Most good logging frameworks share a few principles in common:
//
// 1. Each entry has a consistent format.
// 2. Each loggable event maps to a single log entry.
// 3. The log entries are guaranteed to be recorded in the order in which
//  they occurred.
// 4. There are multiple levels at which you can log, so you can choose
//  the level of granularity that suits your current level of interest
//  (are you running in production? Debugging a new configuration?
//  Troubleshooting a complex or confusing function?).
// 5. A single stream of log events should be collected from multiple
//  sources and stored in a single place.
// 6. You should be able to browse the logs using standard tools.
//
// Node has some low-level logging facilities, which we'll get to later,
// but they're intended for use by the developers of the core Node
// platform. In general, the Node world has settled on newline-delimited
// JSON objects for logging. bunyan is the established favorite, although
// the much newer bole is gaining popularity quickly.
//
// To install bunyan, do `npm install --global bunyan` (maybe with sudo on
// Linux, probably logged in as an administrator on Windows).
//
// ## CHALLENGE
//
// Here is a program with a problem:
//
  module.exports = scenario;

  function scenario(log, cb) {
    function start() {
      process.nextTick(thing);
    }

    var value = 97;

    function foo() {
      value *= 13;
      cb(value);
    }

    start();

    function racer() {
      value &= 255;
      setTimeout(foo, 0);
    }

    value = 213;

    function thing() {
      value += 131;
      process.nextTick(racer);
    }
  }

// Here is how to attack the problem using logging to debug:
//
// 1. It gets passed a logger (with at least `log.info()` and
//  `log.error()` functions defined) and a callback.
//
// 2. When things are working, `cb` should be called at the end with
//  the value 2964. There is something iffy with the operations
//  applied to the value. The program can be fixed by removing one
//  line.
//
// 3. Log an object containing the value of value and the currently
//  active function *after* EACH time `value` is assigned or changed.
//  Each call should look like this:
//
//  // "scenario" is the name of the currently executing function
//  log.info({value : value}, "scenario");
//
// 4. When you figure out what the error is, make a call to
//  log.error() indicating what the problem is *before* logging
//  what `value` is at that point once you've fixed things. You'll
//  want to keep the existing call to log.info:
//
// 5. Here is a sample runner that will inject a Bunyan logger into your
//  sample program and prints JSON log output you can pipe through bunyan
//  like so: `node bunyan-runner.js scenario.js | bunyan`
//
//   var resolve = require("path").resolve;
//
//   var bunyan = require("bunyan");
//   var log = bunyan.createLogger({name : "sample"});
//
//   var scenario = require(resolve(process.cwd(), process.argv[2]));
//   scenario(log, function (value) {
//     log.info("value at finish is", value);
//   });
//
// As a hint, you should be making 5 info logging calls and 1 error logging
// call.
//
// Using Bunyan to test your solution as you go is pretty easy:
//
  // var bunyan = require("bunyan");
  // var log = bunyan.createLogger({name: "scenario"});
//
// Then, when you run your program, pipe the output through the Bunyan CLI:
//
// node my-scenario-runner.js | bunyan
//
//
// To verify your program, run: `bug-clinic verify program.js`.
