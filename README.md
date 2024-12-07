# Unexpected Behavior with Loose Comparison and Null Values

This repository demonstrates a common JavaScript error involving loose comparison (==) and the handling of null or undefined values. The `foo` function incorrectly returns 0 when either `a` or `b` is `null`, instead of the expected `NaN`. This is due to the loose comparison `a === 0` evaluating to true when `a` is `null`.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js`.
3. Run the code in a JavaScript environment (e.g., Node.js, browser's console).
4. Observe the unexpected output for `foo(null, 1)` and `foo(1, null)`.

## Solution

The solution is to use strict comparison (`===`) to ensure that the function handles null and undefined values correctly. See `bugSolution.js` for the corrected code.
