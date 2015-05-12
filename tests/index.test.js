var contains = require('../index.js');
var test = require('tape');

test('ObjectContains(haystack, needle)', function (t) {
  var obj = { can: 'help', nope: 'yep' };

  t.plan(4);
  t.equal(contains(obj), true);
  t.equal(contains(obj, { can: 'help' }), true);
  t.equal(contains(obj, { can: 'help', nope: 'nope' }), false);
  t.equal(contains(obj, { can: 'help', nope: 'yep', hey: 'you' }), false);
});
