/*
Write a function called isSubsequence which takes two strings
and checks whether the characters in the first string form
a subsequence of the characters in the second string.
In other words, the function should check whether the characters
in the first string appear somewhere in the second string,
WITHOUT THEIR ORDER CHANGING.
*/

/*
isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false
*/

function isSubsequence(str1, str2) {
  let pointer1 = 0;
  let pointer2 = 0;
  if (!str1) {
    return true;
  }
  while (pointer2 < str2.length) {
    if (str2[pointer2] === str1[pointer1]) {
      pointer1++;
    }
    if (pointer1 === str1.length) {
      return true;
    }
    pointer2++;
  }
  return false;
}
