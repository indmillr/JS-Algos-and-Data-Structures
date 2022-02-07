/*
Write a recursive function that takes an array of strings
and capitalizes the first letter of each string in the array.
*/

function capitalizeFirst(arr) {
  if (arr.length === 1) {
    return [arr[0].toUpperCase()];
  }
  let result = capitalizeFirst(arr.slice(0, -1));
  result.push(arr.slice(arr.length - 1)[0].toUpperCase());
  return result;
}
