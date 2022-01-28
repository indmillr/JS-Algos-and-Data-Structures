/*
Write a function called sameFrequency.
Given two positive integers, find out if the two numbers
have the same frequency of digits.
This MUST have a Time Complexity of 0(n).
*/

/*
sameFrequency(182, 281) // true
sameFrequency(34, 14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22, 222) // false
*/

function sameFrequency(num1, num2) {
  let arr1 = Array.from(String(num1), Number);
  let arr2 = Array.from(String(num2), Number);
  if (arr1.length !== arr2.length) {
    return false;
  }
  let counter1 = {};
  let counter2 = {};
  for (let val of arr1) {
    counter1[val] = (counter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    counter2[val] = (counter2[val] || 0) + 1;
  }
  for (let key in counter1) {
    if (!(key in counter2)) {
      return false;
    }
    if (counter2[key] !== counter1[key]) {
      return false;
    }
  }
  return true;
}
