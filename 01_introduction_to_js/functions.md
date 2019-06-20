---
layout: default
---
# Functions
A block of code that is designed to perform a particular task is called a **function**
## defining
In javascript function is defined using the following syntax(s):
```javascript
function functionName1(param1, param2, param3,..) {
    ...function code 
}
var functionName2 = function(param1, param2, param3,...) {
    ...function code
}
```
## reusing
Functions based on their use prevents re-writing the same logic multiple time.

```javascript
var a = 2;
var b = 3;
var c = 4;
var d = (a + 1)*(b + 2)*(c + 3);
var e = (b + 1)*(c + 2)*(d + 3);
var f = (c + 1)*(d + 2)*(e + 3);
// the above function logic can be written in a function and can prevent writing the same logic multiple times
```
## return statement
`return` statement returns the value entered along with and stops any further execution of the statements.
```javascript
function sSum(a, b, c) {
    return (a + 1)*(b + 2)*(c + 3);
    // returns the value of (a + 1)*(b + 2)*(c + 3)
}
// following function return square of a number if the number is even
function evenSquare(a) {
    if (a%2!=0) {
        return;
        // returns and prevents running any further statements
    }
    return a*a;
}
```
reusability:
```javascript
function sSum(a, b, c) {
    return (a + 1)*(b + 2)*(c + 3);
}
var a = 2;
var b = 3;
var c = 4;
var d = sSum(a, b, c);
var e = sSum(b, c, d);
var f = sSum(c, d, e);
```