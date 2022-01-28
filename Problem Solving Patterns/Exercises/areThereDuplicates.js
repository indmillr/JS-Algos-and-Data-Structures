/*
Implement a function called areThereDuplicates which accepts a
variable number of args and checks whether there are any duplicates
among the args passed in. Solve this using Multiple Pointers pattern.

RESTRICTIONS:
Time Complexity must be 0(n)
Space Complexity must be 0(n)
*/

/*
areThereDuplicates(1, 2, 3) // false;
areThereDuplicates(1, 2, 2) // true;
areThereDuplicates('a', 'b', 'c', 'a') // true
*/

function areThereDuplicates() {
  let pointer1 = 0;
  let pointer2 = arguments.length - 1;
  while (pointer1 < pointer2) {
    if (pointer1 === pointer2) {
      return true;
    } else {
      pointer2--;
    }
  }
}
