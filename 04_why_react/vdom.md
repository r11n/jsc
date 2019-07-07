---
layout: default
---
# Virtual DOM
The virtual DOM (VDOM) is a programming concept where an ideal, or "virtual", representation of a UI is kept in memory and synced with the actual DOM by a library such as `ReactDOM`.

As per the react docs this is called `reconciliation`. [link](https://reactjs.org/docs/reconciliation.html)

This approach enables the declarative API of React: You tell React what state you want the UI to be in, and it makes sure the DOM matches that state. This abstracts out the attribute manipulation, event handling, and manual DOM updating that you would otherwise have to use to build your app.

Since "virtual DOM" is more of a pattern than a specific technology, people sometimes say it to mean different things. In React world, the term "virtual DOM" is usually associated with React elements since they are the objects representing the user interface. React, however, also uses internal objects called "fibers" to hold additional information about the component tree. They may also be considered a part of "virtual DOM" implementation in React.

**Note:** Shadow DOM and Virtual DOM are completely different. The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components.

For understanding further more about the Virtual DOM see the following video.

<iframe width="640" height="360" src="https://www.youtube.com/embed/BYbgopx44vo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 100%"></iframe>