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

const Multi = require('../src/libs/Multi')

describe("Multi", function() {

    it("2*2", function() {
        assert.equal(Multi(2, 2), 4);
    });
});

const Div = require('../src/libs/Div')

describe("Div", function() {
    it("1/10", function() {
        assert.equal(Div(1, 10), 0.1);
    });
});

const Increment = require('../src/libs/Increment')

describe("Increment", function() {
    it("1 + 81", function() {
        assert.equal(Increment(1), 82);
    });
});