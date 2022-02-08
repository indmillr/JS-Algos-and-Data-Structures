/*
Implement linear search on arrays.
Implement binary search on sorted arrays.
Implement a naive string searching algorithm.
Implement the KMP string searching algorithm.
*/

// LINEAR SEARCH --------------------
// Look at every single item in the array, in order, at a set interval.
function linearSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      // return the index at which the item is found
      return i;
    }
  }
  // return -1 if the item is NOT found
  return -1;
}

// BINARY SEARCH --------------------
//
