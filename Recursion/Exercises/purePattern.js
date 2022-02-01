// Pure Recursion solution to Helper Pattern example
function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

/* TIPS --------------------
 -- For arrays, use methods like .slice(), the spread operator,
 and concat that make copies of array so you do not mutate them.
 -- Remember that strings are immutable so you will need to use
 methods like slice, substr, or substring to make copies.
 -- To make copies of Objects use Object.assign or the
 spread operator
 */
