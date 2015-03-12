// var assert = require("assert");
var sample = require("../src/js/modules/sample");

describe('Sample', function(){

  before("before desc", function () {
    console.log("before all...");
  });

  after(function () {
    console.log("after all...");
  });

  beforeEach(function () {
    console.log("before each...");
  });

  afterEach(function () {
    console.log("after each...");
  });

  describe('#sample.myfun()', function() {
    it('should return hi', function() {
      expect(sample.myfun()).to.equal('hi');
    });
  });

  // use "only" to run only this test
  // describe.only('#sample.add()', function() {
  describe('#sample.add()', function() {
    it('should add two numbers correctly', function () {
      expect(sample.add(7, 10)).to.equal(10);
    });
  });


  describe.skip('#skipped', function () {
    it('this is going to be skipped', function () {
      // use skip instead of commenting out a test
    });
  });


});