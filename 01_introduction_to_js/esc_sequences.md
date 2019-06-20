---
layout: default
---
# Escape Sequences
When you are defining a string you must start and end with a single or double quote. What happens when you need a literal quote: `"` or `'` inside of your string?.

## The BackSlash literals

In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (`\`) in front of the quote.
```javascript
var str = "Joe said, \"techsparks.guru is good website to start learning\"";
console.log(str);
// Joe said, "techsparks.guru is good website to start learning"
```
The following are the escape sequences for strings

|sequence|Output|
 --------|------ 
|`\n`|new line|
|`\r`|return(carriage)|
|`\t`|tab|
|`\'`|single quote|
|`\"`|double quote|
|`\\`|backslash|
|`\b`|backspace|
|`\f`|form feed|

```javascript
var str = 'hello\'world!\'\nwebsite info:\twww.techsparks.guru'
console.log(str)
// hello'world!'
// website info:	www.techsparks.guru
```