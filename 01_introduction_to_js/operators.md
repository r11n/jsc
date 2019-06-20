---
layout: default
---
# Operators
operators are basic mathematical entities.
## General Operators
The **addition** operator (`+`) adds numbers:
```javascript
var a = 38;
var b = 41;
var c = a + b;
```
The **assignment** operator (`=`) assigns a value to a variable.
```javascript
var a = 1; 
```
the basic functionality of the arithmetic operators is as follows:
|Operator|Purpose|
 --------|------- 
|`+`|Addition|
|`-`|Subtraction|
|`*`|Multiplication|
|`/`|Division|
|`%`|Modulus|
|`++`|Increment|
|`--`|Decrement|

## Compound Assignment
The compound operators are used to simplify the use of the left side variable in the right side assignment with arithmetic operator.
```javascript
var i = 12;
i = i*10;
```
the above example can be simplified to
```javascript
i *= 10;
// 120
```
likewise we can user `+=, -=, /=` as well
```javascript
i += 12 // i = i + 12
// 132
i -= 120 // i = i - 120
// 12
i /= 12 // i = i / 12
// 1
```
## Conditional Operators
The conditonal operators are used for conditions in loops and conditional statements

|operator|purpose|
 ----|----
|== |	equal to|
|=== | 	equal value and equal type|
|!= | 	not equal|
|!== | 	not equal value or not equal type|
|> | 	greater than|
|< | 	less than|
|>= | 	greater than or equal to|
|<= | 	less than or equal to|
|? | 	ternary operator|