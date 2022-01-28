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
  let holder = {};
  for (let val in arguments) {
    holder[arguments[val]] = (holder[arguments[val]] || 0) + 1;
  }
  for (let key in holder) {
    if (holder[key] > 1) {
      return true;
    }
    return false;
  }
}
