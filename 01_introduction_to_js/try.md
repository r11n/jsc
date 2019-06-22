---
layout: default
---
#try?
## why do we need error handling
No working system is perfect.

Lets consider a example, where a property or function will only be defined when a certain condition is met and the following code executes the call to the property irrespective of the conditions. In such cases an error raised might prevents execution of code any further and stops complete execution system.
## error handling using `try` `catch`
The `try...catch` statement marks a block of statements to try, and specifies a response, should an exception be thrown.

The `try` statement consists of a `try` block, which contains one or more statements. {} must always be used, even for single statements. At least one `catch` clause, or a `finally` clause, must be present.

A `catch` clause contains statements that specify what to do if an exception is thrown in the `try` block. That is, you want the `try` block to succeed, and if it does not succeed, you want to pass control to the `catch` block. If any statement within the try block (or in a function called from within the try block) throws an exception, control is immediately shifted to the `catch` clause. If no exception is thrown in the `try` block, the `catch` clause is skipped.

The `finally` clause executes after the try block and `catch` clause(s) execute but before the statements following the try statement. It always executes, regardless of whether an exception was thrown or caught.

**Syntax**
```javascript
try {
  try_statements
}
[catch (exception_var) {
  catch_statements
}]
[finally {
  finally_statements
}]
```
```javascript
// consider that there is no variable is defined
try {
    u.in = 10
} catch(e) {
    console.log(e)
}
// TypeError: "u is undefined"
```
