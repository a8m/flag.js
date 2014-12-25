'use strict';
var process = process || global.process
  , keys    = Object.keys
  , flags   = {};

/**
 * @description
 * get flag name, search...
 * if its exist return it, else return the fixture
 * @param name
 * @param fix
 * @param message
 * @returns {*}
 */
function flag(name, fix, message) {
  var args   = process.argv.slice(2)
    , ret    = fix
    , length = args.length;

  while(length) {
    var flag = args[--length]
      .replace(/-|=/g, ' ')
      .trim()
      .replace(/\s.*\s/g, ' ')
      .split(' ');

    if(flag[0] === name) {
      ret = fix.constructor(flag[1]) || fix;
      break;
    }
  }

  flags[name] = { fix: fix, msg: message };
  return ret;
}

/**
 * @description
 * make '-h' command available
 * @returns {number}
 */
flag.help = function() {
  var args = process.argv.slice(2)
    , help = args.some(function(flag) {
    return ~['-h', '--h', '-help', '--help'].indexOf(flag);
  });
  return (args.length === 1 && help)
    ? printFlags(flags) & process.exit()
    : false;
};

/**
 * @description
 * print program usage
 * @param flags
 * @returns {*}
 */
function printFlags(flags) {
  var msg = keys(flags).map(function(name) {
    var f   = flags[name]
      , fix = typeof f.fix === 'string'
      ? '"' + f.fix + '"'
      : f.fix;
    return ['--', name, '=', fix, ': ', f.msg].join('');
  });
  return console.log(['Usage:']
    .concat(msg)
    .join('\n  '));
}

/**
 * @expose
 */
module.exports = flag;