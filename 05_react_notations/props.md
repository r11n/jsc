---
layout: default
---
# Props

## Use in functions and Classes
The simplest way to define a component is to write a JavaScript function:
```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
This function is a valid React component because it accepts a single 'props' (which stands for properties) object argument with data and returns a React element. We call such components 'function components' because they are literally JavaScript functions.

You can also use an ES6 class to define a component:
```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
The above two components are equivalent from React's point of view.

Classes have some additional features that we will discuss in the next sections. Until then, we will use function components for their conciseness.

## Props are Read-Only

Whether you declare a component as a function or a class, it must never modify its own props. Consider this sum function:
```javascript
function sum(a, b) {
  return a + b;
}
```
Such functions are called 'pure' because they do not attempt to change their inputs, and always return the same result for the same inputs.

In contrast, this function is impure because it changes its own input:
```javascript
function withdraw(account, amount) {
  account.total -= amount;
}
```
React is pretty flexible but it has a single strict rule:

**All React components must act like pure functions with respect to their props.**

Of course, application UIs are dynamic and change over time. In the next section, we will introduce a new concept of 'state'. State allows React components to change their output over time in response to user actions, network responses, and anything else, without violating this rule.

## Specifying Props
As your app grows, you can catch a lot of bugs with typechecking. For some applications, you can use JavaScript extensions like Flow or TypeScript to typecheck your whole application. But even if you don’t use those, React has some built-in typechecking abilities. To run typechecking on the props for a component, you can assign the special propTypes property:

```javascript
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};
```
PropTypes exports a range of validators that can be used to make sure the data you receive is valid. In this example, we’re using `PropTypes.string`. When an invalid value is provided for a prop, a warning will be shown in the JavaScript console. For performance reasons, `propTypes` is only checked in development mode.

Head Over to React docs and look for available type checking.
## Default Props

You can define default values for your `props` by assigning to the special `defaultProps` property:
```javascript
class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

// Specifies the default values for props:
Greeting.defaultProps = {
  name: 'Stranger'
};

// Renders "Hello, Stranger":
ReactDOM.render(
  <Greeting />,
  document.getElementById('example')
);
```
If you are using a Babel transform like transform-class-properties , you can also declare `defaultProps` as static property within a React component class. This syntax has not yet been finalized though and will require a compilation step to work within a browser. For more information, see the class fields proposal.
```javascript
class Greeting extends React.Component {
  static defaultProps = {
    name: 'stranger'
  }

  render() {
    return (
      <div>Hello, {this.props.name}</div>
    )
  }
}
```
The `defaultProps` will be used to ensure that `this.props.name` will have a value if it was not specified by the parent component. The `propTypes` typechecking happens after `defaultProps` are resolved, so typechecking will also apply to the `defaultProps`.