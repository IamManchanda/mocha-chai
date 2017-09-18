/**
 * Mocha Script
 */

const assert = require('chai').assert;
const app = require('../app');

let sayHelloResults = app.sayHello();
let addNumbersResults = app.addNumbers(5, 5);

describe('App', () => {
  describe('sayHello', () => {
    it('sayHello should return Hello!', () => {
      assert.equal(sayHelloResults, 'Hello!');
    });

    it('sayHello should have string data type', () => {
      assert.typeOf(sayHelloResults, 'string');
    });
  });
  describe('addNumbers', () => {
    it('addNumbers should be above ', () => {
      assert.isAbove(addNumbersResults, 5);
    });

    it('addNumbers should have number data type', () => {
      assert.typeOf(addNumbersResults, 'number');
    });
  });
});