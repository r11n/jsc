---
layout: default
---
# *DOM* and its events
A Web application's interactivity is achieved with the help of DOM events.
To further explain, let’s take a look at the following example:
```html
<!DOCTYPE HTML>
<html>
<head>
    <title>
        JS ES6
    </title>
</head>
<body>
    <button id="dom-button">
        Press here
    </button>
</body>
</html>
```
this is how browser events work when you click the button
```sequence
Note left of Document: 1. Capture Phase
Document->HTML:1
HTML->Body: 1
Body->Button:1
Button-->Document:Bubbling Phase
Note over Button: Targeting Phase

```
When Button is clicked, an event is dispatched into the event flow. The event journey starts at the Document, moves down to the HTML element, moves to the Body element, and finally gets to the Button element. The event then bubbles back up to Document, moving again through the Body element and HTML element on its way up.

In this example, the capture phase includes the Document, HTML, and Body during the initial downward journey. The target phase comprises the time spent at the Button. The bubbling phase comprises the Body, HTML, and Document as they are encountered during the return trip.

The typical DOM event flow is conceptually divided into three phases:
* The **capture phase** comprises all the DOM elements on the trip from the Document to the parent of the target element on which an event was triggered. In other words, when everything from the Document to the target, not including the target itself.
* The **target phase** occurs when the event reaches the target. Then event fired on the target, before reversing and retracing its steps, propagating back to the outermost Document.
* The **bubbling phase** comprises all the DOM elements encountered on the return trip from the target back to the Document. Bubbling gives the freedom of handling an event on any element by its parent elements.
The following code snippet will help in understanding the above explanation.

<script async src="//jsfiddle.net/Rag11/heogwpv6/6/embed/js,html,css,result/dark/"></script>

## What is a URL?
## Event Loop
### Runtime Concepts
#### Stack
#### Heap
#### Queue
## Async APIs