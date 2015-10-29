var code = require('../main');
var expect = require('chai').expect;

describe('fizzBuzz', function(){

  it('should return an array with "fizz buzz" in place of numbers for variables of both 3 and 5', function() {
    expect(code.fizzBuzz(16).toString()).to.equal([0, 1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizz buzz'].toString());

  });

  it('should return an array with "buzz" in place for numbers for variables of 5', function(){
    expect(code.fizzBuzz(6).toString()).to.equal([0, 1, 2, 'fizz', 4, 'buzz'].toString());
  });

  it('should return an array with "fizz" for numbers for variables of 3', function(){
    expect(code.fizzBuzz(4).toString()).to.equal([0, 1, 2, 'fizz'].toString());
  });

});
