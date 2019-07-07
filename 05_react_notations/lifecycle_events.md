---
layout: default
---
# Lifecycle Events

Each component has several “lifecycle methods” that you can override to run code at particular times in the process. You can use the beow lifecycle diagram as a cheat sheet. In the list below, commonly used lifecycle methods are marked as bold. The rest of them exist for relatively rare use cases

![lifecycle](/lifecycle.png)

## Mounting

These methods are called in the following order when an instance of a component is being created and inserted into the DOM:

* **constructor()**
* static getDerivedStateFromProps()
* **render()**
* **componentDidMount()**

## Updating

An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:

* static getDerivedStateFromProps()
* shouldComponentUpdate()
* **render()**
* getSnapshotBeforeUpdate()
* **componentDidUpdate()**

## Unmounting

This method is called when a component is being removed from the DOM:

* **componentWillUnmount()**
