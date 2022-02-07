/*
A recursive function which accepts an object and returns
an array of all the values in the object that have a typeof string.
*/

// HELPER METHOD
function collectStrings(obj) {
  let strArr = [];

  function getStrings(obj) {
    for (let key in obj) {
      if (typeof obj[key] === "string") {
        strArr.push(obj[key]);
      } else if (typeof obj[key] === "object") {
        return getStrings(obj[key]);
      }
    }
  }
  getStrings(obj);
  return strArr;
}

// PURE RECURSION
function collectStrings(obj) {
  let strArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      strArr.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      strArr = strArr.concat(collectStrings(obj[key]));
    }
  }
  return strArr;
}
