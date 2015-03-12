"use strict";

function thisFun(){
  return "hi";
}

function addTwoNumbers(a, b) {
  return a + b;
}

module.exports = {
  myfun: thisFun,
  one: 1,
  something: "something",
  add: addTwoNumbers
};
