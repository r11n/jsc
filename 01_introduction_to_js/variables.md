---
layout: default
---
# Variables
## Declaration & Assignment
data is anything that is meaningful to the computer. JavaScript provides seven different data types which are `undefined`, `null`, `boolean`, `string`, `symbol`, `number`, and `object`.

`Variables` are similar to the x and y variables you use in mathematics, which means they're a simple name to represent the data we want to refer to. Computer variables differ from mathematical variables in that they can store different values at different times.

We user `var` keyword to define variable in JS.
```javascript
var variableName
```

### Assignment
you can store a value in a variable with the *assignment* operator. `myVar = 5;` <-This assigns the Number `value 5` to `myVar`.

Assignment always goes from right to left. Everything to the right of the `=` operator is resolved before the value is assigned to the variable to the left of the operator.
```javascript
myVar = 5;
myNum = myVar;
```
## Case Sensitivity in naming
In JavaScript all variables and function names are case sensitive. This means that capitalization matters.

`MYVAR` is not the same as `MyVar` nor `myvar`. It is possible to have multiple distinct variables with the same name but different casing. It is strongly recommended that for the sake of clarity, you do not use this language feature.

it is best practice to declare variable names in JavaScript in *camelCase*. In *camelCase*, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.