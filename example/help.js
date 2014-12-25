'use strict';
var flag = require('../');
// Run: `node example/default.js -h`
//      `node example/default.js --h`
//      `node example/default.js -help`
//      `node example/default.js --help`

var foo = flag('foo', 'foo', 'This is message describe foo');
var bar = flag('bar', 888,   'This is message describe bar');
var baz = flag('baz', false, 'This is message describe baz');

// Turn on `help` command/flag
flag.help();

/*
 Print ->

 Usage:
 --foo="foo": foo bar
 --bar=888: bar bar
 --baz=false: baz bar

 -> and then exit automatically.
 */

console.log([
  'flags:',
    'foo => value:'+ foo + ' type: '+ typeof foo,
    'bar => value:'+ bar + ' type: '+ typeof bar,
    'baz => value:'+ baz + ' type: '+ typeof baz
].join('\n\t'));