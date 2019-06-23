---
layout: default
---
# The Differences
The most recent standardized version is called ECMAScript 6 (ES6), released in 2015. This new version of the language adds some powerful features that will be covered in this section of challenges, including:
* `let` and `const`
* Arrow functions
* Classes
* Modules
* Promises
* Generators

## `let`, `const`
### let
The problem with `var` keyword is that you can overwrite variable declarations without an error.
```javascript
var student = 'Ramesh;
var student = 'Suresh';
console.log(camper);
// logs 'Suresh'
```
As you can see in the code above, the `student` variable is originally declared as `Ramesh` and then overridden to be `Suresh`.

In a small application, you might not run into this type of problem, but when your code becomes larger, you might accidentally overwrite a variable that you did not intend to overwrite.

Because this behavior does not throw an error, searching and fixing bugs becomes more difficult.

A new keyword called `let` was introduced in ES6 to solve this potential issue with the `var` keyword.

If you were to replace `var` with `let` in the variable declarations of the code above, the result would be an error.

```javascript
let student = 'Ramesh';
let student = 'Suresh'; // throws an error
```

This error can be seen in the console of your browser.

So unlike `var`, when using `let`, a variable with the same name can only be declared once.
### const
`let` is not the only new way to declare variables. In ES6, you can also declare variables using the `const` keyword.

`const` has all the awesome features that `let` has, with the added bonus that variables declared using const are read-only. They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned.

```javascript
"use strict"
const FAV_BIKE = "classic 350";
FAV_BIKE = "Duke 390"; // returns error
```
As you can see, trying to reassign a variable declared with `const` will throw an error. You should always name variables you don't want to reassign using the `const` keyword. This helps when you accidentally attempt to reassign a variable that is meant to stay constant. A common practice when naming constants is to use all uppercase letters, with words separated by an underscore.

it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.
```javascript
const r = [1, 2, 3];
r = [11, 12, 13]; // throws error, trying to assign a const
s[2] = 38; // works just as it would with an array declared with var or let
console.log(s); // returns [1, 2, 38]
```
### prevent mutation
As seen in the previous challenge, `const` declaration alone doesn't really protect your data from mutation. To ensure your data doesn't change, JavaScript provides a function `Object.freeze` to prevent data mutation.
```javascript
let obj = {
  name:"TechSparks",
  rating:"5"
};
Object.freeze(obj);
obj.rating = "2"; //will be ignored. Mutation not allowed
obj.newProp = "prop value"; // will be ignored. Mutation not allowed
console.log(obj);
// { name: "TechSparks", rating:"5"}
```
## `let` vs `var`
When you declare a variable with the `var` keyword, it is declared globally, or locally if declared inside a function.

The `let` keyword behaves similarly, but with some extra features. When you declare a variable with the `let` keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.
**example**
```javascript
var arr = [];
for (var i = 0; i < 5; i++) {
  arr.push(i);
}
console.log(numArray);
// returns [0, 1, 2, 3, 4]
console.log(i);
// returns 5
```
With the `var` keyword, `i` is declared globally. So when `i++` is executed, it updates the global variable.
```javascript
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if(i === 2){
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
// returns 3
```
## Promise?
A `Promise` is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise will be in the following states:
* *pending*: initial state, neither fulfilled nor rejected.
* *fulfilled*: meaning that the operation completed successfully.
* *rejected*: meaning that the operation failed.

A pending promise can either be *fulfilled* with a value, or rejected with a reason (error). When either of these options happens, the associated handlers queued up by a promise's `then` method are called. (If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.)

### Methods

#### `Promise.all(iterable)`
Wait for all promises to be resolved, or for any to be rejected.

If the returned promise resolves, it is resolved with an aggregating array of the values from the resolved promises in the same order as defined in the iterable of multiple promises. If it rejects, it is rejected with the reason from the first promise in the iterable that was rejected.
#### `Promise.allSettled()`
Wait until all promises have settled (each may resolve, or reject).

Returns a promise that resolves after all of the given promises have either resolved or rejected, with an array of objects that each describe the outcome of each promise.
#### `Promise.race(iterable)`
Wait until any of the promises is resolved or rejected.

If the returned promise resolves, it is resolved with the value of the first promise in the iterable that resolved. If it rejects, it is rejected with the reason from the first promise that was rejected.
#### `Promise.reject()`
Returns a new Promise object that is rejected with the given reason.
#### `Promise.resolve()`
Returns a new Promise object that is resolved with the given value. If the value is a thenable (i.e. has a then method), the returned promise will "follow" that thenable, adopting its eventual state; otherwise the returned promise will be fulfilled with the value. Generally, if you don't know if a value is a promise or not, Promise.resolve(value) it instead and work with the return value as a promise.

### prototype
#### Props
##### **`Promise.prototype.constructor`**

Returns the function that created an instance's prototype. This is the Promise function by default.
#### Methods

##### **`Promise.prototype.catch()`**

Appends a rejection handler callback to the promise, and returns a new promise resolving to the return value of the callback if it is called, or to its original fulfillment value if the promise is instead fulfilled.
##### **`Promise.prototype.then()`**

Appends fulfillment and rejection handlers to the promise, and returns a new promise resolving to the return value of the called handler, or to its original settled value if the promise was not handled (i.e. if the relevant handler onFulfilled or onRejected is not a function).
##### **`Promise.prototype.finally()`**

Appends a handler to the promise, and returns a new promise which is resolved when the original promise is resolved. The handler is called when the promise is settled, whether fulfilled or rejected.

```javascript
const myFirstPromise = new Promise((resolve, reject) => {
  // do something asynchronous which eventually calls either:
  //
  //   resolve(someValue); // fulfilled
  // or
  //   reject("failure reason"); // rejected
});
```


## The Arrow🏹 function
ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use **arrow function syntax**:
```javascript
const date = () => {
  const myVar = new Date();
  return myVar;
}
```
When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword `return` as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements:
```javascript
const date = () => new Date()
```
### with parameters
Just like a normal function, you can pass arguments into arrow functions.
```javascript
const makeDouble = (item) => item * 2;
```
## default parameters
In order to help us create more flexible functions, ES6 introduces default parameters for functions.

```javascript
function greeting(name = "Anonymous") {
    return "Hello " + name;
}
console.log(greeting("Ramu")); // Hello Ramu
console.log(greeting()); // Hello Anonymous
```

The default parameter kicks in when the argument is not specified (it is undefined). As you can see in the example above, the parameter `name` will receive its default value `"Anonymous"` when you do not provide a value for the parameter. You can add default values for as many parameters as you want.
## Rest Parameters(operator)
ES6 introduces the rest operator for function parameters. With the rest operator, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.
```javascript
function howMany(...args) {
  return "You have passed " + args.length + " args.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 args
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 args.
```
## Spread operator
ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.
```javascript
const arr = [10, 3, 38, 27]
const maximus = Math.max(...arr); // returns 38
```
## Destructive Assignment
We saw earlier how spread operator can effectively spread, or unpack, the contents of the array.
We can do something similar with objects as well. Destructuring assignment is special syntax for neatly assigning values taken directly from an object to variables.
```javascript
var nums = {a: 1, b: 2, c: 3 };
var a = nums.a; // a = 1
var b = nums.b; // b = 2
var c = nums.c; // c = 3
```
the above assignment can be simplified to 
```javascript
const {a, b, c} = nums
// a = 1,b =2, c= 3
const {a : x, b : y, c : z} = nums
// x = 1,y = 2, z = 3
```
likewise we can use the same kind of assignment for nested objects and arrays
```javascript
const a = {
  start: { x: 5, y: 6},
  end: { x: 6, y: -9 }
};
const { start : { x: startX, y: startY }} = a;
console.log(startX, startY); // 5, 6
const [b, c] = [1, 2, 3];
console.log(b, c);
// 1, 2
const [d, e, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(d, e); // 1, 2
console.log(arr); // [3, 4, 5, 7]
```
## Concise Object Literals
ES6 provides a new way to define object literals.
```javascript
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
```
the above code can be simplified as: 
```javascript
const getMousePosition = (x, y) => ({ x, y });
```
## Templating
ES6 provides us with a new feature of *template literal*.This is a special type of string that makes creating complex strings easier.

Template literals allow you to create multi-line strings and to use string interpolation features to create strings.
```javascript
const movie = {
    name: "Edge of Tomorrow",
    lead: "Tom Cruise"
};
const movieTemplate1 = `Movie is ${movie.name}`;
const movieTemplate2 = `Lead is ${movie.lead}`;
console.log(`${movieTemplate1} and ${movieTemplate2}`)
// Movie is Edge of Tomorrow and Lead is Tom Cruise
```
## Class Syntax with getter and setter
ES6 provides a new syntax to help create objects, using the keyword class.

This is to be noted, that the `class` syntax is just a syntax, and not a full-fledged class based implementation of object oriented paradigm, unlike in languages like Java, or Python, or Ruby etc.

In ES5, we usually define a constructor function, and use the `new` keyword to instantiate an object.
```javascript
var marsProgram = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var program = new marsProgram('mars');
```

The class syntax simply replaces the constructor function creation:

```javascript
class MarsProgram {
    constructor(targetPlanet){
    this.targetPlanet = targetPlanet;
    }
}
const program = new MarsProgram('mars');
```
### getter and setter
You can obtain values from an object, and set a value of a property within an object.

These are classically called *getters* and *setters*.

Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.

Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.

```javascript
class Thermometer {
    constructor(temperature) {
        this._temperature = temperature;
    }
    // getter
    get temperature() {
        return this._temperature
    }
    // setter
    set temperature(newTemperature) {
        this._temperature = newTemperature;
    }
}
const meter = new Thermometer(32)
console.log(meter.temperature); //32
meter.temperature = 39
console.log(meter.temperature); //39
```