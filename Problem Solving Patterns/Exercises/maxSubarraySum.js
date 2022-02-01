/* 
Given an array of integers and a number, write a function
called maxSubarraySum which finds the maximum sum of a
subarray with the length of the number passed to the function.

A subarray must consist of consecutive elements from the original.
*/

/* 
maxSubarraySum([100, 200, 300, 400], 2} // 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) // 39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) // 5
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) // 5
maxSubarraySum([2, 3], 3) // null
*/

function maxSubarrySum(arr, num) {
  if (arr.length < num) {
    return null;
  }

  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum += arr[i];
  }
  let currentSum = sum;
  for (let i = num; i < arr.length; i++) {
    currentSum += arr[i] - arr[i - num];
    sum = Math.max(sum, currentSum);
  }
  return sum;
}
