---
layout: default
---
# Conditional Statements
In JavaScript we have the following conditional statements:
* `if`
* `else`
* `else if`
* `switch`

## If/else/else if
### IF
`if` statement is used to used to run a block of code if specified *condition* is met.
```javascript
if (condition) {
  //  block of code to be executed if the condition is true
} 
```
```javascript
var greeting = 'Good';
if ((new Date()).getHours < 18) {
    greeting += ' Morning!'; 
}
console.log(greeting)
// return Good Morning if time < 18:00
```
### ELSE
`else` statement is used to specify the block of code that should run if *condition* in `if` is not met. There exists no `else` without an `if`.
```javascript
if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}
```
```javascript
var greeting = 'Good';
if ((new Date()).getHours < 18) {
    greeting += ' Morning!'; 
} else {
    greeting += ' Evening!';
}
console.log(greeting)
// return Good Morning if time < 18:00 else returns Goog Evening
```
### ELSE IF
`else if` is used to specify a new *condition* to the existing if statement, will execute code block if the new condition is met.
```javascript
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
```
```javascript
var greeting = 'Good';
var time = (new Date()).getHours
if (time < 18) {
    greeting += ' Morning!'; 
} else if (time > 20) {
    greeting += ' Night!';
} else {
    greeting += ' Evening';
}
console.log(greeting)
``` 
## Switch
`switch` is used to run one of many code blocks based on expression given to switch
```javascript
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
} 
```
`break` breaks out of switch block.

`default` keyword specifies the code to run if there is no case match
```javascript
var day = "";
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
  default:
    day = "Sunday";
}
console.log("Today is " + day);
// prints current day
```