function foo(a, b) {
  if (a === 0 || b === 0 || a === null || b === null) {
    return NaN; // Corrected to handle null values
  }
  return a + b;
}

console.log(foo(0, 1)); // Output: NaN
console.log(foo(1, 0)); // Output: NaN
console.log(foo(1, 1)); // Output: 2
console.log(foo(null, 1)); // Output: NaN
console.log(foo(1, null)); // Output: NaN