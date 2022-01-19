// Return counts for all alphanumeric characters in a string (not case-sensitive)

// function charCount(str) {
//   let obj = {};
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//     if (/[a-z0-9]/.test(char)) {
//       if (obj[char] > 0) {
//         obj[char]++;
//       } else {
//         obj[char] = 1;
//       }
//     }
//   }
//   return obj;
// }

function charCount(str) {
  let obj = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      char = char.toLowerCase();
    }
    return obj;
  }
  // it is ALLEGEDLY more efficient to use Character Codes instead of RegEx
  function isAlphaNumeric(char) {
    let code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && !(code > 96 && code < 123)) {
      return false;
    }
    return true;
  }
}
