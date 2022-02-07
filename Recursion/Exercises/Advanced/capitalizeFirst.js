/*
Write a recursive function that takes an array of strings
and capitalizes the first letter of each string in the array.
*/

function capitalizeFirst(arr) {
  if (arr.length === 1) {
    return [arr[0][0].toUpperCase() + arr[0].substr(1)];
  }
  let result = capitalizeFirst(arr.slice(0, -1));
  let str =
    arr.slice(arr.length - 1)[0][0].toUpperCase() +
    arr.slice(arr.length - 1)[0].substr(1);
  result.push(str);
  return result;
}
