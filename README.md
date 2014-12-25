flag.js
=====
[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]
> cli flag parsing

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

## License

MIT © [Ariel Mashraki](https://github.com/a8m)
[npm-image]: https://img.shields.io/npm/v/flag.js.svg?style=flat-square
[npm-url]: https://npmjs.org/package/flag.js
[travis-image]: https://img.shields.io/travis/a8m/flag.js.svg?style=flat-square
[travis-url]: https://travis-ci.org/a8m/flag.js
[coveralls-image]: https://img.shields.io/coveralls/a8m/flag.js.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/a8m/flag.js
[david-image]: http://img.shields.io/david/a8m/flag.js.svg?style=flat-square
[david-url]: https://david-dm.org/a8m/flag.js
[license-image]: http://img.shields.io/npm/l/flag.js.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/flag.js.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/flag.js