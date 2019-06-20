---
layout: default
---
# Loops
If you want to run same code over and over multiple times we use loops.
```javascript
var bikes = ['fz 3.0', 'apache 200', 'duke 390', 'classic 350']
var bike = '';
bike += bikes[0] + '\n';
bike += bikes[1] + '\n';
bike += bikes[2] + '\n';
bike += bikes[3] + '\n';
// fz 3.0\napache 200\nduke 390\nclassic 350
```
considering the same above example instead of 4 bikes take 100. if loops are the code can be easily simplified.
## `for`
The `for` loop has the following syntax:
```javascript
for (statement 1; statement 2; statement 3) {
  // code block to be executed
}
```
**Statement 1** is executed (one time) before the execution of the code block.

**Statement 2** defines the condition for executing the code block.

**Statement 3** is executed (every time) after the code block has been executed.

the above example can be simplified as:
```javascript
for (var i = 0; i < bikes.length; i++) {
    bike += bikes[i]
}
// Statement 1 sets a variable before the loop starts (var i = 0).
// Statement 2 defines the condition for the loop to run (i must be less than bikes length).
// Statement 3 increases a value (i++) each time the code block in the loop has been executed.
```
### `for/in`
The JavaScript `for/in` statement loops through the properties of an object:
```javascript
var movie = {name: 'Edge of tomorrow', lead: 'Tom Cruise', support_lead: 'Emily Blunt'}
for (var prop in movie) {
    console.log(prop + ': ' + movie[prop])
}
// name: Edge of tomorrow
// lead: Tom Cruise
// support_lead: Emily Blunt
```
## `while`
The `while` loop loops through a block of code as long as a specified condition is true.

**syntax**
```javascript
while (condition) {
  // code block to be executed
}
```
```javascript
while (i < 10) {
  text += "The number is " + i;
  i++;
}
```
## `do/while`
The `do/while` loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
**syntax**
```javascript
do {
  // code block to be executed
}
while (condition);
```
```javascript
do {
  text += "The number is " + i;
  i++;
}
while (i < 10); 
```