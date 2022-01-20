/* Given two strings, write a function to determine
if the second string is an anagram of the first string. */

/* 
isAnagram('', '') // true
isAnagram('aaz', 'zza') // false
isAnagram('anagram', 'nagaram') // true
isAnagram('rat', 'car') // false
isAnagram('awesome', 'awesom') // false
isAnagram('qwerty', 'qeywrt') // true
isAnagram('texttwisttime', 'timetwisttext') // true
*/
function validAnagram(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }
  let freq1 = {};
  let freq2 = {};

  for (let val of arr1) {
    freq1[val] = (freq1[val] || 0) + 1;
  }
  for (let val of arr2) {
    freq2[val] = (freq2[val] || 0) + 1;
  }
  for (let key in freq1) {
    if (!(key in freq2)) {
      return false;
    }
    if (freq2[key] !== freq1[key]) {
      return false;
    }
  }
  return true;
}
