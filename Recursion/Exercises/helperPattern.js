// Helper Pattern Recursion
function outer(input) {
  let outerScopeVariable = [];

  function helper(helperInput) {
    helper(helperInput--);
  }
  helper(input);
  return outerScopeVariable;
}

// EXAMPLE
// Collect all the Odd Values in an array
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}
