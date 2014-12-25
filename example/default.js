'use strict';
var flag = require('../');
// Run: `node example/default.js -foo=bar -bar=777 --baz=true`

var foo = flag('foo', 'foo', 'This is message describe foo');
var bar = flag('bar', 888,   'This is message describe bar');
var baz = flag('baz', false, 'This is message describe baz');

console.log(foo, bar, baz);
// Print: bar 777 true

console.log(typeof foo, typeof bar, typeof baz);
// Print: `string` `number` `boolean`