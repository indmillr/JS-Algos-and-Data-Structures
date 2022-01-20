/* Create pointers or values that correspond to an index or position
and move towards the beginning, end, or middle based on a certain condition.
This is VERY efficient fot solving problems with minimal space complexity. */

/*
Write a function called sumZero which accepts a SORTED array of integers.
The function should find the FIRST pair where the sum is 0. Return an array
that includes both values that sum to zero or undefined if a pair does not exist.
*/

/*
sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
sumZero([-2, 0, 1, 3]) // undefined
sumZero([1, 2, 3]) // undefined
*/

// NESTED LOOP SOLUTION (Naive)
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + j; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// MULTIPLE POINTERS SOLUTION
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
