---
layout: default
---
# The Other Buddies
## Regular Expressions
Regular expressions are special strings that represent a search pattern. Also known as "regex" or "regexp", they help programmers match, search, and replace text.
Some feel that Regular expressions are difficult to understand due to its special meaning to few characters.
### `test`
If you want to find the word `"the"` in the string `"The dog chased the cat"`, you could use the following regular expression: `/the/`. Notice that quote marks are not required within the regular expression.

JavaScript has multiple ways to use regexes. One way to test a regex is using the `.test()` method. The `.test()` method takes the regex, applies it to a string (which is placed inside the parentheses), and returns `true` or `false` if your pattern finds something or not.
```javascript
let str = "techsparks.guru";
let reg = /guru/;
reg.test(str);
// Returns true
```
You can also search for more than just two patterns. You can do this by adding more patterns with more `OR` operators separating them, like `/guru|com|in/`.
```javascript
let str = "techsparks.guru";
let reg = /guru|com|in/;
reg.test(str);
// Returns true
```
### `match`
You can extract the actual matches you found with the `.match()` method.
```javascript
"Hello, World!".match(/Hello/);
// Returns ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
// Returns ["expressions"]
```
### quick reference
![regex quick reference](/regex_ref.png)
## Debugging
### The Console
Latest browsers come with javascript consoles for debugging. Both Firefox and Chrome has excellent consoles(DevTools)
Like `printf()` in `C`, we have a way to print whatever we wanted in javascript. The `console.log()` method, which "prints" the output of what's within its parentheses to the console, will likely be the most helpful debugging tool. Placing it at strategic points in your code can show you the intermediate values of variables. It's good practice to have an idea of what the output should be before looking at what it is. Having check points to see the status of your calculations throughout your code will help narrow down where the problem is.
### `typeof`
Sometimes a function call that intended to return a particular type of might not return the same kind of data we expected. In those cases we need the `typeof` to do pre-emptive checking 
JavaScript recognizes six primitive (immutable) data types: `Boolean`, `Null`, `Undefined`, `Number`, `String`, and `Symbol` (new with ES6) and one type for mutable items: `Object`. Note that in JavaScript, arrays are technically a type of object.
## Functional programming
Functional programming is an approach to software development based around the evaluation of functions. Like mathematics, functions in programming map input to output to produce a result. You can combine basic functions in many ways to build more and more complex programs.

Functional programming follows a few core principles:

* Functions are independent from the state of the program or global variables. They only depend on the arguments passed into them to make a calculation

* Functions try to limit any changes to the state of the program and avoid changes to the global objects holding data

* Functions have minimal side effects in the program
### isolate n purify
Just following three principles:

1) Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change

2) Pure functions - the same input always gives the same output

3) Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled
### Make it independent
While writing a function make sure that you pass enough parameters to decrease its dependency from external entities.
## High Order functions
A function is called is called high order function if it takes a function as it parameter.
For example take `setTimeout` it takes in a function that should be executed once time has passed.

High order functions allow us to follow a principle of functional programming by means of providing `Callbacks`, the callbacks gives the freedom to the user to invoke whatever code that should ran whenever a event is fired or condition is met.