function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; // This is where the error lies
  }
  return a + b;
}

console.log(foo(0, 1)); // Output: 0, which is correct
console.log(foo(1, 0)); // Output: 0, which is correct
console.log(foo(1, 1)); // Output: 2, which is correct
console.log(foo(null, 1)); //Output: 0, which is wrong and should be NaN
console.log(foo(1, null)); //Output: 0, which is wrong and should be NaN