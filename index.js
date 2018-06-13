var Benchmark = require('benchmark');
var tb = require('travis-benchmark');

var suite = new Benchmark.Suite(`Demo suite`);

for (var i = 0; i < 5; i++) {
  suite.add('Demo test', function() {
    for (var w = 0; w < i * 10000; w++) {};
  });
}

tb.wrapSuite(suite);
suite.run({ async: true });