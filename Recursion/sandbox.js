/*
Invoke the same function over and over.
There MUST be a Base Case at which the function stops.
There MUST be a Different Input with each function call.
*/

// A Simple Recursive Function
function countDown(num) {
  // This is the Base Case (num = 0)
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  // Print 3
  console.log(num);
  // Subtract 1
  num--;
  // Call countDown(2), then repeat
  countDown(num);
}

countDown(3);

// Another Recursive Function
function sumRange(num) {
  // Base Case
  if (num === 1) {
    return 1;
  }
  return num + sumRange(num - 1);
}
