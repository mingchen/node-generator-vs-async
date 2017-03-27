//
// Simple generator (with co) VS async/await benchmark
// Article: https://medium.com/p/806d8375a01a
//

const co = require('co');
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

// add tests
suite
  .add('co', {
    defer: true,
    fn: function(deferred) {
      co(function*() {
        yield Promise.resolve(1);
        yield Promise.resolve(2);

        // test is complete
        deferred.resolve();
      });
    }
  })
  .add('async/await', {
    defer: true,
    fn: function(deferred) {
      (async function() {
        await Promise.resolve(1);
        await Promise.resolve(2);

        // test is complete
        deferred.resolve();
      })()
    }
  })
  // add listeners
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({
    'async': false
  });
  