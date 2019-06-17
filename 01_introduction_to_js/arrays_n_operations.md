---
layout: default
---
# Arrays and their operations
Sometimes we might need some special variable for full-filling certain purposes which cannot be achieved through normal variables.
## What is an Array?
An array is a type of variable which is used to hold multiple values at a time.

**usecase:** for storing multiple values that are similar kind of data and iterating through them.
example: suppose you have a list of students names and you want to access them individually

```javascript
// for small number of students you can store them as
var student1 = 'George',
    student2 = 'Becky',
    student3 = 'Albert';
```
consider using the same kind of assignment for a list of 1000 students, not so confortable right? The solution for such case is **Array**.
##### Syntax
```javascript
// es5 declaration
var array_name = [item1, item2, ...];
var array_name1 = new Array(item1, item2,...)
// use let or const for es6 before variable name as standard
```
##### example
```javascript
var tvSeries = ["Game of Thrones", "Silicon Valley", "Big Bang Theory", "The Mentalist"];
// can also be declared in multi-line
var movies = [
    "Avengers: EndGame",
    "IronMan",
    "Captain America",
    "Black Panther"
];
// can also be declared as
var cars = new Array("Volkswagen", "Benz", "Audi")
```
##### Access to Elements
We can access the elements using the *index number*(starts at `0`)
considering the variables declared in above example
```javascript
console.log(tvSeries[0]);
// Game of Thrones
console.log(movies[1]);
// IronMan
console.log(cars[2]);
// Audi
```
##### Adding Elements
We can add new elements to the array by using `push` method
```javascript
tvSeries.push('Walking Dead')
// ["Game of Thrones", "Silicon Valley", "Big Bang Theory", "The Mentalist", "Walking Dead"];
```

## functions on arrays
##### `toString()`
the method `toString()` converts an array to a string of comma separated array values.
```javascript
var bikes = ["duke 125", "duke 390", "r15", "cbr300"];
console.log(bikes.toString())
// duke 125,duke 390,r15,cbr300
```
##### `join()`
the method `join()` converts an array into a single string containing all array values separated by the separator specified in the method
```javascript
// consdering the same bikes variable from above example
console.log(bikes.join('--'))
// duke 125--duke 390--r15--cbr300
```
##### `push` n `pop`
###### `push`
the method `push` is used to add new elements at the end of the array. returns the added element from the array.
```javascript
bikes.push('classic 350')
//array becomes ['duke 125', 'duke 390', 'r15', 'cbr300', 'classic 350']
```
###### `pop`
the method `pop` is used to remove the last element from the array elements. returns the element removed from the array.
```javascript
bikes.pop()
// array becomes ['duke 125', 'duke 390', 'r15', 'cbr300']
```
##### `shift()`
The `shift()` method removes the first array element and *shifts* all other elements to a lower index.
```javascript
bikes.shift()
// array becomes ['duke 390', 'r15', 'cbr300']
```
##### `unshift()`
The `unshift()` method adds a new element to an array at the beginning, and *unshifts* older elements.
Takes a parameter and inserts it at the beiginning of the array. if no parameter is given it simply does nothing.
```javascript
bikes.unshift('duke 125')
// array becomes ['duke 125', 'duke 390', 'r15', 'cbr300']
```
##### `splice()`
The syntax for using `splice()` is as follows
**syntax:**

```javascript
array.splice(startingIndex, deleteCount, elem1, elem2,..)
// startingIndex: index number at which the operation should start
// deleteCount: number of elements that should be deleted from startingIndex
// elem1..elemn: the elements that should be inserted at the startingIndex
// returns array of elements that are removed
```
```javascript
bikes.splice(
    3, // operation starts at index number 3 i.e., at 'cbr300'
    1, // the number on elements that are going to deleted i.e., 'cbr300'
    "classic 350" // 'classic 350' will be inserted at the place of 'cbr300'
)
// array becomes [ "duke 125", "duke 390", "r15", "classic 350" ]
```
##### `slice()`
`slice()` is used for creating a piece of array by totally creating a new array from a starting index
takes in a parameter of index and returns a part of array from that index
```javascript
bikes.slice()
// returns [ "duke 125", "duke 390", "r15", "classic 350" ]
bikes.slice(1)
// returns ["duke 390", "r15", "classic 350" ]
```
##### `concat()`
`concat` is used for joining two or more arrays into one array
```javascript
array1.concat(array2, array3,...)
```
```javascript
var newBikes = bikes.concat(['rs100', 'dominor'])
//returns [ "duke 125", "duke 390", "r15", "classic 350", "rs100", "dominor"]
newBikes = newBikes.concat(['apache'], ['thunderbird', 'continental gt'])
// returns [ "duke 125", "duke 390", "r15", "classic 350", "rs100", "dominor", "apache", "thunderbird", "continental gt"]
```
##### `sort()`
`sort` is method is used for sorting the array in alphabetical order(0-9A-Za-z). it doesn't work on numbers.
```javascript
var k = [3,2,1];
k.sort();
// [1, 2, 3]
var l = [44, 6, 5]
l.sort();
// [44, 5, 6]
[-1, 2, -3].sort()
// [-1, -3, 2]
```
###### sorting numbers
```javascript
[-1, 2, -3].sort(function(a, b){return a - b})
// function(a, b){return a - b} is called comparing function for ascending order
// [-3, -1, 2]
``` 

##### `reverse()`
`reverse` is used to reverse the an array from its last index
```javascript
k = [1, 2, 3]
k.reverse()
[3, 2, 1]
```

##### `reduce()`
`reduce()` method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
```javascript
var a = [1, 2, 3, 4];
var reducer = function(previousReturn, currentValue) => previousReturn + currentValue;
console.log(a.reduce(reducer, 5));
// 5 + 1 + 2 + 3 + 4 = 15;
console.log(a.reduce(reducer));
// 1 + 2 + 3 + 4 = 10;
```