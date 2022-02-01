/*
Write a function called power that accepts a 
base and exponent. The function should return the
power of the base to the exponent. This function should
mimic the functionality of Math.pow().
Ignore negative bases and exponents.
*/

function power(num, pow) {
  if (pow === 0) {
    return 1;
  }
  if (pow === 1) {
    return num;
  }
  return num * power(num, pow - 1);
}
