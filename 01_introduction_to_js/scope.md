---
layout: default
---
# Scope of *var*
## What is scope
In JavaScript, scope refers to the visibility(availability) of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.
## Global Scope
A Global scope means availability of a variable globally throughout javascript.
Variables which are used without the `var` keyword are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with `var`.
```javascript
var gbl = 'I am global';
function func1() {
    console.log(gbl);
}
function func2(gbl = 'I am local') {
    console.log(gbl);
}
func1();
func2();
```
## Local Scope
Variables which are declared within a function, as well as the function parameters have local scope. That means, they are only visible within that function.
```javascript
function func1() {
  var loc = "I am local";
  console.log(loc);
}
myTest(); // logs "foo"
console.log(loc); // loc is not defined
```