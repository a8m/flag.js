flag.js
=====

## Install

```sh
$ npm install --save flag.js
```

##Usage
**Default option:**
```js
// Run program: `node index.js -foo=bar -bar=777 --baz=true`
var flag = require('flag.js');

var foo = flag('foo', 'foo', 'This is message describe foo');
var bar = flag('bar', 888,   'This is message describe bar');
var baz = flag('baz', false, 'This is message describe baz');

console.log(foo, bar, baz);
// Print: bar 777 true

console.log(typeof foo, typeof bar, typeof baz);
// Print: `string` `number` `boolean`
```

**Turn on the `help` command/flag:**
```js
// Run program: `node example/default.js -h`
//              `node example/default.js --h`
//              `node example/default.js -help`
//              `node example/default.js --help`
var flag = require('flag.js');

var foo = flag('foo', 'foo', 'This is message describe foo');
var bar = flag('bar', 888,   'This is message describe bar');
var baz = flag('baz', false, 'This is message describe baz');

// Turn on `help` command/flag after setting all flags variables
flag.help();

// The program print:
/*
 Usage:
 --foo="foo": This is message describe foo
 --bar=888:   This is message describe bar
 --baz=false: This is message describe baz
 */
 // and then call exit() automatically.
```