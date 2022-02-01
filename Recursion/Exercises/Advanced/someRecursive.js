/*
Write a function that accepts an array and a callback. The
function returns true if a single value in the array returns
true when passed to the callback. Otherwise return false.
*/

function someRecursive(arr, call) {
  if (arr.length === 0) {
    return false;
  }
  if (call(arr[0])) {
    return true;
  }
  return someRecursive(arr.slice(1), call);
}
