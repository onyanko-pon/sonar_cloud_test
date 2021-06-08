const assert = require('assert')

const pow = require('../src/libs/pow')

describe("pow", function() {

    it("raises to n-th power", function() {
        assert.equal(pow(2, 3), 8);
    });

    it("raises to n-th power", function() {
        assert.notEqual(pow(2, 3), 9);
    });

});



const fizzbuzz = require('../src/libs/FizzBazz')

describe("FizzBuzz", function() {

    it("Buzz", function() {
        assert.equal(fizzbuzz(10), 'Buzz');
    });

    it("FizzBuzz", function() {
        assert.equal(fizzbuzz(15), 'FizzBuzz');
    });

    it("Fizz", function() {
        assert.equal(fizzbuzz(6), 'Fizz');
    });

    it("not fizz not buzz", function() {
        assert.equal(fizzbuzz(1), '1');
    });
});