'use strict';
/*global describe, beforeEach, afterEach, it*/
var should  = require('should')
  , sinon   = require('sinon')
  , process = process || global.process;

describe('flag.js', function() {
  var flag;
  before(function() {
    sinon.stub(process, 'exit', function() {});
    flag = require('./')
  });
  describe('default options', function() {
    beforeEach(function() {
      process.argv = ['node', 'index.js', '-foo=bar', '--bar=2', '-baz=true'];
    });
    it('should set the variables', function() {
      var foo = flag('foo', 'foo');
      foo.should.eql('bar');
    });

    it('should set the variables based on type', function() {
      var bar1 = flag('bar', 6)
        , bar2 = flag('bar', '6')
        , baz1  = flag('baz', false)
        , baz2  = flag('baz', 'false');

      bar1.should.eql(2);
      bar2.should.eql('2');
      baz1.should.eql(true);
      baz2.should.eql('true');
    });
  });

  describe('options with --help', function() {
    before(function() {
      process.argv = ['node', 'index.js', '-h'];
      sinon.spy(global.console, 'log');
    });
    it('should `print` all commands', function() {
      var foo = flag('foo', 'foo');
      flag.help();
      console.log.called.should.eql(true);
    });
    it('should call `exit`', function() {
      var foo = flag('foo', 'foo');
      flag.help();
      process.exit.called.should.eql(true);
    });
  });
});